"use client";

import { motion } from "motion/react";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  Layers3,
  Rocket,
  Server,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/site";

const categoryDetails = [
  {
    description:
      "Programming languages and browser technologies I use across frontend and backend work.",
    icon: Braces,
  },
  {
    description:
      "Frameworks and server-side tools I use to build structured applications and APIs.",
    icon: Server,
  },
  {
    description:
      "Relational databases, ORMs, and managed data platforms used in production-focused projects.",
    icon: Database,
  },
  {
    description:
      "Developer, deployment, media, validation, and integration tools used to ship applications.",
    icon: Wrench,
  },
];

const capabilities = [
  {
    title: "Full-stack delivery",
    text: "From requirements and UI architecture to backend logic, database modelling, testing, and deployment.",
    icon: Layers3,
  },
  {
    title: "Secure application flows",
    text: "Authentication, protected routes, role-based access, validation, password reset, and rate limiting.",
    icon: ShieldCheck,
  },
  {
    title: "Data-driven systems",
    text: "Relational modelling, CRUD workflows, search, filtering, reporting, and admin management interfaces.",
    icon: Database,
  },
  {
    title: "Cloud-ready integrations",
    text: "Managed PostgreSQL, deployment platforms, media services, transactional email, and third-party APIs.",
    icon: Cloud,
  },
  {
    title: "Responsive product UI",
    text: "Mobile-first interfaces, dark mode, accessible interactions, clear states, and reusable components.",
    icon: Code2,
  },
  {
    title: "Production mindset",
    text: "SEO, error handling, loading states, environment configuration, build checks, and maintainable code.",
    icon: Rocket,
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
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="eyebrow text-blue-300">
                Technical capabilities
              </p>

              <h2 className="skills-section-title section-title mt-5 max-w-4xl">
                Tools I use to move from
                <br />
                <span className="hero-gradient-text">
                  idea to production.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              My stack now spans modern React and Next.js applications,
              Python backends, relational databases, secure admin systems,
              integrations, and deployment-ready delivery.
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
              <Reveal key={skillGroup.category} delay={index * 0.07}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/[0.075] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-300">
                      <CategoryIcon size={23} />
                    </div>

                    <span className="text-xs font-black tracking-[0.18em] text-white/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {skillGroup.category}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-sm font-semibold text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:mt-12 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-300">
                  <Workflow size={17} />
                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    Engineering strengths
                  </p>
                </div>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                  What I can contribute across a product build
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-400">
                I prefer showing capabilities through shipped systems rather than
                arbitrary proficiency percentages.
              </p>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.article
                    key={capability.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-slate-950/25 p-5"
                  >
                    <Icon size={20} className="text-blue-300" />
                    <h4 className="mt-4 font-black">{capability.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {capability.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
