import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import { tagLabel } from "@/lib/tags";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { FeaturedArticle } from "@/components/FeaturedArticle";

export default function Home() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-8">
            <h1 className="font-serif text-[clamp(2.21rem,3.91vw+1.02rem,5.44rem)] font-medium leading-[1.02] tracking-[-0.022em] text-ink">
              <WordReveal text="Kaspar Knudsen" delay={0.05} />
              <span className="block italic text-ink-soft">
                <WordReveal text="Frilansjournalist i Bergen." delay={0.45} />
              </span>
            </h1>
            <div className="mt-8 max-w-xl space-y-4 text-base md:text-lg leading-relaxed text-ink-soft">
              <p>
                Frilansjournalist med base på USF Verftet, Nordnes. Mastergrad
                i undersøkende journalistikk og lang erfaring med kritisk
                graving innenfor arbeidsliv, krim og flere felt.
              </p>
              <p>
                Leverer kvalitetsjournalistikk til nisjepublikasjoner som
                Fiskeribladet, Intrafish og Kystens Næringsliv. Drar ut i felt
                for å se stedene og møte menneskene historiene handler om.
                Bilder og tekst leveres som én helhet, klare til redigering.
              </p>
              <p>
                Åpen for enkeltoppdrag, innsalg av ferdige saker, og
                periode-jobbing som ekstern redaksjonsressurs.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/saker"
                className="font-sans text-sm tracking-wide bg-amber text-bg px-5 py-3.5 rounded-full hover:brightness-110 transition"
              >
                Les saker →
              </Link>
              <Link
                href="/kontakt"
                className="font-sans text-sm tracking-wide border border-rule px-5 py-3.5 rounded-full text-ink-soft hover:text-amber hover:border-amber transition"
              >
                Lei en frilanser
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 space-y-5">
            <div
              className="relative aspect-square w-full border border-rule bg-bg-elev flex items-center justify-center overflow-hidden text-ink-mute"
              aria-label="Portrettplassholder"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="hero-portrait-grid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.10"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#hero-portrait-grid)" />
                <g
                  stroke="currentColor"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <path d="M 12 12 L 30 12 M 12 12 L 12 30" />
                  <path d="M 188 12 L 170 12 M 188 12 L 188 30" />
                  <path d="M 12 188 L 30 188 M 12 188 L 12 170" />
                  <path d="M 188 188 L 170 188 M 188 188 L 188 170" />
                </g>
                <g fill="currentColor" fillOpacity="0.32">
                  <circle cx="100" cy="70" r="24" />
                  <path d="M 58 140 Q 58 100 100 100 Q 142 100 142 140 Z" />
                </g>
                <text
                  x="100"
                  y="166"
                  textAnchor="middle"
                  fontFamily="ui-monospace, SFMono-Regular, monospace"
                  fontSize="10"
                  fontWeight="700"
                  letterSpacing="2.2"
                  fill="currentColor"
                  fillOpacity="0.85"
                >
                  PORTRETT
                </text>
                <text
                  x="100"
                  y="178"
                  textAnchor="middle"
                  fontFamily="ui-monospace, SFMono-Regular, monospace"
                  fontSize="6.5"
                  letterSpacing="2.2"
                  fill="currentColor"
                  fillOpacity="0.65"
                >
                  PLACEHOLDER
                </text>
              </svg>
            </div>
            <FeaturedArticle saker={saker} />
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Posisjon</p>
            <h2 className="font-serif text-[clamp(1.5rem,1.6vw+0.9rem,2.3rem)] font-medium leading-[1.1] tracking-tight">
              Kvalitetsjournalistikk fra Bergen.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 prose-longform max-w-none">
            <p>
              Jeg er frilansjournalist i Bergen, med kontor på USF Verftet på
              Nordnes. Mastergrad i undersøkende journalistikk og 15 år i
              mediebransjen.
            </p>
            <p>
              Jeg leverer kvalitetsjournalistikk til nisjepublikasjoner som
              Fiskeribladet, Intrafish og Kystens Næringsliv – særlig
              gravejournalistikk innen arbeidsliv, krim og flere felt. Drar
              ut i felt.
            </p>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <p className="smallcaps text-amber mb-3">Utvalgt</p>
            <h2 className="font-serif text-[clamp(1.7rem,2.55vw+0.85rem,3.06rem)] font-medium leading-[1.02] tracking-tight">
              Saker fra arkivet
            </h2>
          </div>
          <Link
            href="/saker"
            className="font-sans text-sm text-ink-soft hover:text-amber transition glow"
          >
            Alle saker →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {/* Featured (large) */}
          <Reveal delay={0} className="md:col-span-7">
            <Link
              href={`/saker/${saker[0].slug}`}
              className="group relative block aspect-[3/2] overflow-hidden border border-rule"
            >
              <Image
                src={saker[0].hovedbilde}
                alt={saker[0].bildetekst}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                priority
              />
              {saker[0].emneknagger[0] && (
                <span className="absolute top-5 left-5 md:top-6 md:left-6 z-10 bg-bg text-ink font-mono text-[11px] uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full">
                  {tagLabel(saker[0].emneknagger[0])}
                </span>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.88) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/75 mb-3">
                  {saker[0].publikasjon} · {saker[0].dato} ·{" "}
                  <span className="text-amber">{saker[0].lesetidMinutter} min lesing</span>
                </p>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight text-white">
                  {saker[0].tittel}
                </h3>
              </div>
            </Link>
          </Reveal>

          {/* Medium tile 1 (top-right) */}
          <Reveal delay={80} className="md:col-span-5 md:pt-10">
            <Link
              href={`/saker/${saker[1].slug}`}
              className="group relative block aspect-[4/3] overflow-hidden border border-rule"
            >
              <Image
                src={saker[1].hovedbilde}
                alt={saker[1].bildetekst}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {saker[1].emneknagger[0] && (
                <span className="absolute top-4 left-4 md:top-5 md:left-5 z-10 bg-bg text-ink font-mono text-[11px] uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full">
                  {tagLabel(saker[1].emneknagger[0])}
                </span>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.88) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/75 mb-2">
                  {saker[1].publikasjon} · {saker[1].dato}
                </p>
                <h3 className="font-serif text-xl md:text-2xl leading-tight text-white">
                  {saker[1].tittel}
                </h3>
              </div>
            </Link>
          </Reveal>

          {/* Medium tile 2 (bottom-left, offset) */}
          <Reveal delay={160} className="md:col-span-5 md:col-start-3">
            <Link
              href={`/saker/${saker[2].slug}`}
              className="group relative block aspect-[4/3] overflow-hidden border border-rule"
            >
              <Image
                src={saker[2].hovedbilde}
                alt={saker[2].bildetekst}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {saker[2].emneknagger[0] && (
                <span className="absolute top-4 left-4 md:top-5 md:left-5 z-10 bg-bg text-ink font-mono text-[11px] uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full">
                  {tagLabel(saker[2].emneknagger[0])}
                </span>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.88) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/75 mb-2">
                  {saker[2].publikasjon} · {saker[2].dato}
                </p>
                <h3 className="font-serif text-xl md:text-2xl leading-tight text-white">
                  {saker[2].tittel}
                </h3>
              </div>
            </Link>
          </Reveal>

          {/* Text + CTA block (bottom-right) */}
          <Reveal delay={240} className="col-span-12 md:col-span-5">
            <div className="flex h-full flex-col justify-end pt-2 pb-4 md:pt-0">
              <p className="max-w-sm font-serif text-[1.2rem] md:text-[1.4rem] leading-snug text-ink-soft">
                Kritisk og undersøkende journalistikk innenfor arbeidsliv,
                krim og flere områder.
              </p>
              <Link
                href="/saker"
                className="mt-5 md:mt-6 w-max font-mono text-[0.78rem] uppercase tracking-[0.18em] text-amber hover:text-ink transition-colors glow"
              >
                Bla i arkivet →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-28 md:py-32">
        <Reveal>
          <div className="tile-hover-amber border border-rule bg-bg-elev p-10 md:p-14">
            <p className="smallcaps text-amber mb-5">Bestilling</p>
            <h2 className="font-serif text-[clamp(1.53rem,2.55vw+0.85rem,2.72rem)] font-medium leading-tight tracking-tight max-w-3xl">
              Trenger redaksjonen din en frilanser?
            </h2>
            <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
              Undersøkende reportasje, research, intervju og bilder – levert
              som ferdig sak fra felt. Tilgjengelig for både enkeltoppdrag og
              lengre perioder i redaksjonen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="font-sans text-sm bg-amber text-bg px-5 py-3.5 rounded-full hover:brightness-110 transition"
              >
                Ta kontakt
              </Link>
              <Link
                href="/om"
                className="font-sans text-sm border border-rule px-5 py-3.5 rounded-full text-ink-soft hover:text-amber hover:border-amber transition"
              >
                Om Kaspar
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
