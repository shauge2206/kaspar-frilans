import type { Metadata } from "next";
import Link from "next/link";
import {
  CompassMark,
  HorizonLine,
  WaveBackdrop,
  SectionMarker,
  DepthLines,
  WindArrow,
  Lighthouse,
} from "@/components/nautical";
import { Dateline } from "@/components/dateline";

export const metadata: Metadata = {
  title: "Om Kaspar Knudsen",
  description:
    "Bergensbasert frilansjournalist med base på USF Verftet på Nordnes. 15 år i bransjen og mastergrad i undersøkende journalistikk.",
};

const verdier = [
  {
    nr: "01",
    tittel: "Likeverd",
    body: "Folk i felt og folk i toppen møtes med samme respekt. Det er sjelden de mektige som mest trenger å bli hørt.",
  },
  {
    nr: "02",
    tittel: "Empati",
    body: "Tar meg tid til å forstå før jeg formidler. Sterke historier krever rolige samtaler.",
  },
  {
    nr: "03",
    tittel: "Ærlighet",
    body: "Holder ord og avtaler. Sier hva intervjuet skal brukes til, og hva det ikke skal brukes til.",
  },
  {
    nr: "04",
    tittel: "Samfunnsengasjement",
    body: "Journalistikk er et samfunnsoppdrag. Jeg skriver for innbyggere, ikke for algoritmer.",
  },
  {
    nr: "05",
    tittel: "Kritisk tenkning",
    body: "Sjekker, dobbeltsjekker, og leter etter dokumentet ingen ville at jeg skulle finne.",
  },
  {
    nr: "06",
    tittel: "Nysgjerrighet",
    body: "Den som spør én gang for mye, får svaret før alle andre. Det er det jeg lever av.",
  },
];

const tjenester = [
  {
    nr: "I",
    tittel: "Reportasje &amp; feature",
    body: "Lengre saker fra felt — fiskeri, kystindustri, arbeidsliv og samfunnsliv. Jeg leverer både tekst og bilder.",
  },
  {
    nr: "II",
    tittel: "Gravesaker",
    body: "Kritisk og undersøkende journalistikk. Mastergrad i graving, og praktisk erfaring med komplekse saker.",
  },
  {
    nr: "III",
    tittel: "Periodejobbing",
    body: "Tilgjengelig for periodevis innleie i redaksjoner — ferievikar, prosjektarbeid eller lengre engasjement.",
  },
  {
    nr: "IV",
    tittel: "Foto",
    body: "Pressefoto til egne saker, eller på oppdrag. Jeg ser bildet samtidig som jeg leter etter sitatet.",
  },
];

