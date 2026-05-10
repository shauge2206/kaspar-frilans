import Link from "next/link";
import {
  ArrowDoodle,
  CircleDoodle,
  Paperclip,
  Stamp,
  StarDoodle,
} from "@/components/Decor";

export const metadata = {
  title: "Om Kaspar — Feltbok",
  description:
    "Om Kaspar Knudsen: bakgrunn, verdier, visjon og tjenester. Frilansjournalist på USF Verftet i Bergen.",
};

const VERDIER = [
  {
    ord: "Likeverd",
    forklaring:
      "Alle kilder fortjener å bli møtt med samme respekt — fra fiskeriministeren til kona på kaikanten.",
  },
  {
    ord: "Empati",
    forklaring:
      "Jeg lytter mer enn jeg snakker. Folk som forteller om vanskelige ting skal kjenne seg trygge.",
  },
  {
    ord: "Ærlighet",
    forklaring:
      "Sitater leses opp før publisering. Får jeg ikke bekreftelse, går det ikke på trykk.",
  },
  {
    ord: "Samfunnsengasjert",
    forklaring:
      "Journalistikk skal ha en hensikt — opplyse, kontrollere, gi stemme.",
  },
  {
    ord: "Kritisk tenkning",
    forklaring:
      "Jeg tar ingenting for gitt — heller ikke pressemeldingene fra «egen side».",
  },
  {
    ord: "Nysgjerrig",
    forklaring:
      "Det er som regel der noen sier «det her tror jeg ikke noe på» at sakene begynner.",
  },
];

const TJENESTER = [
  {
    tittel: "Lange reportasjer",
    detalj:
      "Fra dagsturer til langvarige prosjekter. Tekst, bilde og research i én leveranse.",
    pris: "Etter avtale",
  },
  {
    tittel: "Gravesaker",
    detalj:
      "Innsynsbegjæringer, dokumentanalyse og kildepleie. Tar tid — gir resultater.",
    pris: "Honorar + utlegg",
  },
  {
    tittel: "Portretter",
    detalj:
      "1–2 møter, foto, og en tekst som lar mennesket komme til orde.",
    pris: "Fast pris",
  },
  {
    tittel: "Kortere nyhetssaker",
    detalj:
      "Når det haster: jeg er ute samme dag og leverer kveld eller morgen etter.",
    pris: "Timehonorar",
  },
];

