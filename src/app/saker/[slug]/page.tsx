import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSak, saker } from "@/lib/saker";
import { ArrowDoodle } from "@/components/Decor";

export function generateStaticParams() {
  return saker.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sak = getSak(slug);
  if (!sak) return {};
  return {
    title: `${sak.tittel} — Kaspar Knudsen`,
    description: sak.ingress,
  };
}

export default async function SakDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sak = getSak(slug);
  if (!sak) notFound();

  const idx = saker.findIndex((s) => s.slug === sak.slug);
  const next = saker[(idx + 1) % saker.length];
  const prev = saker[(idx - 1 + saker.length) % saker.length];

  return (
    <div className="notebook-shell pt-4 pb-24">
      {/* Crumb */}
      <div className="pt-6">
        <Link
          href="/saker"
          className="pencil-link typewriter text-[0.78rem] tracking-[0.16em] uppercase"
        >
          ← Tilbake til saker
        </Link>
      </div>

      {/* Headline block */}
      <header className="grid grid-cols-12 gap-x-6 lg:gap-x-10 mt-8">
        <aside className="col-span-12 md:col-span-3 relative">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Side {120 + idx * 6}
          </p>
          <p className="handwritten-red text-2xl mt-1 leading-tight">
            {sak.notertDato}
          </p>
          <div className="mt-4 typewriter text-[0.7rem] tracking-[0.16em] text-ink-fade uppercase">
            <p>Publisert i</p>
            <p className="text-ink mt-1 not-italic">{sak.publikasjon}</p>
            <p className="text-ink/70 mt-0.5">{sak.dato}</p>
          </div>
          <div className="hidden md:block mt-8 max-w-[12rem]">
            <p className="margin-note text-lg leading-snug">
              {sak.publikasjon}
            </p>
            <ArrowDoodle
              className="w-20 mt-1 -ml-2"
              style={{ transform: "rotate(14deg)" }}
            />
          </div>
        </aside>

        <div className="col-span-12 md:col-span-9">
          <p className="typewriter text-[0.72rem] tracking-[0.22em] text-ink-fade uppercase">
            Reportasje · {sak.sted}
          </p>
          <h1 className="headline-hand text-4xl sm:text-5xl md:text-6xl mt-2 leading-[1]">
            {sak.tittel}
          </h1>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed max-w-3xl text-ink-soft">
            {sak.ingress}
          </p>
        </div>
      </header>

      {/* Hero photo — taped to page */}
      <section className="mt-14 grid grid-cols-12 gap-x-6 lg:gap-x-10">
        <div className="col-span-12 md:col-span-9 md:col-start-4 relative">
          <div
            className="paper-card p-3 md:p-4 relative"
            style={{ transform: "rotate(-0.6deg)" }}
          >
            <span
              className="absolute -top-4 left-12 tape h-8 w-32"
              style={{ transform: "rotate(-3deg)" }}
            />
            <span
              className="absolute -top-4 right-12 tape washi-blue h-7 w-24"
              style={{ transform: "rotate(4deg)" }}
            />

            <div className="relative aspect-[16/10] overflow-hidden bg-ink/10">
              <Image
                src={sak.bilder[0].src}
                alt={sak.bilder[0].alt}
                fill
                sizes="(min-width: 768px) 70vw, 100vw"
                className="object-cover sepia-photo"
                priority
              />
            </div>
            <p className="mt-3 typewriter text-xs text-ink-fade leading-snug">
              <span className="uppercase tracking-[0.18em] text-ink/70">
                Bildetekst —
              </span>{" "}
              {sak.bildetekst}{" "}
              <span className="text-ink/60">(Foto: {sak.fotograf})</span>
            </p>
          </div>
        </div>
      </section>

      {/* Body — lined paper with margin */}
      <section className="mt-16 grid grid-cols-12 gap-x-6 lg:gap-x-10">
        <aside className="col-span-12 md:col-span-3 relative">
          <div className="md:sticky md:top-8 space-y-6">
            <div>
              <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
                Stikkord
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {[sak.sted, sak.publikasjon].map(
                  (tag) => (
                    <li
                      key={tag}
                      className="typewriter text-[0.7rem] tracking-[0.12em] uppercase border border-ink/40 px-2 py-0.5"
                    >
                      {tag}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
                Publisert
              </p>
              <p className="margin-note text-lg leading-snug mt-2">
                {sak.publikasjon}
                <br />
                {sak.dato}
              </p>
            </div>
          </div>
        </aside>

        <article className="col-span-12 md:col-span-9 relative">
          <div className="lined-paper paper-card p-8 md:p-12 relative">
            <span
              className="absolute -top-3 left-12 tape washi-red h-6 w-24"
              style={{ transform: "rotate(-4deg)" }}
            />

            <div className="pl-12 md:pl-16 max-w-prose">
              <p className="text-lg md:text-xl leading-[2rem] first-letter:font-bold first-letter:text-3xl first-letter:mr-1 first-letter:float-left first-letter:leading-[2.4rem] first-letter:text-pen-red">
                {sak.brodtekst[0]}
              </p>
              {sak.brodtekst.slice(1).map((p, i) => (
                <p
                  key={i}
                  className="text-lg md:text-xl leading-[2rem] mt-6"
                >
                  {p}
                </p>
              ))}

              <p className="typewriter text-xs text-ink-fade tracking-[0.16em] uppercase mt-10">
                Publisert i {sak.publikasjon} · {sak.dato}
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Pagination */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href={`/saker/${prev.slug}`}
          className="paper-card p-6 group relative block"
          style={{ transform: "rotate(-0.4deg)" }}
        >
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            ← Forrige sak
          </p>
          <p className="handwritten text-pen-blue text-2xl mt-2 leading-tight">
            {prev.tittel}
          </p>
        </Link>
        <Link
          href={`/saker/${next.slug}`}
          className="paper-card p-6 group relative block text-right"
          style={{ transform: "rotate(0.4deg)" }}
        >
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Neste sak →
          </p>
          <p className="handwritten text-pen-blue text-2xl mt-2 leading-tight">
            {next.tittel}
          </p>
        </Link>
      </section>

      <section className="mt-20 relative">
        <div
          className="paper-card p-8 md:p-10 max-w-3xl mx-auto relative"
          style={{ transform: "rotate(0.6deg)" }}
        >
          <span
            className="absolute -top-3 left-12 tape h-6 w-24"
            style={{ transform: "rotate(-4deg)" }}
          />
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Kontakt
          </p>
          <h2 className="headline-hand text-4xl mt-2 relative inline-block">
            Kontakt Kaspar Knudsen
          </h2>
          <p className="text-ink-soft mt-4 max-w-xl">
            Frilansjournalist i Bergen. Kontor på USF Verftet, Nordnes.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 typewriter text-[0.78rem] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors"
            >
              Til kontakt →
            </Link>
            <Link href="/saker" className="pencil-link typewriter text-sm">
              Tilbake til saker
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
