"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  MapPin,
  ServerCog,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { profile } from "@/data/site";

const statistics = [
  { value: "6+", label: "Completed builds" },
  { value: "Full-stack", label: "Product engineering" },
  { value: "AI + APIs", label: "Modern integrations" },
];

export function Hero() {
  const phoneNumber = profile.phone.replace(/\D/g, "");

  return (
    <section
      id="home"
      className="hero-section relative min-h-[86vh] overflow-hidden pt-24 sm:pt-26 lg:pt-28"
    >
      <div className="hero-grid absolute inset-0 -z-30" />
      <div className="hero-noise absolute inset-0 -z-20 opacity-30" />

      <div className="absolute -left-40 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-500/14 blur-[120px]" />
      <div className="absolute -right-40 top-36 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-500/12 blur-[135px]" />

      <div className="container-shell grid min-h-[68vh] items-center gap-10 pb-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <span>Software Engineer</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span>Full-Stack Developer</span>
          </div>

          <h1 className="max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[-0.07em] text-slate-950 dark:text-white">
            Building useful
            <br />
            <span className="hero-gradient-text">digital products.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="action-button-primary group">
              Explore projects
              <ArrowUpRight
                size={19}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a href="#contact" className="action-button-outline">
              <Mail size={18} />
              Contact me
            </a>

            <a
              href="/Kwabena-Owusu-Soadwa-CV.pdf"
              download
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl px-4 py-3 font-bold text-slate-600 transition hover:-translate-y-1 hover:text-blue-600 sm:justify-start dark:text-slate-300 dark:hover:text-blue-400"
            >
              <Download size={18} />
              Download résumé
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <span className="mr-1 flex items-center gap-2">
              <MapPin size={17} className="text-blue-600 dark:text-blue-400" />
              {profile.location}
            </span>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              className="social-button"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="social-button"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="social-button"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="social-button"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 min-[430px]:grid-cols-3 sm:gap-4">
            {statistics.map((statistic, index) => (
              <motion.div
                key={statistic.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08 }}
                className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-xl sm:p-5 dark:border-white/10 dark:bg-white/[0.045]"
              >
                <p className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl dark:text-white">
                  {statistic.value}
                </p>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-500 sm:text-sm dark:text-slate-400">
                  {statistic.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 26 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-blue-500/14 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/65 p-3 shadow-[0_34px_100px_rgba(15,23,42,0.18)] backdrop-blur-2xl sm:p-4 dark:border-white/10 dark:bg-white/[0.045]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-[#08111f]">
              <Image
                src="/images/profile.png"
                alt={`${profile.name} professional portrait`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/10 to-[#08111f]/10" />

              <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 sm:left-6 sm:right-6 sm:top-6">
                <div className="rounded-full border border-white/15 bg-slate-950/50 px-3 py-2 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
                    Software Engineering
                  </p>
                </div>
                <div className="rounded-full border border-white/15 bg-slate-950/50 px-3 py-2 text-[10px] font-bold text-slate-200 backdrop-blur-xl">
                  Accra · Ghana
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-[1.5rem] border border-white/12 bg-slate-950/65 p-5 backdrop-blur-xl sm:p-6">
                  <p className="text-xl font-black text-white sm:text-2xl">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Full-stack web applications · APIs · Databases · AI integrations
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5">
                      <Code2 size={16} className="text-blue-300" />
                      <span className="text-xs font-bold text-slate-200">Product UI</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5">
                      <ServerCog size={16} className="text-violet-300" />
                      <span className="text-xs font-bold text-slate-200">Backend systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-5 top-28 hidden rounded-2xl border border-slate-200/80 bg-white/92 px-4 py-3 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-slate-900/92">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
              Core stack
            </p>
            <p className="mt-1 text-sm font-black text-slate-900 dark:text-white">
              Next.js · Python
            </p>
          </div>

          <div className="absolute -right-4 bottom-24 hidden rounded-2xl border border-slate-200/80 bg-white/92 px-4 py-3 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-slate-900/92">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
              Data & APIs
            </p>
            <p className="mt-1 text-sm font-black text-slate-900 dark:text-white">
              PostgreSQL · REST
            </p>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400 transition hover:text-blue-600 lg:flex dark:hover:text-blue-400"
      >
        Explore
        <ArrowDown size={17} className="animate-bounce" />
      </a>
    </section>
  );
}
