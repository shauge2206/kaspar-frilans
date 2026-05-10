import Link from "next/link";
import {
  ArrowDoodle,
  CircleDoodle,
  Paperclip,
  Stamp,
  StarDoodle,
} from "@/components/Decor";

export const metadata = {
  title: "Om Kaspar",
  description:
    "Om Kaspar Knudsen: frilansjournalist i Bergen med kontor på USF Verftet, Nordnes. Mastergrad i undersøkende journalistikk.",
};

const VERDIER = [
  { ord: "Likeverd mellom mennesker" },
  { ord: "Empati" },
  { ord: "Høflighet og vennlighet" },
  { ord: "Holder ord og avtaler" },
  { ord: "Ærlighet" },
  { ord: "Samfunnsengasjert" },
  { ord: "Kritisk tenkning" },
  { ord: "Nysgjerrig" },
  { ord: "Åpen og inkluderende" },
];

const TJENESTER = [
  {
    tittel: "Innsalg av enkelt-ideer",
    detalj: "Forslag til saker for redaksjonen.",
    pris: "Stykkpris",
  },
  {
    tittel: "Påbegynte og ferdige artikler",
    detalj: "Innsalg av artikler — tekst og bilder.",
    pris: "Stykkpris",
  },
  {
    tittel: "Enkeltoppdrag",
    detalj:
      "Kritisk og undersøkende journalistikk. Bilder og tekst. Tilgang til gjenbruk av artikler.",
    pris: "Stykkpris",
  },
  {
    tittel: "Periode-jobbing i redaksjoner",
    detalj: "Tilgjengelighet og fleksibilitet over en avtalt periode.",
    pris: "Betalt pr periode",
  },
];

