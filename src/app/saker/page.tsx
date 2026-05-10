import Image from "next/image";
import Link from "next/link";
import { saker } from "@/lib/saker";

export const metadata = {
  title: "Saker · Kaspar Frilans",
  description:
    "Reportasjer, gravesaker og features publisert av frilansjournalist Kaspar — fra Bergen, Senja, Sotra og Fyllingsdalen.",
};

export default function SakerIndex() {
  const [first, ...rest] = saker;

  return (
    <div>
      {/* MASTHEAD */}
      <section className="px-4 sm:px-6 lg:px-10 pt-10 pb-8 border-b-[6px] border-ink">
        <div className="mono text-[11px] uppercase tracking-[0.3em] flex items-center gap-3 mb-4">
          <span className="bg-red text-paper px-2 py-1">SEKSJON 2</span>
          <span>SAKER · ARKIV · UTVALGTE REPORTASJER</span>
        </div>
        <h1 className="display text-[clamp(3.2rem,11vw,10rem)] leading-[0.8] tracking-[-0.03em] animate-stamp">
          ARKIVET<span className="text-red">.</span>
        </h1>
        <div className="rule-x-thin mt-6" />
        <div className="grid grid-cols-12 gap-6 pt-5">
          <p className="col-span-12 md:col-span-7 text-lg leading-snug max-w-2xl">
            Et utvalg saker fra de siste årene. Gravesaker, reportasjer og
            features for Fiskeribladet, Bergens Tidende og andre redaksjoner —
            i sin helhet eller som faksimile.
          </p>
          <div className="col-span-12 md:col-span-5 mono text-[10px] uppercase tracking-[0.22em] grid grid-cols-3 gap-2 self-end">
            <div className="border-2 border-ink p-3">
              <div className="text-red font-bold">{saker.length}</div>
              <div>UTVALGTE</div>
            </div>
            <div className="border-2 border-ink p-3">
              <div className="text-red font-bold">3</div>
              <div>PUBL.</div>
            </div>
            <div className="border-2 border-ink p-3">
              <div className="text-red font-bold">∞</div>
              <div>FELT-DAGER</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ROW */}
      <section className="px-4 sm:px-6 lg:px-10 py-10 border-b-[6px] border-ink">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <span className="bg-ink text-paper px-2 py-1">UTVALGT · NR. {first.nummer}</span>
          <span className="text-red">◆ HOVEDSAK ◆</span>
        </div>
        <Link href={`/saker/${first.slug}`} className="grid grid-cols-12 gap-6 group">
          <div className="col-span-12 lg:col-span-6 relative aspect-[4/3] border-4 border-ink overflow-hidden bg-ink">
            <Image
              src={first.bilder[0].src}
              alt={first.bilder[0].alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
            />
            <div className="absolute top-3 left-3 bg-red text-paper mono text-[10px] tracking-[0.25em] px-2 py-1">
              FOTO · {first.fotograf.toUpperCase()}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:border-l-2 lg:border-ink lg:pl-6 flex flex-col justify-between">
            <div>
              <div className="mono text-[10px] uppercase tracking-[0.25em] flex flex-wrap items-center gap-3 mb-3">
                <span className="font-bold">{first.kategori.toUpperCase()}</span>
                <span>·</span>
                <span>{first.publikasjon.toUpperCase()}</span>
                <span>·</span>
                <span>{first.dato}</span>
                <span>·</span>
                <span className="text-red">{first.sted.toUpperCase()}</span>
              </div>
              <h2 className="display text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.86] tracking-[-0.02em] group-hover:text-red">
                {first.overskrift}
              </h2>
              <p className="mt-5 text-base md:text-lg leading-snug max-w-xl">
                {first.ingress}
              </p>
            </div>
            <div className="mt-6 mono text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 border-b-2 border-ink pb-1 self-start group-hover:text-red group-hover:border-red">
              LES SAKEN →
            </div>
          </div>
        </Link>
      </section>

      {/* THE REST — ASYMMETRIC GRID */}
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <span className="bg-ink text-paper px-2 py-1">FLERE SAKER</span>
          <span>ARKIV · KRONOLOGISK</span>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {rest.map((s, i) => {
            const isWide = i % 2 === 0;
            return (
              <article
                key={s.slug}
                className={
                  isWide
                    ? "col-span-12 md:col-span-7"
                    : "col-span-12 md:col-span-5 md:mt-12"
                }
              >
                <Link href={`/saker/${s.slug}`} className="group block">
                  <div className={`relative ${isWide ? "aspect-[16/10]" : "aspect-[4/5]"} border-4 border-ink overflow-hidden bg-ink mb-4`}>
                    <Image
                      src={s.bilder[0].src}
                      alt={s.bilder[0].alt}
                      fill
                      sizes={isWide ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                      className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                    />
                    <div className="absolute top-3 left-3 bg-paper text-ink mono text-[10px] tracking-[0.25em] px-2 py-1 border-2 border-ink">
                      NR. {s.nummer}
                    </div>
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[0.25em] flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-bold text-red">{s.kategori.toUpperCase()}</span>
                    <span>·</span>
                    <span>{s.publikasjon.toUpperCase()}</span>
                    <span>·</span>
                    <span>{s.dato}</span>
                  </div>
                  <h3 className={`display ${isWide ? "text-[clamp(1.8rem,4vw,3rem)]" : "text-[clamp(1.6rem,3.4vw,2.4rem)]"} leading-[0.88] tracking-[-0.02em] group-hover:text-red`}>
                    {s.overskrift}
                  </h3>
                  <p className="mt-3 text-base leading-snug max-w-2xl">{s.ingress}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
