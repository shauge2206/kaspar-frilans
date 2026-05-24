import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";

export const metadata: Metadata = {
  title: "Saker",
  description:
    "Utvalgte saker av Kaspar Knudsen – gravejournalistikk, reportasje og feature.",
};

const sectionLabel: Record<(typeof saker)[number]["seksjon"], string> = {
  GRAVING: "Graving",
  REPORTASJE: "Reportasje",
  FEATURE: "Feature",
};

export default function SakerPage() {
  return (
    <>
      <section className="relative px-6 pt-20 pb-12 md:px-10 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal as="p" delay={0.1} y={12}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-paper/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-coral-400" />
              Arkiv
            </span>
          </Reveal>

          <h1 className="mt-7 max-w-[18ch] font-display text-[clamp(2.6rem,4.6vw+1rem,5.8rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
            <WordReveal text="Saker" delay={0.05} />
            <br />
            <WordReveal
              text="Graving og reportasje."
              highlightWords={["Graving"]}
              delay={0.4}
            />
          </h1>

          <Reveal delay={0.95} className="mt-8 max-w-[52ch]">
            <p className="text-[1.05rem] leading-relaxed text-ink-2">
              Et utvalg saker – gravejournalistikk, reportasje og feature
              levert til redaksjoner som Fiskeribladet, Intrafish og
              Kystens Næringsliv.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <StaggerGroup className="flex flex-col divide-y divide-line/60 border-y border-line/60">
            {saker.map((sak, i) => (
              <StaggerItem key={sak.slug} className="group">
                <Link
                  href={`/saker/${sak.slug}`}
                  className="grid items-stretch gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-12"
                  aria-label={`${sak.tittel} – ${sak.publikasjon}, ${sak.dato}`}
                >
                  {/* number */}
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* image */}
                  <div className="md:col-span-4">
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-card)] bg-paper-2 ring-1 ring-line/70 shadow-soft">
                      <Image
                        src={sak.hovedbilde}
                        alt={sak.bilder[0]?.alt ?? sak.tittel}
                        fill
                        sizes="(min-width: 768px) 420px, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>

                  {/* text */}
                  <div className="md:col-span-7 flex flex-col justify-between gap-6 md:py-2">
                    <div>
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-coral-500">
                        {sectionLabel[sak.seksjon]} · {sak.publikasjon}
                      </p>
                      <h2 className="mt-3 font-display text-[clamp(1.6rem,2vw+1rem,2.8rem)] font-medium leading-[1.08] tracking-tight text-ink transition-colors group-hover:text-coral-600">
                        {sak.tittel}
                      </h2>
                      <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-relaxed text-ink-2">
                        {sak.ingress}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-mute">
                      <p className="font-mono uppercase tracking-[0.18em]">
                        {sak.sted} · <time dateTime={sak.datoIso}>{sak.dato}</time>
                      </p>
                      <span
                        aria-hidden
                        className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-transform duration-500 group-hover:translate-x-1.5"
                      >
                        Les saken
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