export default function OmPage() {
  return (
    <div className="notebook-shell pt-4 pb-24">
      {/* Header — journal entry */}
      <section className="grid grid-cols-12 gap-x-6 lg:gap-x-10 pt-8">
        <aside className="col-span-12 md:col-span-3">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Forsatsblad
          </p>
          <p className="handwritten-red text-2xl mt-1 leading-tight">
            Hvem
            <br />
            er denne karen?
          </p>
          <ArrowDoodle
            className="w-24 mt-3 hidden md:block"
            style={{ transform: "rotate(28deg)" }}
            color="#b53826"
          />
          <div className="hidden md:block mt-6">
            <Stamp label="Bergen 2026" rotation={6} />
          </div>
        </aside>

        <div className="col-span-12 md:col-span-9 relative">
          <p className="typewriter text-[0.72rem] tracking-[0.22em] text-ink-fade uppercase">
            Kapittel 5 · Selvportrett
          </p>
          <h1 className="headline-hand text-5xl md:text-7xl mt-2 leading-[0.95]">
            Femten år med
            <br />
            <span className="relative inline-block">
              blyant og diktafon
              <CircleDoodle
                className="absolute -inset-x-3 -inset-y-2 w-[110%] pointer-events-none"
                color="#b53826"
              />
            </span>
          </h1>
          <p className="text-xl mt-6 max-w-3xl text-ink-soft leading-relaxed">
            Jeg er utdannet master i gravejournalistikk og har jobbet i
            Bergen-medier siden 2010. Etter en rekke år i fast stilling tok
            jeg steget over i frilanslivet for å kunne velge sakene mine
            selv — og bruke den tida som trengs på dem.
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
                    Født
                  </dt>
                  <dd>1985, Os</dd>
                </div>
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Bor
                  </dt>
                  <dd>Bergen, Nordnes</dd>
                </div>
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Utdanning
                  </dt>
                  <dd>Master i gravejournalistikk, UiB</dd>
                </div>
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Erfaring
                  </dt>
                  <dd>15 år i Bergen-medier, frilans siden 2024</dd>
                </div>
                <div>
                  <dt className="typewriter text-[0.7rem] uppercase tracking-[0.12em] text-ink-fade">
                    Arbeidssted
                  </dt>
                  <dd>USF Verftet, Georgernes Verft 12</dd>
                </div>
              </dl>
            </div>
            <p className="margin-note text-lg leading-snug max-w-[12rem]">
              ← klipp denne ut og
              <br />
              heng på oppslagstavla
            </p>
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
                Jeg vokste opp på Os, utenfor Bergen, i et hjem hvor avisen lå
                på kjøkkenbordet hver morgen og hvor diskusjonene gjerne ble
                høye. Jeg har aldri vært flink til å la ting ligge.
              </p>
              <p>
                Etter studier i statsvitenskap og samfunnsøkonomi tok jeg
                masteren i gravejournalistikk ved Universitetet i Bergen. Siden
                har jeg jobbet i Bergens Tidende, Klassekampen og NRK Vestland
                — og som frilanser de siste par årene.
              </p>
              <p>
                Spesialfeltene mine er <em>arbeidsliv</em>, <em>fiskeri og
                kystnæring</em>, <em>krim</em> og <em>menneskenære reportasjer
                </em>. Mest av alt liker jeg saker som krever at jeg dratt ut
                — at jeg sitter på en kai, i en kantine eller på en
                kjøkkenbenk og lytter.
              </p>
              <p className="handwritten-red text-2xl">
                «Jeg liker best de sakene som ikke ser store ut før man kommer
                nærmere.»
              </p>
              <p>
                Jeg jobber ofte i tett samarbeid med fotograf, men de fleste
                sakene mine har egne foto. Notatboka er alltid med, sammen
                med en blyant og to diktafoner — i tilfelle den ene svikter.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Verdier — checklist */}
      <section className="mt-24 grid grid-cols-12 gap-x-6 lg:gap-x-10">
        <div className="col-span-12 md:col-span-3">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Side 3 — Verdier
          </p>
          <h2 className="headline-hand text-4xl md:text-5xl mt-2 leading-tight">
            Det jeg
            <br />
            holder meg til
          </h2>
          <p className="margin-note text-base mt-4 max-w-[12rem]">
            (skrevet i pennen
            <br />
            på første side av
            <br />
            hver ny notatbok)
          </p>
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
              <p className="text-ink-soft text-sm leading-relaxed mt-2">
                {v.forklaring}
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
          <h2 className="headline-hand text-4xl md:text-5xl mt-2 pl-12 md:pl-16 leading-tight">
            Økonomisk bærekraft,
            <br />
            kvalitet i hver setning,
            <br />
            <span className="relative inline-block">
              frihet under ansvar.
              <CircleDoodle
                className="absolute -inset-x-3 -inset-y-2 w-[110%] pointer-events-none"
                color="#b53826"
              />
            </span>
          </h2>
          <p className="pl-12 md:pl-16 mt-6 text-lg leading-relaxed max-w-2xl text-ink-soft">
            Frilanslivet skal være levedyktig. Det krever at jeg setter en
            pris jeg kan stå for, og leverer kvalitet som gjør at oppdrags&shy;giverne
            kommer tilbake. Men jeg vil aldri la oppdrag styre vinklingen —
            kildene mine fortjener bedre.
          </p>
        </div>
      </section>

      {/* Tjenester — pricing-ish list */}
      <section className="mt-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Side 9 — Tjenester
            </p>
            <h2 className="headline-hand text-4xl md:text-5xl mt-2">
              Det jeg leverer
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
            Side 14 — Adresse
          </p>
          <h2 className="headline-hand text-4xl md:text-5xl mt-2">
            På verkstedet
          </h2>
          <p className="text-lg leading-relaxed mt-4 max-w-2xl">
            Jeg har kontorplass på USF Verftet på Nordnes — i den gamle
            sardinfabrikken på vestsida av Bergen sentrum. Her er det
            forfattere, kunstnere, fotografer og noen få andre journalister.
            Det passer meg godt.
          </p>
          <p className="text-lg leading-relaxed mt-3 max-w-2xl text-ink-soft">
            Stikk innom om du er i nærheten — det er som regel kaffe på
            kanna. Bare ring først.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 typewriter text-[0.78rem] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors"
            >
              Veibeskrivelse →
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
            «Verkstedet ligger
            <br />
            ute mot fjorden — du
            <br />
            ser tankskipene fra vinduet.»
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
