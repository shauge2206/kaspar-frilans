import type { Metadata } from "next";
import Link from "next/link";
import { SplitText } from "@/components/split-text";

export const metadata: Metadata = {
  title: "Om Kaspar",
  description:
    "Om Kaspar — frilansjournalist i Bergen med master i undersøkende journalistikk. Kontor på USF Verftet, Nordnes.",
};

const verdier = [
  { ord: "Likeverd", forklaring: "Mellom mennesker, alltid." },
  { ord: "Empati", forklaring: "Lytte først, skrive etterpå." },
  { ord: "Ærlighet", forklaring: "Med kilder og lesere." },
  { ord: "Samfunnsengasjert", forklaring: "Journalistikk som bidrar." },
  { ord: "Kritisk tenkning", forklaring: "Aldri stille seg på siden." },
  { ord: "Nysgjerrig", forklaring: "Drivkraften i alt arbeidet." },
];

const tjenester = [
  {
    tittel: "Reportasje fra felt",
    beskrivelse:
      "Tekst og foto fra stedene, menneskene og hendelsene — for nyhets- og fagpresse.",
  },
  {
    tittel: "Undersøkende journalistikk",
    beskrivelse:
      "Lengre graveprosjekter med dokumentinnsyn, kildearbeid og kritisk analyse.",
  },
  {
    tittel: "Feature og portrett",
    beskrivelse:
      "Dyptgående portretter og temasaker om arbeidsliv, krim, fiskeri og kysten.",
  },
  {
    tittel: "Periode-jobbing i redaksjoner",
    beskrivelse:
      "Tilgjengelig for vakter og prosjekter i kortere eller lengre perioder.",
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
            text="Femten år i bergensmedier. Master i graving. Kontor på Verftet."
            className="font-serif font-black text-[2.4rem] sm:text-[3.4rem] md:text-[4.6rem] leading-[0.97] tracking-[-0.03em] mt-4 block"
            step={50}
          />
          <p
            className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-soft fade-up"
            style={{ animationDelay: "1100ms" }}
          >
            Kaspar er frilansjournalist med base i Bergen. Etter halvannet
            tiår i lokal- og regionalpresse driver han nå eget enkeltperson­foretak
            — med fokus på reportasje, feature og undersøkende journalistikk
            for nyhets- og fagpresse.
          </p>
        </div>
        <aside className="md:col-span-4 md:col-rule md:pl-8 fade-up" style={{ animationDelay: "900ms" }}>
          <div className="rule-bar mb-4" />
          <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-sm">
            <dt className="smallcaps text-ink-mute">Base</dt>
            <dd className="text-ink">USF Verftet, Nordnes</dd>
            <dt className="smallcaps text-ink-mute">Utdanning</dt>
            <dd className="text-ink">Master i undersøkende journalistikk</dd>
            <dt className="smallcaps text-ink-mute">Erfaring</dt>
            <dd className="text-ink">15 år i bergensmedier</dd>
            <dt className="smallcaps text-ink-mute">Medlem</dt>
            <dd className="text-ink">Norsk Journalistlag</dd>
          </dl>
        </aside>
      </header>

      <div className="rule-thick mb-12" />

      {/* Bio + Spesialitet */}
      <section className="grid gap-10 md:grid-cols-12 mb-16">
        <div className="md:col-span-7">
          <p className="smallcaps text-accent mb-3">Bakgrunn</p>
          <h2 className="font-serif font-bold text-3xl md:text-[2.4rem] leading-[1.1] tracking-[-0.02em] mb-6">
            Tett på menneskene jeg skriver om
          </h2>
          <p className="font-serif text-[1.1rem] md:text-[1.18rem] leading-[1.7] text-ink dropcap">
            Faget motiverer meg — historiefortellingen, samfunnsoppdraget,
            det å bidra til innsikt og søke sannhet. Etter 15 år i
            bergensmedier kjenner jeg byen, kysten og menneskene godt. Jeg
            drar ut i felt for å se stedene og møte kildene mine. Det gjør at
            journalistikken kommer nærmere — og at fortellingen blir
            menneskelig, ikke bare faktuell.
          </p>
          <p className="mt-6 font-serif text-[1.1rem] md:text-[1.18rem] leading-[1.7] text-ink">
            Spesialiteten er undersøkende arbeid og lange feature-saker
            innenfor arbeidsliv, krim, fiskeri og kystens næringer. Jeg
            leverer både tekst og bilder, og er trygg på alle plattformer —
            fra papir til lengre nettpubliseringer.
          </p>
        </div>

        <aside className="md:col-span-5 md:col-rule md:pl-10">
          <p className="smallcaps text-accent mb-3">Spesialitet</p>
          <ul className="font-serif text-2xl md:text-3xl leading-tight space-y-3 mt-2">
            <li>Arbeidsliv</li>
            <li>Krim</li>
            <li>Fiskeri</li>
            <li>Kystens næringer</li>
          </ul>
          <div className="rule-thin mt-8 pt-5">
            <p className="dateline">Faste kanaler</p>
            <p className="mt-2 text-ink-soft leading-relaxed">
              Fiskeribladet · Intrafish · Kystens Næringsliv · Bergens
              Tidende · regional og nasjonal presse.
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
              Slik jobber jeg.
            </h2>
          </div>
          <p className="md:col-span-5 text-ink-soft leading-relaxed">
            Verdiene styrer hvilke saker jeg sier ja til, hvordan jeg
            forholder meg til kilder, og hvordan jeg bygger relasjoner med
            redaksjoner over tid.
          </p>
        </div>

        <ul className="grid gap-y-6 md:grid-cols-3 md:gap-x-10">
          {verdier.map((v, i) => (
            <li key={v.ord} className={i > 0 && i % 3 !== 0 ? "md:col-rule md:pl-8" : ""}>
              <p className="font-serif text-3xl md:text-4xl text-accent tracking-[-0.02em]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="smallcaps mt-2">{v.ord}</p>
              <p className="mt-2 text-ink-soft leading-relaxed">
                {v.forklaring}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="rule-thick mb-12" />

      {/* Tjenester */}
      <section className="mb-16">
        <div className="grid gap-10 md:grid-cols-12 items-end mb-8">
          <div className="md:col-span-7">
            <p className="smallcaps text-accent mb-3">Tjenester</p>
            <h2 className="font-serif font-bold text-3xl md:text-[2.6rem] leading-[1.05] tracking-[-0.02em]">
              Hva jeg leverer.
            </h2>
          </div>
          <p className="md:col-span-5 text-ink-soft leading-relaxed">
            Stykkpris per sak, periode-jobbing eller faste leveranser —
            tilpasset redaksjonens behov.
          </p>
        </div>

        <ul className="grid gap-y-10 md:grid-cols-2 md:gap-x-10">
          {tjenester.map((t, i) => (
            <li key={t.tittel} className={i % 2 === 1 ? "md:col-rule md:pl-10" : ""}>
              <p className="dateline">Tjeneste 0{i + 1}</p>
              <h3 className="font-serif font-semibold text-2xl md:text-[1.9rem] leading-[1.1] tracking-[-0.02em] mt-2">
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
