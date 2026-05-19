import type { Metadata } from "next";
import Link from "next/link";
import { CompassRose } from "@/components/CompassRose";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Kaspar Knudsen – frilansjournalist i Bergen. Innsalg av enkeltsaker, ferdige artikler eller periodejobbing i redaksjoner.",
};

const kanaler = [
  {
    label: "E-post",
    value: "post@kasparknudsen.no",
    href: "mailto:post@kasparknudsen.no",
    hint: "Foretrukket kanal. Svarer normalt innen ett døgn.",
  },
  {
    label: "Telefon",
    value: "+47 00 00 00 00",
    href: "tel:+4700000000",
    hint: "Hverdager 09–17. Sikret kanal på forespørsel.",
  },
  {
    label: "Signal",
    value: "På forespørsel",
    href: "mailto:post@kasparknudsen.no?subject=Signal",
    hint: "For tipsere som trenger ende-til-ende-kryptering.",
  },
];

const tjenester = [
  {
    title: "Undersøkende reportasje",
    body: "Gravesaker innen arbeidsliv, krim og samfunn. Lange løp der research og kildekontakt avgjør utfallet.",
  },
  {
    title: "Reportasje fra felt",
    body: "Drar ut til stedet, ser miljøet og møter menneskene. Journalistikk som kommer nærmere virkeligheten.",
  },
  {
    title: "Bilder og tekst",
    body: "Leverer bilder og tekst som én helhet – sak ferdig fortolket og klar til redigering.",
  },
  {
    title: "Ekstern redaksjonsressurs",
    body: "Tilgjengelig som frilanshender i kortere eller lengre perioder, etter behov i redaksjonen.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/40">
        <div className="absolute inset-0 contour pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-5 flex flex-wrap items-center gap-x-3">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Åpen for oppdrag
                </span>
                <span>·</span>
                <span className="tabular">60°23′N · 05°19′Ø</span>
              </div>
              <h1 className="font-semibold tracking-[-0.02em] leading-[0.95] text-[clamp(2.4rem,5.5vw,4.8rem)] text-ink">
                Ta kontakt
                <br />
                <span className="text-accent">for oppdrag.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pl-8 lg:border-l border-line/50">
              <p className="text-[17px] leading-relaxed text-deep/80 font-serif">
                Tips, redaksjonelle henvendelser eller forespørsler om
                periodejobbing – send en e-post med kort om saken, ønsket
                publikasjon og frist. Jeg svarer normalt innen ett døgn.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:post@kasparknudsen.no"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] bg-deep text-paper px-5 py-3 rounded-full hover:bg-accent transition-colors"
                >
                  Send e-post
                </a>
                <Link
                  href="/saker"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] border border-deep/40 text-deep px-5 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  Se arkivet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-4">
              Kanaler
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-[1.1] mb-10 max-w-xl">
              Tre måter å nå frem på.
            </h2>
            <ul className="divide-y divide-line/50 border-y border-line/50">
              {kanaler.map((k) => (
                <li
                  key={k.label}
                  className="py-6 grid md:grid-cols-[auto_1fr_auto] gap-5 md:gap-10 items-baseline"
                >
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 md:w-24">
                    {k.label}
                  </span>
                  <div>
                    <a
                      href={k.href}
                      className="text-xl md:text-2xl font-semibold tracking-tight text-ink hover:text-accent transition-colors"
                    >
                      {k.value}
                    </a>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-deep/70 font-serif">
                      {k.hint}
                    </p>
                  </div>
                  <a
                    href={k.href}
                    className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-deep hover:text-accent transition-colors"
                  >
                    Åpne
                    <span aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 bg-sand/50 border border-line/50 rounded-lg p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-5">
                Kontor
              </div>
              <address className="not-italic text-[15px] leading-relaxed text-ink font-serif">
                Kaspar Knudsen
                <br />
                USF Verftet
                <br />
                Georgernes Verft 12
                <br />
                5011 Bergen
              </address>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 mb-1">
                    Posisjon
                  </div>
                  <div className="font-mono text-[12px] text-ink tabular">
                    60°23′N
                    <br />
                    05°19′Ø
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 mb-1">
                    Sone
                  </div>
                  <div className="font-mono text-[12px] text-ink tabular">
                    UTC+1
                    <br />
                    Hverdager 09–17
                  </div>
                </div>
              </div>
              <div className="mt-7 pt-5 border-t border-line/50 flex items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 mb-1">
                    Status
                  </div>
                  <div className="text-[14px] text-ink font-serif">
                    Åpen for nye oppdrag
                  </div>
                </div>
                <CompassRose className="w-14 h-14 text-deep/70" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-line/40 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-4">
                Hva jeg leverer
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-[1.1]">
                Reportasje, research og bilder – fra felt til ferdig sak.
              </h2>
            </div>
            <p className="lg:col-span-5 lg:pl-8 lg:border-l border-line/50 text-[15.5px] leading-relaxed text-deep/80 font-serif max-w-md">
              Tekst og bilder leveres som én helhet, klar til redigering.
              Sakene varierer fra korte enkeltoppdrag til lengre prosjekter,
              etter avtale.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tjenester.map((t) => (
              <li
                key={t.title}
                className="bg-paper border border-line/50 rounded-lg p-6"
              >
                <div className="text-lg font-semibold tracking-tight text-ink leading-snug mb-3">
                  {t.title}
                </div>
                <p className="text-[14.5px] leading-relaxed text-deep/80 font-serif">
                  {t.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-deep text-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <div className="grid md:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60 mb-5">
                For tipsere
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05] mb-5 max-w-2xl">
                Kildevernet står over alt annet.
              </h2>
              <p className="text-[16px] text-paper/80 max-w-xl leading-relaxed font-serif">
                Har du noe som bør komme frem, men ikke kan stå frem med navn?
                Ta kontakt på e-post eller be om en sikret kanal. Tips blir
                ikke videreformidlet og kilder navngis aldri uten samtykke.
              </p>
            </div>
            <div className="hidden md:block">
              <CompassRose className="w-36 h-36 text-paper/70" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
