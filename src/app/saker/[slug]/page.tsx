import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { saker, getSak } from "@/lib/saker";
import ParallaxImage from "@/components/ParallaxImage";
import StickyImage from "@/components/StickyImage";
import Reveal from "@/components/Reveal";
import ReadingProgress from "@/components/ReadingProgress";

export function generateStaticParams() {
  return saker.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/saker/[slug]">) {
  const { slug } = await props.params;
  const sak = getSak(slug);
  if (!sak) return {};
  return {
    title: sak.tittel,
    description: sak.ingress,
  };
}

export default async function SakDetail(props: PageProps<"/saker/[slug]">) {
  const { slug } = await props.params;
  const sak = getSak(slug);
  if (!sak) notFound();

  const others = saker.filter((s) => s.slug !== slug);

  return (
    <article>
      <ReadingProgress />

      {/* HERO */}
      <header className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <ParallaxImage
          src={sak.hovedbilde}
          alt={sak.bildetekst}
          priority
          amount={0.18}
          className="absolute inset-0"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/10 to-bg"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/30"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 md:px-10 pb-16 md:pb-24">
          <p className="smallcaps text-amber-soft">
            {sak.publikasjon} · {sak.dato}
          </p>
          <h1 className="mt-6 font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.96] tracking-[-0.02em] max-w-6xl">
            {sak.tittel}
          </h1>
          <p className="mt-7 max-w-3xl text-base md:text-xl text-fg/85 leading-relaxed">
            {sak.ingress}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 smallcaps text-fg/80">
            <span className="inline-flex items-center gap-2 rounded-full border border-fg/30 px-4 py-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber" />
              {sak.lesetidMin} min lesetid
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-fg/30 px-4 py-2">
              {sak.sted}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-fg/30 px-4 py-2">
              Foto: {sak.fotograf}
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-fg/70">
          <span className="smallcaps text-[0.7rem]">Les saken</span>
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
      </header>

      {/* DATELINE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="smallcaps text-fg-muted">
              {sak.sted.toUpperCase()} ·{" "}
              <time dateTime={sak.datoIso}>{sak.dato}</time>
            </p>
            <div aria-hidden className="mx-auto mt-6 h-px w-12 bg-amber" />
          </Reveal>
        </div>
      </section>

      {/* OPENING TEXT (drop cap) */}
      <section className="px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <p className="font-display text-2xl md:text-3xl leading-[1.45] text-fg first-letter:font-display first-letter:text-7xl md:first-letter:text-8xl first-letter:font-medium first-letter:text-amber first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-[0.9]">
              {sak.brodtekst[0]}
            </p>
          </div>
        </Reveal>
      </section>

      {/* IMAGE 1 — sticky caption */}
      {sak.bilder[1] && (
        <StickyImage
          src={sak.bilder[1].src}
          alt={sak.bilder[1].alt}
          caption={sak.bilder[1].tekst}
          credit={sak.bilder[1].fotograf}
        />
      )}

      {/* TEXT 2 */}
      <section className="px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl space-y-7 font-display text-xl md:text-[1.4rem] leading-[1.55] text-fg">
            <p>{sak.brodtekst[1]}</p>
            {sak.brodtekst[2] && <p>{sak.brodtekst[2]}</p>}
          </div>
        </Reveal>
      </section>

      {/* IMAGE 2 — full bleed parallax */}
      <section className="my-24 md:my-40">
        <Reveal>
          <figure>
            <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
              <ParallaxImage
                src={sak.bilder[2]?.src ?? sak.hovedbilde}
                alt={sak.bilder[2]?.alt ?? sak.bildetekst}
                amount={0.14}
                className="absolute inset-0"
                sizes="100vw"
              />
            </div>
            <figcaption className="mx-auto max-w-[1400px] px-6 md:px-10 mt-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
              <p className="font-display text-lg md:text-xl text-fg max-w-2xl">
                {sak.bilder[2]?.tekst}
              </p>
              <p className="smallcaps text-fg-muted whitespace-nowrap">
                {sak.bilder[2]?.fotograf}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* CLOSING TEXT */}
      {sak.brodtekst[3] && (
        <section className="px-6 mb-32 md:mb-44">
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <p className="font-display text-xl md:text-[1.4rem] leading-[1.55] text-fg">
                {sak.brodtekst[3]}
              </p>
              <div aria-hidden className="mt-12 h-px w-16 bg-amber" />
              <p className="mt-6 smallcaps text-fg-muted">
                Saken sto først på trykk i {sak.publikasjon},{" "}
                <time dateTime={sak.datoIso}>{sak.dato}</time>.
              </p>
            </div>
          </Reveal>
        </section>
      )}

      {/* RELATED */}
      <section className="border-t border-rule py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Videre lesning</p>
            <h2 className="mt-5 font-display text-3xl md:text-5xl tracking-tight">
              Andre saker fra arkivet
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-12 md:gap-16">
            {others.map((annen, i) => (
              <Reveal key={annen.slug} delay={i * 100}>
                <Link
                  href={`/saker/${annen.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={annen.hovedbilde}
                      alt={annen.bildetekst}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
                    />
                  </div>
                  <p className="mt-6 smallcaps text-fg-muted">
                    {annen.publikasjon} · {annen.dato}
                  </p>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl leading-tight transition-colors group-hover:text-amber-soft">
                    {annen.tittel}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
