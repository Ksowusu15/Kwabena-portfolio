"use client";

import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/site";

const contactDetails = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: profile.location,
    href: null,
    icon: MapPin,
  },
  {
    label: "Availability",
    value: "Open to opportunities",
    href: null,
    icon: Clock3,
  },
];

export function Contact() {
  const whatsappNumber = profile.phone.replace(/\D/g, "");

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-0 top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container-shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Get in touch</p>

            <h2 className="section-title mt-5">
              Let&apos;s build something
              <br />

              <span className="text-gradient">
                useful together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I am open to software engineering roles, freelance
              projects, technical collaborations, and conversations
              about building reliable digital products.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal>
            <div className="h-full rounded-[2.5rem] bg-[#101828] p-7 text-white shadow-2xl sm:p-10">
              <div className="flex items-center gap-3 text-blue-300">
                <Sparkles size={18} />

                <p className="text-xs font-black uppercase tracking-[0.22em]">
                  Contact information
                </p>
              </div>

              <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                Have a role, project, or idea in mind?
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                Send me a message with a short description of what you
                are working on. I will respond as soon as possible.
              </p>

              <div className="mt-9 space-y-4">
                {contactDetails.map((detail) => {
                  const DetailIcon = detail.icon;

                  const content = (
                    <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-blue-400/30 hover:bg-white/[0.08]">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-300">
                        <DetailIcon size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                          {detail.label}
                        </p>

                        <p className="mt-1 break-all font-semibold text-slate-100">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  );

                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                  Connect with me
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open GitHub"
                    className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 transition hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open LinkedIn"
                    className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 transition hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
                  >
                    <FaLinkedinIn size={19} />
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open WhatsApp"
                    className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:text-emerald-300"
                  >
                    <FaWhatsapp size={21} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.1)] sm:p-9 dark:border-white/10 dark:bg-slate-900">
              <div className="mb-8 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                    Send a message
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
                    Tell me about your project
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Complete the form and include the important
                    details, timeline, and outcome you need.
                  </p>
                </div>

                <div className="hidden h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 sm:grid dark:bg-blue-500/10 dark:text-blue-400">
                  <Send size={21} />
                </div>
              </div>

              <ContactForm />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-slate-200 bg-white/70 p-6 text-center backdrop-blur-xl sm:flex-row sm:text-left dark:border-white/10 dark:bg-white/[0.04]">
            <div>
              <p className="font-black text-slate-950 dark:text-white">
                Prefer email?
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Send your message directly and I&apos;ll get back to
                you.
              </p>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Email me directly

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}