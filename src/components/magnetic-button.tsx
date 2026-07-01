"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useRef } from "react";

type Variant = "primary" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const stiff = { stiffness: 220, damping: 18, mass: 0.4 };

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, stiff);
  const sy = useSpring(y, stiff);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.18);
    y.set(dy * 0.22);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "inline-flex items-center gap-2 rounded-none px-6 py-3.5 text-sm font-medium tracking-tight transition-shadow duration-500 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper shadow-soft hover:shadow-lift"
      : "bg-paper-2 text-ink ring-1 ring-line hover:bg-paper-3";

  return (
    <motion.span
      style={{ x: sx, y: sy }}
      className="inline-block"
      onMouseLeave={onLeave}
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </Link>
    </motion.span>
  );
}
