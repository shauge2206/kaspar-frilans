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
      className="tile-hover-amber group block border border-rule p-6 bg-bg-elev"
    >
      <p className="smallcaps text-ink-mute mb-3">Utvalgt artikkel</p>
      <p className="font-serif text-xl leading-snug text-ink group-hover:text-amber transition-colors">
        {sak.tittel}
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
        {sak.publikasjon} · {sak.dato}
      </p>
      <span className="glow font-sans text-sm mt-5 inline-flex items-center gap-2 text-amber">
        Åpne saken
        <span aria-hidden>↘</span>
      </span>
    </Link>
  );
}
