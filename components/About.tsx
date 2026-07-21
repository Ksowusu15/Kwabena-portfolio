  
"use client";

import { motion } from "motion/react";
import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Laptop,
  MapPin,
  Sparkles,
} from "lucide-react";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal } from "@/components/Reveal";

const statistics = [
  {
    value: 4,
    suffix: "+",
    label: "Completed projects",
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies used",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years of practical learning",
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment to quality",
  },
];

const timeline = [
  {
    title: "B.Sc. Computer Science",
    organisation: "Kwame Nkrumah University of Science and Technology",
    period: "Academic foundation",
    description:
      "Built a strong foundation in programming, databases, networking, software engineering, algorithms, and computer systems.",
    icon: GraduationCap,
  },
  {
    title: "IT Officer",
    organisation:
      "National Entrepreneurship and Innovation Programme",
    period: "Professional experience",
    description:
      "Supported users, managed hardware and software issues, assisted with networking, system installations, IT assets, and internal software testing.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Full-Stack Development",
    organisation: "Independent Projects",
    period: "Current focus",
    description:
      "Building complete web applications with Python, Flask, JavaScript, SQL, authentication, payment integrations, dashboards, and responsive interfaces.",
    icon: Laptop,
  },
];

const strengths = [
  "End-to-end application development",
  "Database design and integration",
  "Responsive frontend implementation",
  "Authentication and admin systems",
  "REST API and payment integration",
  "Technical support and troubleshooting",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-0 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="container-shell">
        <Reveal>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="eyebrow">About me</p>

              <h2 className="section-title mt-5">
                Technical thinking.
                <br />

                <span className="text-gradient">
                  Human-centred results.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
                I am a Computer Science graduate and full-stack
                developer based in Accra, Ghana. I build practical web
                applications that combine reliable backend systems,
                structured databases, responsive interfaces, and
                thoughtful user experiences.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
                My background in IT support helps me approach software
                development from both the user and technical
                perspectives. I understand that good software must not
                only look professional—it must also be dependable,
                secure, maintainable, and easy to use.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
                  <MapPin size={16} />
                  Accra, Ghana
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
                  <Sparkles size={16} />
                  Open to opportunities
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-4">
              {statistics.map((stat, index) => (
                <motion.article
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:rounded-[2rem] sm:p-7 dark:border-white/10 dark:bg-slate-900"
                >
                  <p className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>

                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-500 sm:text-sm sm:leading-6 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2.25rem] sm:p-9 dark:border-white/10 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">
                    My journey
                  </p>

                  <h3 className="mt-3 text-xl font-black text-slate-950 sm:text-2xl dark:text-white">
                    Education and experience
                  </h3>
                </div>

                <div className="hidden h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 sm:grid">
                  <Award size={23} />
                </div>
              </div>

              <div className="relative mt-9">
                <div className="absolute bottom-4 left-[22px] top-4 w-px bg-slate-200 dark:bg-white/10" />

                <div className="space-y-9">
                  {timeline.map((item, index) => {
                    const TimelineIcon = item.icon;

                    return (
                      <motion.article
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                          margin: "-80px",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        className="relative grid grid-cols-[46px_1fr] gap-5"
                      >
                        <div className="relative z-10 grid h-11 w-11 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
                          <TimelineIcon size={20} />
                        </div>

                        <div className="pb-2">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                            {item.period}
                          </p>

                          <h4 className="mt-2 text-xl font-black text-slate-950">
                            {item.title}
                          </h4>

                          <p className="mt-1 font-semibold text-slate-500 dark:text-slate-400">
                            {item.organisation}
                          </p>

                          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-[2.25rem] bg-[#101828] p-7 text-white shadow-2xl sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">
                What I bring
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight">
                A practical mix of software development and IT
                operations.
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                I can contribute across the development process—from
                understanding requirements and designing a database to
                creating the user interface, testing functionality, and
                preparing the application for deployment.
              </p>

              <div className="mt-8 space-y-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />

                    <span className="text-sm font-semibold text-slate-200">
                      {strength}
                    </span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="action-button-light mt-9"
              >
                Work with me
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}