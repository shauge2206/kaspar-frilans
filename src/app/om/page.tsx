import type { Metadata } from "next";
import { CursorPanImage } from "@/components/CursorPanImage";
import { FadeIn, RevealGroup, RevealItem } from "@/components/Reveal";
import { TransitionLink } from "@/components/TransitionLink";

export const metadata: Metadata = {
  title: "Om",
  description:
    "Om Stian Pablo Hauge — frilansjournalist i Bergen med fokus på kyst, fiskeri og samfunn.",
};

const TIMELINE = [
  {
    year: "2024 —",
    label: "Frilans",
    place: "Bergen",
    body: "Egen praksis. Faste oppdragsgivere innen kyst, fiskeri og samfunn.",
  },
  {
    year: "2022 — 2024",
    label: "Bergens Tidende",
    place: "Reportasje",
    body: "Reporter i nyhets- og featureavdelingen. Dramatiske hendelser, sosial reportasje, gravesaker.",
  },
  {
    year: "2020 — 2022",
    label: "Fiskeribladet / Intrafish",
    place: "Kyst & næring",
    body: "Næringsjournalistikk og graving — fra havbruk og kvotespørsmål til skipsforlis.",
  },
  {
    year: "2018 — 2020",
    label: "Praktikant og frilans",
    place: "Vestlandet",
    body: "Lokalaviser, magasiner og rapporter. Hovedsakelig kyst og småsamfunn.",
  },
];

const FOKUS = [
  {
    n: "01",
    title: "Graving",
    body: "Lange forløp, dokumentinnsyn og kildearbeid. Saker som krever måneder, ikke timer.",
  },
  {
    n: "02",
    title: "Reportasje",
    body: "Reisende reportasje fra kyst og periferi. Nært, presist, med tid til detaljer som teller.",
  },
  {
    n: "03",
    title: "Feature",
    body: "Lengre tekster og portretter. Sosial og kulturell tematikk med stillferdig tempo.",
  },
];

export default function OmPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-[1240px] px-5 pt-12 sm:px-8 sm:pt-20">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
          <span aria-hidden className="inline-block h-px w-8 bg-ink/40" />
          <span>Profil</span>
          <span aria-hidden className="dot-divider" />
          <span className="tabular">Etabl. 2018</span>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-8">
            <RevealGroup className="space-y-7">
              <RevealItem
                as="h1"
                className="text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.03em]"
              >
                Stian Pablo Hauge er en frilansjournalist basert i Bergen,
                med kysten som arbeidsfelt.
              </RevealItem>
              <RevealItem
                as="p"
                className="max-w-[58ch] text-[17px] leading-[1.6] text-ink/75"
              >
                Han har skrevet for Bergens Tidende, Fiskeribladet, Intrafish
                og Kystens Næringsliv, og jobber primært med saker som krever
                tid — graving, lange reportasjer og feature. Utgangspunktet er
                Vestlandet, men oppdragsgivere finnes langs hele kysten.
              </RevealItem>
              <RevealItem
                as="p"
                className="max-w-[58ch] text-[15px] leading-[1.65] text-ink/65"
              >
                Stian Pablo har bakgrunn fra både lokaljournalistikk og
                næringspresse. Han er opptatt av at journalistikk skal være
                konkret, etterprøvbar og åpen om sine kilder — og at lange
                forløp bør få plass i moderne nyhetsbilde.
              </RevealItem>
            </RevealGroup>
          </div>

          <div className="col-span-12 sm:col-span-4">
            <FadeIn delay={0.2}>
              <div className="mask-reveal aspect-[3/4] w-full overflow-hidden border border-hairline bg-ink/5">
                <CursorPanImage
                  src="/images/saker/sak-2/bilde-1.jpeg"
                  alt="Portrett av Stian Pablo Hauge"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  containerClassName="h-full w-full"
                />
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                Foto · arbeidsbilde fra Skogsvåg, 2023
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* fokus */}
      <section className="mx-auto mt-28 max-w-[1240px] px-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Arbeidsfelt
          </h2>
          <span className="font-mono text-[11px] tabular uppercase tracking-[0.16em] text-ink/45">
            03
          </span>
        </div>
        <div className="mt-2 grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {FOKUS.map((f) => (
            <FadeIn key={f.n} className="p-6 sm:p-8">
              <p className="font-mono text-[11px] tabular uppercase tracking-[0.18em] text-ink/45">
                {f.n}
              </p>
              <h3 className="mt-3 text-[22px] font-medium tracking-[-0.012em]">
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink/70">
                {f.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="mx-auto mt-28 max-w-[1240px] px-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Spor — utvalgte stasjoner
          </h2>
          <span className="font-mono text-[11px] tabular uppercase tracking-[0.16em] text-ink/45">
            CV
          </span>
        </div>

        <ol className="mt-2 divide-y divide-hairline">
          {TIMELINE.map((t) => (
            <li key={t.year} className="grid grid-cols-12 items-baseline gap-4 py-7">
              <span className="col-span-12 font-mono text-[11px] tabular uppercase tracking-[0.16em] text-ink/55 sm:col-span-3">
                {t.year}
              </span>
              <div className="col-span-12 sm:col-span-9">
                <p className="flex items-baseline gap-3 text-[18px] font-medium tracking-[-0.01em]">
                  {t.label}
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
                    {t.place}
                  </span>
                </p>
                <p className="mt-2 max-w-[60ch] text-[14px] leading-[1.65] text-ink/70">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* values */}
      <section className="mx-auto mt-28 max-w-[1240px] px-5 sm:px-8">
        <FadeIn>
          <div className="grid grid-cols-12 gap-6 border-y border-hairline py-16">
            <div className="col-span-12 sm:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                Premiss
              </p>
            </div>
            <div className="col-span-12 sm:col-span-9">
              <p className="text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.25] tracking-[-0.012em]">
                <span className="text-ink/45">Frihet under ansvar.</span>{" "}
                Lengre tid på færre saker. Åpne kilder.{" "}
                <span className="text-ink/45">Konkret språk.</span>{" "}
                Ingen stunts.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-24 max-w-[1240px] px-5 pb-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-medium leading-[1.1] tracking-[-0.015em]">
            Vil du jobbe sammen?
          </h2>
          <TransitionLink
            href="/kontakt"
            className="focus-ring inline-flex h-11 items-center bg-ink px-5 text-[13px] font-medium tracking-wide text-paper"
          >
            Til kontakt
            <span
              aria-hidden
              className="ml-3 inline-block h-1 w-1 translate-y-[0.5px] bg-paper"
            />
          </TransitionLink>
        </div>
      </section>
    </div>
  );
}
