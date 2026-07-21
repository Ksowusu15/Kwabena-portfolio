import { NextResponse } from "next/server";
import { Resend } from "resend";

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

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const name = clean(body.name, 100);
    const email = clean(body.email, 160);
    const subject = clean(body.subject, 160);
    const message = clean(body.message, 5000);
    const website = clean(body.website, 200);

    // Honeypot field: bots often fill hidden inputs.
    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: "Please include at least 20 characters in your message." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a"><h2>New portfolio message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><hr/><p style="white-space:pre-wrap">${message}</p></div>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Unable to send your message right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
