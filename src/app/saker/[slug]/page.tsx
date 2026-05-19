import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSak, saker } from "@/lib/saker";
import { Stamp } from "@/components/stamp";
import { Paperclip } from "@/components/paperclip";

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
  if (!sak) return { title: "Sak ikke funnet" };
  return {
    title: `${sak.title} – ${sak.publication}`,
    description: sak.excerpt[0],
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

  const otherSaker = saker.filter((s) => s.slug !== slug);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-10 pb-24">
      {/* breadcrumb / file path */}
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
        <Link href="/saker" className="hover:text-stamp">
          ← KH-ARKIV / SAKSARKIV
        </Link>
        <span className="mx-2">/</span>
        <span>{sak.caseNumber}</span>
      </div>

      {/* opened file: kraft folder under, paper sheet on top */}
      <div className="relative mt-6">
        {/* kraft sheet behind */}
        <div className="folder absolute inset-0 -translate-x-2 translate-y-2 -rotate-[0.6deg] -z-0 hidden md:block" />

        {/* main case sheet */}
        <article className="relative paper p-6 md:p-12 z-10">
          <div className="holes hidden md:flex">
            <span /><span /><span /><span /><span /><span />
          </div>

          <header className="md:pl-12">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {sak.caseNumber} · {sak.caseClassification}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-stamp">
                  {sak.dateline} · {sak.date}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {sak.stamps.map((label, i) => (
                  <Stamp key={label} rotate={i === 0 ? 6 : -8}>
                    {label}
                  </Stamp>
                ))}
              </div>
            </div>

            <h1 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.1] text-ink max-w-3xl">
              <span className="typed">{sak.title}</span>
            </h1>

            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              Publisert i{" "}
              <span className="text-ink underline decoration-stamp/40">
                {sak.publication}
              </span>{" "}
              · Fotograf: {sak.fotograf}
            </p>
          </header>

          <div className="md:pl-12 mt-10 grid lg:grid-cols-12 gap-10">
            {/* article body */}
            <div className="lg:col-span-7 space-y-5 font-serif text-lg leading-relaxed text-ink-soft">
              <p className="font-serif text-2xl leading-snug text-ink first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.9] first-letter:text-stamp">
                {sak.excerpt[0]}
              </p>
              {sak.excerpt.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted pt-3">
                – Utdrag fra publisert sak
              </p>
            </div>

            {/* margin: caption typed slip + clip */}
            <aside className="lg:col-span-5 space-y-7">
              <div className="paper p-4 relative -rotate-[1.5deg]">
                <Paperclip />
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={sak.images[0].src}
                    alt={sak.images[0].alt}
                    fill
                    className="object-cover grayscale-[15%]"
                    sizes="(min-width: 1024px) 420px, 90vw"
                    priority
                  />
                </div>
              </div>

              <div className="paper px-4 py-3 font-mono text-xs leading-relaxed text-ink-soft">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  BILDETEKST
                </p>
                <p className="mt-1.5 normal-case text-sm text-ink">
                  {sak.bildetekst}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                  Foto: {sak.fotograf}
                </p>
              </div>

              <div className="border border-dashed border-ink/30 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stamp">
                  STIKKORD
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {sak.keywords.map((k) => (
                    <span
                      key={k}
                      className="font-mono text-[10px] uppercase tracking-[0.12em] border border-ink/25 text-ink-soft px-1.5 py-0.5"
                    >
                      #{k}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* signoff */}
          <div className="md:pl-12 mt-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                SAKSANSVARLIG
              </p>
              <p className="mt-1 font-serif text-2xl italic">Kaspar Knudsen</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                Frilansjournalist · Bergen
              </p>
            </div>
            <Stamp variant="circle" rotate={-10}>
              <span className="block text-[10px]">{sak.caseNumber}</span>
              <span className="block text-base mt-1">ARKIVERT</span>
            </Stamp>
          </div>
        </article>
      </div>

      {/* other files */}
      <div className="mt-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          ANDRE MAPPER I ARKIVET
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {otherSaker.map((s) => (
            <Link
              key={s.slug}
              href={`/saker/${s.slug}`}
              className="group folder block px-5 pt-7 pb-5 relative"
              style={{ transform: "rotate(-0.4deg)" }}
            >
              <span className="tab absolute -top-3 left-5">{s.shortLabel}</span>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                {s.caseNumber} · {s.publication}
              </p>
              <h3 className="mt-2 font-serif text-xl leading-snug">{s.title}</h3>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-stamp opacity-0 group-hover:opacity-100 transition">
                ÅPNE MAPPE →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
