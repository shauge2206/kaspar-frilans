import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import { tagLabel } from "@/lib/tags";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-8">
            <h1 className="font-serif text-[clamp(2.6rem,5.5vw+1rem,6.5rem)] leading-[1.02] tracking-[-0.02em] text-ink">
              Kaspar Knudsen
              <span className="block italic text-ink-soft">
                Frilansjournalist i Bergen.
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
            <Link
              href={`/saker/${saker[0].slug}`}
              className="tile-hover-amber group block border border-rule p-6 bg-bg-elev"
            >
              <p className="smallcaps text-ink-mute mb-3">Sist publisert</p>
              <p className="font-serif text-xl leading-snug text-ink group-hover:text-amber transition-colors">
                {saker[0].tittel}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                {saker[0].publikasjon} · {saker[0].dato}
              </p>
              <span className="glow font-sans text-sm mt-5 inline-flex items-center gap-2 text-amber">
                Åpne saken
                <span aria-hidden>↘</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Posisjon</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
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
            <h2 className="font-serif text-4xl md:text-5xl">
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

        <div className="space-y-2">
          {saker.map((sak, i) => (
            <Reveal key={sak.slug} delay={i * 80}>
              <Link
                href={`/saker/${sak.slug}`}
                className="group grid md:grid-cols-12 gap-6 items-start py-8 border-t border-rule hover:bg-bg-elev/40 transition-colors px-2 -mx-2 rounded-sm"
              >
                <div className="md:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute pt-1">
                  №&nbsp;{i + 1}
                </div>
                <div className="md:col-span-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-2">
                    {sak.publikasjon} · {sak.dato} ·{" "}
                    <span className="text-amber">{sak.lesetidMinutter} min lesing</span>
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight text-ink group-hover:text-amber transition-colors">
                    {sak.tittel}
                  </h3>
                  <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">
                    {sak.ingress}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sak.emneknagger.map((tag) => (
                      <span
                        key={tag}
                        className="smallcaps text-ink-mute border border-rule px-2 py-0.5 rounded-full"
                      >
                        {tagLabel(tag)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="relative aspect-[4/3] overflow-hidden border border-rule">
                    <Image
                      src={sak.hovedbilde}
                      alt={sak.bildetekst}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(180deg, transparent 50%, color-mix(in oklab, var(--ink) 45%, transparent) 100%)`,
                      }}
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-28 md:py-32">
        <Reveal>
          <div className="tile-hover-amber border border-rule bg-bg-elev p-10 md:p-14">
            <p className="smallcaps text-amber mb-5">Bestilling</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl">
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
