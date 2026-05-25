import Link from "next/link";
import Image from "next/image";
import type { Sak } from "@/lib/saker";
import { tagLabel } from "@/lib/tags";

type Props = {
  sak: Sak;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const aspect: Record<NonNullable<Props["size"]>, string> = {
  sm: "aspect-[4/3]",
  md: "aspect-[3/2]",
  lg: "aspect-[5/3]",
};

// Image-led related-article tile. Structure copied from design 05; tokens
// (--bg-elev, --rule, --ink, --amber) and fonts (Spectral/JetBrains) are 09's.
export function ArticleCard({ sak, size = "md", className = "" }: Props) {
  const tag = sak.emneknagger[0];

  return (
    <Link
      href={`/saker/${sak.slug}`}
      className={`group relative block ${className}`}
      aria-label={`${sak.tittel} – ${sak.publikasjon}, ${sak.dato}`}
    >
      <div
        className={`relative ${aspect[size]} overflow-hidden rounded-[18px] border border-rule bg-bg-elev transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1`}
      >
        <Image
          src={sak.hovedbilde}
          alt={sak.bildetekst}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[color:var(--bg)]/85 via-[color:var(--bg)]/30 to-transparent" />
        {tag ? (
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-amber/40 bg-bg/80 px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-amber backdrop-blur-sm">
              {tagLabel(tag)}
            </span>
          </div>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-ink-soft">
            {sak.publikasjon} · {sak.dato}
          </p>
          <h3 className="mt-1.5 max-w-[28ch] font-serif text-[clamp(1.15rem,1rem+0.6vw,1.55rem)] leading-[1.18] tracking-tight text-ink transition-colors duration-500 group-hover:text-amber">
            {sak.tittel}
          </h3>
        </div>
      </div>
    </Link>
  );
}
