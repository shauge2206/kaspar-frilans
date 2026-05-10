import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSak, saker } from "@/lib/saker";
import { SplitText } from "@/components/split-text";

export function generateStaticParams() {
  return saker.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sak = getSak(slug);
  if (!sak) return { title: "Saken finnes ikke" };
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

export default async function SakPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sak = getSak(slug);
  if (!sak) notFound();

  const others = saker.filter((s) => s.slug !== sak.slug).slice(0, 2);
  const [first, ...rest] = sak.brodtekst;
  const midpoint = Math.ceil(rest.length / 2);
  const beforePull = rest.slice(0, midpoint);
  const afterPull = rest.slice(midpoint);

  return (
    <article className="mx-auto w-full max-w-[1280px] px-5 md:px-10 pt-6 pb-20">
      {/* breadcrumb */}
      <p className="dateline mb-6">
        <Link href="/saker" className="link-editorial">
          ← Tilbake til arkivet
        </Link>
      </p>

      <header className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="smallcaps text-accent fade-up">
            {sak.seksjon} · {sak.publikasjon.toUpperCase()}
          </p>
          <SplitText
            as="h1"
            text={sak.tittel}
            className="font-serif font-black text-[2.4rem] sm:text-[3.4rem] md:text-[4.6rem] leading-[0.98] tracking-[-0.03em] mt-4 block"
            step={45}
          />
          <p
            className="mt-6 max-w-2xl text-xl md:text-2xl leading-snug text-ink-soft fade-up"
            style={{ animationDelay: "900ms" }}
          >
            {sak.ingress}
          </p>
        </div>
        <aside className="md:col-span-4 md:col-rule md:pl-8 fade-up" style={{ animationDelay: "700ms" }}>
          <div className="rule-bar mb-4" />
          <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-sm">
            <dt className="smallcaps text-ink-mute">Av</dt>
            <dd className="text-ink">Kaspar</dd>
            <dt className="smallcaps text-ink-mute">For</dt>
            <dd className="text-ink">{sak.publikasjon}</dd>
            <dt className="smallcaps text-ink-mute">Sted</dt>
            <dd className="text-ink">{sak.sted}</dd>
            <dt className="smallcaps text-ink-mute">Dato</dt>
            <dd className="text-ink">
              <time dateTime={sak.datoIso}>{sak.dato}</time>
            </dd>
            <dt className="smallcaps text-ink-mute">Seksjon</dt>
            <dd className="text-ink">{sak.seksjon}</dd>
          </dl>
        </aside>
      </header>

      <div className="rule-thick my-10" />

      {/* hero photo + caption */}
      <figure className="mb-12 fade-in">
        <div className="relative aspect-[16/9] bg-paper-deep overflow-hidden">
          <Image
            src={sak.hovedbilde}
            alt={sak.bildetekst}
            fill
            priority
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
          <p className="text-ink-soft leading-relaxed">{sak.bildetekst}</p>
          <p className="dateline">FOTO · {sak.fotograf.toUpperCase()}</p>
        </figcaption>
      </figure>

      {/* article body in three columns on desktop */}
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-3">
          <p className="dropcap font-serif text-[1.2rem] md:text-[1.32rem] leading-[1.65] text-ink">
            {first}
          </p>

          {beforePull.map((p, i) => (
            <p
              key={`b-${i}`}
              className="mt-6 font-serif text-[1.12rem] md:text-[1.18rem] leading-[1.7] text-ink"
            >
              {p}
            </p>
          ))}

          {afterPull.map((p, i) => (
            <p
              key={`a-${i}`}
              className="mt-6 font-serif text-[1.12rem] md:text-[1.18rem] leading-[1.7] text-ink"
            >
              {p}
            </p>
          ))}

          <p className="mt-10 dateline border-t border-rule-soft pt-6">
            Saken stod først på trykk i {sak.publikasjon},{" "}
            <time dateTime={sak.datoIso}>{sak.dato}</time>. Utdrag gjengitt
            med tillatelse.
          </p>
        </div>
      </div>

      {/* gallery */}
      <section className="mt-16">
        <div className="rule-thick mb-6" />
        <p className="smallcaps text-accent mb-6">Bildegalleri</p>
        <div className="grid gap-6 md:grid-cols-3">
          {sak.bilder.map((b, i) => (
            <figure key={i} className="card-image relative aspect-[4/5] bg-paper-deep">
              <Image
                src={b.src}
                alt={b.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* read next */}
      <section className="mt-20">
        <div className="rule-thick mb-8" />
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.02em]">
            Les videre
          </h2>
          <Link href="/saker" className="smallcaps link-editorial">
            Hele arkivet →
          </Link>
        </div>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {others.map((o, idx) => (
            <Link
              key={o.slug}
              href={`/saker/${o.slug}`}
              className={["card group block", idx > 0 ? "md:col-rule md:pl-10" : ""].join(" ")}
            >
              <div className="card-image relative aspect-[4/3] bg-paper-deep">
                <Image
                  src={o.hovedbilde}
                  alt={o.bildetekst}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="dateline mt-4">
                {o.seksjon} · {o.publikasjon.toUpperCase()}
              </p>
              <h3 className="font-serif font-semibold text-2xl md:text-3xl leading-[1.08] tracking-[-0.02em] mt-3">
                <span className="card-headline">{o.tittel}</span>
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
