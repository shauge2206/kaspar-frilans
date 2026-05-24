"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Sak } from "@/lib/saker";

type Props = {
  sak: Sak;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const aspect: Record<NonNullable<Props["size"]>, string> = {
  sm: "aspect-[4/3]",
  md: "aspect-[3/2]",
  lg: "aspect-[5/3]",
};

export function ArticleCard({ sak, size = "md", className = "" }: Props) {
  const reduce = useReducedMotion();

  return (
    <Link
      href={`/saker/${sak.slug}`}
      className={`group relative block ${className}`}
      aria-label={`${sak.tittel} – ${sak.publikasjon}, ${sak.dato}`}
    >
      <motion.div
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="relative h-full"
      >
        <div
          className={`relative ${aspect[size]} overflow-hidden rounded-[var(--radius-card)] bg-paper-2 ring-1 ring-line/70 shadow-soft transition-shadow duration-500 group-hover:shadow-lift`}
        >
          <Image
            src={sak.hovedbilde}
            alt={sak.bilder[0]?.alt ?? sak.tittel}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-black backdrop-blur-sm">
              {sak.seksjon}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/85">
              {sak.publikasjon} · {sak.sted}
            </p>
            <h3 className="mt-1.5 max-w-[28ch] font-display text-[clamp(1.2rem,1rem+0.7vw,1.65rem)] font-semibold leading-[1.18] tracking-tight text-white">
              {sak.tittel}
            </h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
