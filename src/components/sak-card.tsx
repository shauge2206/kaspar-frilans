import Image from "next/image";
import Link from "next/link";
import type { Sak } from "@/lib/saker";
import { Dateline } from "./dateline";

export function SakCard({
  sak,
  index,
  layout = "wide",
}: {
  sak: Sak;
  index: number;
  layout?: "wide" | "compact";
}) {
  const num = String(index + 1).padStart(2, "0");
  const isReverse = index % 2 === 1;

  if (layout === "compact") {
    return (
      <Link
        href={`/saker/${sak.slug}`}
        className="group grid grid-cols-12 gap-6 border-t border-deep/10 py-7 transition-colors hover:bg-fog-soft/50"
      >
        <div className="col-span-12 sm:col-span-2 flex items-start gap-3">
          <span className="font-display text-2xl text-deep/40">№{num}</span>
        </div>
        <div className="col-span-12 sm:col-span-7">
          <Dateline
            sted={sak.sted}
            koordinat={sak.koordinat}
            dato={sak.dato}
            className="mb-2"
          />
          <h3 className="font-display text-2xl md:text-[1.7rem] leading-[1.15] tracking-tight text-deep text-balance">
            <span className="link-grow">{sak.tittel}</span>
          </h3>
        </div>
        <div className="col-span-12 sm:col-span-3 flex items-start justify-between sm:justify-end gap-3 text-[0.72rem] tracking-meta text-ink-muted sm:pt-1">
          <span>{sak.publikasjon}</span>
          <span aria-hidden className="text-deep transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article
      className={`grid grid-cols-12 gap-x-6 gap-y-5 ${isReverse ? "" : ""}`}
    >
      <div
        className={`col-span-12 lg:col-span-7 ${isReverse ? "lg:order-2" : ""}`}
      >
        <Link
          href={`/saker/${sak.slug}`}
          className="group block overflow-hidden bg-fog/30"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={sak.bilder[0].src}
              alt={sak.bilder[0].alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
              priority={index === 0}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/35 via-transparent to-transparent"
            />
            <div className="absolute left-5 top-5 text-paper">
              <span className="smallcaps text-[0.66rem] tracking-meta">
                Sak № {num}
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`col-span-12 lg:col-span-5 lg:pt-6 ${isReverse ? "lg:order-1 lg:pr-8" : "lg:pl-2"}`}
      >
        <Dateline
          sted={sak.sted}
          koordinat={sak.koordinat}
          dato={sak.dato}
          className="mb-4"
        />
        <h3 className="font-display text-3xl md:text-[2.4rem] leading-[1.05] tracking-tight text-deep text-balance">
          <Link href={`/saker/${sak.slug}`} className="link-grow">
            {sak.tittel}
          </Link>
        </h3>
        <p className="mt-5 max-w-prose text-ink/85 text-pretty leading-relaxed">
          {sak.ingress}
        </p>
        <div className="mt-7 flex items-center gap-5 text-[0.72rem] tracking-meta text-ink-muted">
          <span>{sak.publikasjon}</span>
          <span aria-hidden className="h-px flex-1 bg-deep/15" />
          <span className="text-deep">{sak.kategori}</span>
        </div>
      </div>
    </article>
  );
}
