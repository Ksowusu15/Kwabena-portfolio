"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  ImageIcon,
  Layers3,
  Monitor,
  Sparkles,
} from "lucide-react";
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

type ProjectImageProps = {
  src?: string;
  alt: string;
  accent: string;
  title: string;
  slug: string;
  priority?: boolean;
};

function ProjectImage({
  src,
  alt,
  accent,
  title,
  slug,
  priority = false,
}: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="project-showcase relative grid min-h-[390px] place-items-center overflow-hidden p-7 text-white sm:min-h-[470px]">
        <div className="project-grid absolute inset-0 opacity-50" />
        <div className="relative z-10 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-blue-300 backdrop-blur-xl">
            <ImageIcon size={30} />
          </div>
          <p className="mt-7 text-[7rem] font-black leading-none tracking-[-0.1em] text-white/10">
            {accent}
          </p>
          <h3 className="mt-5 text-2xl font-black">{title}</h3>
          <p className="mt-3 text-sm font-semibold text-slate-300">
            Project preview coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[390px] overflow-hidden bg-slate-100 p-4 sm:min-h-[470px] sm:p-7 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(124,58,237,0.16),transparent_34%)]" />

      <motion.div
        whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative mx-auto flex h-full min-h-[350px] max-w-4xl origin-center flex-col overflow-hidden rounded-[1.6rem] border border-slate-300/80 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.24)] sm:min-h-[420px] dark:border-white/10 dark:bg-slate-900"
        style={{ transformPerspective: 1200 }}
      >
        <div className="flex h-13 shrink-0 items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 dark:border-white/10 dark:bg-slate-900">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>

          <div className="mx-auto flex min-w-0 max-w-md flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/[0.05]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            <span className="truncate text-[11px] font-semibold text-slate-400">
              {slug}.kwabenasoadwa.dev
            </span>
          </div>

          <Monitor size={16} className="shrink-0 text-slate-400" />
        </div>

        <Link
          href={`/projects/${slug}`}
          aria-label={`Open ${title} case study`}
          className="group/preview relative flex-1 overflow-hidden bg-slate-950"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain object-center transition duration-700 ease-out group-hover/preview:scale-[1.025]"
            onError={() => setHasError(true)}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-80" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

          <div className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between gap-4 rounded-2xl border border-white/15 bg-slate-950/75 px-4 py-3 text-white opacity-0 shadow-2xl backdrop-blur-xl transition duration-300 group-hover/preview:translate-y-0 group-hover/preview:opacity-100 sm:inset-x-6 sm:bottom-6">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                Recruiter case study
              </p>
              <p className="mt-1 truncate text-sm font-bold">{title}</p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-slate-950">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </Link>
      </motion.div>

      <div className="absolute left-6 top-6 z-10 rounded-full border border-white/30 bg-slate-950/75 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-200 shadow-lg backdrop-blur-xl sm:left-9 sm:top-9">
        Live interface preview
      </div>

      <div className="absolute bottom-5 right-6 z-10 text-5xl font-black text-slate-950/10 dark:text-white/10 sm:bottom-8 sm:right-9 sm:text-6xl">
        {accent}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container-shell relative">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title mt-5 max-w-4xl">
                Projects designed around
                <br />
                <span className="text-gradient">real-world problems.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Each project is presented as a concise product case study—showing
                the interface, engineering decisions, core features, and the
                practical problem it solves.
              </p>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button-outline group w-fit"
            >
              <FaGithub size={18} />
              Explore GitHub
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 space-y-7 sm:mt-12 sm:space-y-9 lg:space-y-10">
          {projects.map((project, index) => {
            const hasGithub = isValidExternalLink(project.github);
            const hasLiveDemo = isValidExternalLink(project.live);
            const isReversed = index % 2 !== 0;

            return (
              <Reveal key={project.slug} delay={(index % 2) * 0.08}>
                <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_36px_100px_rgba(15,23,42,0.14)] sm:rounded-[2.5rem] dark:border-white/10 dark:bg-slate-900 dark:hover:border-blue-400/30">
                  <div
                    className={`grid lg:grid-cols-[1.12fr_0.88fr] ${
                      isReversed
                        ? "lg:grid-cols-[0.88fr_1.12fr] lg:[&>*:first-child]:order-2"
                        : ""
                    }`}
                  >
                    <ProjectImage
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      accent={project.accent}
                      title={project.title}
                      slug={project.slug}
                      priority={index === 0}
                    />

                    <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11 xl:p-12">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                          <Sparkles size={16} />
                          <p className="text-xs font-black uppercase tracking-[0.2em]">
                            {project.category}
                          </p>
                        </div>
                        <span className="text-sm font-black text-slate-300 dark:text-slate-600">
                          {project.accent}
                        </span>
                      </div>

                      <h3 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl dark:text-white">
                        {project.title}
                      </h3>

                      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
                        {project.description}
                      </p>

                      <div className="mt-7">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                          Product highlights
                        </p>
                        <ul className="mt-4 grid gap-3">
                          {project.highlights.slice(0, 4).map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300"
                            >
                              <CheckCircle2
                                size={18}
                                className="mt-0.5 shrink-0 text-emerald-500"
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-7">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Layers3 size={16} />
                          <p className="text-xs font-black uppercase tracking-[0.16em]">
                            Technology stack
                          </p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="action-button-primary group"
                        >
                          View case study
                          <ArrowUpRight
                            size={17}
                            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </Link>

                        {hasGithub ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-button-outline"
                          >
                            <FaGithub size={18} />
                            View source
                          </a>
                        ) : (
                          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl bg-slate-100 px-5 py-3.5 font-bold text-slate-400 dark:bg-white/[0.05]">
                            <Code2 size={18} />
                            Source unavailable
                          </span>
                        )}

                        {hasLiveDemo && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-button-outline"
                          >
                            <ExternalLink size={18} />
                            Live demo
                          </a>
                        )}
                      </div>
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
