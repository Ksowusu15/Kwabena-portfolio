"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

type ScrollTarget = HTMLElement;

function getScrollTargets(): ScrollTarget[] {
  const main = document.querySelector("main");
  if (!main) return [];

  const identifiedSections = Array.from(
    main.querySelectorAll<HTMLElement>(":scope > section[id]"),
  );

  const sections =
    identifiedSections.length >= 3
      ? identifiedSections
      : Array.from(main.querySelectorAll<HTMLElement>(":scope > section"));

  const footer = main.querySelector<HTMLElement>(":scope > footer");

  return footer ? [...sections, footer] : sections;
}

export function SectionNavigator() {
  const pathname = usePathname();
  const [targetCount, setTargetCount] = useState(0);
  const [canGoUp, setCanGoUp] = useState(false);
  const [canGoDown, setCanGoDown] = useState(false);

  const refreshState = useCallback(() => {
    const nextTargets = getScrollTargets();
    setTargetCount(nextTargets.length);

    if (nextTargets.length < 2) {
      setCanGoUp(false);
      setCanGoDown(false);
      return;
    }

    const y = window.scrollY;
    const viewportBottom = y + window.innerHeight;
    const documentBottom = document.documentElement.scrollHeight;

    setCanGoUp(y > 80);
    setCanGoDown(viewportBottom < documentBottom - 40);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(refreshState);

    const handleScroll = () => refreshState();
    const handleResize = () => refreshState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname, refreshState]);

  const scrollToTarget = (target: ScrollTarget) => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const getActiveIndex = (currentTargets: ScrollTarget[]) => {
    const marker = window.scrollY + 160;
    let activeIndex = 0;

    currentTargets.forEach((target, index) => {
      if (target.offsetTop <= marker) activeIndex = index;
    });

    return activeIndex;
  };

  const goUp = () => {
    if (!canGoUp) return;

    const currentTargets = getScrollTargets();
    if (!currentTargets.length) return;

    const activeIndex = getActiveIndex(currentTargets);
    const activeTarget = currentTargets[activeIndex];

    // If the user is well inside a section, return to that section's start first.
    if (window.scrollY - activeTarget.offsetTop > 140) {
      scrollToTarget(activeTarget);
      return;
    }

    const previousTarget = currentTargets[Math.max(0, activeIndex - 1)];
    scrollToTarget(previousTarget);
  };

  const goDown = () => {
    if (!canGoDown) return;

    const currentTargets = getScrollTargets();
    if (!currentTargets.length) return;

    const activeIndex = getActiveIndex(currentTargets);
    const nextTarget = currentTargets[Math.min(currentTargets.length - 1, activeIndex + 1)];
    scrollToTarget(nextTarget);
  };

  if (targetCount < 2) return null;

  const buttonBase =
    "group relative grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-35 sm:h-11 sm:w-11 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200 dark:shadow-black/25 dark:hover:border-blue-400/40 dark:hover:text-blue-300 dark:focus-visible:ring-offset-slate-950";

  return (
    <nav
      aria-label="Page section navigation"
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6"
    >
      <button
        type="button"
        onClick={goUp}
        disabled={!canGoUp}
        aria-label="Previous section"
        title="Previous section"
        className={buttonBase}
      >
        <ChevronUp size={19} strokeWidth={2.25} />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-950 px-2.5 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block dark:bg-white dark:text-slate-950">
          Previous section
        </span>
      </button>

      <button
        type="button"
        onClick={goDown}
        disabled={!canGoDown}
        aria-label="Next section"
        title="Next section"
        className={buttonBase}
      >
        <ChevronDown size={19} strokeWidth={2.25} />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-950 px-2.5 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block dark:bg-white dark:text-slate-950">
          Next section
        </span>
      </button>
    </nav>
  );
}
