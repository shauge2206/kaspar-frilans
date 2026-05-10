import Link from "next/link";

export const metadata = {
  title: "Om — Kaspar Knudsen · Magasinet",
  description:
    "Om Kaspar Knudsen, frilansjournalist i Bergen. Mastergrad i gravejournalistikk, 15 år i bransjen, kontor på USF Verftet.",
};

const verdier = [
  ["Likeverd", "Mellom mennesker — alltid."],
  ["Empati", "Møte historiene som menneske, ikke skribent."],
  ["Ærlighet", "I research, i kilder, i ferdig sak."],
  ["Samfunnsengasjement", "Skriver det som betyr noe."],
  ["Kritisk tenkning", "Spør én gang til."],
  ["Nysgjerrighet", "Blir aldri ferdig med å lære."],
];

const tjenester = [
  {
    nummer: "I",
    tittel: "Innsalg av ideer",
    tekst:
      "Egne ideer presenteres for redaksjonen. Avtales pris og leveringstid før produksjon.",
  },
  {
    nummer: "II",
    tittel: "Ferdige saker",
    tekst:
      "Påbegynte og ferdige saker tilbys redaksjoner som passer materialet.",
  },
  {
    nummer: "III",
    tittel: "Enkeltoppdrag",
    tekst:
      "Tar enkeltsaker for redaksjoner — fra reportasje til feature og graving.",
  },
  {
    nummer: "IV",
    tittel: "Periode-jobbing",
    tekst:
      "Tilgjengelig for lengre perioder i redaksjon — på avtalte premisser.",
  },
];

