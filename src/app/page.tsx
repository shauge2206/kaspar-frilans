import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";

export default function Home() {
  const featured = saker[0];
  const others = saker.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <ParallaxImage
          src={featured.hovedbilde}
          alt={featured.bildetekst}
          priority
          amount={0.18}
          className="absolute inset-0"
          sizes="100vw"
        />
        {/* Gradient stack */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/20 to-bg"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/30"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 md:px-10 pb-16 md:pb-24">
          <div className="max-w-5xl">
            <p className="eyebrow text-fg/80">
              Frilansjournalist · Bergen · 2010—
            </p>
            <h1 className="mt-6 font-display font-light text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.94] tracking-[-0.02em]">
              Historier <span className="italic text-amber-soft">fra felt</span>
              <span className="block">— der menneskene er.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base md:text-lg text-fg/80 leading-relaxed">
              Kaspar Knudsen er gravejournalist og featureskribent med base på
              USF Verftet. I femten år har han fortalt om arbeidsliv,
              kriminalitet, fiskeri og kystens næringer — i tekst og bilde.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/saker"
                className="group inline-flex items-center gap-3 border border-fg/80 px-7 py-4 smallcaps text-fg transition-colors hover:bg-fg hover:text-bg"
              >
                Les sakene
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/kontakt"
                className="smallcaps text-fg/80 amber-underline"
              >
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-fg/70">
          <span className="smallcaps text-[0.7rem]">Bla videre</span>
          <span className="chevron-bounce" aria-hidden>
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
              <path
                d="M7 1v18m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </div>
      </section>

      {/* INTRO / POSITIONING */}
      <section className="relative bg-bg py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 md:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Et redaksjonelt verksted</p>
              <p className="mt-6 smallcaps text-fg-muted">
                USF Verftet · Nordnes · Bergen
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={120}>
              <p className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-[-0.01em] text-fg">
                Jeg jobber sakte og grundig — der det krever tid å forstå.
                Femten år i Bergen-pressen og en mastergrad i
                gravejournalistikk har lært meg at de viktigste historiene
                sjelden roper høyest.
              </p>
              <div className="mt-12 grid sm:grid-cols-2 gap-10 md:gap-14 max-w-3xl">
                <div>
                  <p className="smallcaps text-amber">Spesialfelt</p>
                  <p className="mt-3 text-fg-muted leading-relaxed">
                    Arbeidsliv, kriminalitet, fiskeri og kystens næringer.
                    Tekst, foto og visuell historiefortelling.
                  </p>
                </div>
                <div>
                  <p className="smallcaps text-amber">Verdier</p>
                  <p className="mt-3 text-fg-muted leading-relaxed">
                    Likeverd, empati og ærlighet. Kritisk tenkning,
                    samfunnsengasjement og frihet under ansvar.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED SAK — full bleed */}
      <section className="relative">
        <Reveal>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-12 md:mb-20 flex items-end justify-between">
            <div>
              <p className="eyebrow">Hovedsak</p>
              <p className="mt-3 font-display text-3xl md:text-4xl">
                Et utvalg fra arkivet
              </p>
            </div>
            <Link
              href="/saker"
              className="hidden md:inline-flex smallcaps text-fg-muted amber-underline"
            >
              Alle saker →
            </Link>
          </div>
        </Reveal>

        <Link
          href={`/saker/${featured.slug}`}
          className="group block relative h-[80vh] min-h-[520px] w-full overflow-hidden"
        >
          <ParallaxImage
            src={featured.hovedbilde}
            alt={featured.bildetekst}
            amount={0.12}
            className="absolute inset-0"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent transition-opacity duration-700 group-hover:opacity-90"
          />
          <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 md:px-10 pb-14 md:pb-20">
            <p className="smallcaps text-amber-soft">
              {featured.publikasjon} · {featured.dato}
            </p>
            <h2 className="mt-5 font-display font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.015em] max-w-5xl">
              {featured.tittel}
            </h2>
            <p className="mt-6 max-w-2xl text-fg/80 text-base md:text-lg leading-relaxed">
              {featured.ingress}
            </p>
            <p className="mt-8 inline-flex items-center gap-3 smallcaps text-fg group-hover:text-amber transition-colors">
              Les saken
              <span aria-hidden className="transition-transform group-hover:translate-x-2">→</span>
            </p>
          </div>
        </Link>
      </section>

      {/* OTHER FEATURED */}
      <section className="py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20">
            {others.map((sak, i) => (
              <Reveal key={sak.slug} delay={i * 120}>
                <Link
                  href={`/saker/${sak.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={sak.hovedbilde}
                      alt={sak.bildetekst}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
                    />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-fg/80">
                      <span className="smallcaps">
                        {sak.publikasjon} · {sak.dato}
                      </span>
                      <span className="smallcaps">{sak.lesetidMin} min</span>
                    </div>
                  </div>
                  <h3 className="mt-7 font-display text-2xl md:text-3xl leading-tight tracking-tight transition-colors group-hover:text-amber-soft">
                    {sak.tittel}
                  </h3>
                  <p className="mt-4 text-fg-muted leading-relaxed max-w-xl">
                    {sak.ingress}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-20 flex justify-center">
              <Link
                href="/saker"
                className="smallcaps text-fg amber-underline"
              >
                Se alle saker →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA — quiet, editorial */}
      <section className="relative py-32 md:py-44 border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Et samarbeid</p>
              <h2 className="mt-6 font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.015em]">
                Har du en sak?
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <Reveal delay={120}>
              <p className="font-display text-xl md:text-2xl leading-snug text-fg max-w-2xl">
                Jeg tar imot oppdrag fra redaksjoner, fagblader og
                organisasjoner. Tips og henvendelser behandles fortrolig.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="mailto:kaspar@kasparknudsen.no"
                  className="inline-flex items-center gap-3 border border-amber px-7 py-4 smallcaps text-amber transition-colors hover:bg-amber hover:text-bg"
                >
                  Send en e-post
                  <span aria-hidden>→</span>
                </a>
                <Link
                  href="/kontakt"
                  className="smallcaps text-fg-muted amber-underline"
                >
                  Andre måter å nå meg på
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
