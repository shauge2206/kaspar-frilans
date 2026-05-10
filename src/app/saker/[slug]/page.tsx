import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findSak, saker } from "@/lib/saker";

export function generateStaticParams() {
  return saker.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sak = findSak(slug);
  if (!sak) return {};
  return {
    title: `${sak.tittel} — Kaspar Knudsen · Magasinet`,
    description: sak.ingress,
  };
}

export default async function SakDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sak = findSak(slug);
  if (!sak) notFound();

  const idx = saker.findIndex((s) => s.slug === sak.slug);
  const next = saker[(idx + 1) % saker.length];

  return (
    <article className="page-turn mx-auto w-full max-w-[1320px] px-6 lg:px-12 py-10 lg:py-16">
      {/* Spread header */}
      <header className="border-b border-ink/70 pb-3 flex items-baseline justify-between text-[0.78rem] smallcaps">
        <span>Volum I · Nr. 1</span>
        <span>{sak.kategori}</span>
        <span>Side {sak.sidetall}</span>
      </header>

      {/* Title block */}
      <div className="mt-12 lg:mt-16 grid gap-8 lg:grid-cols-[1fr_2.4fr] items-end">
        <div>
          <p className="smallcaps text-[0.78rem] text-accent">
            Sak {sak.nummer}
          </p>
          <p className="mt-3 smallcaps text-[0.74rem] text-ink-soft">
            {sak.publikasjon}
            <br />
            <span className="not-smallcaps font-display italic text-[1.05rem] text-ink">
              {sak.dato}
            </span>
          </p>
        </div>
        <h1 className="font-display font-medium text-[clamp(2.4rem,6.4vw,5.4rem)] leading-[0.96] tracking-tight">
          {sak.tittel}
        </h1>
      </div>

      {/* Hero image */}
      <figure className="mt-10 lg:mt-14">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper-deep">
          <Image
            src={sak.hovedbilde}
            alt={sak.bildetekst}
            fill
            priority
            sizes="(min-width: 1024px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-3 text-[0.85rem]">
          <span className="italic text-ink-soft leading-snug max-w-3xl">
            {sak.bildetekst}
          </span>
          <span className="smallcaps shrink-0 text-ink-soft">
            Foto: {sak.fotograf}
          </span>
        </figcaption>
      </figure>

      {/* Two-column body with margin pull-quote */}
      <div className="mt-14 lg:mt-20 grid gap-10 lg:gap-16 lg:grid-cols-[1fr_2.4fr]">
        {/* Margin column */}
        <aside className="lg:sticky lg:top-24 self-start space-y-10">
          <div className="margin-quote">
            <span className="block smallcaps text-[0.7rem] text-accent">
              Sitat fra saken
            </span>
            <p className="mt-3 font-display italic text-[1.5rem] leading-[1.18] tracking-tight text-ink border-l-2 border-accent pl-4">
              «{sak.uthevet}»
            </p>
          </div>
          <div>
            <span className="block smallcaps text-[0.7rem] text-ink-soft">
              Detaljer
            </span>
            <dl className="mt-3 space-y-2 text-[0.92rem] leading-relaxed">
              <div className="flex justify-between gap-4 border-b border-rule pb-1.5">
                <dt className="smallcaps text-[0.7rem] text-ink-soft">
                  Publisert
                </dt>
                <dd>{sak.dato}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-rule pb-1.5">
                <dt className="smallcaps text-[0.7rem] text-ink-soft">
                  I
                </dt>
                <dd className="italic">{sak.publikasjon}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-rule pb-1.5">
                <dt className="smallcaps text-[0.7rem] text-ink-soft">
                  Sjanger
                </dt>
                <dd>{sak.kategori}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="smallcaps text-[0.7rem] text-ink-soft">
                  Side
                </dt>
                <dd className="font-display lining-nums tabular-nums">
                  {sak.sidetall}
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        {/* Body */}
        <div>
          <p className="font-display italic text-[1.6rem] leading-[1.25] tracking-tight text-ink-soft mb-10">
            {sak.ingress}
          </p>

          <div className="prose-spread font-serif text-[1.06rem] leading-[1.85] text-ink space-y-6 lg:columns-2 lg:gap-12 col-rule [column-fill:balance]">
            {sak.kropp.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "dropcap break-inside-avoid"
                    : "break-inside-avoid"
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Photo gallery — second spread */}
          <div className="mt-16 lg:mt-24 grid gap-6 sm:grid-cols-2">
            {sak.bilder.slice(1).map((b, i) => (
              <figure key={b.src} className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 flex items-baseline justify-between gap-3 text-[0.78rem]">
                  <span className="italic text-ink-soft">{b.alt}</span>
                  <span className="smallcaps text-ink-soft shrink-0">
                    Fig. {i + 2}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* End of spread */}
      <div className="mt-20 lg:mt-28 border-t border-ink/70 pt-3 flex items-baseline justify-between text-[0.78rem] smallcaps">
        <span>Slutt på sak {sak.nummer}</span>
        <span className="hidden md:inline">
          Lest ferdig — vend om for neste sak
        </span>
        <span>Side {sak.sidetall + 4}</span>
      </div>

      {/* Next */}
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto] items-end">
        <Link
          href={`/saker/${next.slug}`}
          className="group block"
        >
          <span className="smallcaps text-[0.74rem] text-accent">
            Fortsetter på side {next.sidetall} →
          </span>
          <p className="mt-2 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-tight group-hover:text-accent transition-colors">
            {next.tittel}
          </p>
          <p className="mt-1 italic text-[0.95rem] text-ink-soft">
            {next.publikasjon} · {next.dato}
          </p>
        </Link>
        <Link
          href="/saker"
          className="self-start lg:self-end smallcaps tracking-[0.2em] text-[0.82rem] under-link shrink-0"
        >
          ← Tilbake til innholdet
        </Link>
      </div>
    </article>
  );
}
