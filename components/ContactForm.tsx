"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Mail, Send } from "lucide-react";
import { profile } from "@/data/site";

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.type === "sending") return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const message = String(data.get("message") || "").trim();

    if (message.length < 20) {
      setStatus({ type: "error", message: "Please include at least 20 characters in your message." });
      return;
    }

    setStatus({ type: "sending", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json") ? await response.json() : {};

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. I’ll get back to you as soon as possible.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error
          ? error.message
          : "Message could not be sent. Please email me directly.",
      });
    }
  }

  const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-slate-950 dark:text-white";
  const sending = status.type === "sending";

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-800 dark:text-slate-200">
          Name
          <input disabled={sending} required minLength={2} maxLength={100} name="name" autoComplete="name" className={inputClass} placeholder="Your name" />
        </label>
        <label className="text-sm font-bold text-slate-800 dark:text-slate-200">
          Email
          <input disabled={sending} required type="email" maxLength={160} name="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </label>
      </div>

      <label className="block text-sm font-bold text-slate-800 dark:text-slate-200">
        Subject
        <input disabled={sending} required minLength={3} maxLength={160} name="subject" className={inputClass} placeholder="Project enquiry" />
      </label>

      <label className="block text-sm font-bold text-slate-800 dark:text-slate-200">
        Message
        <textarea disabled={sending} required minLength={20} maxLength={5000} name="message" rows={6} className={`${inputClass} resize-y`} placeholder="Tell me about the project, timeline, or outcome you need..." />
      </label>

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button type="submit" disabled={sending} className="action-button-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {sending ? <LoaderCircle size={18} className="animate-spin" /> : <Send size={18} />}
        {sending ? "Sending message..." : "Send message"}
      </button>

      <div aria-live="polite" aria-atomic="true" className="min-h-7">
        {status.type === "success" && (
          <p className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" />{status.message}
          </p>
        )}
        {status.type === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
            <p className="flex items-start gap-2"><AlertCircle size={18} className="mt-0.5 shrink-0" />{status.message}</p>
            <a href={`mailto:${profile.email}`} className="mt-2 inline-flex items-center gap-1.5 underline underline-offset-4 hover:no-underline">
              <Mail size={15} /> Email me directly
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
