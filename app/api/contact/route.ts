import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 4;
const requestLog = new Map<string, number[]>();

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function env(name: string) {
  return process.env[name]?.trim();
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const name = clean(body.name, 100);
    const email = clean(body.email, 160);
    const subject = clean(body.subject, 160);
    const message = clean(body.message, 5000);
    const website = clean(body.website, 200);

    // Honeypot: silently accept bot submissions without sending mail.
    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json(
        { error: "Please include at least 20 characters in your message." },
        { status: 400 },
      );
    }

    const apiKey = env("RESEND_API_KEY");
    const to = env("CONTACT_TO_EMAIL");
    // CONTACT_FROM_EMAIL is optional for local/testing. A verified-domain sender is
    // recommended for production; onboarding@resend.dev works for Resend testing.
    const from = env("CONTACT_FROM_EMAIL") || "Kwabena Portfolio <onboarding@resend.dev>";

    if (!apiKey || !to) {
      console.error("Contact configuration missing", {
        hasApiKey: Boolean(apiKey),
        hasRecipient: Boolean(to),
        hasSender: Boolean(from),
      });
      return NextResponse.json(
        { error: "The contact service is not configured yet. Please email me directly." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New portfolio enquiry\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a;line-height:1.65">
          <div style="padding:24px;border:1px solid #e2e8f0;border-radius:16px">
            <p style="margin:0 0 8px;color:#2563eb;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.12em">Portfolio enquiry</p>
            <h2 style="margin:0 0 24px;font-size:24px">New message from ${safeName}</h2>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <div style="height:1px;background:#e2e8f0;margin:24px 0"></div>
            <p style="margin:0">${safeMessage}</p>
          </div>
        </div>`,
    });

    if (error) {
      console.error("Resend contact error:", error);
      const messageText = String(error.message || "");
      const configurationProblem = /domain|verify|validation|from|recipient|testing/i.test(messageText);
      return NextResponse.json(
        {
          error: configurationProblem
            ? "Email delivery is not fully configured yet. Please use the direct email link for now."
            : "I couldn't send your message right now. Please try again or email me directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "I couldn't send your message right now. Please try again or email me directly." },
      { status: 500 },
    );
  }
}
