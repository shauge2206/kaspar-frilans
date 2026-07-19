"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <main id="main" className="relative z-10 flex-1">
        {children}
      </main>
    );
  }

  // The incoming page is NOT animated (initial === animate), so its WordReveal
  // and Reveal children never run underneath an ancestor opacity/transform
  // animation. Only the outgoing page fades out; with mode="wait" the new page
  // then mounts cleanly and its own reveals play without contention.
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        id="main"
        className="relative z-10 flex-1"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
