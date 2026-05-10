import type { Metadata } from "next";
import Link from "next/link";
import { SplitText } from "@/components/split-text";

export const metadata: Metadata = {
  title: "Om Kaspar",
  description:
    "Om Kaspar — frilansjournalist i Bergen med master i undersøkende journalistikk. Kontor på USF Verftet, Nordnes.",
};

const verdier = [
  { ord: "Likeverd" },
  { ord: "Empati" },
  { ord: "Høflighet og vennlighet" },
  { ord: "Holder ord og avtaler" },
  { ord: "Ærlighet" },
  { ord: "Samfunnsengasjert" },
  { ord: "Kritisk tenkning" },
  { ord: "Nysgjerrig" },
  { ord: "Åpen og inkluderende" },
];

const erfaring = [
  {
    tittel: "Gravejournalistikk",
    beskrivelse:
      "Undersøkende journalistikk innenfor arbeidsliv, krim og flere områder.",
  },
  {
    tittel: "Reportasje fra felt",
    beskrivelse:
      "Drar ut for å se stedene og møte menneskene jeg skriver om.",
  },
  {
    tittel: "Bilder og tekst",
    beskrivelse:
      "Leverer både bilder og tekst som del av oppdragene. Tilgang til gjenbruk av artikler.",
  },
  {
    tittel: "Bergen-presse",
    beskrivelse: "15 år i mediebransjen i Bergen.",
  },
];

