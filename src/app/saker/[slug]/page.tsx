import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSak, saker } from "@/lib/saker";
import { Dateline } from "@/components/dateline";
import {
  CompassMark,
  HorizonLine,
  Lighthouse,
  SectionMarker,
  WaveBackdrop,
  DepthLines,
} from "@/components/nautical";

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
    title: sak.tittel,
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

  const idx = saker.findIndex((s) => s.slug === slug);
  const next = saker[(idx + 1) % saker.length];

  return (
    <article>
      {/* HERO ----------------------------------------------------------- */}
      <header className="relative isolate overflow-hidden bg-deep text-paper">
        <div className="absolute inset-0 -z-10">
          <Image
            src={sak.bilder[0].src}
            alt=""
            fill
            sizes="100vw"
            priority
            aria-hidden
            className="object-cover opacity-65"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-deep/55 via-deep/45 to-deep"
          />
          <WaveBackdrop className="absolute inset-x-0 -bottom-4 h-56 text-paper/65 animate-drift" />
        </div>

        <div className="mx-auto max-w-[80rem] px-6 pt-28 pb-32 lg:px-12">
          <div className="flex items-center gap-4 text-sand">
            <CompassMark className="w-5 h-5" />
            <span className="smallcaps text-[0.72rem]">{sak.kategori}</span>
            <span className="hidden md:inline-block h-px w-24 bg-sand/50" />
            <span className="hidden md:inline-block text-[0.7rem] tracking-meta opacity-70">
              {sak.publikasjon}
            </span>
          </div>

          <h1 className="mt-10 max-w-5xl font-display text-[clamp(2.4rem,5.6vw,5.4rem)] leading-[0.98] tracking-tight text-balance">
            {sak.tittel}
          </h1>

          <div className="mt-10 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <p className="font-display text-xl md:text-2xl leading-snug text-paper/90 italic font-light text-pretty">
                {sak.ingress}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10">
              <Dateline
                sted={sak.sted}
                koordinat={sak.koordinat}
                dato={sak.dato}
                className="text-sand"
              />
              <div className="mt-3 text-[0.7rem] tracking-meta text-paper/60">
                Først publisert · {sak.publikasjon}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN PHOTO + CAPTION ------------------------------------------ */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[88rem] px-6 py-12 lg:px-12">
          <figure>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-fog/30">
              <Image
                src={sak.bilder[0].src}
                alt={sak.bilder[0].alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-4 grid grid-cols-12 gap-4 text-[0.85rem] text-ink/70">
              <span className="col-span-12 md:col-span-9 text-pretty leading-relaxed">
                {sak.bildetekst}
              </span>
              <span className="col-span-12 md:col-span-3 md:text-right text-[0.7rem] tracking-meta text-ink-muted">
                Foto · {sak.fotograf}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* BODY ----------------------------------------------------------- */}
      <section className="relative">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12 py-20">
            <aside className="col-span-12 lg:col-span-3 lg:sticky lg:top-28 self-start">
              <SectionMarker label="Sak · I" className="mb-6" />
              <ul className="space-y-3 text-[0.8rem] tracking-meta text-deep">
                <li className="flex gap-3">
                  <span className="text-driftwood">↟</span>
                  <span className="text-ink-muted">Sted</span>
                </li>
                <li className="font-display text-lg leading-tight text-deep">
                  {sak.sted}
                </li>
                <li className="text-[0.7rem] tracking-meta text-ink-muted">
                  {sak.koordinat}
                </li>
              </ul>
              <div className="my-7 h-px bg-deep/15" />
              <ul className="space-y-3 text-[0.8rem] tracking-meta text-deep">
                <li className="flex gap-3">
                  <span className="text-driftwood">◇</span>
                  <span className="text-ink-muted">Publikasjon</span>
                </li>
                <li className="font-display text-lg leading-tight text-deep">
                  {sak.publikasjon}
                </li>
                <li className="text-[0.7rem] tracking-meta text-ink-muted">
                  {sak.dato}
                </li>
              </ul>
            </aside>

            <div className="col-span-12 lg:col-span-7 lg:col-start-5 max-w-[58ch]">
              {sak.brodtekst.map((p, i) => (
                <p
                  key={i}
                  className={`mb-6 text-[1.07rem] leading-[1.75] text-ink/90 text-pretty ${
                    i === 0
                      ? "first-letter:font-display first-letter:text-[3.6rem] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-deep"
                      : ""
                  }`}
                >
                  {p}
                </p>
              ))}

              {sak.pullquote && (
                <blockquote className="my-12 border-y border-deep/15 bg-fog-soft/50 -mx-6 px-6 py-10 md:-mx-10 md:px-10">
                  <p className="font-display text-2xl md:text-[1.85rem] leading-[1.2] tracking-tight text-deep text-balance">
                    <span className="text-driftwood font-light italic">«</span>
                    {sak.pullquote}
                    <span className="text-driftwood font-light italic">»</span>
                  </p>
                  <footer className="mt-5 text-[0.72rem] tracking-meta text-ink-muted">
                    Fra rapporteringen
                  </footer>
                </blockquote>
              )}

              <p className="mt-10 text-[0.85rem] text-ink-muted italic">
                Et utdrag. Ta kontakt om du ønsker å lese saken i sin helhet
                eller å kjøpe gjenbruksrettigheter.
              </p>
            </div>
          </div>
          <HorizonLine className="text-deep/30" />
        </div>
      </section>

      {/* GALLERY -------------------------------------------------------- */}
      <section className="relative bg-paper-warm/40">
        <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12">
          <div className="mb-12 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <SectionMarker label="Sak · II" className="mb-5" />
              <h2 className="font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] tracking-tight text-deep text-balance">
                Bildeserie fra {sak.sted}.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 text-pretty">
              <p className="text-ink/75 leading-relaxed">
                Bilder og tekst leveres samlet — egne foto fra felt som
                supplerer teksten.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <figure className="col-span-12 md:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-fog/40">
                <Image
                  src={sak.bilder[0].src}
                  alt={sak.bilder[0].alt}
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <figure className="col-span-6 md:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-fog/40">
                <Image
                  src={sak.bilder[1].src}
                  alt={sak.bilder[1].alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 50vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <figure className="col-span-6 md:col-span-5 md:col-start-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-fog/40">
                <Image
                  src={sak.bilder[2].src}
                  alt={sak.bilder[2].alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 50vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="col-span-12 md:col-span-3 md:col-start-9 flex items-end">
              <div className="border-l-2 border-driftwood/70 pl-5 text-[0.85rem] text-ink/70 text-pretty">
                <span className="smallcaps text-[0.7rem] text-deep block mb-2">
                  Bildetekst
                </span>
                {sak.bildetekst}
                <span className="mt-3 block text-[0.7rem] tracking-meta text-ink-muted">
                  Foto · {sak.fotograf}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT + FOOTER OF ARTICLE -------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-deep text-paper">
        <DepthLines className="absolute inset-x-0 top-0 h-12 w-full text-paper/30" />
        <div className="mx-auto grid max-w-[88rem] grid-cols-12 gap-6 px-6 py-24 lg:px-12">
          <div className="col-span-12 lg:col-span-4">
            <Lighthouse className="w-8 h-14 text-sand" />
            <h2 className="mt-6 font-display text-3xl tracking-tight text-balance">
              Neste sak fra arkivet
            </h2>
            <p className="mt-3 text-paper/70 text-pretty leading-relaxed">
              Bla videre i arkivet over leverte saker.
            </p>
          </div>
          <Link
            href={`/saker/${next.slug}`}
            className="group col-span-12 lg:col-span-7 lg:col-start-6 grid grid-cols-12 gap-6 items-end"
          >
            <div className="col-span-12 md:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={next.bilder[0].src}
                  alt={next.bilder[0].alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Dateline
                sted={next.sted}
                koordinat={next.koordinat}
                dato={next.dato}
                className="text-sand"
              />
              <h3 className="mt-3 font-display text-2xl md:text-3xl leading-[1.05] tracking-tight text-balance">
                <span className="link-grow">{next.tittel}</span>
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] tracking-meta text-sand">
                Les saken
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
