"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
};

export function WordReveal({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
}: Props) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span key={i} className={highlightWords.includes(w) ? "italic text-coral-500" : ""}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {words.map((w, i) => {
        const isHighlight = highlightWords.includes(w);
        return (
          <span
            key={i}
            className={`inline-block overflow-hidden align-baseline ${
              isHighlight ? "pb-[0.6em] pr-[0.15em]" : "pb-[0.3em]"
            }`}
            style={{ marginRight: i < words.length - 1 ? "0.28em" : 0 }}
          >
            <motion.span
              className={`inline-block ${isHighlight ? "italic text-coral-500" : ""}`}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + i * 0.07,
              }}
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
