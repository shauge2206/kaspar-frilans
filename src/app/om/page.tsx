import type { Metadata } from "next";
import Link from "next/link";
import { Stamp } from "@/components/stamp";
import { Paperclip } from "@/components/paperclip";

export const metadata: Metadata = {
  title: "Om Kaspar Knudsen – Frilansjournalist",
  description:
    "Bio, verdier, visjon og tjenester for frilansjournalist Kaspar Knudsen i Bergen.",
};

const verdier = [
  "Likeverd",
  "Empati",
  "Høflighet og vennlighet",
  "Holder ord og avtaler",
  "Ærlighet",
  "Samfunnsengasjert",
  "Kritisk tenkning",
  "Nysgjerrig",
  "Åpen og inkluderende",
];

const tjenester = [
  {
    title: "Undersøkende reportasje",
    body: "Gravesaker innen arbeidsliv, krim og samfunn — lange løp der research og kildekontakt avgjør utfallet.",
  },
  {
    title: "Reportasje fra felt",
    body: "Drar ut til stedet, ser miljøet og møter menneskene. Journalistikk som kommer nærmere virkeligheten.",
  },
  {
    title: "Bilder og tekst",
    body: "Leverer bilder og tekst som én helhet, klar til redigering og publisering.",
  },
  {
    title: "Ekstern redaksjonsressurs",
    body: "Tilgjengelig i kortere eller lengre perioder når redaksjonen trenger ekstra hender.",
  },
];

export default function OmPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10 pb-24">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
        KH-ARKIV / PERSONELL / SAKSMAPPE 000
      </div>

      <div className="relative mt-6">
        <div className="folder absolute inset-0 -translate-x-2 translate-y-2 -rotate-[0.4deg] -z-0 hidden md:block" />

        <article className="relative paper p-6 md:p-12 z-10">
          <div className="holes hidden md:flex">
            <span /><span /><span /><span /><span /><span />
          </div>

          <header className="md:pl-12 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                PERSONELL · KH-001
              </p>
              <h1 className="mt-3 font-serif text-5xl md:text-6xl leading-[1.05]">
                <span className="typed">Kaspar Knudsen</span>
              </h1>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-stamp">
                FRILANSJOURNALIST · BERGEN · USF VERFTET
              </p>

              <p className="mt-7 font-serif text-xl leading-relaxed text-ink">
                Jeg er frilansjournalist i Bergen, med kontor på{" "}
                <span className="underline decoration-stamp/40">USF Verftet</span>{" "}
                på Nordnes.
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Mastergrad i undersøkende journalistikk og 15 år i
                  mediebransjen. Jeg leverer kvalitetsjournalistikk til
                  nisjepublikasjoner som <em>Fiskeribladet</em>,{" "}
                  <em>Intrafish</em> og <em>Kystens Næringsliv</em>.
                </p>
                <p>
                  Gravejournalistikk innenfor arbeidsliv, krim og flere
                  områder. Bilder og tekst fra felt.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-6">
              <div className="polaroid relative rotate-[2deg] max-w-[340px] mx-auto">
                <Paperclip />
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8dec3] flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 250"
                    className="w-full h-full"
                    aria-label="Portrettplassholder"
                  >
                    {/* faint grid suggesting unexposed paper */}
                    <defs>
                      <pattern
                        id="placeholder-grid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="rgba(60,40,18,0.12)"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="200" height="250" fill="url(#placeholder-grid)" />
                    {/* corner crop-marks like a contact sheet */}
                    <g
                      stroke="rgba(60,40,18,0.45)"
                      strokeWidth="1"
                      fill="none"
                    >
                      <path d="M 10 10 L 22 10 M 10 10 L 10 22" />
                      <path d="M 190 10 L 178 10 M 190 10 L 190 22" />
                      <path d="M 10 240 L 22 240 M 10 240 L 10 228" />
                      <path d="M 190 240 L 178 240 M 190 240 L 190 228" />
                    </g>
                    {/* simplified portrait silhouette */}
                    <g fill="rgba(60,40,18,0.25)">
                      <circle cx="100" cy="100" r="34" />
                      <path d="M 50 200 Q 50 150 100 150 Q 150 150 150 200 Z" />
                    </g>
                    <text
                      x="100"
                      y="222"
                      textAnchor="middle"
                      fontFamily="ui-monospace, monospace"
                      fontSize="9"
                      letterSpacing="3"
                      fill="rgba(60,40,18,0.7)"
                    >
                      PORTRETT
                    </text>
                  </svg>
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft text-center">
                  KH · plassholder
                </p>
              </div>

              <div className="paper p-4 -rotate-[1.2deg] font-mono text-[11px] leading-relaxed text-ink-soft">
                <p className="uppercase tracking-[0.18em] text-stamp">PERSONALIA</p>
                <dl className="mt-2 space-y-1">
                  <Row k="Navn" v="Kaspar Knudsen" />
                  <Row k="Profesjon" v="Frilansjournalist" />
                  <Row k="Distrikt" v="Bergen / Vestland" />
                  <Row k="Kontor" v="USF Verftet, Nordnes" />
                  <Row k="Erfaring" v="15 år i mediebransjen" />
                  <Row k="Utdanning" v="Master i undersøkende journalistikk" />
                  <Row k="Foretak" v="Enkeltpersonforetak (2026–)" />
                </dl>
              </div>
            </aside>
          </header>

          {/* values */}
          <section className="md:pl-12 mt-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              KJERNEVERDIER · INTERN
            </p>
            <h2 className="mt-2 font-serif text-3xl">Kjerneverdier</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {verdier.map((k) => (
                <div key={k} className="border border-ink/15 bg-paper-2/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stamp">
                    {k}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* erfaringer */}
          <section className="md:pl-12 mt-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              ERFARINGER
            </p>
            <h2 className="mt-2 font-serif text-3xl">Erfaringer</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-5">
              {tjenester.map((t) => (
                <div key={t.title} className="paper p-5 relative">
                  <span className="tape -top-3 left-6 -rotate-3" />
                  <h3 className="font-serif text-xl">{t.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* vision */}
          <section className="md:pl-12 mt-16 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                VISJON
              </p>
              <p className="mt-3 font-serif text-2xl md:text-3xl leading-snug italic text-ink">
                «Jeg drar ut i felt for å se stedene og møte menneskene jeg skriver om – det er det som gjør journalistikken nærmere.»
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                – Kaspar Knudsen
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Stamp variant="circle" rotate={-12}>
                <span className="block text-[11px]">VERIFISERT</span>
                <span className="block text-base mt-1">KH-001</span>
                <span className="block text-[10px] mt-1">2026</span>
              </Stamp>
            </div>
          </section>

          <div className="md:pl-12 mt-12 flex flex-wrap items-center justify-between gap-4">
            <Link href="/saker" className="btn">Se sakene</Link>
            <Link
              href="/kontakt"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-stamp underline decoration-stamp/40"
            >
              Send melding →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-3 border-b border-ink/10 pb-1">
      <dt className="uppercase tracking-[0.14em] text-ink-muted">{k}</dt>
      <dd className="text-ink">{v}</dd>
    </div>
  );
}
