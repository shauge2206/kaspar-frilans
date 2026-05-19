import Link from "next/link";
import type { Metadata } from "next";
import FadeUp from "../components/FadeUp";

export const metadata: Metadata = {
  title: "Om",
  description:
    "Om Kaspar Knudsen – frilansjournalist med base på USF Verftet i Bergen. 15 år i bransjen og mastergrad i undersøkende journalistikk.",
};

const verdier = [
  "Likeverd",
  "Empati",
  "Høflighet og vennlighet",
  "Holder ord og avtaler",
  "Ærlighet",
  "Samfunns­engasjert",
  "Kritisk tenkning",
  "Nysgjerrig",
  "Åpen og inkluderende",
];

const tjenester = [
  {
    n: "01",
    t: "Innsalg av enkelt-ideer",
    b: "Ideer tilbys redaksjoner.",
  },
  {
    n: "02",
    t: "Innsalg av påbegynte eller ferdige artikler",
    b: "Saker tilbys redaksjoner.",
  },
  {
    n: "03",
    t: "Enkeltoppdrag",
    b: "Stykkpris per sak.",
  },
  {
    n: "04",
    t: "Periode-jobbing i redaksjoner",
    b: "Betalt pr periode.",
  },
];

export default function OmPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {/* Masthead */}
      <section className="grid grid-cols-12 gap-x-6 pt-16 pb-20 md:pt-28 md:pb-28">
        <div className="col-span-12 mb-10 flex items-baseline justify-between md:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 03 – Profil
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
            Sist oppdatert · 04.2026
          </span>
        </div>

        <h1 className="col-span-12 font-serif text-5xl leading-[1.02] tracking-[-0.02em] md:col-span-11 md:text-[112px]">
          Om
        </h1>

        <p className="col-span-12 mt-12 max-w-3xl font-serif text-xl leading-snug md:col-span-7 md:col-start-6 md:mt-20 md:text-2xl">
          Jeg er frilansjournalist i Bergen, med kontor på USF Verftet på
          Nordnes. Mastergrad i undersøkende journalistikk og 15 år i
          mediebransjen – jeg leverer kvalitetsjournalistikk til
          nisjepublikasjoner som Fiskeribladet, Intrafish og Kystens
          Næringsliv.
        </p>
      </section>

      <hr className="rule-strong" />

      {/* Bio */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Biografi
          </span>
          <div
            className="mt-6 aspect-[4/5] w-full max-w-[260px] border border-hairline bg-paper/40 flex items-center justify-center overflow-hidden"
            aria-label="Portrettplassholder"
          >
            <svg viewBox="0 0 200 250" className="w-full h-full" aria-hidden="true">
              <defs>
                <pattern id="om-08-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="200" height="250" fill="url(#om-08-grid)" />
              <g stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none">
                <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                <path d="M 10 240 L 22 240 M 10 240 L 10 228" />
                <path d="M 190 240 L 178 240 M 190 240 L 190 228" />
              </g>
              <g fill="rgba(0,0,0,0.18)">
                <circle cx="100" cy="100" r="34" />
                <path d="M 50 200 Q 50 150 100 150 Q 150 150 150 200 Z" />
              </g>
              <text x="100" y="222" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="3" fill="rgba(0,0,0,0.55)">
                PORTRETT
              </text>
            </svg>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <FadeUp>
            <div className="space-y-6 font-serif text-xl leading-[1.55] tracking-[-0.005em] md:text-[22px]">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.85]">
                Jeg er frilansjournalist i Bergen, med kontor på USF Verftet
                på Nordnes.
              </p>
              <p>
                Mastergrad i undersøkende journalistikk og 15 år i
                mediebransjen – særlig gravejournalistikk innen arbeidsliv,
                krim og flere felt. Jeg drar ut i felt.
              </p>
              <p>
                Leverer kvalitetsjournalistikk til nisjepublikasjoner som
                Fiskeribladet, Intrafish og Kystens Næringsliv.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <hr className="rule" />

      {/* Vision quote */}
      <section className="grid grid-cols-12 gap-x-6 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Filosofi
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeUp>
            <blockquote className="font-serif text-3xl leading-[1.15] tracking-[-0.015em] md:text-5xl">
              «Jeg drar ut i felt for å se stedene og møte menneskene jeg
              skriver om –{" "}
              <span className="text-muted">
                det er det som gjør journalistikken nærmere.
              </span>
              »
            </blockquote>
          </FadeUp>
        </div>
      </section>

      <hr className="rule-strong" />

      {/* Values */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 02 – Kjerneverdier
          </span>
        </div>
        <ul className="col-span-12 grid grid-cols-2 gap-y-6 md:col-span-9 md:grid-cols-4">
          {verdier.map((v, i) => (
            <FadeUp as="li" key={v} delay={i * 40}>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
                {(i + 1).toString().padStart(2, "0")}
              </div>
              <div
                className="mt-2 font-serif text-2xl tracking-tight md:text-3xl"
                dangerouslySetInnerHTML={{ __html: v }}
              />
            </FadeUp>
          ))}
        </ul>
      </section>

      <hr className="rule-strong" />

      {/* Services */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 03 – Tjenester
          </span>
        </div>
        <ul className="col-span-12 divide-y divide-hairline border-y border-foreground md:col-span-9">
          {tjenester.map((t, i) => (
            <li key={t.n}>
              <FadeUp as="div" delay={i * 60}>
                <div className="grid grid-cols-12 items-baseline gap-x-6 py-8">
                  <div className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted tnum">
                    {t.n}
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-serif text-2xl tracking-tight md:text-3xl">
                      {t.t}
                    </h3>
                  </div>
                  <p className="col-span-12 mt-3 font-serif text-base leading-relaxed text-muted md:col-span-6 md:mt-0 md:text-lg">
                    {t.b}
                  </p>
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>

      <hr className="rule" />

      {/* Office / USF Verftet */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 04 – Kontor
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeUp>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] md:text-6xl">
              USF Verftet, Nordnes.
            </h2>
            <p className="mt-8 max-w-3xl font-serif text-xl leading-snug text-muted md:text-2xl">
              Kontor i Bergen, på USF Verftet, Nordnes.
            </p>

            <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-6 border-t border-foreground pt-6">
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Adresse
                </div>
                <p className="mt-3 font-serif text-base leading-relaxed">
                  USF Verftet
                  <br />
                  Georgernes verft 12
                  <br />
                  5011 Bergen
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Form
                </div>
                <p className="mt-3 font-serif text-base leading-relaxed">
                  Enkeltpersonforetak
                  <br />
                  April 2026 – mars 2027
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Ta kontakt
                </div>
                <p className="mt-3 font-serif text-base leading-relaxed">
                  <Link href="/kontakt" className="link-rule">
                    Send melding →
                  </Link>
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
