import type { Metadata } from "next";
import Link from "next/link";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";
import { MagneticButton } from "@/components/magnetic-button";

export const metadata: Metadata = {
  title: "Om Kaspar Knudsen – frilansjournalist i Bergen",
  description:
    "Mastergrad i undersøkende journalistikk, 15 år i mediebransjen og kontor på USF Verftet. Slik jobber Kaspar Knudsen.",
};

const verdier = [
  "Likeverd",
  "Empati",
  "Høflighet og vennlighet",
  "Holder ord og avtaler",
  "Ærlighet",
  "Samfunnsengasjert",
  "Kritisk tenkning",
  "Nysgjerrig",
  "Åpen og inkluderende",
];

const metode = [
  {
    nr: 1,
    tittel: "Idé og research",
    body: "Saken starter med en konkret hypotese. Jeg gjør innledende research i åpne kilder, offentlige registre og tidligere publikasjoner før jeg tar kontakt med kilder.",
  },
  {
    nr: 2,
    tittel: "Kildearbeid",
    body: "Flere uavhengige kilder, full kildevernrutine etter Vær Varsom-plakaten. Sensitive kontakter går via Signal eller kryptert kanal. Aldri ut over én historie.",
  },
  {
    nr: 3,
    tittel: "Feltarbeid og bilder",
    body: "Når det lar seg gjøre, reiser jeg ut. Bilder tas i samme besøk så tekst og foto henger sammen. Reisekost avtales separat.",
  },
  {
    nr: 4,
    tittel: "Levering",
    body: "Ferdig sak leveres som én helhet, klar til redigering. Inkluderer bildetekster, kreditering og noter om kilder dersom redaksjonen trenger det.",
  },
];

const tjenester = [
  {
    tittel: "Undersøkende reportasje",
    body: "Gravesaker innen arbeidsliv, krim og samfunn – lange løp der research og kildekontakt avgjør utfallet.",
  },
  {
    tittel: "Reportasje fra felt",
    body: "Drar ut til stedet, ser miljøet og møter menneskene. Journalistikk som kommer nærmere virkeligheten.",
  },
  {
    tittel: "Bilder og tekst",
    body: "Leverer bilder og tekst som én helhet – kritisk og undersøkende journalistikk, menneskenære historier.",
  },
  {
    tittel: "Ekstern redaksjonsressurs",
    body: "Tilgjengelig i kortere eller lengre perioder når redaksjonen trenger ekstra hender.",
  },
];