export default function OmPage() {
  return (
    <>
      {/* HERO ----------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-deep text-paper">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 50% at 75% 30%, rgba(216,201,168,0.22), transparent 60%), radial-gradient(ellipse 60% 60% at 20% 70%, rgba(207,214,219,0.18), transparent 60%)",
          }}
        />
        <WaveBackdrop className="absolute inset-x-0 -bottom-2 h-48 text-paper/55 animate-drift-slower" />

        <div className="mx-auto max-w-[88rem] px-6 pt-32 pb-28 lg:px-12">
          <div className="flex items-center gap-4 text-sand">
            <CompassMark className="w-5 h-5" />
            <span className="smallcaps text-[0.72rem]">profil · journalist</span>
          </div>
          <h1 className="mt-10 max-w-5xl font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-tight text-balance">
            En journalist
            <br />
            <span className="italic font-light text-sand">
              med kystlinje i ryggraden.
            </span>
          </h1>
          <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10">
            <p className="col-span-12 lg:col-span-5 text-paper/85 text-pretty leading-relaxed">
              Kaspar Knudsen er Bergensbasert frilansjournalist med 15 år i media
              og mastergrad i undersøkende journalistikk. Han skriver om
              arbeidsliv, krim, fiskeri og kystindustri — gjerne i lange
              featurer, alltid i menneskenært tonefall.
            </p>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 self-end">
              <Dateline
                sted="USF Verftet"
                koordinat="60.39°N · 5.30°Ø"
                dato="Nordnes, Bergen"
                className="text-sand"
              />
              <Link
                href="/kontakt"
                className="mt-6 inline-flex items-center gap-3 bg-sand px-6 py-3 text-[0.78rem] tracking-meta text-deep transition-colors hover:bg-paper"
              >
                Ta kontakt →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BIO ------------------------------------------------------------ */}
      <section>
        <div className="mx-auto max-w-[88rem] px-6 py-28 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-4">
              <SectionMarker label="Bio · I" />
              <p className="mt-6 smallcaps text-[0.75rem] text-ink-muted">
                fra felt — for fagpressen
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight tracking-tight text-deep text-balance">
                15 år i Bergens-media. <span className="italic font-light">Nå frilans.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 max-w-[64ch]">
              <p className="mb-5 text-[1.07rem] leading-[1.75] text-ink/90 text-pretty first-letter:font-display first-letter:text-[3.6rem] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-deep">
                Etter femten år i bergenske redaksjoner ble veien videre å ta
                journalistikken i egne hender. Som enkeltpersonforetak leverer
                jeg journalistiske tekster og bilder til avis, fagpresse og
                tidsskrifter — med hovedvekt på nyhets- og reportasjesaker, og
                en utvikling i retning av mer dyptgående feature- og
                temasaker.
              </p>
              <p className="mb-5 text-[1.07rem] leading-[1.75] text-ink/90 text-pretty">
                Mastergraden i gravejournalistikk er et håndverk jeg bruker
                hver uke. Den lærte meg å lese årsmeldinger, å innhente
                offentlige dokumenter, og å la kildene få tid til å si det de
                egentlig kom for å si.
              </p>
              <p className="text-[1.07rem] leading-[1.75] text-ink/90 text-pretty">
                Jeg jobber tett mot redaksjoner som <em>Fiskeribladet</em>,{" "}
                <em>Intrafish</em> og <em>Kystens Næringsliv</em>, men leverer
                også til dagspressen og til magasiner som vil sette saker i
                større format.
              </p>
            </div>
          </div>
          <HorizonLine className="text-deep/30 mt-20" />
        </div>
      </section>

      {/* VISJON QUOTE --------------------------------------------------- */}
      <section className="relative bg-paper-warm/40">
        <div className="mx-auto max-w-[88rem] px-6 py-28 lg:px-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <SectionMarker label="Visjon" />
            </div>
            <blockquote className="col-span-12 lg:col-span-9 lg:col-start-4">
              <p className="font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] tracking-tight text-deep text-balance">
                <span className="text-driftwood font-light italic">«</span>
                Økonomisk bærekraft. Kvalitetsjournalistikk.
                <br />
                <span className="italic font-light text-deep/75">
                  Frihet under ansvar — å styre bedriften selv.
                </span>
                <span className="text-driftwood font-light italic">»</span>
              </p>
              <footer className="mt-8 text-[0.72rem] tracking-meta text-deep">
                — fra forretningsplanen, april 2026
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* VERDIER GRID --------------------------------------------------- */}
      <section className="relative">
        <div className="mx-auto max-w-[88rem] px-6 py-28 lg:px-12">
          <div className="mb-14 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-7">
              <SectionMarker label="Kjerneverdier" className="mb-5" />
              <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1] tracking-tight text-deep text-balance">
                Seks kompasspunkter — for hvordan jobben gjøres.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-4 text-pretty">
              <p className="text-ink/75 leading-relaxed">
                Verdiene står i forretningsplanen, men de prøves hver eneste
                dag i felt. Det er sjelden de store sakene som tester dem
                — det er de små.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-deep/15 pt-12">
            {verdier.map((v) => (
              <div key={v.nr} className="relative">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-driftwood">
                    {v.nr}
                  </span>
                  <h3 className="font-display text-2xl tracking-tight text-deep">
                    {v.tittel}
                  </h3>
                </div>
                <p className="mt-4 text-ink/80 leading-relaxed text-pretty">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TJENESTER ------------------------------------------------------ */}
      <section className="relative bg-deep text-paper isolate overflow-hidden">
        <DepthLines className="absolute inset-x-0 top-0 h-14 w-full text-paper/30" />
        <WaveBackdrop className="absolute inset-x-0 -bottom-2 h-44 text-paper/40" />
        <div className="mx-auto max-w-[88rem] px-6 py-28 lg:px-12">
          <div className="mb-12 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 text-sand">
                <WindArrow className="w-12 h-3" />
                <span className="smallcaps text-[0.72rem]">tjenester</span>
              </div>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1] tracking-tight text-balance">
                Hva jeg leverer —
                <br />
                <span className="italic font-light text-sand">til redaksjonen din.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-4 text-pretty">
              <p className="text-paper/80 leading-relaxed">
                Stykkpris per sak eller honorar per periode — det avtales i
                dialog. Jeg er fleksibel, og tilpasser leveranse til
                plattformen, formatet og publikummet du har.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-paper/15 pt-12">
            {tjenester.map((t) => (
              <div key={t.nr}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-sand">
                    {t.nr}
                  </span>
                  <h3 className="font-display text-2xl tracking-tight">
                    {t.tittel.replace("&amp;", "&")}
                  </h3>
                </div>
                <p className="mt-4 text-paper/80 leading-relaxed text-pretty">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USF VERFTET ---------------------------------------------------- */}
      <section className="relative">
        <div className="mx-auto max-w-[88rem] px-6 py-28 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <SectionMarker label="Kontoret" className="mb-5" />
              <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] tracking-tight text-deep text-balance">
                USF Verftet —
                <br />
                <span className="italic font-light text-driftwood">på Nordnes, ved sjøkanten.</span>
              </h2>
              <p className="mt-7 max-w-2xl text-ink/80 leading-relaxed text-pretty">
                Kontoret ligger i den gamle hermetikkfabrikken på Nordnes, blant
                kunstnere, scener og kafeer. Et godt sted å skrive — og et
                praktisk møtepunkt for redaksjoner og kilder som er innom Bergen.
                Stikk innom om du er i nærheten.
              </p>
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[0.85rem] text-ink/75">
                <li className="border-t border-deep/20 pt-3">
                  <span className="smallcaps text-[0.7rem] text-deep block mb-1">
                    Adresse
                  </span>
                  Georgernes Verft 12
                  <br /> 5011 Bergen
                </li>
                <li className="border-t border-deep/20 pt-3">
                  <span className="smallcaps text-[0.7rem] text-deep block mb-1">
                    Reise
                  </span>
                  10 min til gå fra Bryggen.
                  <br />
                  Buss 11 fra sentrum.
                </li>
                <li className="border-t border-deep/20 pt-3">
                  <span className="smallcaps text-[0.7rem] text-deep block mb-1">
                    Møter
                  </span>
                  Kaffe, samtale og notatblokk —
                  <br /> etter avtale.
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-fog/40 border border-deep/10">
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(14,42,58,0.85) 0%, rgba(14,42,58,0.45) 35%, rgba(14,42,58,0.85) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-between py-10 text-paper">
                  <Lighthouse className="w-10 h-20 text-sand" />
                  <div className="text-center">
                    <div className="smallcaps text-[0.7rem] text-sand">
                      posisjon
                    </div>
                    <div className="mt-2 font-display text-3xl leading-tight">
                      60.39° N
                      <br />
                      05.30° Ø
                    </div>
                  </div>
                  <div className="w-32">
                    <CompassMark className="w-full h-auto text-sand" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[0.7rem] tracking-meta text-ink-muted text-center">
                USF Verftet · Nordnes · Bergen
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
