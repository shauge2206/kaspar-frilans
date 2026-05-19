import type { Metadata } from "next";
import Link from "next/link";
import { CompassRose } from "@/components/CompassRose";
import { themes, type ThemeKey } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Om",
  description:
    "Om Kaspar Knudsen – frilansjournalist i Bergen med base på USF Verftet. Mastergrad i undersøkende journalistikk og 15 år i mediebransjen.",
};

const omrader: { key: ThemeKey; body: string }[] = [
  {
    key: "krim",
    body: "Kriminalsaker fra tingrett til lagmannsrett, med vekt på folk som står midt i hendelsen – vitner, etterlatte, naboer.",
  },
  {
    key: "arbeidsliv",
    body: "Arbeidsforhold, sosial dumping og bransjekultur i sjømat, bygg og maritim sektor langs kysten.",
  },
  {
    key: "kyst",
    body: "Kystsamfunn, fiskeri og oppdrett. Lange linjer fra de små havnene til fellesskap og forvaltning.",
  },
  {
    key: "samfunn",
    body: "Lokalsamfunn under press – flyktningmottak, frivillighet og førstelinjetjenester i Bergen og Vestland.",
  },
  {
    key: "feature",
    body: "Portretter og reportasjer som tar tid å bygge, der bilder og tekst leveres som en helhet fra felt.",
  },
];

const fakta = [
  { label: "Base", value: "USF Verftet, Nordnes" },
  { label: "By", value: "Bergen" },
  { label: "Utdanning", value: "Mastergrad, undersøkende journalistikk" },
  { label: "Erfaring", value: "15 år i mediebransjen" },
  { label: "Publikasjoner", value: "Fiskeribladet · Intrafish · Kystens Næringsliv · Bergens Tidende" },
  { label: "Språk", value: "Norsk · Engelsk" },
];

const cv = [
  {
    periode: "2014 – 2018",
    rolle: "Mastergrad",
    sted: "Undersøkende journalistikk",
    body: "Spesialisering i kildearbeid, dokumentinnsyn og metode.",
  },
  {
    periode: "2018 – 2023",
    rolle: "Reporter",
    sted: "Bergens Tidende",
    body: "Krim, samfunn og lokale gravesaker fra Bergen og Vestland.",
  },
  {
    periode: "2023 →",
    rolle: "Frilansjournalist",
    sted: "Bergen / USF Verftet",
    body: "Leverer enkeltsaker, periodejobbing og lengre reportasjer til riks- og bransjepresse.",
  },
];

export default function OmPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/40">
        <div className="absolute inset-0 contour pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-5 flex flex-wrap items-center gap-x-3">
                <span>Om</span>
                <span>·</span>
                <span className="tabular">60°23′N · 05°19′Ø</span>
              </div>
              <h1 className="font-semibold tracking-[-0.02em] leading-[0.95] text-[clamp(2.4rem,5.5vw,4.8rem)] text-ink">
                Journalist
                <br />
                med <span className="text-accent">fast base</span>
                <br />
                og lange linjer.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pl-8 lg:border-l border-line/50">
              <div
                className="aspect-[4/5] w-full max-w-[300px] mb-6 border border-line/50 bg-sand/60 flex items-center justify-center overflow-hidden rounded-md"
                aria-label="Portrettplassholder"
              >
                <svg viewBox="0 0 200 250" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <pattern id="om-10-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(31,56,82,0.10)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="200" height="250" fill="url(#om-10-grid)" />
                  <g stroke="rgba(31,56,82,0.35)" strokeWidth="1" fill="none">
                    <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                    <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                    <path d="M 10 240 L 22 240 M 10 240 L 10 228" />
                    <path d="M 190 240 L 178 240 M 190 240 L 190 228" />
                  </g>
                  <g fill="rgba(31,56,82,0.22)">
                    <circle cx="100" cy="100" r="34" />
                    <path d="M 50 200 Q 50 150 100 150 Q 150 150 150 200 Z" />
                  </g>
                  <text x="100" y="222" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="3" fill="rgba(31,56,82,0.6)">
                    PORTRETT
                  </text>
                </svg>
              </div>
              <p className="text-[17px] leading-relaxed text-deep/80 font-serif">
                Jeg er frilansjournalist i Bergen, med kontor på USF Verftet
                på Nordnes. Mastergrad i undersøkende journalistikk og 15 år i
                mediebransjen – fra lokalavis til riksdekkende publikasjoner.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-deep/80 font-serif">
                Jeg leverer ferdige saker, ideer eller står til rådighet som
                ekstern redaksjonsressurs. Stedet historien skjer er ikke et
                tillegg – det er der jobben begynner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-4">
              Fagfelter
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-[1.1] mb-10 max-w-2xl">
              Fem tema, samme metode.
            </h2>
            <ul className="space-y-6">
              {omrader.map((o) => (
                <li
                  key={o.key}
                  className="grid grid-cols-[auto_1fr] gap-5 border-t border-line/50 pt-5"
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 text-paper self-start"
                    style={{ background: themes[o.key].color }}
                  >
                    {themes[o.key].label}
                  </span>
                  <p className="text-[15.5px] leading-relaxed text-deep/85 font-serif">
                    {o.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 bg-sand/50 border border-line/50 rounded-lg p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-5">
                Fakta
              </div>
              <dl className="space-y-4">
                {fakta.map((f) => (
                  <div
                    key={f.label}
                    className="grid grid-cols-[auto_1fr] gap-4 items-baseline border-b border-line/40 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 w-24">
                      {f.label}
                    </dt>
                    <dd className="text-[14.5px] text-ink font-serif leading-snug">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-line/40 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-4">
                Erfaring
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-[1.1]">
                Karrieretidslinje.
              </h2>
            </div>
          </div>
          <ol className="grid md:grid-cols-3 gap-6">
            {cv.map((c) => (
              <li
                key={c.periode}
                className="bg-paper border border-line/50 rounded-lg p-6"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent tabular mb-3">
                  {c.periode}
                </div>
                <div className="text-lg font-semibold tracking-tight text-ink leading-snug">
                  {c.rolle}
                </div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 mt-1">
                  {c.sted}
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-deep/80 font-serif">
                  {c.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-deep text-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-[1fr_auto] items-center gap-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60 mb-5">
              Neste · Kontakt
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">
              Har du en sak,
              <br />
              eller trenger en hånd?
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="font-mono text-[11px] uppercase tracking-[0.18em] bg-accent text-paper px-6 py-3.5 rounded-full hover:bg-accent-deep transition-colors"
              >
                Til kontakt
              </Link>
              <Link
                href="/saker"
                className="font-mono text-[11px] uppercase tracking-[0.18em] border border-paper/30 text-paper px-6 py-3.5 rounded-full hover:border-paper transition-colors"
              >
                Se arkivet
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <CompassRose className="w-40 h-40 text-paper/70" />
          </div>
        </div>
      </section>
    </>
  );
}
