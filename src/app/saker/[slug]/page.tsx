import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getSak, saker } from "@/lib/saker";
import { CursorPanImage } from "@/components/CursorPanImage";
import { ReadingProgress } from "@/components/ReadingProgress";
import { FadeIn, RevealGroup, RevealItem } from "@/components/Reveal";
import { TransitionLink } from "@/components/TransitionLink";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return saker.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sak = getSak(slug);
  if (!sak) return { title: "Sak ikke funnet" };
  return {
    title: sak.tittel,
    description: sak.ingress,
  };
}

export default async function SakPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const sak = getSak(slug);
  if (!sak) notFound();

  const index = saker.findIndex((s) => s.slug === slug);
  const next = saker[(index + 1) % saker.length];

  return (
    <article className="bg-paper text-ink">
      <ReadingProgress />

      {/* sticky article header */}
      <div className="sticky top-14 z-20 border-b border-hairline bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/65">
        <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 sm:px-8">
          <TransitionLink
            href="/saker"
            className="focus-ring -ml-1 inline-flex items-center gap-2 rounded-[2px] px-1 py-0.5 text-ink/70 transition-colors hover:text-ink"
          >
            <span aria-hidden>←</span> Saker
          </TransitionLink>
          <span aria-hidden className="dot-divider" />
          <span className="truncate text-ink/70">{sak.seksjon}</span>
          <span className="ml-auto hidden tabular text-ink/55 sm:inline">
            {sak.publikasjon} · {sak.dato}
          </span>
        </div>
      </div>

      {/* hero */}
      <section className="mx-auto max-w-[1240px] px-5 pt-10 sm:px-8 sm:pt-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              {sak.seksjon}
            </p>
            <p className="mt-3 font-mono text-[11px] tabular uppercase tracking-[0.16em] text-ink/55">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(saker.length).padStart(2, "0")}
            </p>
          </div>

          <div className="col-span-12 sm:col-span-9">
            <RevealGroup className="space-y-5">
              <RevealItem
                as="h1"
                className="text-[clamp(2rem,4.6vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.022em]"
              >
                {sak.tittel}
              </RevealItem>
              <RevealItem
                as="p"
                className="max-w-[58ch] text-[17px] leading-[1.6] text-ink/75"
              >
                {sak.ingress}
              </RevealItem>
              <RevealItem className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                <span className="tabular">{sak.publikasjon}</span>
                <span aria-hidden className="dot-divider" />
                <time dateTime={sak.datoIso} className="tabular">
                  {sak.dato}
                </time>
                <span aria-hidden className="dot-divider" />
                <span>{sak.sted}</span>
                <span aria-hidden className="dot-divider" />
                <span>Foto · {sak.fotograf}</span>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* hero image */}
      <section className="mx-auto mt-12 max-w-[1240px] px-5 sm:px-8">
        <div className="mask-reveal aspect-[16/9] w-full overflow-hidden bg-ink/5">
          <CursorPanImage
            src={sak.hovedbilde}
            alt={sak.bildetekst}
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1240px"
            containerClassName="h-full w-full"
          />
        </div>
        <p className="mt-3 max-w-[80ch] font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
          {sak.bildetekst}
        </p>
      </section>

      {/* body */}
      <section className="mx-auto mt-20 max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-32 space-y-5 border-l border-hairline pl-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
              <div>
                <p className="text-ink/45">Publikasjon</p>
                <p className="mt-1 text-ink">{sak.publikasjon}</p>
              </div>
              <div>
                <p className="text-ink/45">Sjanger</p>
                <p className="mt-1 text-ink">{sak.seksjon}</p>
              </div>
              <div>
                <p className="text-ink/45">Sted</p>
                <p className="mt-1 text-ink">{sak.sted}</p>
              </div>
              <div>
                <p className="text-ink/45">Dato</p>
                <p className="mt-1 tabular text-ink">{sak.dato}</p>
              </div>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9">
            <FadeIn>
              <p className="text-[20px] leading-[1.55] tracking-[-0.005em] text-ink first-letter:mr-2 first-letter:float-left first-letter:text-[3.6rem] first-letter:font-medium first-letter:leading-[0.88] first-letter:tracking-[-0.03em]">
                {sak.brodtekst[0]}
              </p>
            </FadeIn>

            {sak.brodtekst.slice(1, 3).map((p, i) => (
              <FadeIn key={i} delay={0.06 * (i + 1)}>
                <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.7] text-ink/80">
                  {p}
                </p>
              </FadeIn>
            ))}

            {sak.brodtekst.slice(3).map((p, i) => (
              <FadeIn key={i} delay={0.04 * i}>
                <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.7] text-ink/80">
                  {p}
                </p>
              </FadeIn>
            ))}

            {/* gallery */}
            {sak.bilder.length > 1 ? (
              <section className="mt-20">
                <div className="flex items-center justify-between border-b border-hairline pb-3">
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                    Bildemateriale
                  </h2>
                  <span className="font-mono text-[11px] tabular uppercase tracking-[0.16em] text-ink/45">
                    {String(sak.bilder.length).padStart(2, "0")} bilder
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-12 gap-4">
                  {sak.bilder.map((b, i) => (
                    <FadeIn
                      key={b.src}
                      delay={0.05 * i}
                      className={
                        i === 0
                          ? "col-span-12"
                          : "col-span-6 sm:col-span-6"
                      }
                    >
                      <div
                        className={`relative w-full overflow-hidden border border-hairline bg-ink/5 ${
                          i === 0
                            ? "aspect-[16/9]"
                            : "aspect-[3/4]"
                        }`}
                      >
                        <Image
                          src={b.src}
                          alt={b.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                        />
                      </div>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                        Bilde {String(i + 1).padStart(2, "0")} — {b.alt}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </section>

      {/* next sak */}
      <section className="mx-auto mt-32 max-w-[1240px] border-t border-hairline px-5 pt-8 sm:px-8">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
          <span>Neste sak</span>
          <span className="tabular">
            {String(((index + 1) % saker.length) + 1).padStart(2, "0")} /{" "}
            {String(saker.length).padStart(2, "0")}
          </span>
        </div>

        <TransitionLink
          href={`/saker/${next.slug}`}
          className="focus-ring group mt-6 grid grid-cols-12 items-end gap-6 pb-20"
        >
          <div className="col-span-12 sm:col-span-7">
            <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2">
              {next.tittel}
            </h3>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.65] text-ink/70">
              {next.ingress}
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
              {next.publikasjon} ·{" "}
              <time dateTime={next.datoIso} className="tabular">
                {next.dato}
              </time>
            </p>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-hairline bg-ink/5">
              <Image
                src={next.hovedbilde}
                alt={next.bildetekst}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </div>
          </div>
        </TransitionLink>
      </section>
    </article>
  );
}
