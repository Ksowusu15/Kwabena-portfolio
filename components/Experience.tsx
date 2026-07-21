"use client";

import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Laptop,
  Network,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/site";

const experienceIcons = [
  BriefcaseBusiness,
  Code2,
  Laptop,
];

const strengths = [
  {
    title: "Technical support",
    description:
      "Troubleshooting hardware, software, networks, systems, and user issues.",
    icon: Wrench,
  },
  {
    title: "Software development",
    description:
      "Building full-stack applications with structured backend and frontend systems.",
    icon: Code2,
  },
  {
    title: "Network knowledge",
    description:
      "Understanding practical networking concepts such as TCP/IP, DNS, and DHCP.",
    icon: Network,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-0 top-24 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container-shell">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">Professional experience</p>

              <h2 className="section-title mt-5">
                Where technical support
                <br />

                <span className="text-gradient">
                  meets software delivery.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              My experience combines hands-on IT operations with
              practical software development, allowing me to understand
              both the technical system and the people who use it.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-7 sm:mt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-9">
          <div className="relative">
            <div className="absolute bottom-6 left-[27px] top-6 hidden w-px bg-slate-200 sm:block dark:bg-white/10" />

            <div className="space-y-6">
              {experience.map((item, index) => {
                const ExperienceIcon =
                  experienceIcons[index] ?? BriefcaseBusiness;

                return (
                  <Reveal
                    key={`${item.role}-${item.company}`}
                    delay={index * 0.1}
                  >
                    <motion.article
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="relative grid gap-5 sm:grid-cols-[56px_1fr]"
                    >
                      <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
                        <ExperienceIcon size={23} />
                      </div>

                      <div className="glass rounded-[2.25rem] p-7 sm:p-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                              {item.period}
                            </p>

                            <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">
                              {item.role}
                            </h3>

                            <p className="mt-1 font-semibold text-slate-500 dark:text-slate-400">
                              {item.company}
                            </p>
                          </div>

                          <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400">
                            0{index + 1}
                          </span>
                        </div>

                        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                          {item.details}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {index === 0 && (
                            <>
                              <span className="experience-tag">
                                IT Support
                              </span>

                              <span className="experience-tag">
                                Networking
                              </span>

                              <span className="experience-tag">
                                Asset Management
                              </span>

                              <span className="experience-tag">
                                Software Testing
                              </span>
                            </>
                          )}

                          {index === 1 && (
                            <>
                              <span className="experience-tag">
                                Python
                              </span>

                              <span className="experience-tag">
                                Flask
                              </span>

                              <span className="experience-tag">
                                JavaScript
                              </span>

                              <span className="experience-tag">
                                SQL
                              </span>
                            </>
                          )}

                          {index > 1 && (
                            <>
                              <span className="experience-tag">
                                Full Stack
                              </span>

                              <span className="experience-tag">
                                Responsive Design
                              </span>

                              <span className="experience-tag">
                                Databases
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.1}>
            <aside className="h-fit rounded-[2.5rem] bg-[#101828] p-7 text-white shadow-2xl sm:p-9 lg:sticky lg:top-32">
              <div className="flex items-center gap-3 text-blue-300">
                <Sparkles size={18} />

                <p className="text-xs font-black uppercase tracking-[0.2em]">
                  Professional value
                </p>
              </div>

              <h3 className="mt-5 text-3xl font-black leading-tight">
                Practical experience across development and IT
                operations.
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                I bring a balanced understanding of users, systems,
                networks, software, and business needs to every project
                I work on.
              </p>

              <div className="mt-8 space-y-4">
                {strengths.map((strength, index) => {
                  const StrengthIcon = strength.icon;

                  return (
                    <motion.article
                      key={strength.title}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.09,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-300">
                          <StrengthIcon size={20} />
                        </div>

                        <div>
                          <h4 className="font-black">
                            {strength.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-400">
                            {strength.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06] p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-400"
                  />

                  <p className="font-bold text-emerald-300">
                    Available for new opportunities
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Open to software engineering, full-stack development,
                  and IT-focused roles.
                </p>
              </div>

    <a
        href="#contact"
        className="action-button-light mt-8 w-full"
        >
        Contact me
    </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}