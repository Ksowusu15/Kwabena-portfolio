"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Reveal } from "@/components/Reveal";
import { profile, projects } from "@/data/site";

function isValidExternalLink(link?: string) {
  return Boolean(
    link &&
      link.trim() !== "" &&
      link !== "#" &&
      !link.startsWith("#") &&
      !link.toLowerCase().includes("example.com"),
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-16 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container-shell relative">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title mt-5 max-w-4xl">
                Projects built to solve
                <br />
                <span className="text-gradient">real problems.</span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
                A selection of full-stack applications, business platforms, and
                product experiments. Open a case study for the engineering
                decisions, architecture, challenges, and lessons behind each build.
              </p>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-black text-blue-600 transition hover:gap-3 dark:text-blue-400"
              >
                <FaGithub size={18} />
                Explore GitHub
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-3 sm:mt-11">
          {["6+ completed builds", "Full-stack systems", "AI integration", "Production workflows"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
              >
                {item}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-7 sm:mt-10">
          {projects.map((project, index) => {
            const hasGithub = isValidExternalLink(project.github);
            const hasLiveDemo = isValidExternalLink(project.live);

            return (
              <Reveal key={project.slug} delay={(index % 2) * 0.06}>
                <article className="group grid h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(15,23,42,0.11)] md:grid-cols-[1.05fr_0.95fr] dark:border-white/10 dark:bg-slate-900 dark:hover:border-blue-400/30">
                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={`View ${project.title} case study`}
                    className="relative block aspect-[16/9] overflow-hidden bg-slate-950 md:aspect-auto md:min-h-[360px]"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 768px) 100vw, 55vw"
                      className="object-contain object-center transition duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-200 backdrop-blur-md sm:left-5 sm:top-5">
                      {project.category}
                    </span>

                    <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white text-slate-950 shadow-lg transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:bottom-5 sm:right-5">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                          {project.role}
                        </p>
                        <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-[1.7rem] dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                      <span className="shrink-0 text-sm font-black text-slate-300 dark:text-slate-600">
                        {project.accent}
                      </span>
                    </div>

                    <p className="mt-4 line-clamp-3 leading-7 text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="action-button-primary group/link"
                      >
                        View case study
                        <ArrowUpRight
                          size={17}
                          className="transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        />
                      </Link>

                      {hasLiveDemo && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button-outline"
                        >
                          <ExternalLink size={17} />
                          Live site
                        </a>
                      )}

                      {hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button-outline"
                        >
                          <FaGithub size={18} />
                          View source
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
