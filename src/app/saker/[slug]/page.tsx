import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  articles,
  formatCoord,
  getArticle,
  themes,
} from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const index = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(index + 1) % articles.length];
  const prev = articles[(index - 1 + articles.length) % articles.length];

  return (
    <article>
      <section className="relative overflow-hidden border-b border-line/40">
        <div className="absolute inset-0 contour pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-10 pb-14">
          <Link
            href="/saker"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-deep/70 hover:text-accent transition-colors"
          >
            <span aria-hidden>←</span>
            Tilbake til arkivet
          </Link>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{article.publication}</span>
                <span>·</span>
                <span className="tabular">{article.dateLabel}</span>
              </div>
              <h1 className="font-semibold tracking-[-0.02em] leading-[1.02] text-[clamp(2rem,4.6vw,3.8rem)] text-ink">
                {article.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {article.themes.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 text-paper"
                    style={{ background: themes[t].color }}
                  >
                    {themes[t].label}
                  </span>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 lg:pl-8 lg:border-l border-line/50">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-3">
                Sted
              </div>
              <div className="text-lg font-semibold tracking-tight text-ink">
                {article.location.name}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-deep/55 mt-1">
                {article.location.region}
              </div>
              <div className="font-mono text-[12px] text-deep tabular mt-3">
                {formatCoord(article.location.lat, article.location.lng)}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-line/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14">
          <figure className="relative w-full aspect-[16/9] bg-fog overflow-hidden rounded-lg">
            <Image
              src={article.images[0]!.src}
              alt={article.images[0]!.alt}
              fill
              priority
              sizes="(min-width: 1400px) 1320px, 100vw"
              className="object-cover"
            />
          </figure>
          <figcaption className="mt-4 grid md:grid-cols-[1fr_auto] gap-4 items-baseline">
            <p className="text-[14.5px] leading-relaxed text-deep/80 font-serif max-w-2xl">
              {article.caption}
            </p>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55">
              {article.photoCredit}
            </span>
          </figcaption>
        </div>
      </section>

      <section className="border-b border-line/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 lg:col-start-2">
            <p className="font-serif text-[20px] md:text-[22px] leading-[1.55] text-ink mb-10">
              {article.excerpt}
            </p>
            <div className="space-y-6 font-serif text-[17px] leading-[1.7] text-deep/90">
              {article.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-12 pt-6 border-t border-line/50 flex flex-wrap gap-6 items-baseline">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55">
                Publisert i
              </span>
              <span className="text-[15px] text-ink font-semibold">
                {article.publication}
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 tabular">
                {article.dateLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep text-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <div className="grid md:grid-cols-2 gap-10">
            <Link
              href={`/saker/${prev.slug}`}
              className="group block border border-paper/15 rounded-lg p-7 hover:border-paper/40 transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55 mb-4 flex items-center gap-2">
                <span aria-hidden>←</span>
                Forrige sak
              </div>
              <div className="text-xl font-semibold tracking-tight leading-snug group-hover:text-accent transition-colors">
                {prev.title}
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper/55 mt-3 tabular">
                {prev.location.name} · {prev.dateLabel}
              </div>
            </Link>
            <Link
              href={`/saker/${next.slug}`}
              className="group block border border-paper/15 rounded-lg p-7 hover:border-paper/40 transition-colors text-right"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55 mb-4 flex items-center justify-end gap-2">
                Neste sak
                <span aria-hidden>→</span>
              </div>
              <div className="text-xl font-semibold tracking-tight leading-snug group-hover:text-accent transition-colors">
                {next.title}
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper/55 mt-3 tabular">
                {next.location.name} · {next.dateLabel}
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