export default function OmPage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10 pt-6 pb-16">
      <header className="grid gap-10 md:grid-cols-12 pb-10">
        <div className="md:col-span-8">
          <p className="smallcaps text-accent">Profil · Om journalisten</p>
          <SplitText
            as="h1"
            text="Kaspar Knudsen"
            className="font-serif font-black text-[2.4rem] sm:text-[3.4rem] md:text-[4.6rem] leading-[0.97] tracking-[-0.03em] mt-4 block"
            step={50}
          />
          <p
            className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-soft fade-up"
            style={{ animationDelay: "1100ms" }}
          >
            Kaspar Knudsen er frilansjournalist i Bergen med kontor på USF
            Verftet, Nordnes. Mastergrad i undersøkende journalistikk og 15
            år i mediebransjen i Bergen. Driver eget enkeltpersonforetak fra
            april 2026.
          </p>
        </div>
        <aside className="md:col-span-4 md:col-rule md:pl-8 fade-up" style={{ animationDelay: "900ms" }}>
          <div className="rule-bar mb-4" />
          <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-sm">
            <dt className="smallcaps text-ink-mute">Kontor</dt>
            <dd className="text-ink">USF Verftet, Nordnes</dd>
            <dt className="smallcaps text-ink-mute">Utdanning</dt>
            <dd className="text-ink">Master i undersøkende journalistikk</dd>
            <dt className="smallcaps text-ink-mute">Erfaring</dt>
            <dd className="text-ink">15 år i mediebransjen i Bergen</dd>
            <dt className="smallcaps text-ink-mute">Foretak</dt>
            <dd className="text-ink">Enkeltpersonforetak, april 2026</dd>
          </dl>
        </aside>
      </header>

      <div className="rule-thick mb-12" />

      {/* Bio + Spesialitet */}
      <section className="grid gap-10 md:grid-cols-12 mb-16">
        <div className="md:col-span-7">
          <p className="smallcaps text-accent mb-3">Bakgrunn</p>
          <h2 className="font-serif font-bold text-3xl md:text-[2.4rem] leading-[1.1] tracking-[-0.02em] mb-6">
            Frilansjournalist i Bergen
          </h2>
          <p className="font-serif text-[1.1rem] md:text-[1.18rem] leading-[1.7] text-ink dropcap">
            Kaspar Knudsen er frilansjournalist i Bergen med kontor på USF
            Verftet, Nordnes. Han har mastergrad i undersøkende journalistikk
            og 15 år i mediebransjen i Bergen. Unik kompetanse innenfor
            gravejournalistikk knyttet til arbeidsliv, krim og flere
            områder, og evne til å komme tett på og fortelle sterke
            historier — han drar ut i felt.
          </p>
          <p className="mt-6 font-serif text-[1.1rem] md:text-[1.18rem] leading-[1.7] text-ink">
            Produktet er bilder og tekst, tilgang til gjenbruk av artikler,
            kritisk og undersøkende journalistikk og menneskenære historier.
            Første kunder er Kystens Næringsliv, Intrafish og Fiskeribladet,
            med målgruppe lesere av nisjeavisene Fiskeribladet og Intrafish.
          </p>
        </div>

        <aside className="md:col-span-5 md:col-rule md:pl-10">
          <p className="smallcaps text-accent mb-3">Spesialitet</p>
          <ul className="font-serif text-2xl md:text-3xl leading-tight space-y-3 mt-2">
            <li>Arbeidsliv</li>
            <li>Krim</li>
            <li>Flere områder</li>
          </ul>
          <div className="rule-thin mt-8 pt-5">
            <p className="dateline">Første kunder</p>
            <p className="mt-2 text-ink-soft leading-relaxed">
              Kystens Næringsliv · Intrafish · Fiskeribladet.
            </p>
          </div>
        </aside>
      </section>

      <div className="rule-thick mb-12" />

      {/* Verdier */}
      <section className="mb-16">
        <div className="grid gap-10 md:grid-cols-12 items-end mb-8">
          <div className="md:col-span-7">
            <p className="smallcaps text-accent mb-3">Kjerneverdier</p>
            <h2 className="font-serif font-bold text-3xl md:text-[2.6rem] leading-[1.05] tracking-[-0.02em]">
              Kjerneverdier.
            </h2>
          </div>
          <p className="md:col-span-5 text-ink-soft leading-relaxed">
            Verdiene som ligger til grunn for arbeidet og virksomheten.
          </p>
        </div>

        <ul className="grid gap-y-8 md:grid-cols-3 md:gap-x-10">
          {verdier.map((v, i) => (
            <li key={v.ord} className={i > 0 && i % 3 !== 0 ? "md:col-rule md:pl-8" : ""}>
              <p className="font-serif font-semibold text-3xl md:text-4xl text-accent tracking-[-0.02em] leading-[1.1]">
                {v.ord}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="rule-thick mb-12" />

      {/* Erfaring */}
      <section className="mb-16">
        <div className="grid gap-10 md:grid-cols-12 items-end mb-8">
          <div className="md:col-span-7">
            <p className="smallcaps text-accent mb-3">Erfaring</p>
            <h2 className="font-serif font-bold text-3xl md:text-[2.6rem] leading-[1.05] tracking-[-0.02em]">
              Dette har jeg gjort.
            </h2>
          </div>
          <p className="md:col-span-5 text-ink-soft leading-relaxed">
            Tidligere arbeid og fagområder.
          </p>
        </div>

        <ul className="grid gap-y-10 md:grid-cols-2 md:gap-x-10">
          {erfaring.map((t, i) => (
            <li key={t.tittel} className={i % 2 === 1 ? "md:col-rule md:pl-10" : ""}>
              <h3 className="font-serif font-semibold text-2xl md:text-[1.9rem] leading-[1.1] tracking-[-0.02em]">
                {t.tittel}
              </h3>
              <p className="mt-3 text-ink-soft leading-relaxed">
                {t.beskrivelse}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="rule-thick mb-12" />

      {/* Visjon */}
      <section className="grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-5">
          <p className="smallcaps text-accent mb-3">Visjonen</p>
          <h2 className="font-serif font-bold text-3xl md:text-[2.6rem] leading-[1.05] tracking-[-0.02em]">
            Frihet under ansvar.
          </h2>
        </div>
        <blockquote className="md:col-span-7 md:col-rule md:pl-10">
          <p className="font-serif text-2xl md:text-3xl leading-[1.25] tracking-[-0.015em] text-ink">
            «Økonomisk bærekraft i selskapet, å levere
            kvalitetsjournalistikk, frihet under ansvar — å styre bedriften
            selv.»
          </p>
          <footer className="dateline mt-5">— FORRETNINGSPLAN, 2026</footer>

          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 mt-10 bg-ink text-paper px-6 py-3 smallcaps hover:bg-accent transition-colors"
          >
            Ta kontakt
            <span aria-hidden>→</span>
          </Link>
        </blockquote>
      </section>
    </div>
  );
}
