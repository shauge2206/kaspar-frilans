import Link from "next/link";

export const metadata = {
  title: "Om Kaspar · Frilansjournalist",
  description:
    "Master i undersøkende journalistikk. 15 år i Bergens-pressen. Spesialist på arbeidsliv, krim, fiskeri og kystindustri. Driver enkeltpersonforetak fra USF Verftet.",
};

const verdier = [
  { tag: "1", ord: "Likeverd" },
  { tag: "2", ord: "Empati" },
  { tag: "3", ord: "Ærlighet" },
  { tag: "4", ord: "Høflighet" },
  { tag: "5", ord: "Holder ord" },
  { tag: "6", ord: "Samfunns­engasjert" },
  { tag: "7", ord: "Kritisk tenkning" },
  { tag: "8", ord: "Nysgjerrig" },
  { tag: "9", ord: "Åpen og inkluderende" },
];

const tjenester = [
  {
    tittel: "Innsalg av enkelt-ideer",
    tekst:
      "Jeg leverer gjennomarbeidede ideer til ulike redaksjoner — fra nyhetsvinkler til større featuresaker.",
  },
  {
    tittel: "Påbegynte og ferdige saker",
    tekst:
      "Jeg har saker klar for kjøp, eller utvikler dem videre etter redaksjonens behov og format.",
  },
  {
    tittel: "Enkeltoppdrag",
    tekst:
      "Tilgjengelig for skreddersydde oppdrag — reportasje, intervju, foto og research på kort varsel.",
  },
  {
    tittel: "Periode-jobbing i redaksjoner",
    tekst:
      "Tar lengre vikariat og perioder i redaksjoner som trenger en erfaren penn med gravekompetanse.",
  },
];

const fag = [
  "Arbeidsliv",
  "Krim",
  "Fiskeri",
  "Kystindustri",
  "Reportasje",
  "Gravesak",
  "Feature",
  "Foto",
];

