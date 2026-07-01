import Link from "next/link";
import { saker } from "@/lib/saker";
import { ArticleCard } from "@/components/article-card";
import { FeaturedArticle } from "@/components/featured-article";
import { MagneticButton } from "@/components/magnetic-button";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";

export function HomeContent() {
  const featured = saker[0];
  const others = saker.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <Reveal as="p" delay={0.1} y={12}>
                <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute">
                  Frilansjournalist <span className="text-coral-500">/</span> Bergen
                </span>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(2.21rem,3.91vw+1.02rem,5.44rem)] font-medium leading-[1.02] tracking-[-0.022em] text-ink">
                <WordReveal text="Kaspar Knudsen" delay={0.05} />
                <br />
                <WordReveal
                  text="Frilansjournalist i Bergen."
                  delay={0.45}
                />
              </h1>

              <Reveal delay={1.0} className="mt-8 grid max-w-[58ch] gap-4">
                <p className="text-[1.05rem] leading-relaxed text-ink-2 md:text-[1.15rem]">
                  Frilansjournalist med base på USF Verftet, Nordnes. Mastergrad
                  i undersøkende journalistikk og lang erfaring med kritisk
                  graving innenfor arbeidsliv, krim og flere felt.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-ink-2">
                  Leverer kvalitetsjournalistikk til nisjepublikasjoner som
                  Fiskeribladet, Intrafish og Kystens Næringsliv. Drar ut i felt
                  for å se stedene og møte menneskene historiene handler om.
                  Bilder og tekst leveres som én helhet, klare til redigering.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-ink-2">
                  Åpen for enkeltoppdrag, innsalg av ferdige saker, og
                  periode-jobbing som ekstern redaksjonsressurs.
                </p>
              </Reveal>

              <Reveal delay={1.2} y={14} className="mt-10 flex flex-wrap gap-3">
                <MagneticButton href="/saker">
                  Les saker
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
                  Lei en frilanser
                </MagneticButton>
              </Reveal>
            </div>

            <Reveal
              delay={0.7}
              y={36}
              className="flex flex-col gap-5 md:col-span-4 md:pt-10"
            >
              <div
                className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[var(--radius-card)] bg-paper-2 ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift"
                aria-label="Portrettplassholder"
              >
                <svg
                  viewBox="0 0 200 200"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="home-portrait-grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="rgba(40,30,20,0.10)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#home-portrait-grid)" />
                  <g stroke="rgba(40,30,20,0.35)" strokeWidth="1" fill="none">
                    <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                    <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                    <path d="M 10 190 L 22 190 M 10 190 L 10 178" />
                    <path d="M 190 190 L 178 190 M 190 190 L 190 178" />
                  </g>
                  <g fill="rgba(40,30,20,0.22)">
                    <circle cx="100" cy="78" r="26" />
                    <path d="M 54 156 Q 54 110 100 110 Q 146 110 146 156 Z" />
                  </g>
                  <text
                    x="100"
                    y="180"
                    textAnchor="middle"
                    fontFamily="ui-monospace, monospace"
                    fontSize="9"
                    letterSpacing="3"
                    fill="rgba(40,30,20,0.6)"
                  >
                    PORTRETT
                  </text>
                </svg>
              </div>

              <FeaturedArticle saker={saker} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* POSISJON */}
      <section className="relative px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <Reveal as="div" className="md:col-span-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                Posisjon
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.7rem,2.55vw+0.85rem,3.06rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Kvalitetsjournalistikk
                <br />
                fra Bergen.
              </h2>
            </Reveal>
            <Reveal as="div" delay={0.1} className="grid max-w-[60ch] gap-4 md:col-span-7">
              <p className="text-base leading-relaxed text-ink-2">
                Jeg er frilansjournalist i Bergen, med kontor på USF Verftet på
                Nordnes. Mastergrad i undersøkende journalistikk og 15 år i
                mediebransjen.
              </p>
              <p className="text-base leading-relaxed text-ink-2">
                Jeg leverer kvalitetsjournalistikk til nisjepublikasjoner som
                Fiskeribladet, Intrafish og Kystens Næringsliv – særlig
                gravejournalistikk innen arbeidsliv, krim og flere felt. Drar
                ut i felt.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SAKER FRA ARKIVET */}
      <section
        id="saker"
        className="relative px-6 pb-32 md:px-10"
        aria-labelledby="utvalgte-saker"
      >
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <Reveal>
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                  Utvalgt
                </p>
                <h2
                  id="utvalgte-saker"
                  className="mt-3 font-display text-[clamp(1.7rem,2.55vw+0.85rem,3.06rem)] font-medium leading-[1.02] tracking-tight text-ink"
                >
                  Saker fra arkivet
                </h2>
              </div>
              <Link
                href="/saker"
                className="link-underline w-max font-mono text-[0.78rem] uppercase tracking-[0.18em] text-ink"
              >
                Alle saker →
              </Link>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-6 md:grid-cols-12 md:gap-8">
            <StaggerItem className="md:col-span-7">
              <ArticleCard sak={featured} size="lg" />
            </StaggerItem>
            {others[0] ? (
              <StaggerItem className="md:col-span-5 md:pt-10">
                <ArticleCard sak={others[0]} size="md" />
              </StaggerItem>
            ) : null}
            {others[1] ? (
              <StaggerItem className="md:col-span-5 md:col-start-3">
                <ArticleCard sak={others[1]} size="md" />
              </StaggerItem>
            ) : null}
            <StaggerItem className="hidden md:col-span-5 md:block">
              <div className="flex h-full flex-col justify-end pb-4">
                <p className="max-w-sm font-display text-[1.4rem] leading-snug tracking-tight text-ink-2">
                  Kritisk og undersøkende journalistikk innenfor arbeidsliv,
                  krim og flere områder.
                </p>
                <Link
                  href="/saker"
                  className="link-underline mt-6 w-max font-mono text-[0.78rem] uppercase tracking-[0.18em] text-coral-500"
                >
                  Bla i arkivet →
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* BESTILLING CTA */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-none bg-gradient-to-br from-coral-100 via-apricot-50 to-teal-100 p-10 ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift md:p-14">
              <div className="paper-grain absolute inset-0" />
              <div className="relative">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Bestilling
                </p>
                <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.53rem,2.55vw+0.85rem,2.72rem)] font-medium leading-tight tracking-tight text-ink">
                  Trenger redaksjonen din en frilanser?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
                  Undersøkende reportasje, research, intervju og bilder – levert
                  som ferdig sak fra felt. Tilgjengelig for både enkeltoppdrag og
                  lengre perioder i redaksjonen.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton href="/kontakt">Ta kontakt</MagneticButton>
                  <MagneticButton href="/om" variant="ghost">
                    Om Kaspar
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
