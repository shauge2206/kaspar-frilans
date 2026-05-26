import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata = {
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

const tjenester = [
  {
    tittel: "Undersøkende reportasje",
    tekst:
      "Gravesaker innen arbeidsliv, krim og samfunn – lange løp der research og kildekontakt avgjør utfallet.",
  },
  {
    tittel: "Reportasje fra felt",
    tekst:
      "Drar ut til stedet, ser miljøet og møter menneskene. Journalistikk som kommer nærmere virkeligheten.",
  },
  {
    tittel: "Bilder og tekst",
    tekst:
      "Leverer bilder og tekst som én helhet – kritisk og undersøkende journalistikk, menneskenære historier.",
  },
  {
    tittel: "Ekstern redaksjonsressurs",
    tekst:
      "Tilgjengelig i kortere eller lengre perioder når redaksjonen trenger ekstra hender.",
  },
];

export default function OmPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="smallcaps text-amber mb-5">Bio</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05] tracking-tight max-w-4xl">
          Om Kaspar Knudsen
          <span className="block italic text-ink-soft">
            Frilansjournalist i Bergen.
          </span>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div
              className="relative aspect-[4/5] w-full max-w-[280px] mb-7 border border-rule bg-bg-elev flex items-center justify-center overflow-hidden text-ink-mute"
              aria-label="Portrettplassholder"
            >
              <svg
                viewBox="0 0 200 250"
                className="w-full h-full"
                aria-hidden="true"
              >
                {/* Subtle inner grid using currentColor so it reads on light bg */}
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
                      stroke="currentColor"
                      strokeOpacity="0.10"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="200" height="250" fill="url(#om-portrait-grid)" />

                {/* Camera-frame corner brackets */}
                <g
                  stroke="currentColor"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <path d="M 12 12 L 30 12 M 12 12 L 12 30" />
                  <path d="M 188 12 L 170 12 M 188 12 L 188 30" />
                  <path d="M 12 238 L 30 238 M 12 238 L 12 220" />
                  <path d="M 188 238 L 170 238 M 188 238 L 188 220" />
                </g>

                {/* Person silhouette, head and shoulders, deliberately readable */}
                <g fill="currentColor" fillOpacity="0.32">
                  <circle cx="100" cy="92" r="32" />
                  <path d="M 46 198 Q 46 138 100 138 Q 154 138 154 198 Z" />
                </g>

                {/* Two-line label at the bottom */}
                <text
                  x="100"
                  y="220"
                  textAnchor="middle"
                  fontFamily="ui-monospace, SFMono-Regular, monospace"
                  fontSize="11"
                  fontWeight="700"
                  letterSpacing="2.4"
                  fill="currentColor"
                  fillOpacity="0.85"
                >
                  PORTRETT
                </text>
                <text
                  x="100"
                  y="234"
                  textAnchor="middle"
                  fontFamily="ui-monospace, SFMono-Regular, monospace"
                  fontSize="7.5"
                  letterSpacing="2.4"
                  fill="currentColor"
                  fillOpacity="0.65"
                >
                  PLACEHOLDER
                </text>
              </svg>
            </div>

            {/* TILGJENGELIGHET, status line under the portrait. Pulsing
                amber dot signals an active "available" state. */}
            <div className="mb-7 border-t border-rule pt-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  aria-hidden
                  className="relative inline-flex w-2 h-2"
                >
                  <span className="absolute inset-0 inline-flex rounded-full bg-amber opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-amber" />
                </span>
                <span className="smallcaps text-amber text-[0.7rem]">Tilgjengelig fra</span>
                <span className="font-serif text-base text-ink leading-snug">
                  våren 2026
                </span>
              </div>
            </div>

            <p className="smallcaps text-ink-mute mb-3">Kort fortalt</p>
            <ul className="font-sans text-sm space-y-3 text-ink-soft">
              <li>15+ år i mediebransjen i Bergen</li>
              <li>Mastergrad i undersøkende journalistikk</li>
              <li>Kontor: USF Verftet, Nordnes</li>
              <li>Leverer til Fiskeribladet, Intrafish og Kystens Næringsliv</li>
              <li>Enkeltpersonforetak fra april 2026</li>
            </ul>
          </div>
          <div className="md:col-span-8 md:col-start-5 prose-longform max-w-none">
            <Reveal>
              <p>
                Jeg er frilansjournalist i Bergen, med kontor på USF Verftet
                på Nordnes. Mastergrad i undersøkende journalistikk og 15 år i
                mediebransjen.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Jeg leverer kvalitetsjournalistikk til nisjepublikasjoner som
                Fiskeribladet, Intrafish og Kystens Næringsliv – særlig
                gravejournalistikk innen arbeidsliv, krim og flere felt. Drar
                ut i felt.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Jeg driver eget enkeltpersonforetak, etablert april 2026, med
                drift i perioden april 2026 til mars 2027.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PUBLIKASJONER (extended). Main outlets up top, broader career
          credits beneath. Fill the broader list as Kaspar confirms which
          older outlets to surface. */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="border-t border-rule pt-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Publikasjoner</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Levert til.
            </h2>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="smallcaps text-ink-mute mb-4">Nåværende</p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Fiskeribladet", "Intrafish", "Kystens Næringsliv"].map((p) => (
                <li
                  key={p}
                  className="tile-hover-amber border border-rule bg-bg-elev px-5 py-6 font-serif text-xl leading-snug text-center"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-sans text-sm italic text-ink-mute">
              Liste oppdateres etter avtale.
            </p>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      {/* BAK SAKENE. Methodology section. Addresses the investigative-editor
          persona-need for process insight. One annotated case study; expand
          with more sak entries as material is ready. */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Bak sakene</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Slik jobber jeg.
            </h2>
            <p className="mt-5 max-w-md text-ink-soft leading-relaxed">
              En kort innføring i hvordan en gravesak typisk legges opp.
              Mer detaljert metodikk avtales for hvert enkelt prosjekt.
            </p>
          </div>
          <ol className="md:col-span-8 md:col-start-5">
            <Reveal>
              <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-rule py-8 md:py-10">
                <span className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-amber md:col-span-1">
                  1
                </span>
                <h3 className="col-span-10 font-serif text-2xl leading-tight md:col-span-4">
                  Idé og research
                </h3>
                <p className="col-span-12 text-ink-soft leading-relaxed md:col-span-7">
                  Saken starter med en konkret hypotese. Jeg gjør innledende
                  research i åpne kilder, offentlige registre og tidligere
                  publikasjoner før jeg tar kontakt med kilder.
                </p>
              </li>
            </Reveal>
            <Reveal delay={80}>
              <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-rule py-8 md:py-10">
                <span className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-amber md:col-span-1">
                  2
                </span>
                <h3 className="col-span-10 font-serif text-2xl leading-tight md:col-span-4">
                  Kildearbeid
                </h3>
                <p className="col-span-12 text-ink-soft leading-relaxed md:col-span-7">
                  Flere uavhengige kilder, full kildevernrutine etter Vær
                  Varsom-plakaten. Sensitive kontakter går via Signal eller
                  kryptert kanal. Aldri ut over én historie.
                </p>
              </li>
            </Reveal>
            <Reveal delay={160}>
              <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-rule py-8 md:py-10">
                <span className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-amber md:col-span-1">
                  3
                </span>
                <h3 className="col-span-10 font-serif text-2xl leading-tight md:col-span-4">
                  Feltarbeid og bilder
                </h3>
                <p className="col-span-12 text-ink-soft leading-relaxed md:col-span-7">
                  Når det lar seg gjøre, reiser jeg ut. Bilder tas i samme
                  besøk så tekst og foto henger sammen. Reisekost avtales
                  separat.
                </p>
              </li>
            </Reveal>
            <Reveal delay={240}>
              <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-rule py-8 md:py-10">
                <span className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-amber md:col-span-1">
                  4
                </span>
                <h3 className="col-span-10 font-serif text-2xl leading-tight md:col-span-4">
                  Levering
                </h3>
                <p className="col-span-12 text-ink-soft leading-relaxed md:col-span-7">
                  Ferdig sak leveres som én helhet, klar til redigering.
                  Inkluderer bildetekster, kreditering og noter om kilder
                  dersom redaksjonen trenger det.
                </p>
              </li>
            </Reveal>
          </ol>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Verdier</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Kjerneverdier.
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-3 gap-px bg-rule">
            {verdier.map((v) => (
              <Reveal key={v}>
                <div className="tile-hover-amber bg-bg-elev p-7 h-full cursor-default">
                  <p className="smallcaps text-amber">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Visjon</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Frihet under ansvar.
            </h2>
          </div>
          <div className="md:col-span-8 md:col-start-5 prose-longform max-w-none">
            <blockquote className="pullquote">
              «Jeg drar ut i felt for å se stedene og møte menneskene jeg skriver om – det er det som gjør journalistikken nærmere.»
            </blockquote>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="smallcaps text-amber mb-4">Erfaring</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
          Hva jeg leverer.
        </h2>
        <ol className="mt-12">
          {tjenester.map((t, i) => (
            <Reveal key={t.tittel} delay={i * 80}>
              <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-rule py-8 first:border-t-0 first:pt-0 md:py-10">
                <span
                  aria-hidden
                  className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-amber md:col-span-1"
                >
                  {i + 1}
                </span>
                <h3 className="col-span-10 font-serif text-2xl leading-tight md:col-span-5">
                  {t.tittel}
                </h3>
                <p className="col-span-12 text-ink-soft leading-relaxed md:col-span-6">
                  {t.tekst}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="smallcaps text-amber mb-4">Kontoret</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              USF Verftet, Nordnes.
            </h2>
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-2xl">
              Kontoret ligger på USF Verftet på Nordnes i Bergen. Foretaket er
              et enkeltpersonforetak etablert april 2026.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex font-sans text-sm bg-amber text-bg px-5 py-3.5 rounded-full hover:brightness-110 transition"
            >
              Ta kontakt →
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="tile-hover-amber border border-rule p-7 bg-bg-elev font-sans cursor-default">
              <p className="smallcaps text-ink-mute mb-3">Adresse</p>
              <p className="font-serif text-xl leading-snug">
                USF Verftet
                <br />
                Georgernes Verft 12
                <br />
                5011 Bergen
              </p>
              <hr className="my-6 border-rule" />
              <p className="smallcaps text-ink-mute mb-3">Form</p>
              <p className="text-ink-soft leading-relaxed">
                Enkeltpersonforetak
                <br />
                April 2026–mars 2027
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
