"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

export function WordReveal({ text, className = "", delay = 0 }: Props) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline pb-[0.3em]"
          style={{ marginRight: i < words.length - 1 ? "0.28em" : 0 }}
        >
          <motion.span
            className="inline-block"
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
      ))}
    </span>
  );
}
