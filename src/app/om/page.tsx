import type { Metadata } from "next";
import { FadeIn, RevealGroup, RevealItem } from "@/components/Reveal";
import { TransitionLink } from "@/components/TransitionLink";

export const metadata: Metadata = {
  title: "Om",
  description:
    "Om Kaspar Knudsen – frilansjournalist i Bergen. Mastergrad i undersøkende journalistikk og 15 år i mediebransjen.",
};

const FAKTA = [
  {
    year: "Apr 2026 –",
    label: "Kaspar Knudsen",
    place: "Enkeltpersonforetak",
    body: "Frilansvirksomhet etablert april 2026. Kontor på USF Verftet, Nordnes, Bergen.",
  },
  {
    year: "15+ år",
    label: "Mediebransjen i Bergen",
    place: "Erfaring",
    body: "Bakgrunn fra 15+ år i mediebransjen i Bergen før oppstart av egen virksomhet.",
  },
  {
    year: "Master",
    label: "Undersøkende journalistikk",
    place: "Utdanning",
    body: "Mastergrad i undersøkende journalistikk. Gravejournalistikk innenfor arbeidsliv, krim og flere områder.",
  },
  {
    year: "Felt",
    label: "Bilder og tekst",
    place: "Metode",
    body: "Drar ut i felt. Leverer bilder og tekst, gjenbruk, kritisk og undersøkende journalistikk, menneskenære historier.",
  },
];

const FOKUS = [
  {
    n: "01",
    title: "Gode ideer",
    body: "Innsalg av enkelt-ideer og påbegynte eller ferdige artikler.",
  },
  {
    n: "02",
    title: "Kvalitetsjournalistikk",
    body: "Kritisk og undersøkende journalistikk levert fra felt – bilder og tekst, med rom for gjenbruk.",
  },
  {
    n: "03",
    title: "Fleksibilitet",
    body: "Enkeltoppdrag, periodejobbing i redaksjoner, stykkpris per sak eller betalt pr periode.",
  },
];

export default function OmPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-[1240px] px-5 pt-12 sm:px-8 sm:pt-20">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
          <span aria-hidden className="inline-block h-px w-8 bg-ink/40" />
          <span>Profil</span>
          <span aria-hidden className="dot-divider" />
          <span className="tabular">Etabl. april 2026</span>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-8">
            <RevealGroup className="space-y-7">
              <RevealItem
                as="h1"
                className="text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.03em]"
              >
                Jeg er frilansjournalist i Bergen,
                med kontor på USF Verftet på Nordnes.
              </RevealItem>
              <RevealItem
                as="p"
                className="max-w-[58ch] text-[17px] leading-[1.6] text-ink/75"
              >
                Mastergrad i undersøkende journalistikk og 15 år i
                mediebransjen. Jeg leverer kvalitetsjournalistikk til
                nisjepublikasjoner som Fiskeribladet, Intrafish og Kystens
                Næringsliv.
              </RevealItem>
              <RevealItem
                as="p"
                className="max-w-[58ch] text-[15px] leading-[1.65] text-ink/65"
              >
                Jeg jobber særlig med gravejournalistikk innen arbeidsliv,
                krim og flere felt. Drar ut i felt og leverer både bilder og
                tekst – kritisk og undersøkende journalistikk og menneskenære
                historier.
              </RevealItem>
            </RevealGroup>
          </div>

          <div className="col-span-12 sm:col-span-4">
            <FadeIn delay={0.2}>
              <div
                className="aspect-[3/4] w-full overflow-hidden border border-hairline bg-ink/5 flex items-center justify-center"
                aria-label="Bildeplassholder"
              >
                <svg
                  viewBox="0 0 200 270"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="om-07-placeholder-grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="rgba(0,0,0,0.08)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="200" height="270" fill="url(#om-07-placeholder-grid)" />
                  <g stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none">
                    <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                    <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                    <path d="M 10 260 L 22 260 M 10 260 L 10 248" />
                    <path d="M 190 260 L 178 260 M 190 260 L 190 248" />
                  </g>
                  <g fill="rgba(0,0,0,0.18)">
                    <circle cx="100" cy="110" r="34" />
                    <path d="M 50 215 Q 50 160 100 160 Q 150 160 150 215 Z" />
                  </g>
                  <text
                    x="100"
                    y="242"
                    textAnchor="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize="9"
                    letterSpacing="3"
                    fill="rgba(0,0,0,0.55)"
                  >
                    PORTRETT
                  </text>
                </svg>
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                Plassholder · portrett kommer
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* fokus */}
      <section className="mx-auto mt-28 max-w-[1240px] px-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Verdiløfte
          </h2>
          <span className="font-mono text-[11px] tabular uppercase tracking-[0.16em] text-ink/45">
            03
          </span>
        </div>
        <div className="mt-2 grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {FOKUS.map((f) => (
            <FadeIn key={f.n} className="p-6 sm:p-8">
              <p className="font-mono text-[11px] tabular uppercase tracking-[0.18em] text-ink/45">
                {f.n}
              </p>
              <h3 className="mt-3 text-[22px] font-medium tracking-[-0.012em]">
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink/70">
                {f.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* fakta */}
      <section className="mx-auto mt-28 max-w-[1240px] px-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Fakta
          </h2>
          <span className="font-mono text-[11px] tabular uppercase tracking-[0.16em] text-ink/45">
            04
          </span>
        </div>

        <ol className="mt-2 divide-y divide-hairline">
          {FAKTA.map((t) => (
            <li key={t.year} className="grid grid-cols-12 items-baseline gap-4 py-7">
              <span className="col-span-12 font-mono text-[11px] tabular uppercase tracking-[0.16em] text-ink/55 sm:col-span-3">
                {t.year}
              </span>
              <div className="col-span-12 sm:col-span-9">
                <p className="flex items-baseline gap-3 text-[18px] font-medium tracking-[-0.01em]">
                  {t.label}
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
                    {t.place}
                  </span>
                </p>
                <p className="mt-2 max-w-[60ch] text-[14px] leading-[1.65] text-ink/70">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* values */}
      <section className="mx-auto mt-28 max-w-[1240px] px-5 sm:px-8">
        <FadeIn>
          <div className="grid grid-cols-12 gap-6 border-y border-hairline py-16">
            <div className="col-span-12 sm:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                Visjon
              </p>
            </div>
            <div className="col-span-12 sm:col-span-9">
              <p className="text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.25] tracking-[-0.012em]">
                «Jeg drar ut i felt for å se stedene og møte menneskene jeg
                skriver om –{" "}
                <span className="text-ink/45">
                  det er det som gjør journalistikken nærmere.
                </span>
                »
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-24 max-w-[1240px] px-5 pb-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium leading-[1.1] tracking-[-0.015em]">
            Vil du jobbe sammen?
          </h2>
          <TransitionLink
            href="/kontakt"
            className="focus-ring inline-flex h-11 items-center bg-ink px-5 text-[13px] font-medium tracking-wide text-paper"
          >
            Til kontakt
            <span
              aria-hidden
              className="ml-3 inline-block h-1 w-1 translate-y-[0.5px] bg-paper"
            />
          </TransitionLink>
        </div>
      </section>
    </div>
  );
}
