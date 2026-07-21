import type { Metadata } from "next";
import { Download, Mail, MapPin, BriefcaseBusiness, GraduationCap, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile, skills, experience } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Professional resume of ${profile.name}, software engineer and full-stack developer in Accra, Ghana.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main>
      <Navbar />
      <section className="container-shell pb-20 pt-28 sm:pb-24 sm:pt-32">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Resume</p>
            <h1 className="mt-5 text-[clamp(3rem,7vw,6rem)] font-black leading-[.92] tracking-[-.06em] text-slate-950 dark:text-white">Experience, education<br/><span className="text-gradient">and capabilities.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">A concise overview of my technical background, professional experience, and full-stack development skills.</p>
          </div>
          <a href="/Kwabena-Owusu-Soadwa-CV.pdf" download className="action-button-primary w-fit"><Download size={18}/>Download PDF resume</a>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-8">
          <aside className="space-y-6">
            <article className="glass rounded-[2rem] p-7">
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">{profile.name}</h2>
              <p className="mt-2 font-bold text-blue-600 dark:text-blue-400">{profile.role}</p>
              <div className="mt-6 space-y-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
                <p className="flex gap-3"><MapPin size={18} className="text-blue-600"/>{profile.location}</p>
                <a href={`mailto:${profile.email}`} className="flex gap-3 hover:text-blue-600"><Mail size={18} className="text-blue-600"/>{profile.email}</a>
              </div>
            </article>
            <article className="rounded-[2rem] bg-[#101828] p-7 text-white">
              <h2 className="text-xl font-black">Technical skills</h2>
              <div className="mt-6 space-y-6">
                {skills.map((group) => <div key={group.category}><p className="text-xs font-black uppercase tracking-[.16em] text-blue-300">{group.category}</p><p className="mt-2 text-sm leading-6 text-slate-300">{group.items.join(" · ")}</p></div>)}
              </div>
            </article>
          </aside>

          <div className="space-y-8">
            <article className="glass rounded-[2rem] p-7 sm:p-9">
              <div className="flex items-center gap-3 text-blue-600"><BriefcaseBusiness size={22}/><h2 className="text-2xl font-black text-slate-950 dark:text-white">Professional experience</h2></div>
              <div className="mt-8 space-y-8">
                {experience.map((item) => <div key={`${item.role}-${item.company}`} className="border-l-2 border-blue-200 pl-6 dark:border-blue-500/30"><p className="text-xs font-black uppercase tracking-[.15em] text-blue-600 dark:text-blue-400">{item.period}</p><h3 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{item.role}</h3><p className="mt-1 font-semibold text-slate-500 dark:text-slate-400">{item.company}</p><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.details}</p></div>)}
              </div>
            </article>
            <article className="glass rounded-[2rem] p-7 sm:p-9">
              <div className="flex items-center gap-3 text-violet-600"><GraduationCap size={22}/><h2 className="text-2xl font-black text-slate-950 dark:text-white">Education</h2></div>
              <div className="mt-7"><h3 className="text-xl font-black text-slate-950 dark:text-white">B.Sc. Computer Science</h3><p className="mt-2 font-semibold text-slate-500 dark:text-slate-400">Kwame Nkrumah University of Science and Technology</p><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Foundation in software engineering, programming, databases, networking, algorithms, and computer systems.</p></div>
            </article>
            <article className="glass rounded-[2rem] p-7 sm:p-9">
              <div className="flex items-center gap-3 text-emerald-600"><Award size={22}/><h2 className="text-2xl font-black text-slate-950 dark:text-white">Certification</h2></div>
              <div className="mt-7"><h3 className="text-xl font-black text-slate-950 dark:text-white">Microsoft AI Certification</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">Demonstrates foundational knowledge of artificial intelligence concepts and Microsoft AI technologies.</p></div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
