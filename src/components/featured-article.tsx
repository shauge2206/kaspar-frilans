"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Sak } from "@/lib/saker";

export function FeaturedArticle({ saker }: { saker: Sak[] }) {
  // Start deterministic (newest) for SSR/first paint, then pick a random
  // article after mount so a fresh one shows on every page load.
  const [sak, setSak] = useState(saker[0]);

  useEffect(() => {
    setSak(saker[Math.floor(Math.random() * saker.length)]);
  }, [saker]);

  if (!sak) return null;

  return (
    <Link
      href={`/saker/${sak.slug}`}
      className="group block rounded-[var(--radius-card)] bg-paper/70 p-6 ring-1 ring-line/70 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-lift"
    >
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-mute">
        Utvalgt artikkel
      </p>
      <p className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-ink transition-colors group-hover:text-coral-600">
        {sak.tittel}
      </p>
      <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-mute">
        {sak.publikasjon} · {sak.dato}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-coral-500 transition-transform duration-500 group-hover:translate-x-1">
        Åpne saken
        <span aria-hidden>↘</span>
      </span>
    </Link>
  );
}
