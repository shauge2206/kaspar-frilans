import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";

export const metadata = {
  title: "Innhold — Kaspar Knudsen · Magasinet",
  description:
    "Innholdsfortegnelse over saker — gravejournalistikk, reportasjer og feature fra felt.",
};

export default function SakerPage() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-12 py-10 lg:py-16">
      {/* Header */}
      <div className="flex items-baseline justify-between border-b border-ink/70 pb-3 text-[0.78rem] smallcaps">
        <span>Volum I · Nr. 1</span>
        <span>Innhold</span>
        <span>Side 2</span>
      </div>

      <header className="mt-12 lg:mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr] items-end">
        <div>
          <p className="smallcaps text-[0.78rem] text-accent">
            Innholdsfortegnelse
          </p>
          <h1 className="mt-3 font-display text-[clamp(3rem,8vw,6.4rem)] leading-[0.92] tracking-tight">
            Saker fra
            <br />
            <em className="font-medium">utgaven.</em>
          </h1>
        </div>
        <p className="font-display italic text-[1.4rem] leading-snug text-ink-soft max-w-md">
          En oversikt over arbeidet — i den rekkefølgen redaktøren
          mener du bør lese det.
        </p>
      </header>

      {/* TOC */}
      <ol className="mt-16 lg:mt-20 divide-y divide-rule border-y border-ink/30">
        {saker.map((sak, i) => (
          <li key={sak.slug}>
            <Link
              href={`/saker/${sak.slug}`}
              className="toc-row group grid gap-4 lg:gap-10 lg:grid-cols-[auto_1fr_auto] items-end py-7 lg:py-9"
            >
              <div className="flex items-baseline gap-6 lg:w-[7rem]">
                <span className="toc-num smallcaps text-accent text-[0.82rem] tracking-[0.22em] w-7">
                  {sak.nummer}
                </span>
                <span className="smallcaps text-[0.7rem] text-ink-soft">
                  {sak.kategori}
                </span>
              </div>

              <div className="flex items-end gap-5">
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.1] tracking-tight">
                    {sak.tittel}
                  </h2>
                  <p className="mt-2 italic text-[0.95rem] text-ink-soft leading-relaxed max-w-2xl">
                    {sak.ingress}
                  </p>
                  <p className="mt-2 smallcaps text-[0.7rem] text-ink-soft">
                    {sak.publikasjon} · {sak.dato}
                  </p>
                </div>
                <span className="leader hidden md:block" aria-hidden />
              </div>

              <div className="flex items-center gap-6 lg:justify-end">
                <span className="hidden lg:block relative w-24 h-32 overflow-hidden bg-paper-deep shrink-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-700">
                  <Image
                    src={sak.hovedbilde}
                    alt={sak.bildetekst}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </span>
                <span className="toc-page font-display text-[1.6rem] tabular-nums lining-nums w-12 text-right">
                  {sak.sidetall}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      {/* Footer */}
      <div className="mt-16 lg:mt-20 grid gap-6 lg:grid-cols-2 items-end">
        <p className="font-display italic text-[1.4rem] leading-snug text-ink-soft max-w-lg">
          Flere saker er under arbeid — for{" "}
          <span className="not-italic font-display">Fiskeribladet</span>,{" "}
          <span className="not-italic font-display">Intrafish</span> og{" "}
          <span className="not-italic font-display">Kystens Næringsliv</span>.
          Følg med på neste utgave.
        </p>
        <Link
          href="/kontakt"
          className="self-end inline-flex items-center justify-between border border-ink/80 px-6 py-4 smallcaps tracking-[0.2em] text-[0.84rem] hover:bg-ink hover:text-paper transition-colors"
        >
          Foreslå en sak
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
