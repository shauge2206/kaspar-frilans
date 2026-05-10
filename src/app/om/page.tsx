import Link from "next/link";
import type { Metadata } from "next";
import FadeUp from "../components/FadeUp";

export const metadata: Metadata = {
  title: "Om",
  description:
    "Om Kaspar Knudsen — frilansjournalist med base på USF Verftet i Bergen. 15 år i bransjen og mastergrad i undersøkende journalistikk.",
};

const verdier = [
  "Likeverd",
  "Empati",
  "Ærlighet",
  "Samfunns­engasjement",
  "Kritisk tenkning",
  "Nysgjerrighet",
  "Åpenhet",
  "Holder ord og avtaler",
];

const tjenester = [
  {
    n: "01",
    t: "Reportasje fra felt",
    b: "Saker fra stedet — bilder og tekst i samme leveranse. Egnet for nyhets- og featuresaker.",
  },
  {
    n: "02",
    t: "Undersøkende journalistikk",
    b: "Graving innen arbeidsliv, krim, fiskeri og kystnæring. Mastergrad i undersøkende journalistikk.",
  },
  {
    n: "03",
    t: "Innsalg av idéer og saker",
    b: "Påbegynte eller ferdige artikler tilbys redaksjoner. Eksklusivitet og format etter avtale.",
  },
  {
    n: "04",
    t: "Periode-jobbing",
    b: "Tilgjengelig for vikariater og periode-oppdrag i redaksjon. Fleksibel avtaleform.",
  },
];

export default function OmPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {/* Masthead */}
      <section className="grid grid-cols-12 gap-x-6 pt-16 pb-20 md:pt-28 md:pb-28">
        <div className="col-span-12 mb-10 flex items-baseline justify-between md:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 03 — Profil
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
            Sist oppdatert · 04.2026
          </span>
        </div>

        <h1 className="col-span-12 font-serif text-5xl leading-[1.02] tracking-[-0.02em] md:col-span-11 md:text-[112px]">
          En journalist
          <br />
          <span className="italic font-light text-muted">som drar ut.</span>
        </h1>

        <p className="col-span-12 mt-12 max-w-3xl font-serif text-xl leading-snug md:col-span-7 md:col-start-6 md:mt-20 md:text-2xl">
          Kaspar Knudsen har femten år i bergensk mediebransje og en
          mastergrad i undersøkende journalistikk. Spesialfeltene er
          arbeidsliv, krim, fiskeri og kystnæring — gjerne med en kritisk
          og gravende tilnærming.
        </p>
      </section>

      <hr className="rule-strong" />

      {/* Bio */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Biografi
          </span>
        </div>
        <div className="col-span-12 md:col-span-8">
          <FadeUp>
            <div className="space-y-6 font-serif text-xl leading-[1.55] tracking-[-0.005em] md:text-[22px]">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.85]">
                Faget motiverer meg — historiefortellingen og samfunns­oppdraget.
                Å bidra til innsikt og å søke sannhet, det er kjernen i
                arbeidet.
              </p>
              <p>
                Jeg jobber alene i enkeltpersonforetaket. Tjenesten består
                i salg av journalistisk arbeid: idéer, ferdige saker,
                enkeltoppdrag og periode-jobbing i redaksjoner. Leveransene
                er typisk en kombinasjon av tekst og bilder.
              </p>
              <p>
                De siste årene har jeg jobbet mest med saker for
                Fiskeribladet, Intrafish, Kystens Næringsliv og Bergens
                Tidende — om sjarkfiske, oppdrett, ulykker til havs,
                arbeidsliv og lokale samfunnshistorier i og rundt Bergen.
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
            NR. 01 — Visjon
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeUp>
            <blockquote className="font-serif text-3xl leading-[1.15] tracking-[-0.015em] md:text-5xl">
              «Økonomisk bærekraft i selskapet,{" "}
              <span className="text-muted">
                å levere kvalitets&shy;journalistikk,
              </span>{" "}
              frihet under ansvar — å styre bedriften selv.»
            </blockquote>
          </FadeUp>
        </div>
      </section>

      <hr className="rule-strong" />

      {/* Values */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 02 — Kjerneverdier
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
            NR. 03 — Tjenester
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
            NR. 04 — Kontor
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeUp>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] md:text-6xl">
              USF Verftet, Nordnes.
            </h2>
            <p className="mt-8 max-w-3xl font-serif text-xl leading-snug text-muted md:text-2xl">
              Etablert kontorplass i kulturhuset på Nordnes, et
              steinkast fra sjøen og bryggene. Et godt sted å skrive — og
              et godt sted å møtes.
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
                  Etablert 2026
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
