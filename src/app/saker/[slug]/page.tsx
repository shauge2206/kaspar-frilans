import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticle } from "@/lib/articles";
import FadeUp from "../../components/FadeUp";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/saker/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage(
  props: PageProps<"/saker/[slug]">
) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const idx = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(idx + 1) % articles.length];
  const prev = articles[(idx - 1 + articles.length) % articles.length];

  return (
    <article className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {/* Crumb */}
      <div className="grid grid-cols-12 gap-x-6 pt-12 md:pt-16">
        <div className="col-span-12 flex items-baseline justify-between">
          <Link
            href="/saker"
            className="link-rule font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            ← Saker
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
            NR. {article.number} – {article.category}
          </span>
        </div>
      </div>

      {/* Headline */}
      <header className="grid grid-cols-12 gap-x-6 pt-10 pb-12 md:pt-16 md:pb-20">
        <div className="col-span-12 md:col-span-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent tnum">
            {article.number}
          </span>
        </div>
        <div className="col-span-12 md:col-span-11">
          <h1 className="font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-[88px]">
            {article.title}
          </h1>

          <div className="mt-10 grid grid-cols-12 gap-x-6 border-t border-foreground pt-6">
            <div className="col-span-12 md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Dato
              </div>
              <div className="mt-2 font-mono text-[12px] uppercase tracking-[0.18em] tnum">
                {article.date}
              </div>
            </div>
            <div className="col-span-12 mt-6 md:col-span-4 md:mt-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Publikasjon
              </div>
              <div className="mt-2 font-mono text-[12px] uppercase tracking-[0.18em]">
                {article.publication}
              </div>
            </div>
            <div className="col-span-12 mt-6 md:col-span-4 md:mt-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Av
              </div>
              <div className="mt-2 font-mono text-[12px] uppercase tracking-[0.18em]">
                Kaspar Knudsen
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Lead image */}
      <FadeUp>
        <figure className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-hairline">
              <Image
                src={article.images[0].src}
                alt={article.images[0].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption className="col-span-12 mt-4 grid grid-cols-12 gap-x-6 md:col-span-12">
            <p className="col-span-12 max-w-3xl font-serif text-base italic leading-relaxed text-muted md:col-span-8 md:col-start-2">
              {article.caption}{" "}
              <span className="not-italic font-mono text-[10px] uppercase tracking-[0.18em]">
                {article.photoCredit}
              </span>
            </p>
          </figcaption>
        </figure>
      </FadeUp>

      {/* Body */}
      <section className="grid grid-cols-12 gap-x-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <aside className="col-span-12 md:col-span-3">
          <div className="md:sticky md:top-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Ingress
            </div>
            <p className="mt-4 font-serif text-lg leading-snug tracking-tight">
              {article.excerpt}
            </p>
          </div>
        </aside>

        <div className="col-span-12 mt-12 md:col-span-7 md:col-start-5 md:mt-0">
          <div className="font-serif text-xl leading-[1.55] tracking-[-0.005em] md:text-[22px]">
            {article.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 40}>
                <p
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-foreground"
                      : "mt-6"
                  }
                >
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>

          <div className="mt-16 border-t border-foreground pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
            {article.date} / {article.publication.toUpperCase()} /
            KASPAR KNUDSEN
          </div>
        </div>
      </section>

      <hr className="rule-strong" />

      {/* Pagination */}
      <nav
        aria-label="Sak-navigasjon"
        className="grid grid-cols-12 gap-x-6 py-16 md:py-24"
      >
        <Link
          href={`/saker/${prev.slug}`}
          className="group col-span-12 border-r border-hairline pr-6 md:col-span-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            ← Forrige sak – NR. {prev.number}
          </div>
          <div className="mt-3 font-serif text-2xl leading-tight tracking-tight transition-[letter-spacing] duration-200 group-hover:tracking-[-0.018em] md:text-3xl">
            {prev.title}
          </div>
        </Link>
        <Link
          href={`/saker/${next.slug}`}
          className="group col-span-12 mt-10 pl-0 text-right md:col-span-6 md:mt-0 md:pl-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Neste sak – NR. {next.number} →
          </div>
          <div className="mt-3 font-serif text-2xl leading-tight tracking-tight transition-[letter-spacing] duration-200 group-hover:tracking-[-0.018em] md:text-3xl">
            {next.title}
          </div>
        </Link>
      </nav>
    </article>
  );
}
