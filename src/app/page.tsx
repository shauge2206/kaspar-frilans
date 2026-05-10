import { saker } from "@/lib/saker";
import { TransitionLink } from "@/components/TransitionLink";
import { CursorPanImage } from "@/components/CursorPanImage";
import { MagneticButton } from "@/components/MagneticButton";
import { FadeIn, RevealGroup, RevealItem } from "@/components/Reveal";
import { MarqueeRule } from "@/components/MarqueeRule";

export default function Home() {
  const featured = saker[0];
  const rest = saker.slice(1);

  return (
    <div className="bg-paper text-ink">
      {/* hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-6 px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
          <div className="col-span-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <span aria-hidden className="inline-block h-px w-8 bg-ink/40" />
            <span className="tabular">N 60° 23′ — Bergen, NO</span>
            <span aria-hidden className="dot-divider" />
            <span>Frilansjournalist siden 2018</span>
          </div>

          <div className="col-span-12 mt-8 sm:col-span-9">
            <RevealGroup className="space-y-6">
              <RevealItem
                as="h1"
                className="text-[clamp(2.6rem,7vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.035em]"
              >
                Kaspar Knudsen.
                <br />
                <span className="text-ink/45">Reporter med kystlinje.</span>
              </RevealItem>
              <RevealItem
                as="p"
                className="max-w-[44ch] text-[17px] leading-[1.55] text-ink/75"
              >
                Gravesaker, reportasje og feature — med utgangspunkt i kyst,
                fiskeri og samfunnsforhold. Skriver fast for Fiskeribladet,
                Intrafish og Kystens Næringsliv, og jobber prosjektbasert med
                publikasjoner som Bergens Tidende.
              </RevealItem>

              <RevealItem className="flex flex-wrap items-center gap-3 pt-2">
                <MagneticButton
                  as="a"
                  href="/saker"
                  className="focus-ring inline-flex h-11 items-center bg-ink px-5 text-[13px] font-medium tracking-wide text-paper"
                  ariaLabel="Se saker"
                >
                  Se saker
                  <span
                    aria-hidden
                    className="ml-3 inline-block h-1 w-1 translate-y-[0.5px] bg-paper"
                  />
                </MagneticButton>
                <TransitionLink
                  href="/kontakt"
                  className="focus-ring inline-flex h-11 items-center border border-ink/15 px-5 text-[13px] font-medium tracking-wide text-ink transition-colors duration-150 hover:border-ink"
                >
                  Ta kontakt
                </TransitionLink>
              </RevealItem>
            </RevealGroup>
          </div>

          {/* meta column */}
          <aside className="col-span-12 mt-6 sm:col-span-3 sm:mt-0">
            <FadeIn delay={0.15}>
              <dl className="space-y-5 border-l border-hairline pl-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                <div>
                  <dt>Område</dt>
                  <dd className="mt-1 text-ink">Kyst · Fiskeri · Samfunn</dd>
                </div>
                <div>
                  <dt>Sjanger</dt>
                  <dd className="mt-1 text-ink">Graving · Reportasje · Feature</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd className="mt-1 flex items-center gap-2 text-ink">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse bg-ink" />
                    Tilgjengelig for oppdrag
                  </dd>
                </div>
              </dl>
            </FadeIn>
          </aside>
        </div>

        <MarqueeRule />
      </section>

      {/* featured */}
      <section className="mx-auto max-w-[1240px] px-5 pt-20 sm:px-8">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Utvalgt sak — 01 / {String(saker.length).padStart(2, "0")}
          </h2>
          <TransitionLink
            href="/saker"
            className="group inline-flex items-center gap-2 text-[12px] text-ink/70 transition-colors hover:text-ink"
          >
            Alle saker
            <span
              aria-hidden
              className="inline-block translate-y-px transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </TransitionLink>
        </div>

        <TransitionLink
          href={`/saker/${featured.slug}`}
          className="focus-ring mt-8 grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 sm:col-span-7">
            <div className="mask-reveal aspect-[4/3] w-full overflow-hidden bg-ink/5">
              <CursorPanImage
                src={featured.hovedbilde}
                alt={featured.bildetekst}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                containerClassName="h-full w-full"
              />
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-5 sm:col-span-5 sm:pl-2">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
              <span>{featured.seksjon}</span>
              <span aria-hidden className="dot-divider" />
              <span>{featured.publikasjon}</span>
            </div>
            <h3 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-medium leading-[1.08] tracking-[-0.018em]">
              {featured.tittel}
            </h3>
            <p className="text-[15px] leading-[1.6] text-ink/70">
              {featured.ingress}
            </p>
            <div className="mt-auto flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
              <time dateTime={featured.datoIso} className="tabular">
                {featured.dato}
              </time>
              <span aria-hidden className="dot-divider" />
              <span>{featured.sted}</span>
              <span className="ml-auto inline-flex items-center gap-2 text-ink">
                Les saken
                <span aria-hidden>→</span>
              </span>
            </div>
          </div>
        </TransitionLink>
      </section>

      {/* recent saker tabular */}
      <section className="mx-auto max-w-[1240px] px-5 pt-24 sm:px-8">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Indeks — nylig publisert
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
            Bla / klikk
          </span>
        </div>

        <ul className="mt-2 divide-y divide-hairline">
          {rest.map((s, idx) => (
            <li key={s.slug} className="row-mark group">
              <TransitionLink
                href={`/saker/${s.slug}`}
                className="focus-ring grid grid-cols-12 items-center gap-4 py-6"
              >
                <span className="col-span-1 font-mono text-[11px] tabular tracking-[0.16em] text-ink/40 sm:col-span-1">
                  {String(idx + 2).padStart(2, "0")}
                </span>
                <h3 className="col-span-11 text-[clamp(1.2rem,2vw,1.6rem)] font-medium leading-[1.18] tracking-[-0.015em] transition-transform duration-300 sm:col-span-7 sm:group-hover:translate-x-1">
                  {s.tittel}
                </h3>
                <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55 sm:col-span-2">
                  {s.publikasjon}
                </span>
                <time
                  dateTime={s.datoIso}
                  className="col-span-6 text-right font-mono text-[11px] tabular tracking-[0.14em] text-ink/55 sm:col-span-2 sm:text-left"
                >
                  {s.dato}
                </time>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </section>

      {/* manifesto */}
      <section className="mx-auto max-w-[1240px] px-5 py-28 sm:px-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Manifest
            </p>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <FadeIn>
              <blockquote className="text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-[1.15] tracking-[-0.018em]">
                Kvalitetsjournalistikk handler om{" "}
                <span className="text-ink/45">tid</span>, om å våge å være
                konkret, og om <span className="text-ink/45">frihet under
                ansvar</span>. Jeg jobber for å holde alle tre i live —
                samtidig.
              </blockquote>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
                — Kaspar Knudsen, Bergen
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* publications strip */}
      <section className="border-y border-hairline bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-hairline px-5 py-10 sm:grid-cols-5 sm:px-8">
          {[
            "Fiskeribladet",
            "Intrafish",
            "Kystens Næringsliv",
            "Bergens Tidende",
            "NRK",
          ].map((p) => (
            <div
              key={p}
              className="flex items-center justify-center px-3 text-center font-mono text-[12px] uppercase tracking-[0.18em] text-ink/60"
            >
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="mx-auto max-w-[1240px] px-5 py-28 sm:px-8">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 sm:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Neste sak
            </p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.02em]">
              Har du et tips, eller et oppdrag som krever{" "}
              <span className="text-ink/45">tid og kildearbeid?</span>
            </h2>
          </div>
          <div className="col-span-12 sm:col-span-4 sm:text-right">
            <MagneticButton
              as="a"
              href="/kontakt"
              className="focus-ring inline-flex h-12 items-center bg-ink px-6 text-[13px] font-medium tracking-wide text-paper"
              ariaLabel="Til kontakt"
            >
              Skriv til meg
              <span
                aria-hidden
                className="ml-3 inline-block h-1 w-1 translate-y-[0.5px] bg-paper"
              />
            </MagneticButton>
          </div>
        </div>
      </section>

    </div>
  );
}
