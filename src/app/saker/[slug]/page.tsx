import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSak, saker } from "@/lib/saker";

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
  if (!sak) return { title: "Sak ikke funnet" };
  return {
    title: `${sak.overskrift} · Kaspar Frilans`,
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

  const others = saker.filter((s) => s.slug !== sak.slug);

  return (
    <article>
      {/* DATELINE BAR */}
      <div className="px-4 sm:px-6 lg:px-10 py-3 border-b-2 border-ink bg-paper-dark mono text-[10px] uppercase tracking-[0.3em] flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <Link href="/saker" className="hover:text-red">
            ← TILBAKE TIL ARKIVET
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span>SAK NR. {sak.nummer}</span>
          <span className="text-red">●</span>
          <span>{sak.kategori.toUpperCase()}</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="px-4 sm:px-6 lg:px-10 pt-10 pb-8 border-b-[6px] border-ink relative">
        <div className="mono text-[11px] uppercase tracking-[0.3em] flex flex-wrap items-center gap-3 mb-6">
          <span className="bg-ink text-paper px-2 py-1">FRA FELT</span>
          <span>{sak.sted.toUpperCase()}</span>
          <span>·</span>
          <span>{sak.publikasjon.toUpperCase()}</span>
          <span>·</span>
          <time dateTime={sak.datoIso}>{sak.dato}</time>
        </div>

        <h1 className="display text-[clamp(2.6rem,9vw,8rem)] leading-[0.82] tracking-[-0.03em] max-w-[18ch] animate-stamp">
          {sak.overskrift}
        </h1>

        <div className="rule-x-thin mt-8" />

        <div className="grid grid-cols-12 gap-6 pt-5">
          <p className="col-span-12 md:col-span-8 text-xl md:text-2xl leading-snug max-w-3xl">
            {sak.ingress}
          </p>
          <div className="col-span-12 md:col-span-4 mono text-[10px] uppercase tracking-[0.22em] flex flex-col gap-3 self-end">
            <div className="border-2 border-ink p-3">
              <div className="text-red font-bold mb-1">JOURNALIST</div>
              <div>KASPAR · BERGEN</div>
            </div>
            <div className="border-2 border-ink p-3">
              <div className="text-red font-bold mb-1">FOTO</div>
              <div>{sak.fotograf.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO IMAGE */}
      <figure className="px-4 sm:px-6 lg:px-10 py-8 border-b-[6px] border-ink">
        <div className="relative aspect-[16/9] border-4 border-ink overflow-hidden bg-ink">
          <Image
            src={sak.bilder[0].src}
            alt={sak.bilder[0].alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute top-3 left-3 stamp bg-paper">
            EKSKLUSIV / NR. {sak.nummer}
          </div>
        </div>
        <figcaption className="mono text-[11px] uppercase tracking-[0.18em] leading-relaxed mt-4 max-w-3xl">
          <span className="font-bold">BILDETEKST · </span>
          {sak.bildetekst}{" "}
          <span className="text-red">FOTO: {sak.fotograf.toUpperCase()}</span>
        </figcaption>
      </figure>

      {/* BODY */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 border-b-[6px] border-ink">
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          <aside className="col-span-12 md:col-span-3 mono text-[10px] uppercase tracking-[0.22em] order-2 md:order-1 self-start md:sticky md:top-28">
            <div className="rule-x-thin pt-3">
              <div className="text-red font-bold mb-2">FAKTA</div>
              <ul className="space-y-1">
                <li>STED: {sak.sted}</li>
                <li>UTGAVE: {sak.publikasjon}</li>
                <li>PUBL.: {sak.dato}</li>
                <li>KATEGORI: {sak.kategori}</li>
              </ul>
            </div>
            <div className="rule-x-thin pt-3 mt-5">
              <div className="text-red font-bold mb-2">DEL</div>
              <ul className="space-y-1">
                <li>↳ KOPIER LENKE</li>
                <li>↳ SEND PÅ E-POST</li>
                <li>↳ LAGRE FOR SENERE</li>
              </ul>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <p className="dropcap text-lg md:text-xl leading-relaxed mb-5">
              {sak.artikkel[0]}
            </p>
            <div className="news-columns-2">
              {sak.artikkel.slice(1).map((p, i) => (
                <p
                  key={i}
                  className={`text-base md:text-lg leading-relaxed mb-5 ${i === 0 ? "first-line:uppercase first-line:tracking-wider first-line:font-bold" : ""}`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="rule-x mt-12 pt-4 mono text-[11px] uppercase tracking-[0.22em] flex flex-wrap items-center gap-3 justify-between">
              <span>SAKEN ER PUBLISERT I {sak.publikasjon.toUpperCase()} · {sak.dato.toUpperCase()}</span>
              <span className="text-red">◆ KASPAR · BERGEN ◆</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 border-b-[6px] border-ink bg-paper-dark">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <span className="bg-ink text-paper px-2 py-1">BILDER</span>
          <span>{sak.bilder.length} STK · FRA SAKEN</span>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {sak.bilder.map((b, i) => (
            <figure
              key={i}
              className={
                i === 0
                  ? "col-span-12 md:col-span-8"
                  : "col-span-12 md:col-span-4"
              }
            >
              <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[3/4]"} border-4 border-ink overflow-hidden bg-ink`}>
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-paper text-ink mono text-[10px] tracking-[0.25em] px-2 py-1 border-2 border-ink">
                  FIG. {(i + 1).toString().padStart(2, "0")}
                </div>
              </div>
              <figcaption className="mono text-[10px] uppercase tracking-[0.2em] leading-relaxed mt-3">
                {b.bildetekst}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* MORE STORIES */}
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <span className="bg-ink text-paper px-2 py-1">LES OGSÅ</span>
          <span>FLERE SAKER</span>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/saker/${o.slug}`}
              className="col-span-12 md:col-span-6 group block"
            >
              <div className="relative aspect-[16/10] border-4 border-ink overflow-hidden bg-ink mb-4">
                <Image
                  src={o.bilder[0].src}
                  alt={o.bilder[0].alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                />
              </div>
              <div className="mono text-[10px] uppercase tracking-[0.25em] flex items-center gap-3 mb-2">
                <span className="font-bold text-red">{o.kategori.toUpperCase()}</span>
                <span>·</span>
                <span>{o.dato}</span>
              </div>
              <h3 className="display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[0.9] tracking-[-0.02em] group-hover:text-red">
                {o.overskrift}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
