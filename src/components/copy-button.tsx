"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type Props = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = "Kopier tekst" }: Props) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const reduce = useReducedMotion();

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("ok");
    } catch {
      setState("err");
    }
    setTimeout(() => setState("idle"), 1800);
  }

  const display =
    state === "ok"
      ? "Kopiert ✓"
      : state === "err"
        ? "Klarte ikke kopiere"
        : label;

  return (
    <motion.button
      type="button"
      onClick={copy}
      aria-live="polite"
      whileHover={reduce ? undefined : { y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="inline-flex items-center gap-2 rounded-full bg-paper/80 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mute ring-1 ring-line/70 shadow-soft transition-colors hover:text-ink"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={display}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
