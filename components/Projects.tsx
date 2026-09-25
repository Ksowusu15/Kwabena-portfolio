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
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24 dark:border-white/10 dark:bg-slate-950"
    >
            <div className="container-shell">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title mt-5 max-w-4xl">
                Selected projects and case studies.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
                A focused collection of software products and business systems. Each case study explains the problem, implementation, technical decisions, and results in a clear engineering format.
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

        <div className="mt-10 grid grid-cols-1 gap-7 sm:mt-10">
          {projects.map((project, index) => {
            const hasGithub = isValidExternalLink(project.github);
            const hasLiveDemo = isValidExternalLink(project.live);

            return (
              <Reveal key={project.slug} delay={(index % 2) * 0.06}>
                <article className="group grid h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_55px_rgba(15,23,42,0.10)] md:grid-cols-[1.05fr_0.95fr] dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20">
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

                    <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-slate-600 dark:text-slate-300">
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
