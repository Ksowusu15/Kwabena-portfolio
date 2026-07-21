import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Lightbulb,
  Target,
  TrendingUp,
  UserRound,
  Wrench,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Kwabena Owusu Soadwa`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const hasLiveDemo =
    project.live.trim() !== "" && !project.live.startsWith("#");
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="absolute left-0 top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="container-shell">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:-translate-x-1 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            <ArrowLeft size={18} />
            Back to projects
          </Link>

          <div className="mt-7 grid gap-8 sm:mt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">{project.category}</p>
                <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-500 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                  {project.status}
                </span>
              </div>

              <h1 className="mt-5 text-[clamp(3rem,7vw,6.4rem)] font-black leading-[0.9] tracking-[-0.065em] text-slate-950 dark:text-white">
                {project.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
                <ProjectFact
                  icon={<UserRound size={18} />}
                  label="My role"
                  value={project.role}
                />
                <ProjectFact
                  icon={<Layers3 size={18} />}
                  label="Core stack"
                  value={project.technologies.slice(0, 3).join(" · ")}
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button-primary group"
                >
                  <FaGithub size={18} />
                  View source
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

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

            <BrowserPreview
              image={project.image}
              title={project.title}
              slug={project.slug}
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <NarrativeCard
            icon={<Target size={22} />}
            eyebrow="The problem"
            text={project.problem}
            tone="blue"
          />
          <NarrativeCard
            icon={<Lightbulb size={22} />}
            eyebrow="The solution"
            text={project.solution}
            tone="violet"
          />
        </div>

        <article className="mt-8 overflow-hidden rounded-[2.25rem] bg-[#101828] p-7 text-white shadow-2xl sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">
                Project overview
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                From practical need to complete product.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-300">
                {project.overview}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <section className="mt-8 rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-9 dark:border-white/10 dark:bg-slate-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Responsive product view</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white">
                One interface, every screen.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400">
              The same product is presented across desktop, tablet, and phone
              frames to show how the interface adapts—not just how it looks in
              one screenshot.
            </p>
          </div>

          <div className="mt-9 grid items-end gap-6 lg:grid-cols-[1.3fr_0.8fr_0.45fr]">
            <DevicePreview
              image={project.image}
              title={project.title}
              device="desktop"
            />
            <DevicePreview
              image={project.image}
              title={project.title}
              device="tablet"
            />
            <DevicePreview
              image={project.image}
              title={project.title}
              device="phone"
            />
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="glass rounded-[2rem] p-7 sm:p-9">
            <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
              <Layers3 size={22} />
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                System architecture
              </h2>
            </div>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              A clear delivery path from the user interface through application
              logic to data and external services.
            </p>
            <div className="mt-7 space-y-3">
              {project.architecture.map((layer, index) => (
                <div
                  key={layer}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/30 dark:hover:bg-blue-500/[0.07]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-950 text-xs font-black text-white dark:bg-white dark:text-slate-950">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold text-slate-700 dark:text-slate-200">
                    {layer}
                  </span>
                  {index < project.architecture.length - 1 && (
                    <ArrowRight
                      size={17}
                      className="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500 dark:text-slate-600"
                    />
                  )}
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2">
            <DetailList
              title="My responsibilities"
              items={project.responsibilities}
              icon={<UserRound size={22} />}
            />
            <DetailList
              title="Key outcomes"
              items={project.outcomes}
              icon={<TrendingUp size={22} />}
            />
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <DetailList
            title="Key features"
            items={project.highlights}
            icon={<CheckCircle2 size={22} />}
          />
          <DetailList
            title="Engineering challenges"
            items={project.challenges}
            icon={<Wrench size={22} />}
          />
          <DetailList
            title="Future improvements"
            items={project.improvements}
            icon={<Lightbulb size={22} />}
          />
        </div>

        <article className="mt-8 grid gap-8 rounded-[2.25rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-violet-50 p-7 sm:p-10 lg:grid-cols-[0.75fr_1.25fr] dark:border-blue-400/15 dark:from-blue-500/[0.08] dark:to-violet-500/[0.08]">
          <div>
            <div className="grid h-13 w-13 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm dark:bg-white/[0.08] dark:text-blue-300">
              <BookOpen size={24} />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Lessons learned
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-slate-950 dark:text-white">
              What this project improved in my engineering process.
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {project.lessons.map((lesson, index) => (
              <li
                key={lesson}
                className="rounded-2xl border border-white/80 bg-white/75 p-5 text-sm font-semibold leading-6 text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200"
              >
                <span className="mb-4 block text-2xl font-black text-blue-200 dark:text-blue-500/40">
                  0{index + 1}
                </span>
                {lesson}
              </li>
            ))}
          </ul>
        </article>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="next-case-study-card group mt-8 flex flex-col gap-6 overflow-hidden rounded-[2.25rem] bg-slate-950 p-7 shadow-2xl transition hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">
              Next case study
            </p>
            <h2 className="next-case-study-title mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              {nextProject.title}
            </h2>
            <p className="next-case-study-description mt-3 max-w-2xl">
              {nextProject.description}
            </p>
          </div>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-slate-950 transition group-hover:translate-x-1">
            <ArrowRight size={22} />
          </span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

type ProjectFactProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function ProjectFact({ icon, label, value }: ProjectFactProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
      <span className="mt-0.5 text-blue-600 dark:text-blue-400">{icon}</span>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-100">
          {value}
        </p>
      </div>
    </div>
  );
}

type NarrativeCardProps = {
  icon: ReactNode;
  eyebrow: string;
  text: string;
  tone: "blue" | "violet";
};

function NarrativeCard({ icon, eyebrow, text, tone }: NarrativeCardProps) {
  const toneClass =
    tone === "blue"
      ? "text-blue-600 dark:text-blue-400"
      : "text-violet-600 dark:text-violet-400";

  return (
    <article className="glass rounded-[2rem] p-7 transition hover:-translate-y-1 sm:p-9">
      <div className={`flex items-center gap-3 ${toneClass}`}>
        {icon}
        <p className="text-xs font-black uppercase tracking-[0.18em]">
          {eyebrow}
        </p>
      </div>
      <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        {text}
      </p>
    </article>
  );
}

type BrowserPreviewProps = {
  image: string;
  title: string;
  slug: string;
  priority?: boolean;
};

function BrowserPreview({
  image,
  title,
  slug,
  priority = false,
}: BrowserPreviewProps) {
  return (
    <div className="case-study-browser overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-950">
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900">
        <div className="flex h-12 items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 dark:border-white/10 dark:bg-slate-900">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="mx-auto max-w-xs flex-1 truncate rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-center text-[11px] font-semibold text-slate-400 dark:border-white/10 dark:bg-white/[0.05]">
            {slug}.kwabenasoadwa.dev
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain object-center transition duration-700 hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </div>
  );
}

type DevicePreviewProps = {
  image: string;
  title: string;
  device: "desktop" | "tablet" | "phone";
};

function DevicePreview({ image, title, device }: DevicePreviewProps) {
  const frame = {
    desktop: "aspect-[16/10] rounded-[1.4rem] p-2",
    tablet: "mx-auto aspect-[4/5] max-w-[330px] rounded-[1.8rem] p-2.5",
    phone: "mx-auto aspect-[9/18] max-w-[190px] rounded-[2rem] p-2.5",
  }[device];

  return (
    <div>
      <div
        className={`device-preview-frame relative overflow-hidden border border-slate-300 bg-slate-950 shadow-[0_22px_60px_rgba(15,23,42,0.18)] dark:border-white/15 ${frame}`}
      >
        <div className="relative h-full overflow-hidden rounded-[calc(1.4rem-6px)] bg-slate-900">
          <Image
            src={image}
            alt={`${title} ${device} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain object-center transition duration-700 hover:scale-[1.025]"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-xs font-black uppercase tracking-[0.17em] text-slate-400">
        {device}
      </p>
    </div>
  );
}

type DetailListProps = {
  title: string;
  items: readonly string[];
  icon: ReactNode;
};

function DetailList({ title, items, icon }: DetailListProps) {
  return (
    <article className="glass h-full rounded-[2rem] p-7 transition hover:-translate-y-1">
      <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
        {icon}
        <h2 className="text-xl font-black text-slate-950 dark:text-white">
          {title}
        </h2>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300"
          >
            <CheckCircle2
              size={18}
              className="mt-0.5 shrink-0 text-emerald-500"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
