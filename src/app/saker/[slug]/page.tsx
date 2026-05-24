import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { saker, getSak } from "@/lib/saker";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { ParallaxImage } from "@/components/parallax-image";
import { ArticleCard } from "@/components/article-card";

export function generateStaticParams() {
  return saker.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(
  props: Props,
): Promise<Metadata> {
  const { slug } = await props.params;
  const sak = getSak(slug);
  if (!sak) return {};
  return {
    title: sak.tittel,
    description: sak.ingress,
    openGraph: {
      title: sak.tittel,
      description: sak.ingress,
      images: [{ url: sak.hovedbilde }],
    },
  };
}

const sectionLabel = {
  GRAVING: "Graving",
  REPORTASJE: "Reportasje",
  FEATURE: "Feature",
} as const;

export default async function SakPage(props: Props) {
  const { slug } = await props.params;
  const sak = getSak(slug);
  if (!sak) notFound();

  const others = saker.filter((s) => s.slug !== slug);

  return (
    <>
      <ScrollProgress />

      {/* HERO IMAGE */}
      <section className="relative px-4 pt-6 md:px-8 md:pt-8">
        <div className="mx-auto max-w-[960px]">
          <Reveal y={20}>
            <ParallaxImage
              src={sak.hovedbilde}
              alt={sak.bilder[0]?.alt ?? sak.tittel}
              priority
              className="aspect-[16/9] rounded-[28px] ring-1 ring-line/70 shadow-soft"
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
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-mute">
              <Link
                href="/saker"
                className="rounded-full bg-paper-2 px-3 py-1.5 text-ink ring-1 ring-line transition-colors hover:bg-paper-3"
              >
                ← Saker
              </Link>
              <span className="text-coral-500">{sectionLabel[sak.seksjon]}</span>
              <span>{sak.publikasjon}</span>
              <span>{sak.sted}</span>
              <time dateTime={sak.datoIso}>{sak.dato}</time>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 font-display text-[clamp(2.2rem,3.6vw+1rem,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {sak.tittel}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[60ch] font-display text-[clamp(1.15rem,1vw+1rem,1.5rem)] font-light leading-[1.45] text-ink-2">
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
                <p key={i}>{p}</p>
              ))}
            </article>
          </Reveal>

          <Reveal>
            <article className="prose-fluid">
              {sak.brodtekst.slice(2).map((p, i) => (
                <p key={i}>{p}</p>
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
                <Kicker>Andre saker</Kicker>
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

          <div className="grid gap-6 md:grid-cols-2">
            {others.map((s) => (
              <ArticleCard key={s.slug} sak={s} size="md" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
