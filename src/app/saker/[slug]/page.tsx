import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { saker, hentSak } from "@/lib/saker";
import { tagLabel } from "@/lib/tags";
import { Reveal } from "@/components/reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { RelatedCarousel } from "@/components/related-carousel";

export function generateStaticParams() {
  return saker.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const sak = hentSak(slug);
  if (!sak) return {};
  return {
    title: `${sak.tittel} – Kaspar Knudsen`,
    description: sak.ingress,
    openGraph: {
      title: sak.tittel,
      description: sak.ingress,
      images: [{ url: sak.hovedbilde }],
    },
  };
}

export default async function SakPage(props: Props) {
  const { slug } = await props.params;
  const sak = hentSak(slug);
  if (!sak) notFound();

  const primaryTag = sak.emneknagger[0];

  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative px-4 pt-6 md:px-8 md:pt-8">
        <div className="mx-auto max-w-[960px]">
          <Reveal y={20}>
            <ParallaxImage
              src={sak.hovedbilde}
              alt={sak.bilder[0]?.tekst ?? sak.tittel}
              priority
              className="aspect-[16/9] rounded-none ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift"
              offset={60}
              sizes="(min-width: 960px) 920px, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {/* HEADER */}
      <section className="relative px-6 pt-12 pb-8 md:px-10 md:pt-20">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-mute">
              <Link
                href="/saker"
                className="rounded-none bg-paper-2 px-3 py-1.5 text-ink ring-1 ring-line transition-colors hover:bg-paper-3"
              >
                ← Saker
              </Link>
              {primaryTag ? (
                <span className="text-coral-500">{tagLabel(primaryTag)}</span>
              ) : null}
              <span>{sak.publikasjon}</span>
              <time dateTime={sak.datoIso}>{sak.dato}</time>
              <span className="text-coral-500">
                {sak.lesetidMinutter} min lesing
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 font-display text-[clamp(1.87rem,3.06vw+0.85rem,3.91rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {sak.tittel}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[60ch] font-display text-[clamp(1.15rem,1vw+1rem,1.5rem)] font-light italic leading-[1.45] text-ink-2">
              {sak.ingress}
            </p>
          </Reveal>
        </div>
      </section>

      {/* META + BILDETEKST */}
      <section className="relative px-6 pb-12 md:px-10">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="flex flex-col gap-2 border-y border-line/70 py-5 md:flex-row md:items-center md:justify-between">
              <p className="text-xs leading-relaxed text-mute md:max-w-[55ch]">
                {sak.bildetekst}
              </p>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-mute">
                Foto: {sak.fotograf}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="relative px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <article className="prose-fluid">
              {sak.brodtekst.slice(0, 2).map((p, i) => (
                <p key={`a-${i}`}>{p}</p>
              ))}
              {sak.pullquote ? (
                <blockquote className="my-10 border-l-2 border-coral-400 pl-6 font-display text-[clamp(1.4rem,1.4vw+1rem,1.9rem)] font-light italic leading-[1.4] text-ink">
                  «{sak.pullquote}»
                </blockquote>
              ) : null}
              {sak.brodtekst.slice(2).map((p, i) => (
                <p key={`b-${i}`}>{p}</p>
              ))}
            </article>
          </Reveal>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6 border-t border-line/70 pt-10">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Andre saker
                </p>
                <h2 className="mt-2 font-display text-[clamp(1.6rem,2vw+1rem,2.6rem)] font-medium leading-[1.05] tracking-tight text-ink">
                  Bla videre
                </h2>
              </div>
              <Link
                href="/saker"
                className="link-underline font-mono text-[0.78rem] uppercase tracking-[0.18em] text-ink"
              >
                Alle saker →
              </Link>
            </div>
          </Reveal>

          <RelatedCarousel items={saker} />
        </div>
      </section>
    </>
  );
}
