import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import { Typewriter } from "@/components/Typewriter";
import {
  ArrowDoodle,
  Paperclip,
  PushPin,
  Stamp,
  StarDoodle,
} from "@/components/Decor";

export default function Home() {
  const featured = saker;

  return (
    <div className="notebook-shell pt-4 pb-20">
      {/* Hero — journal entry */}
      <section className="relative grid grid-cols-12 gap-x-6 lg:gap-x-10 pt-8">
        {/* Margin column */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-3 relative">
          <div className="md:sticky md:top-8">
            <div className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Frilansjournalist
            </div>
            <p className="handwritten-red text-2xl leading-tight mt-1">
              Bergen
            </p>
            <div className="mt-4 typewriter text-[0.68rem] tracking-[0.16em] text-ink-fade">
              USF VERFTET
              <br />
              NORDNES
            </div>

            <div className="mt-6 hidden md:block">
              <Stamp label="Bergen" rotation={-9} />
            </div>

            <div className="hidden md:block mt-8 max-w-[12rem]">
              <p className="margin-note text-lg leading-snug">
                Mastergrad i
                <br />
                undersøkende
                <br />
                journalistikk
              </p>
              <ArrowDoodle
                className="w-24 mt-1 -ml-2"
                style={{ transform: "rotate(8deg)" }}
              />
            </div>
          </div>
        </aside>

        {/* Main entry */}
        <div className="col-span-12 md:col-span-9 lg:col-span-9 relative">
          <p className="typewriter text-[0.72rem] tracking-[0.22em] text-ink-fade uppercase">
            Kapittel 1 · Innledning
          </p>

          <h1 className="headline-hand text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] mt-3 leading-[0.95]">
            <Typewriter
              text="Kaspar"
              as="span"
              speed={48}
              cursor={false}
            />
            <br />
            <span className="relative inline-block">
              <Typewriter
                text="Knudsen"
                as="span"
                speed={50}
                delay={500}
                cursor={false}
              />
            </span>
            <br />
            <Typewriter
              text="frilansjournalist."
              as="span"
              speed={45}
              delay={1200}
            />
          </h1>

          <div className="mt-10 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed">
              Frilansjournalist med kontor på USF Verftet, Nordnes i Bergen.
              Mastergrad i undersøkende journalistikk og 15 år i mediebransjen.
              Leverer kvalitetsjournalistikk til nisjepublikasjoner som
              Fiskeribladet, Intrafish og Kystens Næringsliv.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/saker"
                className="inline-flex items-center gap-3 bg-ink text-paper px-5 py-3 typewriter text-[0.78rem] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors"
              >
                Se saker
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/kontakt" className="pencil-link text-base">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Values strip — checklist style */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 max-w-2xl text-sm">
            {[
              "Likeverd mellom mennesker",
              "Empati",
              "Høflighet og vennlighet",
              "Holder ord og avtaler",
              "Ærlighet",
              "Samfunnsengasjert",
              "Kritisk tenkning",
              "Nysgjerrig",
              "Åpen og inkluderende",
            ].map((v) => (
              <div key={v} className="flex items-start">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-4 h-4 mt-1 mr-2 border-[1.5px] border-ink/70"
                >
                  <svg viewBox="0 0 16 16" className="w-3 h-3">
                    <path
                      d="M2 9 L6 13 L14 3"
                      stroke="#b53826"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker — typewriter */}
      <section className="mt-20 border-y border-dashed border-ink/30 py-3 overflow-hidden">
        <div className="ticker-track flex gap-12 whitespace-nowrap typewriter text-[0.78rem] tracking-[0.22em] text-ink-fade uppercase">
          {Array.from({ length: 2 }).flatMap((_, dup) =>
            [
              "Fiskeribladet",
              "★",
              "Intrafish",
              "★",
              "Kystens Næringsliv",
              "★",
            ].map((p, i) => (
              <span key={`${dup}-${i}`} className="shrink-0">
                {p}
              </span>
            )),
          )}
        </div>
      </section>

      {/* Featured saker — corkboard */}
      <section className="mt-24 relative">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
          <div>
            <p className="typewriter text-[0.72rem] tracking-[0.22em] text-ink-fade uppercase">
              Kapittel 2
            </p>
            <h2 className="headline-hand text-5xl md:text-6xl mt-1">
              Utvalgte saker
            </h2>
          </div>
          <Link href="/saker" className="pencil-link typewriter text-sm">
            Se alle saker →
          </Link>
        </div>

        <div className="relative mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">
          {/* string between pinned items, decorative */}
          <div
            aria-hidden="true"
            className="absolute hidden md:block string-line"
            style={{
              left: "12%",
              top: "-18px",
              width: "78%",
              transform: "rotate(-1.2deg)",
            }}
          />

          {featured.map((sak, i) => (
            <Link
              key={sak.slug}
              href={`/saker/${sak.slug}`}
              className="polaroid"
              style={{
                transform: `rotate(${sak.tilt}deg)`,
              }}
            >
              <PushPin
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-7 z-10 drop-shadow"
                color={i === 1 ? "#233a6b" : "#b53826"}
              />

              <div className="relative aspect-[4/5] overflow-hidden bg-ink/10">
                <Image
                  src={sak.bilder[0].src}
                  alt={sak.bilder[0].alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover sepia-photo"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                <span
                  className="absolute top-3 left-3 stamp"
                  style={{ transform: "rotate(-7deg)" }}
                >
                  {sak.stempel}
                </span>
              </div>

              <div className="pt-3 px-1">
                <p className="typewriter text-[0.66rem] tracking-[0.18em] text-ink-fade uppercase">
                  {sak.publikasjon} · {sak.dato}
                </p>
                <p className="handwritten text-pen-blue text-xl leading-tight mt-1 line-clamp-3">
                  {sak.tittel}
                </p>
              </div>

              <div className="fold-corner" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      {/* Notebook spread — what I do */}
      <section className="mt-32 grid grid-cols-12 gap-6 lg:gap-10 items-start">
        <div className="col-span-12 md:col-span-7 relative">
          <div className="lined-paper p-8 md:p-12 paper-card relative">
            <span
              className="absolute -top-3 left-10 tape h-7 w-28"
              style={{ transform: "rotate(-3deg)" }}
            />
            <span
              className="absolute -top-3 right-10 tape washi-blue h-6 w-20"
              style={{ transform: "rotate(4deg)" }}
            />

            <p className="typewriter text-[0.72rem] tracking-[0.22em] text-ink-fade uppercase">
              Kapittel 3 — Tjenester
            </p>
            <h2 className="headline-hand text-4xl md:text-5xl mt-1">
              Tjenester
            </h2>

            <ul className="mt-6 space-y-3 pl-16 pr-4">
              {[
                {
                  tittel: "Innsalg av enkelt-ideer",
                  detalj:
                    "Forslag til saker for redaksjonen, klar til oppdrag.",
                },
                {
                  tittel: "Påbegynte og ferdige artikler",
                  detalj:
                    "Innsalg av artikler — tekst og bilder samlet.",
                },
                {
                  tittel: "Enkeltoppdrag",
                  detalj:
                    "Stykkpris per sak. Kritisk og undersøkende journalistikk.",
                },
                {
                  tittel: "Periode-jobbing i redaksjoner",
                  detalj:
                    "Betalt pr periode. Tilgang til gjenbruk av artikler.",
                },
              ].map((it) => (
                <li key={it.tittel} className="flex items-start">
                  <span className="kbd-pin mt-2 mr-3 shrink-0" />
                  <div>
                    <p className="font-semibold text-ink">{it.tittel}</p>
                    <p className="text-ink-soft">{it.detalj}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="col-span-12 md:col-span-5 relative pt-2">
          <div className="paper-card p-6 md:p-8 relative" style={{ transform: "rotate(1.4deg)" }}>
            <Paperclip
              className="absolute -top-7 left-6 w-7 h-20 z-10 drop-shadow"
              style={{ transform: "rotate(-6deg)" }}
            />
            <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Kontakt
            </p>
            <p className="handwritten text-pen-blue text-2xl mt-2">
              Kaspar Knudsen
            </p>
            <p className="text-ink-soft mt-3 leading-relaxed">
              Enkeltpersonforetak, Bergen. Kontor på USF Verftet, Nordnes.
            </p>
            <div className="mt-5 space-y-1 typewriter text-sm">
              <p>
                <span className="text-ink-fade">adresse:</span>{" "}
                USF Verftet, Nordnes, Bergen
              </p>
            </div>

            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center gap-2 typewriter text-[0.78rem] tracking-[0.18em] uppercase border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
            >
              Hele kontaktsiden →
            </Link>

            <StarDoodle
              className="absolute -top-4 -right-3 w-9 h-9"
              color="#b53826"
            />
          </div>
        </aside>
      </section>
    </div>
  );
}
