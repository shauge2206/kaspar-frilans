import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";
import { MagneticButton } from "@/components/magnetic-button";

export const metadata: Metadata = {
  title: "Om Kaspar",
  description:
    "Frilansjournalist i Bergen med mastergrad i undersøkende journalistikk og 15 år i mediebransjen.",
};

const arbeidsområder = [
  "Gravejournalistikk",
  "Reportasje fra felt",
  "Arbeidsliv",
  "Krim",
  "Bilder og tekst",
  "Menneskenære historier",
];

const publikasjoner = [
  { navn: "Kystens Næringsliv" },
  { navn: "Intrafish" },
  { navn: "Fiskeribladet" },
];

const verdier = [
  {
    nr: "01",
    tittel: "Likeverd og empati",
    body: "Møter mennesker med likeverd og empati i alle ledd av journalistikken.",
  },
  {
    nr: "02",
    tittel: "Holder ord og avtaler",
    body: "Høflighet, vennlighet og ærlighet – holder det som blir avtalt.",
  },
  {
    nr: "03",
    tittel: "Samfunnsengasjert",
    body: "Kritisk tenkning og nysgjerrighet driver det journalistiske arbeidet.",
  },
  {
    nr: "04",
    tittel: "Åpen og inkluderende",
    body: "Frihet under ansvar – å styre bedriften selv og levere kvalitetsjournalistikk.",
  },
];

export default function OmPage() {
  return (
    <>
      <section className="relative px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <Reveal as="p" delay={0.1} y={12}>
                <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-paper/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral-400" />
                  Om
                </span>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(2.4rem,4vw+1rem,5.4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                <WordReveal
                  text="Frilansjournalist"
                  delay={0.05}
                />
                <br />
                <WordReveal
                  text="i Bergen."
                  highlightWords={["Bergen."]}
                  delay={0.35}
                />
                <br />
                <WordReveal
                  text="USF Verftet, Nordnes."
                  delay={0.7}
                />
              </h1>

              <Reveal delay={1.05} className="mt-10 grid gap-6 max-w-[58ch]">
                <p className="text-[1.05rem] leading-relaxed text-ink-2">
                  <strong className="font-medium text-ink">Jeg er</strong>{" "}
                  frilansjournalist i Bergen, med kontor på USF Verftet på
                  Nordnes. Mastergrad i undersøkende journalistikk og 15 år
                  i mediebransjen.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-ink-2">
                  Jeg jobber særlig med gravejournalistikk innen arbeidsliv,
                  krim og flere felt – og leverer kritisk og undersøkende
                  journalistikk, menneskenære historier, bilder og tekst til
                  Fiskeribladet, Intrafish og Kystens Næringsliv. Alt levert
                  fra felt.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-ink-2 italic">
                  «Jeg drar ut i felt for å se stedene og møte menneskene jeg skriver om – det er det som gjør journalistikken nærmere.»
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.6} y={36} className="md:col-span-5 md:pt-6">
              <div
                className="aspect-[4/5] rounded-[var(--radius-card)] ring-1 ring-line/70 shadow-soft bg-paper-2 flex items-center justify-center overflow-hidden text-ink-2"
                aria-label="Bildeplassholder"
              >
                <svg
                  viewBox="0 0 200 250"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="om-placeholder-grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.12"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="200" height="250" fill="url(#om-placeholder-grid)" />
                  <g
                    stroke="currentColor"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                    fill="none"
                  >
                    <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                    <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                    <path d="M 10 240 L 22 240 M 10 240 L 10 228" />
                    <path d="M 190 240 L 178 240 M 190 240 L 190 228" />
                  </g>
                  <g fill="currentColor" fillOpacity="0.22">
                    <circle cx="100" cy="100" r="34" />
                    <path d="M 50 200 Q 50 150 100 150 Q 150 150 150 200 Z" />
                  </g>
                  <text
                    x="100"
                    y="222"
                    textAnchor="middle"
                    fontFamily="var(--font-display)"
                    fontSize="9"
                    letterSpacing="3"
                    fill="currentColor"
                    fillOpacity="0.7"
                  >
                    PORTRETT
                  </text>
                </svg>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-mute">
                Plassholder for portrett.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PUBLIKASJONER */}
      <section className="relative px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Publikasjoner
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.8rem,2.6vw+1rem,3rem)] font-medium leading-[1.05] tracking-tight text-ink">
                  Hvor du finner arbeidet mitt
                </h2>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {publikasjoner.map((p) => (
              <StaggerItem
                key={p.navn}
                className="group flex items-center justify-between rounded-[18px] bg-paper/70 px-6 py-5 ring-1 ring-line/70 shadow-soft backdrop-blur-sm transition-shadow duration-500 hover:shadow-lift"
              >
                <span className="font-display text-[1.25rem] font-medium tracking-tight text-ink">
                  {p.navn}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ARBEIDSOMRÅDER */}
      <section className="relative px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="mb-10 grid gap-4 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Arbeidsområder
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.8rem,2.6vw+1rem,3rem)] font-medium leading-[1.05] tracking-tight text-ink">
                  Hva jeg leverer
                </h2>
              </div>
              <p className="md:col-span-7 max-w-[60ch] text-base leading-relaxed text-ink-2">
                Jeg leverer alt fra korte enkeltoppdrag — reportasjer,
                intervjuer og research — til lengre prosjekter og perioder som
                ekstern redaksjonsressurs. Tekst og bilder leveres som én
                helhet, klar til redigering.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="flex flex-wrap gap-3">
            {arbeidsområder.map((a) => (
              <StaggerItem key={a}>
                <span className="inline-block rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-line/80 shadow-soft">
                  {a}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* VERDIER */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <h2 className="mb-12 font-display text-[clamp(1.8rem,2.6vw+1rem,3.2rem)] font-medium leading-[1.05] tracking-tight text-ink">
              Kjerneverdier
            </h2>
          </Reveal>
          <StaggerGroup className="grid gap-5 md:grid-cols-2">
            {verdier.map((v) => (
              <StaggerItem
                key={v.nr}
                className="rounded-[var(--radius-card)] bg-paper/75 p-8 ring-1 ring-line/70 shadow-soft backdrop-blur-sm"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-coral-500">
                    {v.nr}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.4rem] font-medium tracking-tight text-ink">
                      {v.tittel}
                    </h3>
                    <p className="mt-2.5 text-[0.98rem] leading-relaxed text-ink-2">
                      {v.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-[28px] bg-gradient-to-br from-paper-2 via-paper to-coral-100 p-10 ring-1 ring-line/70 shadow-soft md:flex-row md:items-center md:justify-between md:p-14">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Tilgjengelig for oppdrag
                </p>
                <p className="mt-2 max-w-[34ch] font-display text-[clamp(1.4rem,1.6vw+0.8rem,2.2rem)] font-medium leading-tight tracking-tight text-ink">
                  Enkeltoppdrag eller periode-jobbing i redaksjoner.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <MagneticButton href="/kontakt">Ta kontakt</MagneticButton>
                <Link
                  href="/saker"
                  className="link-underline px-1 py-2 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-ink"
                >
                  Se siste saker →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