export default function OmPage() {
  return (
    <div className="notebook-shell pt-4 pb-24">
      {/* Header — journal entry */}
      <section className="grid grid-cols-12 gap-x-6 lg:gap-x-10 pt-8">
        <aside className="col-span-12 md:col-span-3">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Om Kaspar
          </p>
          <p className="handwritten-red text-2xl mt-1 leading-tight">
            Bergen
          </p>
          <ArrowDoodle
            className="w-24 mt-3 hidden md:block"
            style={{ transform: "rotate(28deg)" }}
            color="#b53826"
          />
          <div className="hidden md:block mt-6">
            <Stamp label="Bergen" rotation={6} />
          </div>
        </aside>

        <div className="col-span-12 md:col-span-9 relative">
          <p className="typewriter text-[0.72rem] tracking-[0.22em] text-ink-fade uppercase">
            Om Kaspar
          </p>
          <h1 className="headline-hand text-5xl md:text-7xl mt-2 leading-[0.95]">
            Kaspar
            <br />
            <span className="relative inline-block">
              Knudsen
              <CircleDoodle
                className="absolute -inset-x-3 -inset-y-2 w-[110%] pointer-events-none"
                color="#b53826"
              />
            </span>
          </h1>
          <p className="text-xl mt-6 max-w-3xl text-ink-soft leading-relaxed">
            Kaspar Knudsen er frilansjournalist i Bergen med kontor på USF
            Verftet, Nordnes. Mastergrad i undersøkende journalistikk og 15
            år i mediebransjen. Leverer kvalitetsjournalistikk til
            nisjepublikasjoner som Fiskeribladet, Intrafish og Kystens
            Næringsliv.
          </p>
        </div>
      </section>

      {/* Bio — journal page */}
      <section className="mt-16 grid grid-cols-12 gap-x-6 lg:gap-x-10">
        <aside className="col-span-12 md:col-span-3 relative">
          <div className="md:sticky md:top-8 space-y-6">
            <div className="paper-card p-5 relative" style={{ transform: "rotate(-2deg)" }}>
              <Paperclip
                className="absolute -top-6 left-3 w-5 h-14 z-10"
                style={{ transform: "rotate(-12deg)" }}
              />
              <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
                Faktaboks
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Sted
                  </dt>
                  <dd>Bergen</dd>
                </div>
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Kontor
                  </dt>
                  <dd>USF Verftet, Nordnes</dd>
                </div>
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Utdanning
                  </dt>
                  <dd>Mastergrad i undersøkende journalistikk</dd>
                </div>
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Erfaring
                  </dt>
                  <dd>15+ år i mediebransjen i Bergen</dd>
                </div>
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Selskapsform
                  </dt>
                  <dd>Enkeltpersonforetak (april 2026–mars 2027)</dd>
                </div>
              </dl>
            </div>
          </div>
        </aside>

        <article className="col-span-12 md:col-span-9 relative">
          <div className="lined-paper paper-card p-8 md:p-12 relative">
            <span
              className="absolute -top-4 left-12 tape h-7 w-32"
              style={{ transform: "rotate(-3deg)" }}
            />
            <span
              className="absolute -top-3 right-16 tape washi-blue h-6 w-20"
              style={{ transform: "rotate(5deg)" }}
            />

            <div className="pl-12 md:pl-16 max-w-prose space-y-6 text-lg leading-[2rem]">
              <p className="first-letter:font-bold first-letter:text-3xl first-letter:mr-1 first-letter:float-left first-letter:leading-[2.4rem] first-letter:text-pen-red">
                Kaspar Knudsen er frilansjournalist i Bergen med kontor på USF
                Verftet, Nordnes. Han har mastergrad i undersøkende
                journalistikk og over 15 år i mediebransjen i Bergen.
              </p>
              <p>
                Han leverer kvalitetsjournalistikk til nisjepublikasjoner som
                Fiskeribladet, Intrafish og Kystens Næringsliv. Kompetansen
                spenner over gravejournalistikk innenfor arbeidsliv, krim og
                flere områder.
              </p>
              <p>
                Produktet er bilder og tekst, tilgang til gjenbruk av
                artikler, kritisk og undersøkende journalistikk samt
                menneskenære historier. Salgsmodellen omfatter innsalg av
                enkelt-ideer, innsalg av påbegynte og ferdige artikler,
                enkeltoppdrag og periode-jobbing i redaksjoner.
              </p>
              <p className="handwritten-red text-2xl">
                «Økonomisk bærekraft i selskapet, å levere
                kvalitetsjournalistikk, frihet under ansvar — å styre
                bedriften selv»
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Verdier — checklist */}
      <section className="mt-24 grid grid-cols-12 gap-x-6 lg:gap-x-10">
        <div className="col-span-12 md:col-span-3">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Verdier
          </p>
          <h2 className="headline-hand text-4xl md:text-5xl mt-2 leading-tight">
            Kjerneverdier
          </h2>
        </div>

        <ul className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VERDIER.map((v, i) => (
            <li
              key={v.ord}
              className="paper-card p-5 relative"
              style={{ transform: `rotate(${(i % 2 === 0 ? -0.6 : 0.8)}deg)` }}
            >
              <span
                className={`absolute -top-2 ${i % 3 === 0 ? "left-6" : i % 3 === 1 ? "left-1/2 -translate-x-1/2" : "right-6"} tape h-5 w-16 ${i % 2 ? "washi-blue" : i % 3 === 2 ? "washi-red" : ""}`}
                style={{ transform: `rotate(${i % 2 ? -3 : 4}deg)` }}
              />
              <p className="handwritten-red text-2xl leading-tight">
                {v.ord}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Visjon */}
      <section className="mt-24 relative">
        <div
          className="lined-paper paper-card p-8 md:p-12 max-w-4xl mx-auto relative"
          style={{ transform: "rotate(-0.5deg)" }}
        >
          <span
            className="absolute -top-3 left-12 tape washi-red h-6 w-24"
            style={{ transform: "rotate(-3deg)" }}
          />
          <span
            className="absolute -top-3 right-12 tape h-6 w-20"
            style={{ transform: "rotate(4deg)" }}
          />
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase pl-12 md:pl-16">
            Visjon
          </p>
          <h2 className="headline-hand text-3xl md:text-4xl mt-2 pl-12 md:pl-16 leading-tight">
            <span className="relative inline-block">
              «Økonomisk bærekraft i selskapet, å levere
              kvalitetsjournalistikk, frihet under ansvar — å styre
              bedriften selv»
              <CircleDoodle
                className="absolute -inset-x-3 -inset-y-2 w-[110%] pointer-events-none"
                color="#b53826"
              />
            </span>
          </h2>
        </div>
      </section>

      {/* Tjenester — pricing-ish list */}
      <section className="mt-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Tjenester
            </p>
            <h2 className="headline-hand text-4xl md:text-5xl mt-2">
              Tjenester
            </h2>
          </div>
          <Link href="/kontakt" className="pencil-link typewriter text-sm">
            Be om tilbud →
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TJENESTER.map((t, i) => (
            <li
              key={t.tittel}
              className="paper-card p-6 relative"
              style={{ transform: `rotate(${i % 2 ? 0.6 : -0.4}deg)` }}
            >
              <Paperclip
                className="absolute -top-5 right-4 w-5 h-14 z-10"
                style={{ transform: `rotate(${i % 2 ? 12 : -8}deg)` }}
              />
              <div className="flex items-baseline justify-between gap-3">
                <p className="handwritten text-pen-blue text-2xl leading-tight">
                  {t.tittel}
                </p>
                <span className="typewriter text-[0.72rem] tracking-[0.16em] uppercase text-ink-fade">
                  {t.pris}
                </span>
              </div>
              <p className="text-ink-soft mt-2 leading-relaxed">{t.detalj}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* USF Verftet */}
      <section className="mt-24 grid grid-cols-12 gap-x-6 lg:gap-x-10 items-start">
        <div className="col-span-12 md:col-span-7">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Adresse
          </p>
          <h2 className="headline-hand text-4xl md:text-5xl mt-2">
            Kontor
          </h2>
          <p className="text-lg leading-relaxed mt-4 max-w-2xl">
            Kontor på USF Verftet, Nordnes i Bergen.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 typewriter text-[0.78rem] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors"
            >
              Kontakt →
            </Link>
            <a
              href="https://usf.no"
              target="_blank"
              rel="noopener noreferrer"
              className="pencil-link typewriter text-sm"
            >
              Om USF Verftet ↗
            </a>
          </div>
        </div>

        <div
          className="col-span-12 md:col-span-5 relative paper-card p-6"
          style={{ transform: "rotate(1.6deg)" }}
        >
          <Paperclip
            className="absolute -top-7 left-8 w-6 h-16 z-10"
            style={{ transform: "rotate(-10deg)" }}
          />
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Skisse / kart
          </p>
          <div className="mt-3 grid-paper aspect-[4/3] relative overflow-hidden">
            <svg
              viewBox="0 0 320 240"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <path
                d="M-20 130 C 60 90, 110 145, 170 130 C 230 115, 260 150, 340 140"
                fill="none"
                stroke="#233a6b"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                d="M-20 165 C 80 150, 130 175, 200 160 C 260 148, 300 175, 340 165"
                fill="none"
                stroke="#233a6b"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.35"
              />
              <text
                x="40"
                y="60"
                fontFamily="var(--font-hand)"
                fontSize="22"
                fill="#1a1814"
              >
                Nordnes
              </text>
              <text
                x="220"
                y="200"
                fontFamily="var(--font-hand)"
                fontSize="18"
                fill="#1a1814"
              >
                Bergen S
              </text>
              <circle cx="120" cy="120" r="6" fill="#b53826" />
              <text
                x="135"
                y="115"
                fontFamily="var(--font-hand)"
                fontSize="16"
                fill="#b53826"
              >
                ← USF
              </text>
              <path
                d="M120 120 C 95 95, 80 80, 60 70"
                fill="none"
                stroke="#1a1814"
                strokeWidth="1.4"
                opacity="0.6"
                strokeDasharray="3 4"
              />
            </svg>
          </div>
          <p className="margin-note text-lg leading-snug mt-3">
            USF Verftet,
            <br />
            Nordnes, Bergen
          </p>
          <StarDoodle
            className="absolute -bottom-4 -right-3 w-9 h-9"
            color="#233a6b"
          />
        </div>
      </section>
    </div>
  );
}
