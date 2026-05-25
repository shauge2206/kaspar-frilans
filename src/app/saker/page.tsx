import { Suspense } from "react";
import { saker } from "@/lib/saker";
import { SakerArchive } from "@/components/SakerArchive";

export const metadata = {
  title: "Saker – Kaspar Knudsen",
  description:
    "Et utvalg artikler fra Kaspar Knudsen – publisert i Fiskeribladet, Intrafish og Kystens Næringsliv.",
};

export default function SakerPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="smallcaps text-amber mb-5">Arkiv</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-tight tracking-tight">
          Saker
          <span className="block italic text-ink-soft text-[0.6em]">
            Et utvalg fra de siste årene.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
          Artikler publisert i Fiskeribladet, Intrafish og Kystens Næringsliv.
          Bilder og tekst – kritisk og undersøkende journalistikk og
          menneskenære historier.
        </p>
      </section>

      {/* Suspense boundary required: useSearchParams suspends on first render. */}
      <Suspense fallback={null}>
        <SakerArchive saker={saker} />
      </Suspense>
    </div>
  );
}
