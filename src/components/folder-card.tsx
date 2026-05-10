import Link from "next/link";
import Image from "next/image";
import { Stamp } from "./stamp";
import type { Sak } from "@/lib/saker";

type Props = {
  sak: Sak;
  rotate?: number;
};

export function FolderCard({ sak, rotate = 0 }: Props) {
  return (
    <Link
      href={`/saker/${sak.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-stamp focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <article className="folder relative pt-7 pb-6 px-6 min-h-[360px] flex flex-col">
        <span className="tab absolute -top-3 left-6">
          {sak.shortLabel}
        </span>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              {sak.caseNumber}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mt-0.5">
              {sak.caseClassification}
            </p>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted text-right">
            {sak.publication}
            <br />
            {sak.date}
          </span>
        </div>

        <div className="mt-6 relative">
          <div className="polaroid w-full max-w-[300px] mx-auto rotate-[-1deg] group-hover:rotate-0 transition-transform">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-ink/10">
              <Image
                src={sak.images[0].src}
                alt={sak.images[0].alt}
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition"
                sizes="(min-width: 1024px) 300px, 80vw"
              />
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft text-center">
              {sak.field}
            </p>
          </div>
        </div>

        <h3 className="mt-5 font-serif text-xl leading-snug text-ink line-clamp-3">
          {sak.title}
        </h3>

        <div className="mt-auto pt-4 flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {sak.keywords.slice(0, 3).map((k) => (
              <span
                key={k}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft border border-ink/25 px-1.5 py-0.5"
              >
                #{k}
              </span>
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stamp opacity-0 group-hover:opacity-100 transition">
            ÅPNE MAPPE →
          </span>
        </div>

        {sak.stamps[0] ? (
          <div className="absolute -top-2 right-4">
            <Stamp rotate={8} animate={false}>
              {sak.stamps[0]}
            </Stamp>
          </div>
        ) : null}
      </article>
    </Link>
  );
}
