import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Stamp } from "@/components/stamp";
import { Paperclip } from "@/components/paperclip";
import { Redact } from "@/components/redact";

export const metadata: Metadata = {
  title: "Om Kaspar Knudsen — Frilansjournalist",
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
    title: "Innsalg av enkelt-ideer",
    body: "Innsalg av enkelt-ideer til redaksjoner.",
  },
  {
    title: "Påbegynte eller ferdige artikler",
    body: "Innsalg av påbegynte eller ferdige artikler.",
  },
  {
    title: "Enkeltoppdrag",
    body: "Enkeltoppdrag etter avtale. Stykkpris per sak.",
  },
  {
    title: "Periode-jobbing",
    body: "Periode-jobbing i redaksjoner. Betalt pr periode.",
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
                Kaspar Knudsen er frilansjournalist i Bergen med kontor på{" "}
                <span className="underline decoration-stamp/40">USF Verftet</span>
                , Nordnes.
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Mastergrad i undersøkende journalistikk og 15 år i
                  mediebransjen. Leverer kvalitetsjournalistikk til
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
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-ink/10">
                  <Image
                    src="/images/saker/sak-1/bilde-1.jpeg"
                    alt="Kaspar i felt"
                    fill
                    className="object-cover grayscale-[10%]"
                    sizes="(min-width: 1024px) 340px, 80vw"
                    priority
                  />
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft text-center">
                  KH · fra felt — Senja
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
                  <Row
                    k="Personnr."
                    v={<Redact>██████ ██████</Redact>}
                  />
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

          {/* services */}
          <section className="md:pl-12 mt-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              TJENESTER
            </p>
            <h2 className="mt-2 font-serif text-3xl">Tjenester</h2>
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
                «Økonomisk bærekraft i selskapet, å levere
                kvalitetsjournalistikk, frihet under ansvar — å styre
                bedriften selv»
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                — Kaspar Knudsen
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
