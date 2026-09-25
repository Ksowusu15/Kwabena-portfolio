"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";

import { profile } from "@/data/site";

const navigationLinks = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark =
      storedTheme === "dark" || (!storedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);

    const frame = window.requestAnimationFrame(() => {
      setIsDarkMode(shouldUseDark);
      setIsMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 24);

      if (isMenuOpen || currentScrollY < 80) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsNavbarVisible(true);
      }

      lastScrollY.current = Math.max(currentScrollY, 0);

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));

      const sections = navigationLinks
        .map((link) => {
          const section = document.getElementById(link.sectionId);
          if (!section) return null;
          return {
            id: link.sectionId,
            distance: Math.abs(section.getBoundingClientRect().top - 140),
          };
        })
        .filter(
          (section): section is { id: string; distance: number } =>
            section !== null,
        );

      if (sections.length > 0) {
        const closest = sections.reduce((previous, current) =>
          current.distance < previous.distance ? current : previous,
        );
        setActiveSection(closest.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    if (!isMounted) return;

    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem(
      "portfolio-theme",
      nextTheme ? "dark" : "light",
    );
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
        <div
          className="h-full bg-blue-600 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed left-0 right-0 top-0 z-50 px-2 pt-2 transition-transform duration-300 ease-out sm:px-4 sm:pt-3 lg:px-6 lg:pt-4 ${
          isNavbarVisible || isMenuOpen ? "translate-y-0" : "-translate-y-[calc(100%+1.5rem)]"
        }`}
      >
        <motion.nav
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
            isScrolled
              ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-950/95"
              : "border-transparent bg-white/95 dark:bg-slate-950/95"
          }`}
        >
          <Link
            href="/#home"
            aria-label="Go to homepage"
            className="group flex items-center gap-3"
          >
            <span className="interactive-icon-link relative h-11 w-11 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm dark:border-white/15"><Image src="/images/ks-logo.png" alt="" fill sizes="44px" className="object-contain p-1" /></span>

            <span className="hidden sm:block">
              <span className="block text-sm font-black text-slate-950 dark:text-white">
                Kwabena Soadwa
              </span>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">
                Software Engineer
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <motion.div
                  key={link.sectionId}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + navigationLinks.findIndex((item) => item.sectionId === link.sectionId) * 0.045 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={link.href}
                    className={`group/nav relative block rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`absolute inset-x-2 bottom-0 h-0.5 origin-center rounded-full bg-blue-600 transition-transform duration-300 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-75"
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              className="interactive-icon-link hidden h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 sm:grid dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="interactive-icon-link hidden h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 sm:grid dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              <FaLinkedinIn size={17} />
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isMounted && isDarkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {isMounted ? (
                isDarkMode ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )
              ) : (
                <span className="h-[18px] w-[18px]" aria-hidden="true" />
              )}
            </button>

            <a
              href="/Kwabena-Owusu-Soadwa-CV.pdf"
              download
              className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 md:flex"
            >
              <Download size={16} />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.nav>
      </header>

      <div
        className={`fixed inset-0 z-[80] transition lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(88%,380px)] flex-col bg-white p-6 shadow-2xl transition-transform duration-300 dark:bg-slate-950 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/#home"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <span className="interactive-icon-link relative h-11 w-11 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm dark:border-white/15"><Image src="/images/ks-logo.png" alt="" fill sizes="44px" className="object-contain p-1" /></span>
              <div>
                <p className="text-sm font-black text-slate-950 dark:text-white">
                  Kwabena Soadwa
                </p>
                <p className="text-xs font-semibold text-slate-500">
                  Software Engineer
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 dark:border-white/10 dark:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-2">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <motion.div
                  key={link.sectionId}
                  initial={{ opacity: 0, x: 18 }}
                  animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                  transition={{ duration: 0.28, delay: isMenuOpen ? navigationLinks.findIndex((item) => item.sectionId === link.sectionId) * 0.045 : 0 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`group/mobile relative block overflow-hidden rounded-xl px-5 py-4 text-base font-bold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-5 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover/mobile:w-8" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-auto">
            <a
              href="/Kwabena-Owusu-Soadwa-CV.pdf"
              download
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 font-bold text-white"
            >
              <Download size={18} />
              Download Resume
            </a>

            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="interactive-icon-link grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300"
              >
                <FaGithub size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="interactive-icon-link grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
