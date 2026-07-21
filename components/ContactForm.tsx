"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";

type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message") || "").trim();

    if (message.length < 20) {
      setStatus({ type: "error", message: "Please include at least 20 characters in your message." });
      return;
    }

    setStatus({ type: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Message could not be sent.");
      form.reset();
      setStatus({ type: "success", message: "Your message has been sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Message could not be sent. Please email me directly.",
      });
    }
  }

  const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white";

  return (
    <form onSubmit={submit} className="space-y-5" noValidate suppressHydrationWarning>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-800 dark:text-slate-200">
          Name
          <input suppressHydrationWarning required minLength={2} maxLength={100} name="name" autoComplete="name" className={inputClass} placeholder="Your name" />
        </label>
        <label className="text-sm font-bold text-slate-800 dark:text-slate-200">
          Email
          <input suppressHydrationWarning required type="email" maxLength={160} name="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </label>
      </div>

      <label className="block text-sm font-bold text-slate-800 dark:text-slate-200">
        Subject
        <input suppressHydrationWarning required minLength={3} maxLength={160} name="subject" className={inputClass} placeholder="Project enquiry" />
      </label>

      <label className="block text-sm font-bold text-slate-800 dark:text-slate-200">
        Message
        <textarea suppressHydrationWarning required minLength={20} maxLength={5000} name="message" rows={6} className={`${inputClass} resize-y`} placeholder="Tell me about the role, project, timeline, or outcome you need..." />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>Website<input suppressHydrationWarning name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button type="submit" disabled={status.type === "sending"} className="action-button-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {status.type === "sending" ? <LoaderCircle size={18} className="animate-spin" /> : <Send size={18} />}
        {status.type === "sending" ? "Sending message..." : "Send message"}
      </button>

      <div aria-live="polite" className="min-h-6">
        {status.type === "success" && <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={18} />{status.message}</p>}
        {status.type === "error" && <p className="flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400"><AlertCircle size={18} />{status.message}</p>}
      </div>
    </form>
  );
}