export default function OmPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <Reveal as="p" delay={0.1} y={12}>
                <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute">
                  <span className="text-coral-500">/</span> Bio
                </span>
              </Reveal>
              <h1 className="mt-7 max-w-[18ch] font-display text-[clamp(2.4rem,4vw+1rem,5.4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                <WordReveal text="Om Kaspar Knudsen" delay={0.05} />
                <br />
                <WordReveal
                  text="Frilansjournalist i Bergen."
                  delay={0.4}
                />
              </h1>
              <Reveal delay={1.0} className="mt-10 grid max-w-[58ch] gap-4">
                <p className="text-[1.05rem] leading-relaxed text-ink-2">
                  Jeg er frilansjournalist i Bergen, med kontor på USF Verftet
                  på Nordnes. Mastergrad i undersøkende journalistikk og 15 år i
                  mediebransjen.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-ink-2">
                  Jeg leverer kvalitetsjournalistikk til nisjepublikasjoner som
                  Fiskeribladet, Intrafish og Kystens Næringsliv – særlig
                  gravejournalistikk innen arbeidsliv, krim og flere felt. Drar
                  ut i felt.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-ink-2">
                  Jeg driver eget enkeltpersonforetak, etablert april 2026, med
                  drift i perioden april 2026 til mars 2027.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.6} y={36} className="md:col-span-5 md:pt-6">
              <div
                className="mx-auto flex aspect-[4/5] w-full max-w-[320px] items-center justify-center overflow-hidden rounded-[var(--radius-card)] bg-paper-2 ring-1 ring-line/70 shadow-soft"
                aria-label="Portrettplassholder"
              >
                <svg
                  viewBox="0 0 200 250"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="om-portrait-grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="rgba(40,30,20,0.10)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="200" height="250" fill="url(#om-portrait-grid)" />
                  <g stroke="rgba(40,30,20,0.35)" strokeWidth="1" fill="none">
                    <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                    <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                    <path d="M 10 240 L 22 240 M 10 240 L 10 228" />
                    <path d="M 190 240 L 178 240 M 190 240 L 190 228" />
                  </g>
                  <g fill="rgba(40,30,20,0.22)">
                    <circle cx="100" cy="100" r="34" />
                    <path d="M 50 200 Q 50 150 100 150 Q 150 150 150 200 Z" />
                  </g>
                  <text
                    x="100"
                    y="222"
                    textAnchor="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize="9"
                    letterSpacing="3"
                    fill="rgba(40,30,20,0.6)"
                  >
                    PORTRETT
                  </text>
                </svg>
              </div>

              {/* Tilgjengelighet */}
              <div className="mt-6 rounded-[var(--radius-card)] bg-paper/70 px-5 py-4 ring-1 ring-line/70 shadow-soft backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span aria-hidden className="relative inline-flex h-2 w-2">
                    <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-coral-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-coral-500" />
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                    Tilgjengelig fra
                  </span>
                  <span className="font-display text-base font-medium tracking-tight text-ink">
                    våren 2026
                  </span>
                </div>
              </div>

              {/* Kort fortalt */}
              <div className="mt-5 rounded-[var(--radius-card)] bg-paper/70 px-5 py-5 ring-1 ring-line/70 shadow-soft backdrop-blur-sm">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Kort fortalt
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink-2">
                  <li>15+ år i mediebransjen i Bergen</li>
                  <li>Mastergrad i undersøkende journalistikk</li>
                  <li>Kontor: USF Verftet, Nordnes</li>
                  <li>
                    Leverer til Fiskeribladet, Intrafish og Kystens Næringsliv
                  </li>
                  <li>Enkeltpersonforetak fra april 2026</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PUBLIKASJONER */}
      <section className="relative px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal as="div" className="md:col-span-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                Publikasjoner
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3vw+1rem,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Levert til.
              </h2>
            </Reveal>
            <div className="md:col-span-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                Nåværende
              </p>
              <StaggerGroup className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Fiskeribladet", "Intrafish", "Kystens Næringsliv"].map((p) => (
                  <StaggerItem
                    key={p}
                    className="flex items-center justify-center rounded-[18px] bg-paper/70 px-5 py-7 text-center font-display text-[1.2rem] font-medium leading-snug tracking-tight text-ink ring-1 ring-line/70 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-lift"
                  >
                    {p}
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <p className="mt-5 text-sm italic text-mute">
                Liste oppdateres etter avtale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAK SAKENE */}
      <section className="relative px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal as="div" className="md:col-span-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                Bak sakene
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3vw+1rem,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Slik jobber jeg.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-2">
                En kort innføring i hvordan en gravesak typisk legges opp.
                Mer detaljert metodikk avtales for hvert enkelt prosjekt.
              </p>
            </Reveal>
            <ol className="md:col-span-7">
              {metode.map((m, i) => (
                <Reveal key={m.nr} delay={i * 0.08}>
                  <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-line/70 py-8 first:border-t-0 first:pt-0 md:py-10">
                    <span className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-coral-500 md:col-span-1">
                      {m.nr}
                    </span>
                    <h3 className="col-span-10 font-display text-2xl font-medium leading-tight tracking-tight text-ink md:col-span-4">
                      {m.tittel}
                    </h3>
                    <p className="col-span-12 leading-relaxed text-ink-2 md:col-span-7">
                      {m.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* VERDIER */}
      <section className="relative px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal as="div" className="md:col-span-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                Verdier
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3vw+1rem,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Kjerneverdier.
              </h2>
            </Reveal>
            <StaggerGroup className="grid grid-cols-2 gap-3 md:col-span-7 md:grid-cols-3">
              {verdier.map((v) => (
                <StaggerItem
                  key={v}
                  className="rounded-[18px] bg-paper/70 px-5 py-6 ring-1 ring-line/70 shadow-soft backdrop-blur-sm"
                >
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-coral-500">
                    {v}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* VISJON */}
      <section className="relative px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal as="div" className="md:col-span-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                Visjon
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3vw+1rem,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Frihet under ansvar.
              </h2>
            </Reveal>
            <Reveal delay={0.1} as="div" className="md:col-span-7">
              <blockquote className="font-display text-[clamp(1.4rem,1.8vw+1rem,2.2rem)] font-light italic leading-[1.35] text-ink-2">
                «Jeg drar ut i felt for å se stedene og møte menneskene jeg
                skriver om – det er det som gjør journalistikken{" "}
                <span className="text-coral-500">nærmere.»</span>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ERFARING / HVA JEG LEVERER */}
      <section className="relative px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
              Erfaring
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,3vw+1rem,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
              Hva jeg leverer.
            </h2>
          </Reveal>
          <ol className="mt-12">
            {tjenester.map((t, i) => (
              <Reveal key={t.tittel} delay={i * 0.08}>
                <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-line/70 py-8 first:border-t-0 first:pt-0 md:py-10">
                  <span
                    aria-hidden
                    className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-coral-500 md:col-span-1"
                  >
                    {i + 1}
                  </span>
                  <h3 className="col-span-10 font-display text-2xl font-medium leading-tight tracking-tight text-ink md:col-span-5">
                    {t.tittel}
                  </h3>
                  <p className="col-span-12 leading-relaxed text-ink-2 md:col-span-6">
                    {t.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* KONTORET */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                Kontoret
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw+1rem,3rem)] font-medium leading-tight tracking-tight text-ink">
                USF Verftet, Nordnes.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
                Kontoret ligger på USF Verftet på Nordnes i Bergen. Foretaket er
                et enkeltpersonforetak etablert april 2026.
              </p>
              <div className="mt-8">
                <MagneticButton href="/kontakt">
                  Ta kontakt
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </MagneticButton>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-[var(--radius-card)] bg-paper/70 p-6 ring-1 ring-line/70 shadow-soft backdrop-blur-sm">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Adresse
                </p>
                <p className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-ink">
                  USF Verftet
                  <br />
                  Georgernes Verft 12
                  <br />
                  5011 Bergen
                </p>
                <hr className="my-6 border-line/70" />
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Form
                </p>
                <p className="mt-2 leading-relaxed text-ink-2">
                  Enkeltpersonforetak
                  <br />
                  April 2026–mars 2027
                </p>
                <hr className="my-6 border-line/70" />
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Annet
                </p>
                <p className="mt-2 leading-relaxed text-ink-2">
                  <Link
                    href="/presse"
                    className="link-underline text-ink"
                  >
                    Pressekit og bio
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
