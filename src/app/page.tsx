import Link from "next/link";
import { saker } from "@/lib/saker";
import { ArticleCard } from "@/components/article-card";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";
import { ParallaxImage } from "@/components/parallax-image";

const values = [
  {
    title: "Graving",
    body: "Lange linjer i kompliserte saker. Innsynsbegjæringer, kildearbeid og tålmodighet over tid.",
  },
  {
    title: "Reportasje",
    body: "Mennesker først. Jeg reiser dit historien er, og lar de jeg møter komme til orde.",
  },
  {
    title: "Kyst og hav",
    body: "Fiskeri, havbruk og næringsliv langs kysten — et felt jeg kjenner særlig godt.",
  },
  {
    title: "Foto",
    body: "Jeg leverer egne bilder fra felt når oppdraget krever det. Stillferdig, dokumentarisk.",
  },
];

const publikasjoner = [
  "Fiskeribladet",
  "Bergens Tidende",
  "Intrafish",
  "Kystens Næringsliv",
  "NRK",
  "Dagens Næringsliv",
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

              <h1 className="mt-7 font-display text-[clamp(2.6rem,4.6vw+1.2rem,6.4rem)] font-medium leading-[1.02] tracking-[-0.022em] text-ink">
                <WordReveal
                  text="Saker som fortjener tid"
                  highlightWords={["fortjener"]}
                  delay={0.05}
                />
                <br />
                <WordReveal
                  text="og lesere som krever presisjon."
                  delay={0.45}
                />
              </h1>

              <Reveal as="p" delay={1.05} y={14}>
                <span className="mt-8 block max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-2 md:text-[1.15rem]">
                  Kaspar Knudsen er frilansjournalist med base i Bergen.
                  Han skriver gravesaker og reportasje for kyst- og næringspresse —
                  med kildevern, dokumentasjon og frihet under ansvar som
                  bærebjelker.
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
                <ParallaxImage
                  src={featured.hovedbilde}
                  alt={featured.bilder[0]?.alt ?? featured.tittel}
                  className="aspect-[4/5]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-paper/85">
                    Siste sak — {featured.publikasjon}
                  </p>
                  <Link
                    href={`/saker/${featured.slug}`}
                    className="mt-2 block font-display text-[1.05rem] leading-tight tracking-tight text-paper hover:underline"
                  >
                    {featured.tittel}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Marquee of publikasjoner */}
          <Reveal delay={0.4} y={20} className="mt-24 md:mt-32">
            <div className="flex flex-col gap-4 border-y border-line/70 py-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-mute">
                Publisert hos
              </p>
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 font-display text-[1.05rem] leading-none tracking-tight text-ink-2 md:text-[1.2rem]">
                {publikasjoner.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section
        id="saker"
        className="relative px-6 pb-32 md:px-10"
        aria-labelledby="utvalgte-saker"
      >
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                  Utvalg · 2023–2025
                </p>
                <h2
                  id="utvalgte-saker"
                  className="mt-3 font-display text-[clamp(2rem,3vw+1rem,3.6rem)] font-medium leading-[1.02] tracking-tight text-ink"
                >
                  Tre saker.
                  <br />
                  <span className="text-mute">Tre måter å fortelle på.</span>
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
            <StaggerItem className="md:col-span-5 hidden md:block">
              <div className="flex h-full flex-col justify-end pb-4">
                <p className="max-w-sm font-display text-[1.4rem] leading-snug tracking-tight text-ink-2">
                  Hver sak begynner med et tips, et dokument eller en stemme
                  som ikke får plass.
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

      {/* APPROACH / VALUES */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal as="div" className="md:col-span-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                Arbeidsmåte
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,2.4vw+1rem,3.2rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Færre saker.
                <br />
                <span className="bg-gradient-to-r from-coral-500 to-apricot-200 bg-clip-text text-transparent">
                  Mer dybde per sak.
                </span>
              </h2>
              <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-ink-2">
                Jeg jobber best når jeg får tid til å forstå hva en sak
                egentlig handler om — og når jeg får ro til å la den modnes.
                Resultatet er færre overskrifter, men sjelden uten kjøtt på
                beinet.
              </p>
            </Reveal>

            <StaggerGroup className="grid gap-4 md:col-span-7 md:grid-cols-2">
              {values.map((v) => (
                <StaggerItem
                  key={v.title}
                  className="rounded-[var(--radius-card)] bg-paper/70 p-7 ring-1 ring-line/70 shadow-soft backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-1 inline-block h-8 w-1 rounded-full bg-gradient-to-b from-coral-400 to-apricot-200"
                    />
                    <div>
                      <h3 className="font-display text-[1.4rem] font-medium tracking-tight text-ink">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* QUOTE / CTA */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <figure className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-coral-100 via-apricot-50 to-teal-100 p-10 md:p-16 ring-1 ring-line/70 shadow-soft">
              <div className="paper-grain absolute inset-0" />
              <blockquote className="relative font-display text-[clamp(1.8rem,2.6vw+1rem,3.2rem)] font-medium leading-[1.12] tracking-tight text-ink">
                «Jeg tror på journalistikk som tar leseren på alvor — som
                tåler tid, som henter fram dokumenter, som lar mennesker
                snakke ferdig.»
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-3 text-sm text-ink-2">
                <span className="h-px w-10 bg-ink/40" />
                Kaspar Knudsen
              </figcaption>

              <div className="relative mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton href="/kontakt">
                  Snakkes om et oppdrag
                </MagneticButton>
                <MagneticButton href="/om" variant="ghost">
                  Mer om meg
                </MagneticButton>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
}
