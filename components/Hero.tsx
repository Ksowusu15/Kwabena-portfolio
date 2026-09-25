"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { profile } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-white pt-28 sm:pt-32 dark:border-white/10 dark:bg-slate-950"
    >
      <div className="container-shell grid min-h-[76vh] items-center gap-12 pb-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <span>Kwabena Owusu Soadwa</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-[clamp(3rem,6.4vw,6.25rem)] font-black leading-[0.94] tracking-[-0.065em] text-slate-950 dark:text-white">
            I design and build
            <br />
            full-stack web applications.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
            I work across frontend interfaces, backend systems, APIs and databases,
            with a focus on practical software that solves real business problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="action-button-primary group">
              View my work
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button-outline"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="/Kwabena-Owusu-Soadwa-CV.pdf"
              download
              className="action-button-outline"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-white/10">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-text-link group"
            >
              <FaLinkedinIn size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
            <span className="h-4 w-px bg-slate-200 dark:bg-white/10" />
            <a
              href={`mailto:${profile.email}`}
              className="interactive-text-link group"
            >
              <Mail size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="mx-auto w-full max-w-[430px] lg:justify-self-end"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-100 shadow-[0_20px_55px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-900">
            <Image
              src="/images/profile.png"
              alt={`${profile.name} professional portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 430px"
              className="object-cover object-top"
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 text-sm">
            <div>
              <p className="font-bold text-slate-950 dark:text-white">
                Software Engineer & Full-Stack Developer
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Python · Next.js · PostgreSQL
              </p>
            </div>
            <span className="hidden font-mono text-xs text-slate-400 sm:block">
              01 / PORTFOLIO
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
