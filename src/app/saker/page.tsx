import type { Metadata } from "next";
import { saker } from "@/lib/saker";
import { FolderCard } from "@/components/folder-card";
import { Stamp } from "@/components/stamp";

export const metadata: Metadata = {
  title: "Saksarkiv — Kaspar Knudsen",
  description:
    "Arkivet til frilansjournalist Kaspar Knudsen. Bla i saker fra arbeidsliv, kriminal og kysten.",
};

export default function SakerPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            DOSSIER · KH-2026 · MAPPE 002
          </p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl leading-[1.05]">
            Saksarkiv
          </h1>
          <p className="mt-4 max-w-xl text-ink-soft">
            Et utvalg saker fra arkivet. Hver mappe inneholder utsnitt fra
            artikkelen, bilder fra felt og bildetekst. Klikk for å åpne
            saksmappen.
          </p>
        </div>
        <div className="paper px-5 py-4 max-w-xs w-full font-mono text-[11px] leading-relaxed text-ink-soft">
          <div className="flex justify-between border-b border-ink/15 pb-1.5 mb-2">
            <span className="uppercase tracking-[0.16em]">Indeks</span>
            <span className="uppercase tracking-[0.16em]">Side 1/1</span>
          </div>
          <ul className="space-y-1">
            {saker.map((s) => (
              <li key={s.slug} className="flex justify-between gap-3">
                <span className="truncate">{s.shortLabel}</span>
                <span className="text-ink-muted">{s.caseNumber.split(" ").pop()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-6 -right-2 z-10">
          <Stamp rotate={6}>SAMLING · 2023–2025</Stamp>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saker.map((sak, i) => (
            <FolderCard key={sak.slug} sak={sak} rotate={i % 2 === 0 ? -0.6 : 0.8} />
          ))}
        </div>
      </div>

      <div className="mt-16 paper p-6 md:p-8 relative">
        <span className="tape -top-3 left-10 -rotate-3" />
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          ARKIVNOTAT
        </p>
        <p className="mt-2 font-serif text-lg italic text-ink-soft">
          «Arkivet er løpende. Nye saker legges til etter hvert som de
          publiseres. Kontakt meg om du ønsker referanser, tidligere arbeid
          eller å diskutere et nytt oppdrag.»
        </p>
      </div>
    </div>
  );
}