export default function Om() {
  return (
    <div>
      {/* MASTHEAD */}
      <section className="px-4 sm:px-6 lg:px-10 pt-10 pb-8 border-b-[6px] border-ink">
        <div className="mono text-[11px] uppercase tracking-[0.3em] flex items-center gap-3 mb-4">
          <span className="bg-red text-paper px-2 py-1">SEKSJON 3</span>
          <span>OM JOURNALISTEN · KOLOFON · METODE</span>
        </div>
        <h1 className="display text-[clamp(3.2rem,11vw,11rem)] leading-[0.8] tracking-[-0.03em] animate-stamp">
          OM<br />KASPAR<span className="text-red">.</span>
        </h1>
        <div className="rule-x-thin mt-6" />
        <div className="grid grid-cols-12 gap-6 pt-5">
          <p className="col-span-12 md:col-span-8 text-xl md:text-2xl leading-snug max-w-3xl">
            Frilansjournalist med base på USF Verftet i Bergen. Femten år i
            bransjen, master i undersøkende journalistikk. Driver
            enkeltpersonforetak — leverer kvalitetsjournalistikk fra felt.
          </p>
          <div className="col-span-12 md:col-span-4 mono text-[10px] uppercase tracking-[0.22em] flex flex-col gap-2 self-end">
            <div className="border-2 border-ink p-3">
              <div className="text-red font-bold">15 ÅR</div>
              <div>I BRANSJEN</div>
            </div>
            <div className="border-2 border-ink p-3">
              <div className="text-red font-bold">MASTERGRAD</div>
              <div>UNDERSØKENDE JOURNALISTIKK</div>
            </div>
            <div className="border-2 border-ink p-3">
              <div className="text-red font-bold">USF VERFTET</div>
              <div>NORDNES · BERGEN</div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 border-b-[6px] border-ink">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-8">
          <span className="bg-ink text-paper px-2 py-1">MANIFEST</span>
          <span>KAPITTEL 1</span>
        </div>
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          <h2 className="col-span-12 md:col-span-5 display text-[clamp(2.2rem,5vw,4rem)] leading-[0.85]">
            FRA FELT.<br />
            <span className="text-red">UTEN</span><br />
            SNARVEIER.
          </h2>
          <div className="col-span-12 md:col-span-7 news-columns-2">
            <p className="dropcap text-base md:text-lg leading-relaxed mb-4">
              Faget motiverer meg — historiefortelling og samfunnsoppdraget. Å
              bidra til innsikt og søke sannhet. Jeg drar ut for å se stedene
              og møte menneskene jeg skriver om. Det er det som gjør at
              journalistikken kommer nærmere — og blir til å stole på.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Etter 15 år i Bergens-pressen kjenner jeg bransjen, byen og
              kysten. Jeg har en mastergrad i undersøkende journalistikk og
              praktisk erfaring med kritisk graving — særlig innenfor
              arbeidsliv, krim, fiskeri og kystindustri.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Som frilanser leverer jeg saker til redaksjoner som tør å
              prioritere kvalitet og tid. Mine første kunder er
              <em> Fiskeribladet, Intrafish</em> og <em>Kystens Næringsliv</em>
              — men listen vokser.
            </p>
          </div>
        </div>
      </section>

      {/* VERDIER GRID */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 border-b-[6px] border-ink bg-ink text-paper">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-8">
          <span className="bg-red text-paper px-2 py-1">KJERNEVERDIER</span>
          <span>KAPITTEL 2</span>
        </div>
        <h2 className="display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.85] mb-10">
          NI VERDIER.<br />
          ÉN <span className="text-red">PRAKSIS</span>.
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-0 border-t-2 border-paper">
          {verdier.map((v, i) => (
            <li
              key={v.tag}
              className={`p-5 md:p-7 border-b-2 border-paper ${i % 3 !== 2 ? "md:border-r-2" : ""} ${i % 2 !== 1 ? "border-r-2 md:border-r-2" : ""}`}
            >
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
                NR. {v.tag}
              </div>
              <div className="display text-3xl md:text-4xl leading-[0.95]">
                {v.ord}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* VISJON */}
      <section className="px-4 sm:px-6 lg:px-10 py-14 border-b-[6px] border-ink">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-8">
          <span className="bg-ink text-paper px-2 py-1">VISJON</span>
          <span>KAPITTEL 3</span>
        </div>
        <blockquote className="display text-[clamp(2rem,5.5vw,5rem)] leading-[0.85] max-w-[20ch]">
          «<span className="text-red">ØKONOMISK</span> BÆREKRAFT.<br />
          KVALITETS&shy;JOURNALISTIKK.<br />
          FRIHET UNDER ANSVAR.»
        </blockquote>
        <div className="mono text-xs uppercase tracking-[0.25em] mt-6">
          — KASPARS FORRETNINGSPLAN, APRIL 2026
        </div>
      </section>

      {/* TJENESTER */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 border-b-[6px] border-ink">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <span className="bg-ink text-paper px-2 py-1">TJENESTER</span>
          <span>KAPITTEL 4 · SALGSMODELL</span>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <h2 className="col-span-12 md:col-span-4 display text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.85]">
            HVA JEG<br />LEVERER<span className="text-red">.</span>
          </h2>
          <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-2 gap-0 border-t-2 border-ink">
            {tjenester.map((t, i) => (
              <li
                key={t.tittel}
                className={`p-5 border-b-2 border-ink ${i % 2 === 0 ? "sm:border-r-2" : ""}`}
              >
                <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">
                  TJENESTE 0{i + 1}
                </div>
                <h3 className="display text-2xl md:text-3xl leading-[0.95] mb-3">
                  {t.tittel}
                </h3>
                <p className="text-sm leading-snug">{t.tekst}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rule-x-thin mt-10 pt-5">
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
            FAGOMRÅDER
          </div>
          <ul className="flex flex-wrap gap-2">
            {fag.map((f) => (
              <li
                key={f}
                className="mono text-xs uppercase tracking-[0.2em] border-2 border-ink px-3 py-2 hover:bg-ink hover:text-paper"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* USF VERFTET */}
      <section className="px-4 sm:px-6 lg:px-10 py-14">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <span className="bg-ink text-paper px-2 py-1">REDAKSJONEN</span>
          <span>KAPITTEL 5 · USF VERFTET</span>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <h2 className="col-span-12 md:col-span-7 display text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.85]">
            BASE:<br />
            <span className="text-red">USF VERFTET</span>,<br />
            NORDNES.
          </h2>
          <div className="col-span-12 md:col-span-5 self-end">
            <p className="text-base md:text-lg leading-snug">
              Jeg har etablert kontorplass på USF Verftet på Nordnes — et hjem
              for kunst, kultur og uavhengige stemmer i Bergen. Det er her jeg
              jobber alene med bedriften, møter kilder og planlegger nye
              reportasjer.
            </p>
            <Link
              href="/kontakt"
              className="hover-jitter inline-block mono text-xs uppercase tracking-[0.2em] mt-6 bg-ink text-paper px-5 py-3 border-4 border-ink hover:bg-red hover:border-red"
            >
              ↳ AVTAL ET MØTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
