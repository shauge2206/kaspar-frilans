import Link from "next/link";
import { ArrowDoodle, Paperclip, PushPin, Stamp } from "@/components/Decor";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Kontakt – Kaspar Knudsen",
  description:
    "Ta kontakt med Kaspar Knudsen – frilansjournalist i Bergen. Kontor på USF Verftet, Nordnes.",
};

export default function KontaktPage() {
  return (
    <div className="notebook-shell pt-4 pb-24">
      {/* Header */}
      <section className="grid grid-cols-12 gap-x-6 lg:gap-x-10 pt-8">
        <aside className="col-span-12 md:col-span-3">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Kontakt
          </p>
          <p className="handwritten-red text-2xl mt-1 leading-tight">Bergen</p>
          <ArrowDoodle
            className="w-24 mt-3 hidden md:block"
            style={{ transform: "rotate(28deg)" }}
            color="#b53826"
          />
          <div className="hidden md:block mt-6">
            <Stamp label="Bergen" rotation={-6} />
          </div>
        </aside>

        <div className="col-span-12 md:col-span-9">
          <p className="typewriter text-[0.72rem] tracking-[0.22em] text-ink-fade uppercase">
            Kontakt
          </p>
          <h1 className="headline-hand text-5xl md:text-7xl mt-2 leading-[0.95]">
            Ta kontakt
          </h1>
          <p className="text-xl mt-6 max-w-3xl text-ink-soft leading-relaxed">
            Jeg er frilansjournalist i Bergen, med kontor på USF Verftet på
            Nordnes. Mastergrad i undersøkende journalistikk – jeg leverer til
            Fiskeribladet, Intrafish og Kystens Næringsliv.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mt-16 grid grid-cols-12 gap-x-6 lg:gap-x-10 items-start">
        <div
          className="col-span-12 md:col-span-7 relative paper-card p-8 md:p-10"
          style={{ transform: "rotate(-0.5deg)" }}
        >
          <span
            className="absolute -top-3 left-12 tape h-7 w-28"
            style={{ transform: "rotate(-3deg)" }}
          />
          <span
            className="absolute -top-3 right-12 tape washi-blue h-6 w-24"
            style={{ transform: "rotate(5deg)" }}
          />

          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            E-post
          </p>
          <p className="handwritten text-pen-blue text-3xl md:text-4xl mt-2">
            <a
              href="mailto:kaspar@knudsen.no"
              className="pencil-link"
            >
              kaspar@knudsen.no
            </a>
          </p>

          <div className="mt-8">
            <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Adresse
            </p>
            <p className="text-lg leading-relaxed mt-2">
              USF Verftet
              <br />
              Georgernes Verft 12
              <br />
              5011 Bergen, Nordnes
            </p>
          </div>

          <div className="mt-8">
            <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Foretak
            </p>
            <p className="text-lg leading-relaxed mt-2">
              Enkeltpersonforetak
              <br />
              Periode: april 2026 – mars 2027
            </p>
          </div>
        </div>

        <aside className="col-span-12 md:col-span-5 mt-10 md:mt-0">
          <div
            className="paper-card p-6 md:p-8 relative"
            style={{ transform: "rotate(1.4deg)" }}
          >
            <PushPin
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 z-10"
              color="#233a6b"
            />
            <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Henvendelser
            </p>
            <p className="handwritten text-pen-blue text-2xl mt-2 leading-snug">
              Saker, oppdrag eller samarbeid
            </p>
            <p className="text-ink-soft mt-3 leading-relaxed">
              Send meg en e-post med en kort beskrivelse av oppdraget eller
              saken. Det hjelper å vite ønsket publikasjon og frist når det er
              aktuelt.
            </p>

            <div className="mt-6">
              <Link
                href="/saker"
                className="pencil-link typewriter text-sm tracking-[0.16em] uppercase"
              >
                Se tidligere saker →
              </Link>
            </div>
          </div>

          <div
            className="paper-card p-6 md:p-8 relative mt-6"
            style={{ transform: "rotate(-1.6deg)" }}
          >
            <Paperclip
              className="absolute -top-6 right-6 w-5 h-14 z-10"
              style={{ transform: "rotate(10deg)" }}
            />
            <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Publikasjoner
            </p>
            <p className="handwritten-red text-2xl mt-2 leading-tight">
              Fiskeribladet
              <br />
              Intrafish
              <br />
              Kystens Næringsliv
            </p>
          </div>
        </aside>
      </section>

      {/* Contact form */}
      <section className="mt-16 grid grid-cols-12 gap-x-6 lg:gap-x-10">
        <div className="col-span-12 md:col-span-3">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Skjema
          </p>
          <h2 className="headline-hand text-4xl md:text-5xl mt-2 leading-tight">
            Send melding
          </h2>
          <p className="text-ink-soft mt-4 max-w-xs text-sm leading-relaxed">
            Knappen åpner e-postklienten din med innholdet utfylt – du sender
            selv fra din egen adresse.
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