export default function OmPage() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-12 py-10 lg:py-16">
      {/* Header */}
      <div className="border-b border-ink/70 pb-3 flex items-baseline justify-between text-[0.78rem] smallcaps">
        <span>Volum I · Nr. 1</span>
        <span>Portrett</span>
        <span>Side 3</span>
      </div>

      {/* Title */}
      <header className="mt-12 lg:mt-16 grid gap-8 lg:grid-cols-[1fr_2fr] items-end">
        <p className="smallcaps text-[0.78rem] text-accent">
          Om redaktøren
        </p>
        <h1 className="font-display text-[clamp(2.8rem,7vw,5.8rem)] leading-[0.94] tracking-tight">
          En journalist
          <br />
          <em className="font-medium">fra Bergen.</em>
        </h1>
      </header>

      {/* Bio body, two columns */}
      <section className="mt-14 lg:mt-20 grid gap-10 lg:gap-16 lg:grid-cols-[1fr_2.2fr]">
        <aside className="lg:sticky lg:top-24 self-start space-y-8">
          <div className="margin-quote">
            <span className="block smallcaps text-[0.7rem] text-accent">
              Visjon
            </span>
            <p className="mt-3 font-display italic text-[1.4rem] leading-[1.2] tracking-tight border-l-2 border-accent pl-4">
              «Økonomisk bærekraft. Kvalitetsjournalistikk. Frihet under
              ansvar.»
            </p>
          </div>

          <div>
            <span className="block smallcaps text-[0.7rem] text-ink-soft">
              Kort fortalt
            </span>
            <dl className="mt-3 space-y-2 text-[0.95rem] leading-relaxed">
              <div className="flex justify-between gap-4 border-b border-rule pb-1.5">
                <dt className="smallcaps text-[0.7rem] text-ink-soft">
                  Sted
                </dt>
                <dd>USF Verftet, Nordnes</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-rule pb-1.5">
                <dt className="smallcaps text-[0.7rem] text-ink-soft">
                  Erfaring
                </dt>
                <dd>15 år i bransjen</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-rule pb-1.5">
                <dt className="smallcaps text-[0.7rem] text-ink-soft">
                  Utdanning
                </dt>
                <dd className="italic">M.A. gravejournalistikk</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="smallcaps text-[0.7rem] text-ink-soft">
                  Felt
                </dt>
                <dd>Arbeidsliv · Kyst · Krim</dd>
              </div>
            </dl>
          </div>
        </aside>

        <div className="prose-spread font-serif text-[1.06rem] leading-[1.85] text-ink">
          <p className="dropcap break-inside-avoid">
            Kaspar Knudsen har skrevet for Bergens-medier i femten år.
            Bakgrunnen er i nyhetsredaksjonen, men det er feature- og
            gravearbeidet som har formet ham mest: lange arbeidsuker i
            felten, samtaler over kjøkkenbord, telefoner som tas opp
            igjen ti år senere fordi noe nytt har dukket opp.
          </p>
          <p className="mt-6">
            Mastergraden i undersøkende journalistikk gir ham
            metodene. De femten årene gir ham nettverket. Det viktigste
            har likevel alltid vært å være til stede — å reise til
            stedet, sitte ned med menneskene, og la historien få utfolde
            seg slik den faktisk er. Han skriver helst om arbeidsliv,
            krim og kystens næringer: fisk, sjømat og folkene som lever
            av havet.
          </p>
          <p className="mt-6">
            Kontoret er på{" "}
            <strong className="font-medium">USF Verftet</strong> på
            Nordnes — i et fellesskap av andre frilansere, kunstnere og
            småforetak. Tjenestene leveres til redaksjoner som{" "}
            <em>Fiskeribladet</em>, <em>Intrafish</em> og{" "}
            <em>Kystens Næringsliv</em>, og bredere norsk presse når
            saken passer.
          </p>
        </div>
      </section>

      {/* Verdier */}
      <section className="mt-24 lg:mt-32 border-t border-rule pt-14">
        <div className="flex items-end justify-between border-b border-ink/60 pb-3 mb-10">
          <h2 className="font-display text-[1.8rem] tracking-tight">
            Kjerneverdier
          </h2>
          <span className="smallcaps text-[0.74rem] text-ink-soft">
            En arbeidsmetode i seks ord
          </span>
        </div>

        <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {verdier.map((v, i) => (
            <li key={v[0]} className="border-t-2 border-ink pt-4">
              <span className="smallcaps text-[0.7rem] text-accent">
                Verdi {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-[1.7rem] leading-tight tracking-tight">
                {v[0]}
              </h3>
              <p className="mt-2 italic text-[0.98rem] text-ink-soft leading-relaxed">
                {v[1]}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Tjenester */}
      <section className="mt-24 lg:mt-32 border-t border-rule pt-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] items-end mb-12">
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.02] tracking-tight">
            Hva tilbys
          </h2>
          <p className="font-display italic text-[1.3rem] leading-snug text-ink-soft max-w-md">
            Et knippe måter å samarbeide på — fra én sak til en hel
            sesong.
          </p>
        </div>

        <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {tjenester.map((t) => (
            <li key={t.nummer} className="grid grid-cols-[auto_1fr] gap-6">
              <span className="font-display text-[2.4rem] text-accent leading-none w-10">
                {t.nummer}
              </span>
              <div>
                <h3 className="font-display text-[1.4rem] leading-tight tracking-tight">
                  {t.tittel}
                </h3>
                <p className="mt-2 text-[1rem] leading-relaxed text-ink-soft">
                  {t.tekst}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Pull quote spread */}
      <section className="mt-24 lg:mt-32 border-t border-rule py-20 lg:py-28">
        <p className="smallcaps text-[0.74rem] text-accent">
          Verdiløfte
        </p>
        <blockquote className="mt-6">
          <p className="font-display italic text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[1.05] tracking-tight">
            «Jeg leverer fra felt — gode ideer, kvalitet,
            menneskenære historier, kritisk og undersøkende. Jeg
            tilpasser meg redaksjonens behov.»
          </p>
        </blockquote>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 smallcaps text-[0.78rem] text-ink-soft">
          <span>Bilder & tekst</span>
          <span aria-hidden>·</span>
          <span>Tilgang til gjenbruk</span>
          <span aria-hidden>·</span>
          <span>Kritisk og undersøkende</span>
          <span aria-hidden>·</span>
          <span>Menneskenære historier</span>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto] items-end">
        <p className="font-display italic text-[1.4rem] leading-snug text-ink-soft max-w-xl">
          Skal vi ta en kaffe på Verftet? Eller diskutere en sak over
          telefon?
        </p>
        <Link
          href="/kontakt"
          className="self-start lg:self-end inline-flex items-center justify-between border border-ink/80 px-6 py-4 smallcaps tracking-[0.2em] text-[0.84rem] hover:bg-ink hover:text-paper transition-colors"
        >
          Ta kontakt
          <span aria-hidden>→</span>
        </Link>
      </section>
    </div>
  );
}
