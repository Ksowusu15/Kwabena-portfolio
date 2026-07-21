import { Sparkles } from "lucide-react";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

import { skills } from "@/data/site";

export default function Home() {
  const marqueeSkills = [
    ...skills.flatMap((skill) => skill.items),
    ...skills.flatMap((skill) => skill.items),
  ];

  return (
    <main>
      <Navbar />

      <Hero />

      {/* Skills marquee */}
      <section className="overflow-hidden border-y border-slate-200 bg-white py-5 dark:border-white/10 dark:bg-slate-950">
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-black uppercase tracking-[0.18em] text-slate-400">
          {marqueeSkills.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-10"
            >
              <span>{item}</span>
              <Sparkles size={15} />
            </span>
          ))}
        </div>
      </section>

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}