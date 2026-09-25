"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-white/55 backdrop-blur-xl dark:bg-slate-950/60"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="absolute inset-0 bg-slate-950/[0.025] dark:bg-white/[0.015]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        <div className="relative grid h-28 w-28 place-items-center rounded-full border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.16)] sm:h-32 sm:w-32 dark:border-white/10 dark:bg-white/95">
          <motion.span
            aria-hidden="true"
            className="absolute -inset-1 rounded-full border-2 border-transparent border-t-blue-600 border-r-blue-600/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.15, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            animate={{ scale: [1, 1.035, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full overflow-hidden rounded-full bg-white"
          >
            <Image
              src="/images/ks-logo.png"
              alt="Kwabena Owusu Soadwa logo"
              fill
              priority
              sizes="128px"
              className="object-contain p-1"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mt-5 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300"
        >
          Loading portfolio
        </motion.p>
      </motion.div>
    </div>
  );
}
