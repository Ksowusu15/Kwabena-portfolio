"use client";

import { motion } from "motion/react";
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/site";

const categoryDetails = [
  {
    title: "Languages",
    description:
      "Core technologies I use to build application logic, interfaces, and database queries.",
    icon: Braces,
  },
  {
    title: "Frameworks & Backend",
    description:
      "Tools I use to develop structured web applications, APIs, and server-side functionality.",
    icon: Server,
  },
  {
    title: "Databases",
    description:
      "Relational database systems used for storing, organising, and retrieving application data.",
    icon: Database,
  },
  {
    title: "Tools & Practices",
    description:
      "Development tools and practices that support testing, collaboration, deployment, and maintenance.",
    icon: Wrench,
  },
];

const featuredSkills = [
  {
    name: "Python",
    level: 88,
    icon: Code2,
  },
  {
    name: "Flask",
    level: 85,
    icon: Server,
  },
  {
    name: "JavaScript",
    level: 82,
    icon: Braces,
  },
  {
    name: "SQL",
    level: 84,
    icon: Database,
  },
  {
    name: "Responsive UI",
    level: 86,
    icon: Globe2,
  },
  {
    name: "Git & GitHub",
    level: 80,
    icon: GitBranch,
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#101828] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container-shell relative">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="eyebrow text-blue-300">
                Technical capabilities
              </p>

              <h2 className="skills-section-title section-title mt-5 max-w-4xl">
                Tools I use to move from
                <br />

                <span className="hero-gradient-text">
                  idea to implementation.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-slate-300">
              My skill set covers frontend implementation, backend
              development, database integration, API work, testing, and
              application deployment.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2">
          {skills.map((skillGroup, index) => {
            const category =
              categoryDetails[index] ??
              categoryDetails[categoryDetails.length - 1];

            const CategoryIcon = category.icon;

            return (
              <Reveal
                key={skillGroup.category}
                delay={index * 0.08}
              >
                <motion.article
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group h-full rounded-[2.25rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/[0.075] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-13 w-13 place-items-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-300">
                      <CategoryIcon size={24} />
                    </div>

                    <span className="text-sm font-black text-white/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black">
                    {skillGroup.category}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {category.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {skillGroup.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                            index * 0.05 +
                            itemIndex * 0.035,
                        }}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-200"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal>
            <article className="h-full rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/10 text-violet-300">
                  <Layers3 size={22} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
                    Working approach
                  </p>

                  <h3 className="mt-1 text-2xl font-black">
                    Full-stack thinking
                  </h3>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-300">
                I approach projects as complete systems. That means
                thinking about the user interface, application logic,
                database structure, security, performance, testing, and
                deployment instead of treating each layer separately.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <Sparkles className="text-blue-300" size={20} />

                  <p className="mt-4 font-black">
                    User focused
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Interfaces designed for clarity, usability, and
                    responsive behaviour.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <Database className="text-emerald-300" size={20} />

                  <p className="mt-4 font-black">
                    Data driven
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Structured database models and dependable data
                    handling.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">
                Core strengths
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Technologies I use most often
              </h3>

              <div className="mt-8 space-y-6">
                {featuredSkills.map((skill, index) => {
                  const SkillIcon = skill.icon;

                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.06] text-blue-300">
                            <SkillIcon size={17} />
                          </div>

                          <span className="text-sm font-bold text-slate-200">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-xs font-black text-slate-500">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{
                            once: true,
                            margin: "-70px",
                          }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
