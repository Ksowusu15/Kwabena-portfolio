"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { profile } from "@/data/site";

const roles = [
  "Full-Stack Developer",
  "Python Developer",
  "Flask Developer",
  "Software Engineer",
];

const statistics = [
  {
    value: "4+",
    label: "Completed projects",
  },
  {
    value: "15+",
    label: "Technologies used",
  },
  {
    value: "100%",
    label: "Focused on quality",
  },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const phoneNumber = profile.phone.replace(/\D/g, "");

  return (
    <section
      id="home"
      className="hero-section relative min-h-[92vh] overflow-hidden pt-20"
    >
      {/* Decorative background */}
      <div className="hero-grid absolute inset-0 -z-30" />
      <div className="hero-noise absolute inset-0 -z-20 opacity-40" />

      <motion.div
        className="absolute -left-32 top-16 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]"
        animate={{
          x: [0, 70, 0],
          y: [0, 45, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-24 top-44 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[120px]"
        animate={{
          x: [0, -55, 0],
          y: [0, -40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-shell grid min-h-[74vh] items-center gap-10 pb-12 pt-4 sm:min-h-[76vh] sm:pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* Left content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.15,
            }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm backdrop-blur-xl dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>

            Available for software engineering opportunities
          </motion.div>

          <p className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
            <Sparkles size={17} />
            Hello, I&apos;m {profile.name}
          </p>

          <h1 className="max-w-4xl text-[clamp(3.1rem,8vw,7.3rem)] font-black leading-[0.87] tracking-[-0.075em] text-slate-950 dark:text-white">
            I build digital
            <br />

            <span className="hero-gradient-text">
              products that work.
            </span>
          </h1>

          <div className="mt-5 min-h-12">
            <p className="flex flex-wrap items-center gap-3 text-xl font-bold text-slate-500 sm:text-2xl dark:text-slate-300">
              I&apos;m a

              <motion.span
                key={roles[roleIndex]}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                }}
                className="text-blue-600 dark:text-blue-400"
              >
                {roles[roleIndex]}
              </motion.span>

              <span className="h-7 w-[3px] animate-pulse rounded-full bg-blue-600 dark:bg-blue-400" />
            </p>
          </div>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="action-button-primary group"
            >
              View my work

              <ArrowUpRight
                size={19}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="action-button-outline"
            >
              <Mail size={18} />
              Let&apos;s talk
            </a>

            <a
              href="/Kwabena-Owusu-Soadwa-CV.pdf"
              download
              className="inline-flex min-h-[52px] items-center gap-2 rounded-2xl px-4 py-3 font-bold text-slate-600 transition hover:-translate-y-1 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <MapPin
                size={17}
                className="text-blue-600 dark:text-blue-400"
              />

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

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {statistics.map((statistic, index) => (
              <motion.div
                key={statistic.label}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55 + index * 0.1,
                }}
                className="rounded-2xl border border-white/70 bg-white/65 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]"
              >
                <p className="text-2xl font-black text-slate-950 dark:text-white">
                  {statistic.value}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {statistic.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 35,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-blue-500/20 blur-3xl" />

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hero-card relative aspect-[4/5] overflow-hidden rounded-[2.6rem] border border-white/70 bg-white/55 p-5 shadow-[0_35px_100px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="relative grid h-full place-items-center overflow-hidden rounded-[2.1rem] bg-[#0b1120] text-white">
              <div className="hero-card-grid absolute inset-0 opacity-60" />

              <div className="absolute left-7 right-7 top-7 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black tracking-[0.24em] text-blue-300">
                    SOFTWARE ENGINEER
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    Accra, Ghana
                  </p>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                  Available
                </div>
              </div>

              <Image
                src="/images/profile.png"
                alt={`${profile.name} professional portrait`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/15 to-[#0b1120]/25" />

              <div className="absolute bottom-28 left-7 right-7 z-10">
                <p className="text-xl font-black text-white">
                  {profile.name}
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Python · Flask · JavaScript · SQL
                </p>
              </div>

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-400"
                  />

                  <div>
                    <p className="text-sm font-bold">
                      Currently building
                    </p>

                    <p className="text-xs text-slate-400">
                      Production-ready web applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-8 top-24 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-slate-900/90"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Main stack
            </p>

            <p className="mt-2 font-black text-slate-900 dark:text-white">
              Python + Flask
            </p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-7 bottom-28 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-slate-900/90"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Focus
            </p>

            <p className="mt-2 font-black text-slate-900 dark:text-white">
              Full-Stack Apps
            </p>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 transition hover:text-blue-600 lg:flex dark:hover:text-blue-400"
      >
        Scroll

        <ArrowDown
          size={18}
          className="animate-bounce"
        />
      </a>
    </section>
  );
}
