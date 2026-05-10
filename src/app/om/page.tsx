import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata = {
  title: "Om Kaspar",
  description:
    "Kaspar Knudsen er frilansjournalist i Bergen med kontor på USF Verftet, Nordnes. Mastergrad i undersøkende journalistikk og 15 år i mediebransjen.",
};

const verdier = [
  { ord: "Likeverd", tekst: "" },
  { ord: "Empati", tekst: "" },
  { ord: "Høflighet og vennlighet", tekst: "" },
  { ord: "Holder ord og avtaler", tekst: "" },
  { ord: "Ærlighet", tekst: "" },
  { ord: "Samfunnsengasjert", tekst: "" },
  { ord: "Kritisk tenkning", tekst: "" },
  { ord: "Nysgjerrig", tekst: "" },
  { ord: "Åpen og inkluderende", tekst: "" },
];

const tjenester = [
  {
    nr: "01",
    tittel: "Innsalg av enkelt-ideer",
    tekst: "Idéer selges inn til redaksjoner.",
  },
  {
    nr: "02",
    tittel: "Påbegynte og ferdige artikler",
    tekst:
      "Innsalg av påbegynte eller ferdige artikler — bilder og tekst, mulighet for gjenbruk.",
  },
  {
    nr: "03",
    tittel: "Enkeltoppdrag",
    tekst:
      "Enkeltoppdrag for redaksjoner og fagblader. Kritisk og undersøkende journalistikk, menneskenære historier.",
  },
  {
    nr: "04",
    tittel: "Periode-jobbing i redaksjoner",
    tekst:
      "Periode-jobbing i redaksjoner. Prismodell: stykkpris per sak eller betalt per periode.",
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
              Kaspar
              <span className="block italic text-amber-soft">Knudsen</span>
            </h1>
            <p className="mt-12 max-w-3xl font-display text-2xl md:text-3xl leading-[1.3] text-fg-muted">
              Frilansjournalist i Bergen med kontor på USF Verftet, Nordnes.
              Mastergrad i undersøkende journalistikk og 15 år i mediebransjen.
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
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="eyebrow">Bakgrunn</p>
              <div className="mt-6 space-y-7 font-display text-xl md:text-[1.5rem] leading-[1.5] text-fg">
                <p>
                  Kaspar Knudsen er frilansjournalist i Bergen med kontor på
                  USF Verftet, Nordnes. Mastergrad i undersøkende
                  journalistikk og 15 år i mediebransjen.
                </p>
                <p>
                  Gravejournalistikk innenfor arbeidsliv, krim og flere
                  områder — drar ut i felt og leverer både bilder og tekst.
                </p>
                <p>
                  Leverer kvalitetsjournalistikk til nisjepublikasjoner som
                  Fiskeribladet, Intrafish og Kystens Næringsliv.
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
            <p className="eyebrow">Kjerneverdier</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1] max-w-4xl">
              Kjerneverdier
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
                    {v.tekst && (
                      <p className="mt-3 text-fg-muted leading-relaxed max-w-md">
                        {v.tekst}
                      </p>
                    )}
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
              <span className="text-amber">«</span>
              Økonomisk bærekraft i selskapet, å levere kvalitetsjournalistikk,
              frihet under ansvar — å styre bedriften selv
              <span className="text-amber">»</span>
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
              Salgsmodell
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
              Kontor · Nordnes
            </p>
            <h2 className="mt-5 font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.015em] max-w-4xl">
              USF Verftet
            </h2>
            <p className="mt-7 max-w-2xl text-fg/85 leading-relaxed">
              Kontor på USF Verftet, Nordnes i Bergen.
            </p>
            <Link
              href="/kontakt"
              className="mt-10 inline-flex items-center gap-3 border border-fg/80 px-7 py-4 smallcaps text-fg transition-colors hover:bg-fg hover:text-bg w-fit"
            >
              Kontaktinformasjon
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
