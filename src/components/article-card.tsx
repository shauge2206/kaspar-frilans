"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Sak } from "@/lib/saker";
import { tagLabel } from "@/lib/tags";

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
  const primaryTag = sak.emneknagger[0];

  return (
    <Link
      href={`/saker/${sak.slug}`}
      className={`group relative block ${className}`}
      aria-label={`${sak.tittel}, ${sak.publikasjon}, ${sak.dato}`}
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
            alt={sak.bilder[0]?.tekst ?? sak.tittel}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
          {primaryTag ? (
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="rounded-full bg-paper/85 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
                {tagLabel(primaryTag)}
              </span>
            </div>
          ) : null}
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-paper/85">
              {sak.publikasjon} · {sak.dato} ·{" "}
              <span className="text-coral-300">
                {sak.lesetidMinutter} min lesing
              </span>
            </p>
            <h3 className="mt-1.5 max-w-[28ch] font-display text-[clamp(1.2rem,1rem+0.7vw,1.65rem)] font-medium leading-[1.18] tracking-tight text-paper">
              {sak.tittel}
            </h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
