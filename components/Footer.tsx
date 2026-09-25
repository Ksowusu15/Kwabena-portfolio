"use client";

import {
  ArrowUp,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = profile.phone.replace(/\D/g, "");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#080d1a] text-white">
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-blue-500/70 to-transparent"
        animate={{ x: ["-20%", "260%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <div aria-hidden="true" className="absolute right-0 top-0 h-full w-px bg-white/5" />

      <div className="container-shell relative py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">
                Let&apos;s work together
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                Have a project or useful idea?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I design and build reliable digital products, from thoughtful interfaces to backend systems, integrations, and deployment-ready applications.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`mailto:${profile.email}`}
               className="action-button-primary group"
              >
                Start a conversation

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/Kwabena-Owusu-Soadwa-CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 font-bold text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.08]"
              >
                <Download size={18} />
                Download resume
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/#home"
              className="inline-flex items-center gap-4"
              aria-label="Return to homepage"
            >
              <span className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-white shadow-lg">
                <Image src="/images/ks-logo.png" alt="" fill sizes="56px" className="object-contain p-1" />
              </span>

              <span>
                <span className="block text-lg font-black">
                  Kwabena Owusu Soadwa
                </span>

                <span className="mt-1 block text-sm text-slate-400">
                  Software Engineer
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Full-stack developer building practical web applications
              with Python, Flask, JavaScript, SQL, modern interfaces,
              and reliable backend systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="interactive-icon-link grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400/30 hover:text-blue-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="interactive-icon-link grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400/30 hover:text-blue-300"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open WhatsApp"
                className="interactive-icon-link grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-emerald-400/30 hover:text-emerald-300"
              >
                <FaWhatsapp size={21} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="interactive-icon-link grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400/30 hover:text-blue-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Quick links
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group/footer-link relative w-fit text-sm font-semibold text-slate-300 transition duration-300 hover:translate-x-1 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="interactive-contact-link group flex items-start gap-3 text-sm text-slate-300"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span className="break-all">
                  {profile.email}
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>{profile.location}</span>
              </div>

            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold text-slate-300">
              © {currentYear} Kwabena Owusu Soadwa
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400/30 hover:text-blue-300"
            aria-label="Scroll back to the top"
          >
            Back to top

            <ArrowUp
              size={17}
              className="transition group-hover:-translate-y-1"
            />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
