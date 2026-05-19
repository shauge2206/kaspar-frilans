"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  shown: {
    transition: { staggerChildren: 0.04, delayChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RevealGroup({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once, amount: 0.2 }}
      variants={containerVariants}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "li";
}) {
  const MotionTag = motion[As] as typeof motion.div;
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
