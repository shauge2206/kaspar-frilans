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
    tittel: "Enkelt-ideer",
    tekst: "Innsalg av enkelt-ideer til redaksjonen.",
  },
  {
    tittel: "Påbegynte og ferdige artikler",
    tekst: "Innsalg av påbegynte eller ferdige artikler.",
  },
  {
    tittel: "Enkeltoppdrag",
    tekst:
      "Enkeltoppdrag med bilder og tekst. Kritisk og undersøkende journalistikk og menneskenære historier.",
  },
  {
    tittel: "Periode-jobbing",
    tekst: "Periode-jobbing i redaksjoner. Betalt pr periode.",
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
              className="aspect-[4/5] w-full max-w-[280px] mb-7 border border-rule bg-bg-2 flex items-center justify-center overflow-hidden"
              aria-label="Portrettplassholder"
            >
              <svg viewBox="0 0 200 250" className="w-full h-full" aria-hidden="true">
                <defs>
                  <pattern id="om-09-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="200" height="250" fill="url(#om-09-grid)" />
                <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none">
                  <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                  <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                  <path d="M 10 240 L 22 240 M 10 240 L 10 228" />
                  <path d="M 190 240 L 178 240 M 190 240 L 190 228" />
                </g>
                <g fill="rgba(255,255,255,0.12)">
                  <circle cx="100" cy="100" r="34" />
                  <path d="M 50 200 Q 50 150 100 150 Q 150 150 150 200 Z" />
                </g>
                <text x="100" y="222" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="3" fill="rgba(255,255,255,0.45)">
                  PORTRETT
                </text>
              </svg>
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
          <div className="md:col-span-7 md:col-start-6 prose-longform max-w-none">
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

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Verdier</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Kjerneverdier.
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-3 gap-px bg-rule">
            {verdier.map((v) => (
              <Reveal key={v}>
                <div className="bg-bg-elev p-7 h-full">
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
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Frihet under ansvar.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 prose-longform max-w-none">
            <blockquote className="pullquote">
              «Jeg drar ut i felt for å se stedene og møte menneskene jeg skriver om – det er det som gjør journalistikken nærmere.»
            </blockquote>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="smallcaps text-amber mb-4">Tjenester</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-2xl">
          Salgsmodell.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-rule">
          {tjenester.map((t) => (
            <Reveal key={t.tittel}>
              <div className="bg-bg-elev p-8 h-full">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="font-serif text-2xl">{t.tittel}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                    Tilgjengelig
                  </span>
                </div>
                <p className="text-ink-soft leading-relaxed">{t.tekst}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
              className="mt-8 inline-flex font-sans text-sm bg-amber text-[#0e0e0e] px-5 py-3 rounded-full hover:brightness-110 transition"
            >
              Ta kontakt →
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="border border-rule p-7 bg-bg-elev font-sans">
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
