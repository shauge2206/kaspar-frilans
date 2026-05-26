import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { saker, hentSak } from "@/lib/saker";
import { tagLabel } from "@/lib/tags";
import { Reveal } from "@/components/Reveal";
import { RelatedCarousel } from "@/components/RelatedCarousel";

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

  // Carousel shows the full archive (including the current sak) so the loop has
  // real prev / active / next neighbours. Users land on the current sak via the
  // detail page anyway; seeing it in the carousel preserves orientation.

  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative px-4 pt-6 md:px-8 md:pt-8">
        <div className="mx-auto max-w-[960px]">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden border border-rule bg-bg-elev">
              <Image
                src={sak.hovedbilde}
                alt={sak.bilder[0]?.tekst ?? sak.bildetekst}
                fill
                priority
                sizes="(min-width: 960px) 920px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HEADER */}
      <section className="relative px-6 pt-12 pb-8 md:px-10 md:pt-20">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute">
              <Link
                href="/saker"
                className="rounded-full border border-rule bg-bg-elev px-3 py-1.5 text-ink transition-colors hover:bg-bg-elev-2"
              >
                ← Saker
              </Link>
              {sak.emneknagger[0] ? (
                <span className="text-amber">{tagLabel(sak.emneknagger[0])}</span>
              ) : null}
              <span>{sak.publikasjon}</span>
              <time dateTime={sak.datoIso}>{sak.dato}</time>
              <span className="text-amber">
                {sak.lesetidMinutter} min lesing
              </span>
            </div>
          </Reveal>

          <Reveal delay={50}>
            <h1 className="mt-8 font-serif text-[clamp(2.2rem,3.6vw+1rem,4.6rem)] leading-[1.05] tracking-[-0.02em] text-ink">
              {sak.tittel}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-[60ch] font-serif italic text-[clamp(1.15rem,1vw+1rem,1.5rem)] font-light leading-[1.45] text-ink-soft">
              {sak.ingress}
            </p>
          </Reveal>
        </div>
      </section>

      {/* META + BILDETEKST */}
      <section className="relative px-6 pb-12 md:px-10">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="flex flex-col gap-2 border-y border-rule py-5 md:flex-row md:items-center md:justify-between">
              <p className="text-xs leading-relaxed text-ink-mute md:max-w-[55ch]">
                {sak.bildetekst}
              </p>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-ink-mute">
                Foto: {sak.fotograf}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="relative px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <article className="prose-longform">
              {sak.brodtekst.slice(0, 2).map((p, i) => (
                <p key={`a-${i}`}>{p}</p>
              ))}
              {sak.pullquote ? (
                <blockquote className="pullquote">{sak.pullquote}</blockquote>
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
            <div className="mb-10 flex items-end justify-between gap-6 border-t border-rule pt-10">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink-mute">
                  Andre saker
                </p>
                <h2 className="mt-2 font-serif text-[clamp(1.6rem,2vw+1rem,2.6rem)] leading-[1.05] tracking-tight text-ink">
                  Bla videre
                </h2>
              </div>
              <Link
                href="/saker"
                className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-ink hover:text-amber transition-colors"
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
