"use client";

import { motion, useReducedMotion } from "motion/react";

const TOKENS = [
  "UNDERSØKENDE JOURNALISTIKK",
  "GRAVEJOURNALISTIKK",
  "ARBEIDSLIV",
  "KRIM",
  "BERGEN",
  "USF VERFTET",
  "FRILANS",
];

export function MarqueeRule() {
  const reduce = useReducedMotion();
  const items = Array.from({ length: 2 }, () => TOKENS).flat();

  return (
    <div className="relative overflow-hidden border-y border-hairline bg-paper py-3">
      <motion.div
        className="flex whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {items.map((t, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-6">
            <span
              aria-hidden
              className="inline-block h-1 w-1 -translate-y-[1px] bg-ink/40"
            />
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
