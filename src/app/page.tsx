import Link from "next/link";
import { saker } from "@/lib/saker";
import { ArticleCard } from "@/components/article-card";
import { Kicker } from "@/components/kicker";
import { MagneticButton } from "@/components/magnetic-button";
import { PublicationMarquee } from "@/components/publication-marquee";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";

const values = [
  {
    title: "Gravejournalistikk",
    body: "Undersøkende journalistikk innenfor arbeidsliv, krim og flere områder.",
  },
  {
    title: "Reportasje fra felt",
    body: "Drar ut i felt og leverer menneskenære historier – bilder og tekst.",
  },
  {
    title: "Kvalitet og fleksibilitet",
    body: "Stykkpris per sak eller betalt pr periode. Enkeltoppdrag eller periode-jobbing i redaksjoner.",
  },
  {
    title: "Gjenbruk",
    body: "Bilder og tekst som kan brukes på tvers – kritisk og undersøkende journalistikk.",
  },
];

const publikasjoner = [
  "Kystens Næringsliv",
  "Intrafish",
  "Fiskeribladet",
];

export default function HomePage() {
  const featured = saker[0];
  const others = saker.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-28 md:px-10 md:pt-28 md:pb-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <Reveal as="p" delay={0.1} y={12}>
                <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-paper/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral-400" />
                  Frilansjournalist · Bergen
                </span>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(3rem,5.5vw+1rem,7.2rem)] font-bold leading-[1.02] tracking-[-0.028em] text-ink">
                <WordReveal
                  text="Kaspar Knudsen"
                  delay={0.05}
                />
                <br />
                <WordReveal
                  text="Frilansjournalist i Bergen"
                  delay={0.45}
                />
              </h1>

              <Reveal as="p" delay={1.05} y={14}>
                <span className="mt-8 block max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-2 md:text-[1.15rem]">
                  Frilansjournalist med base på USF Verftet, Bergen.
                  Mastergrad i undersøkende journalistikk. Leverer til
                  Fiskeribladet, Intrafish og Kystens Næringsliv.
                </span>
              </Reveal>

              <Reveal delay={1.2} y={14} className="mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton href="/saker">
                  Se utvalgte saker
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </MagneticButton>
                <MagneticButton href="/kontakt" variant="ghost">
                  Ta kontakt
                </MagneticButton>
              </Reveal>
            </div>

            <Reveal
              delay={0.9}
              y={36}
              className="md:col-span-4 md:pt-10"
            >
              <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-paper-2 ring-1 ring-line/70 shadow-soft">
                <div
                  className="aspect-[4/5] w-full flex items-center justify-center text-ink-2"
                  aria-label="Portrettplassholder"
                >
                  <svg
                    viewBox="0 0 200 250"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <g
                      stroke="currentColor"
                      strokeOpacity="0.35"
                      strokeWidth="1"
                      fill="none"
                    >
                      <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                      <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                      <path d="M 10 240 L 22 240 M 10 240 L 10 228" />
                      <path d="M 190 240 L 190 240 M 190 240 L 190 228" />
                    </g>
                    <g fill="currentColor" fillOpacity="0.22">
                      <circle cx="100" cy="100" r="34" />
                      <path d="M 50 200 Q 50 150 100 150 Q 150 150 150 200 Z" />
                    </g>
                    <text
                      x="100"
                      y="222"
                      textAnchor="middle"
                      fontFamily="var(--font-display)"
                      fontSize="9"
                      letterSpacing="3"
                      fill="currentColor"
                      fillOpacity="0.7"
                    >
                      PORTRETT
                    </text>
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Marquee of publikasjoner */}
          <Reveal delay={0.4} y={20} className="mt-24 md:mt-32">
            <PublicationMarquee
              label="Publisert hos"
              publications={publikasjoner}
            />
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section
        id="saker"
        className="relative px-6 pb-28 md:px-10 md:pb-36"
        aria-labelledby="utvalgte-saker"
      >
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <Kicker>Utvalg · 2023–2025</Kicker>
                <h2
                  id="utvalgte-saker"
                  className="mt-3 font-display text-[clamp(2.4rem,3.5vw+1rem,4.4rem)] font-semibold leading-[1.02] tracking-tight text-ink"
                >
                  Utvalgte saker
                  <br />
                  <span className="text-mute">Graving, reportasje, feature.</span>
                </h2>
              </div>
              <Link
                href="/saker"
                className="link-underline w-max font-mono text-[0.78rem] uppercase tracking-[0.18em] text-ink"
              >
                Se alle →
              </Link>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-6 md:grid-cols-12 md:gap-8">
            <StaggerItem className="md:col-span-7">
              <ArticleCard sak={featured} size="lg" />
            </StaggerItem>
            <StaggerItem className="md:col-span-5 md:pt-10">
              <ArticleCard sak={others[0]} size="md" />
            </StaggerItem>
            <StaggerItem className="md:col-span-5 md:col-start-3">
              <ArticleCard sak={others[1]} size="md" />
            </StaggerItem>
            <StaggerItem className="col-span-12 md:col-span-5">
              <div className="flex h-full flex-col justify-end pt-2 pb-4 md:pt-0">
                <p className="max-w-sm font-display text-[1.2rem] leading-snug tracking-tight text-ink-2 md:text-[1.4rem]">
                  Kritisk og undersøkende journalistikk innenfor arbeidsliv,
                  krim og flere områder.
                </p>
                <Link
                  href="/saker"
                  className="link-underline mt-5 w-max font-mono text-[0.78rem] uppercase tracking-[0.18em] text-coral-500 md:mt-6"
                >
                  Bla i arkivet →
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* APPROACH / VALUES */}
      <section className="relative px-6 pb-20 md:px-10 md:pb-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal as="div" className="md:col-span-5">
              <Kicker>Arbeidsmåte</Kicker>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,3vw+1rem,4rem)] font-semibold leading-[1.05] tracking-tight text-ink">
                Kvalitetsjournalistikk
                <br />
                <em className="not-italic text-coral-500">fra felt.</em>
              </h2>
              <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-ink-2">
                Gode ideer, kvalitetsjournalistikk og fleksibilitet. Innsalg
                av enkelt-ideer, påbegynte eller ferdige artikler, og
                periode-jobbing i redaksjoner.
              </p>
            </Reveal>

            <StaggerGroup className="md:col-span-7">
              {values.map((v, i) => (
                <StaggerItem
                  key={v.title}
                  className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-t border-line/70 py-7 transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-line"
                >
                  <span
                    aria-hidden
                    className="col-span-2 font-mono text-[0.78rem] uppercase tracking-[0.2em] text-mute transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-coral-500 md:col-span-1"
                  >
                    {i + 1}
                  </span>
                  <h3 className="col-span-10 font-display text-[1.3rem] font-medium tracking-tight text-ink md:col-span-5">
                    {v.title}
                  </h3>
                  <p className="col-span-12 text-[0.95rem] leading-relaxed text-ink-2 md:col-span-6">
                    {v.body}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-40 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="h-px w-full bg-line/70" aria-hidden />
            <div className="grid gap-10 pt-16 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-8">
                <Kicker>Ta kontakt</Kicker>
                <h2 className="mt-3 font-display text-[clamp(2.4rem,3.5vw+1rem,4.4rem)] font-semibold leading-[1.05] tracking-tight text-ink">
                  Klar for et samarbeid?
                </h2>
                <p className="mt-6 max-w-[44ch] text-[1.05rem] leading-relaxed text-ink-2">
                  Send en e-post eller ring direkte. Enkeltoppdrag,
                  periode-jobbing eller en idé du vil teste.
                </p>
              </div>
              <div className="flex flex-wrap items-start gap-3 md:col-span-4 md:flex-col md:items-stretch md:pt-2">
                <MagneticButton href="/kontakt">
                  Snakkes om et oppdrag
                </MagneticButton>
                <MagneticButton href="/om" variant="ghost">
                  Mer om meg
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
