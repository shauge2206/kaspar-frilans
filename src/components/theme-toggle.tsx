"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useTheme, THEME_LABELS, THEMES } from "./theme-provider";

type Props = {
  className?: string;
};

export function ThemeToggle({ className = "" }: Props) {
  const { theme, cycle } = useTheme();
  const reduce = useReducedMotion();
  const idx = THEMES.indexOf(theme);
  const nextLabel = THEME_LABELS[THEMES[(idx + 1) % THEMES.length]];

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Bytt tema. Nåværende: ${THEME_LABELS[theme]}. Neste: ${nextLabel}.`}
      title={`Tema: ${THEME_LABELS[theme]} — klikk for ${nextLabel}`}
      className={`group inline-flex items-center gap-2.5 rounded-full bg-paper-2/85 px-3 py-1.5 text-[0.78rem] font-medium tracking-tight text-ink ring-1 ring-line backdrop-blur-md hover:bg-paper-3 ${className}`}
    >
      <span
        aria-hidden
        className="relative inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-coral-500"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-coral-500 opacity-40 group-hover:opacity-70" />
      </span>
      <span className="relative h-[1.05em] min-w-[3.5em] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={reduce ? false : { y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {THEME_LABELS[theme]}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
