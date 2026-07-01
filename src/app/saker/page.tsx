import type { Metadata } from "next";
import { Suspense } from "react";
import { saker } from "@/lib/saker";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";
import { SakerArchive } from "@/components/saker-archive";

export const metadata: Metadata = {
  title: "Saker – Kaspar Knudsen",
  description:
    "Et utvalg artikler fra Kaspar Knudsen – publisert i Fiskeribladet, Intrafish og Kystens Næringsliv.",
};

export default function SakerPage() {
  return (
    <>
      <section className="relative px-6 pt-20 pb-12 md:px-10 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-[1280px]">
          <Reveal as="p" delay={0.1} y={12}>
            <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="text-coral-500">/</span> Arkiv
            </span>
          </Reveal>

          <h1 className="mt-7 max-w-[20ch] font-display text-[clamp(2.21rem,3.91vw+0.85rem,4.93rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
            <WordReveal text="Saker" delay={0.05} />
            <br />
            <WordReveal
              text="Graving og reportasje."
              delay={0.4}
            />
          </h1>

          <Reveal delay={1.0} className="mt-8 max-w-[58ch]">
            <p className="text-[1.05rem] leading-relaxed text-ink-2">
              Artikler publisert i Fiskeribladet, Intrafish og Kystens
              Næringsliv. Bilder og tekst – kritisk og undersøkende
              journalistikk og menneskenære historier.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Suspense boundary required: useSearchParams suspends on first render. */}
      <Suspense fallback={null}>
        <SakerArchive saker={saker} />
      </Suspense>
    </>
  );
}
