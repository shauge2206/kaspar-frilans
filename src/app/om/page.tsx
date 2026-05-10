import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata = {
  title: "Om Kaspar",
  description:
    "Kaspar Knudsen er frilansjournalist med base på USF Verftet i Bergen. Femten år i pressen, mastergrad i gravejournalistikk.",
};

const verdier = [
  {
    ord: "Likeverd",
    tekst:
      "Hver kilde fortjener samme respekt — om de står i havna eller på taler­stolen.",
  },
  {
    ord: "Empati",
    tekst:
      "Mennesket først. Saken etter. Historiene som varer er de hvor vi har tatt oss tid.",
  },
  {
    ord: "Ærlighet",
    tekst:
      "Tydelig om hva jeg vet, hva jeg ikke vet, og hva jeg fortsatt arbeider med å forstå.",
  },
  {
    ord: "Nysgjerrighet",
    tekst:
      "En gravejournalists viktigste verktøy. Spørsmål som ikke alltid har et svar.",
  },
];

const tjenester = [
  {
    nr: "01",
    tittel: "Undersøkende journalistikk",
    tekst:
      "Lengre research-prosjekter for redaksjoner og fagblader. Dokument­basert arbeid kombinert med kildearbeid i felt.",
  },
  {
    nr: "02",
    tittel: "Featurereportasjer",
    tekst:
      "Menneskenære historier fra arbeidsliv og kystsamfunn. Tekst og foto i ett — visuell historiefortelling som henger sammen.",
  },
  {
    nr: "03",
    tittel: "Foto og bildedokumentasjon",
    tekst:
      "Egenproduserte bilder fra felt. Reportasjefoto, portrett og dokumentar — i tråd med journalistikkens etiske krav.",
  },
  {
    nr: "04",
    tittel: "Fagspesifikt arbeid",
    tekst:
      "Fiskeri, maritim industri, kriminalitet og arbeidsliv. Tett kontakt med Fiskeribladet, Intrafish og Kystens Næringsliv.",
  },
];

export default function Om() {
  return (
    <>
      {/* HERO */}
      <section className="pt-44 md:pt-56 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Om Kaspar Knudsen</p>
            <h1 className="mt-6 font-display font-light text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] leading-[0.92] tracking-[-0.02em]">
              Femten år
              <span className="block italic text-amber-soft">i pressen.</span>
            </h1>
            <p className="mt-12 max-w-3xl font-display text-2xl md:text-3xl leading-[1.3] text-fg-muted">
              En master i gravejournalistikk. En arbeidsdag som starter med
              kaffe på USF Verftet, og ofte ender et helt annet sted enn
              planlagt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PORTRAIT + BIO */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-14 md:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden">
                <ParallaxImage
                  src="/images/saker/sak-2/bilde-1.jpeg"
                  alt="Kaspar Knudsen på reportasjeoppdrag."
                  amount={0.1}
                  className="absolute inset-0"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <p className="mt-4 smallcaps text-fg-muted">
                Foto: Kaspar Knudsen · Sotra, 2023
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="eyebrow">Bakgrunn</p>
              <div className="mt-6 space-y-7 font-display text-xl md:text-[1.5rem] leading-[1.5] text-fg">
                <p>
                  Jeg har skrevet for Bergen-pressen siden 2010. Først som
                  nyhets­journalist, så som featureskribent, og de siste
                  årene som frilanser med spesialfelt innenfor
                  gravejournalistikk og kystens næringer.
                </p>
                <p>
                  Mastergraden min ved Universitetet i Bergen handlet om
                  hvordan norske myndigheter dokumenterer — og glemmer —
                  forlis. Det er fortsatt et tema jeg vender tilbake til.
                </p>
                <p>
                  Arbeidet mitt har stått på trykk i Fiskeribladet,
                  Intrafish, Kystens Næringsliv og Bergens Tidende. Jeg
                  jobber gjerne over tid med en sak — og foretrekker felt
                  framfor telefon når det er mulig.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-32 md:py-44 border-t border-rule mt-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Verdier</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1] max-w-4xl">
              Det jeg
              <span className="italic text-amber-soft"> bygger på.</span>
            </h2>
          </Reveal>
          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-y-14 gap-x-16">
            {verdier.map((v, i) => (
              <Reveal key={v.ord} delay={i * 100}>
                <div className="flex gap-8">
                  <span className="smallcaps text-amber pt-2 min-w-[2.4rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                      {v.ord}
                    </h3>
                    <p className="mt-3 text-fg-muted leading-relaxed max-w-md">
                      {v.tekst}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION QUOTE */}
      <section className="py-32 md:py-44">
        <Reveal>
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="eyebrow">Visjon</p>
            <p className="mt-10 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.01em]">
              <span className="text-amber">“</span>
              Økonomisk bærekraftig journalistikk som holder kvalitet over
              tid — frihet under ansvar, der nysgjerrigheten styrer
              kompasset.
              <span className="text-amber">”</span>
            </p>
            <div aria-hidden className="mx-auto mt-12 h-px w-16 bg-amber" />
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Tjenester</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1] max-w-4xl">
              Slik kan vi
              <span className="italic text-amber-soft"> jobbe sammen.</span>
            </h2>
          </Reveal>
          <div className="mt-16">
            {tjenester.map((t, i) => (
              <Reveal key={t.nr} delay={i * 80}>
                <div className="grid md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-t border-rule items-baseline">
                  <p className="md:col-span-2 smallcaps text-amber">{t.nr}</p>
                  <h3 className="md:col-span-4 font-display text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight">
                    {t.tittel}
                  </h3>
                  <p className="md:col-span-6 text-fg-muted leading-relaxed">
                    {t.tekst}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-rule" />
          </div>
        </div>
      </section>

      {/* USF VERFTET */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden border-t border-rule mt-32">
        <ParallaxImage
          src="/images/saker/sak-3/bilde-1.png"
          alt="USF Verftet, Nordnes."
          amount={0.16}
          className="absolute inset-0"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/30"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 md:px-10 pb-14 md:pb-20">
          <Reveal>
            <p className="smallcaps text-amber-soft">
              Kontorfellesskap · Nordnes
            </p>
            <h2 className="mt-5 font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.015em] max-w-4xl">
              USF Verftet — der dagene begynner.
            </h2>
            <p className="mt-7 max-w-2xl text-fg/85 leading-relaxed">
              Den gamle sardinfabrikken på Nordnes huser i dag Bergens
              kunst- og kulturmiljø. Det er her jeg har kontor, der
              fjorden møter byen og hvor researchen ofte starter ved et
              langt bord med kaffe.
            </p>
            <Link
              href="/kontakt"
              className="mt-10 inline-flex items-center gap-3 border border-fg/80 px-7 py-4 smallcaps text-fg transition-colors hover:bg-fg hover:text-bg w-fit"
            >
              Finn meg på Verftet
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
