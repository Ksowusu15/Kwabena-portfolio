"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function InitialLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="portfolio-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-white/65 backdrop-blur-2xl dark:bg-slate-950/70"
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative grid h-28 w-28 place-items-center rounded-full border border-slate-200 bg-white p-3 shadow-[0_18px_55px_rgba(15,23,42,0.18)] sm:h-32 sm:w-32">
              <motion.span
                aria-hidden="true"
                className="absolute -inset-1 rounded-full border-2 border-transparent border-t-blue-600 border-r-blue-600/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-full bg-white"
                animate={{ scale: [1, 1.035, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
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
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300"
            >
              Kwabena Owusu Soadwa
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
