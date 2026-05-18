"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Sak } from "@/lib/saker";

export function RandomTeaser({ saker }: { saker: Sak[] }) {
  // SSR-stable: first sak. Randomised on mount so each load shows a new one.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (saker.length <= 1) return;
    setIndex(Math.floor(Math.random() * saker.length));
  }, [saker.length]);

  const sak = saker[index]!;

  return (
    <div className="rule-thin mt-8 pt-5">
      <p className="smallcaps mb-3 text-ink-mute">Tilfeldig utvalg</p>
      <p className="text-ink-soft leading-relaxed">{sak.ingress}</p>
      <Link
        href={`/saker/${sak.slug}`}
        className="smallcaps link-editorial text-accent mt-3 inline-block"
      >
        Les saken
      </Link>
    </div>
  );
}
