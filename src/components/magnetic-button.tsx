"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type Variant = "primary" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const reduce = useReducedMotion();

  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight transition-shadow duration-500 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper shadow-soft hover:shadow-lift"
      : "bg-paper-2 text-ink ring-1 ring-line hover:bg-paper-3";

  return (
    <motion.span
      className="inline-block"
      whileHover={reduce ? undefined : { scale: 1.015 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    </motion.span>
  );
}
