"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Sak } from "@/lib/saker";

const ROTATE_MS = 15_000;

function pickRandomIndex(current: number, length: number) {
  if (length <= 1) return current;
  let next = Math.floor(Math.random() * length);
  if (next === current) next = (next + 1) % length;
  return next;
}

export function RotatingLead({ saker }: { saker: Sak[] }) {
  // SSR-stable initial value: first sak. Randomised on mount so the first
  // visible state is unpredictable but hydration is clean.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (saker.length <= 1) return;
    setIndex(pickRandomIndex(-1, saker.length));
    const id = window.setInterval(() => {
      setIndex((i) => pickRandomIndex(i, saker.length));
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [saker.length]);

  const sak = saker[index]!;

  return (
    <section aria-labelledby="lead-heading" className="py-10 md:py-14">
      <div
        key={sak.slug}
        className="grid gap-8 md:grid-cols-12 md:gap-10 swoop-in"
      >
        <div className="md:col-span-7">
          <Link href={`/saker/${sak.slug}`} className="card group block">
            <div className="card-image relative aspect-[5/4] md:aspect-[6/5] bg-paper-deep">
              <Image
                src={sak.hovedbilde}
                alt={sak.bildetekst}
                fill
                priority
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="dateline mt-4">
              {sak.sted} · {sak.dato.toUpperCase()} ·{" "}
              {sak.publikasjon.toUpperCase()}
            </p>
          </Link>
        </div>

        <div className="md:col-span-5 md:col-rule md:pl-10">
          <p className="smallcaps text-accent">
            Utvalgte saker · {sak.seksjon}
          </p>
          <h2
            id="lead-heading"
            className="font-serif font-bold text-[2.2rem] md:text-[3.2rem] leading-[1.02] tracking-[-0.025em] mt-4"
          >
            <Link href={`/saker/${sak.slug}`} className="card-headline">
              <span className="card-headline">{sak.tittel}</span>
            </Link>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {sak.ingress}
          </p>

          <div className="rule-thin mt-7 pt-5">
            <p className="dateline">
              Av Kaspar · {sak.dato} · for {sak.publikasjon}
            </p>
            <Link
              href={`/saker/${sak.slug}`}
              className="smallcaps link-editorial mt-4 inline-block"
            >
              Les hele saken →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
