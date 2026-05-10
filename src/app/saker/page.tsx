import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { saker } from "@/lib/saker";
import { Dateline } from "@/components/dateline";
import { CompassMark, HorizonLine, SectionMarker, WaveBackdrop } from "@/components/nautical";

export const metadata: Metadata = {
  title: "Saker — arkiv",
  description:
    "Arkiv over saker Kaspar Knudsen har levert til norske redaksjoner — gravesaker, reportasjer og featurer fra Bergen og kysten.",
};

export default function SakerIndex() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-deep text-paper">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 40% 60% at 20% 30%, rgba(216,201,168,0.18), transparent 60%), radial-gradient(ellipse 60% 70% at 80% 70%, rgba(207,214,219,0.15), transparent 60%)",
          }}
        />
        <WaveBackdrop className="absolute inset-x-0 -bottom-2 h-48 text-paper/60 animate-drift-slower" />
        <div className="mx-auto max-w-[88rem] px-6 pt-32 pb-28 lg:px-12">
          <div className="flex items-center gap-4 text-sand">
            <CompassMark className="w-5 h-5" />
            <span className="smallcaps text-[0.72rem]">arkiv · sakene</span>
          </div>
          <h1 className="mt-10 max-w-5xl font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-tight text-balance">
            Saker —
            <br />
            <span className="italic font-light text-sand">arkiv.</span>
          </h1>
          <p className="mt-10 max-w-xl text-paper/80 text-pretty leading-relaxed">
            Arkiv over saker levert til norske redaksjoner — gravesaker,
            reportasjer og featurer for Fiskeribladet, Intrafish og Kystens
            Næringsliv.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12">
          <SectionMarker label="Indeks" className="mb-12" />

          {/* Featured top item */}
          <Link
            href={`/saker/${saker[0].slug}`}
            className="group grid grid-cols-12 gap-6 items-end mb-20"
          >
            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-fog/40">
                <Image
                  src={saker[0].bilder[0].src}
                  alt={saker[0].bilder[0].alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-deep/30 to-transparent"
                />
                <span className="absolute left-5 top-5 smallcaps text-[0.66rem] tracking-meta text-paper">
                  Mest leste
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:pl-2">
              <Dateline
                sted={saker[0].sted}
                koordinat={saker[0].koordinat}
                dato={saker[0].dato}
                className="mb-3"
              />
              <h2 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-tight text-deep text-balance">
                <span className="link-grow">{saker[0].tittel}</span>
              </h2>
              <p className="mt-5 max-w-prose text-ink/80 text-pretty leading-relaxed">
                {saker[0].ingress}
              </p>
              <div className="mt-7 flex items-center gap-5 text-[0.72rem] tracking-meta text-ink-muted">
                <span>{saker[0].publikasjon}</span>
                <span aria-hidden className="h-px flex-1 bg-deep/15" />
                <span className="text-deep">{saker[0].kategori}</span>
              </div>
            </div>
          </Link>

          <HorizonLine className="text-deep/30" />

          {/* Index list */}
          <div className="mt-6">
            {saker.map((sak, i) => (
              <Link
                key={sak.slug}
                href={`/saker/${sak.slug}`}
                className="group grid grid-cols-12 gap-6 border-b border-deep/10 py-8 transition-colors hover:bg-fog-soft/40"
              >
                <div className="col-span-12 sm:col-span-1 font-display text-2xl text-deep/40">
                  №{String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-12 sm:col-span-2 sm:pt-1">
                  <Dateline
                    sted={sak.sted}
                    koordinat={sak.koordinat}
                    dato=""
                  />
                  <span className="text-[0.7rem] tracking-meta text-ink-muted block mt-1">
                    {sak.dato}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h3 className="font-display text-xl md:text-2xl leading-[1.2] tracking-tight text-deep text-balance">
                    <span className="link-grow">{sak.tittel}</span>
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-ink/70 max-w-prose">
                    {sak.kategori} · {sak.publikasjon}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-start justify-end sm:pt-2">
                  <span
                    aria-hidden
                    className="text-deep transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
