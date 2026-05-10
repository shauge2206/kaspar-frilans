import type { Metadata } from "next";
import { saker } from "@/lib/saker";
import { SakerIndex } from "@/components/SakerIndex";

export const metadata: Metadata = {
  title: "Saker",
  description:
    "Indeks over publiserte saker av Kaspar Knudsen — undersøkende journalistikk.",
};

export default function SakerPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-[1240px] px-5 pt-12 sm:px-8 sm:pt-20">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
          <span aria-hidden className="inline-block h-px w-8 bg-ink/40" />
          <span>Indeks</span>
          <span aria-hidden className="dot-divider" />
          <span className="tabular">
            {String(saker.length).padStart(2, "0")} publiserte saker
          </span>
        </div>
        <h1 className="mt-8 text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.03em]">
          Saker
        </h1>
        <p className="mt-5 max-w-[58ch] text-[16px] leading-[1.6] text-ink/70">
          Et utvalg publiserte saker. Tabular sortering — bruk{" "}
          <kbd className="font-mono border border-hairline px-1.5 py-0.5 text-[11px]">
            J
          </kbd>{" "}
          /{" "}
          <kbd className="font-mono border border-hairline px-1.5 py-0.5 text-[11px]">
            K
          </kbd>{" "}
          eller pilene for å bla, og{" "}
          <kbd className="font-mono border border-hairline px-1.5 py-0.5 text-[11px]">
            ↵
          </kbd>{" "}
          for å åpne. Forhåndsvisning oppdateres til høyre.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-[1240px] px-5 pb-24 sm:px-8">
        <div className="grid grid-cols-12 border-y border-hairline-strong py-2">
          <span className="col-span-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
            №
          </span>
          <span className="col-span-7 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 sm:col-span-7">
            Sak
          </span>
          <span className="col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
            Dato
          </span>
          <span className="col-span-2 text-right font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 sm:text-left">
            Sted
          </span>
        </div>
        <SakerIndex saker={saker} />
      </section>
    </div>
  );
}
