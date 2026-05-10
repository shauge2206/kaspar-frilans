import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "../components/FadeUp";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt frilansjournalist Kaspar Knudsen — USF Verftet, Bergen. Tips og henvendelser fra kilder, redaksjoner og oppdragsgivere er velkomne.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {/* Masthead */}
      <section className="grid grid-cols-12 gap-x-6 pt-16 pb-16 md:pt-28 md:pb-24">
        <div className="col-span-12 mb-10 flex items-baseline justify-between md:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 04 — Kontakt
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
            Bergen · 60.39° N · 5.32° Ø
          </span>
        </div>

        <h1 className="col-span-12 font-serif text-5xl leading-[1.02] tracking-[-0.02em] md:col-span-11 md:text-[112px]">
          Ta kontakt.
        </h1>

        <p className="col-span-12 mt-12 max-w-3xl font-serif text-xl leading-snug text-muted md:col-span-7 md:col-start-6 md:mt-20 md:text-2xl">
          Henvendelser om innsalg av ideer, ferdige saker, enkeltoppdrag
          og periode-jobbing.
        </p>
      </section>

      <hr className="rule-strong" />

      {/* Direct contact */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-12 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 01 — Direkte
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <FadeUp className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                E-post
              </div>
              <a
                href="mailto:kaspar@kasparknudsen.no"
                className="mt-4 inline-block font-serif text-3xl tracking-tight md:text-5xl link-rule-reverse"
              >
                kaspar@kasparknudsen.no
              </a>
            </FadeUp>

            <FadeUp className="col-span-12 md:col-span-6" delay={80}>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Telefon
              </div>
              <a
                href="tel:+4799999999"
                className="mt-4 inline-block font-serif text-3xl tracking-tight md:text-5xl link-rule-reverse tnum"
              >
                +47 99 99 99 99
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      <hr className="rule-strong" />

      {/* Form */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 02 — Skjema
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeUp>
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.015em] md:text-5xl">
              Skjema
            </h2>
            <p className="mt-6 max-w-2xl font-serif text-lg leading-snug text-muted">
              Skjemaet åpner et utkast i din e-postklient.
            </p>
          </FadeUp>

          <ContactForm />
        </div>
      </section>

      <hr className="rule-strong" />

      {/* Office */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 03 — Kontor
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeUp>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] md:text-6xl">
              USF Verftet, Nordnes.
            </h2>
            <p className="mt-8 max-w-2xl font-serif text-xl leading-snug text-muted">
              Kontor i Bergen, på USF Verftet, Nordnes.
            </p>

            <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-6 border-t border-foreground pt-6">
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Besøksadresse
                </div>
                <p className="mt-3 font-serif text-base leading-relaxed">
                  USF Verftet
                  <br />
                  Georgernes verft 12
                  <br />
                  5011 Bergen
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Postadresse
                </div>
                <p className="mt-3 font-serif text-base leading-relaxed">
                  Postboks 0000
                  <br />
                  5807 Bergen
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Org.nr.
                </div>
                <p className="mt-3 font-serif text-base leading-relaxed tnum">
                  000 000 000 MVA
                  <br />
                  <Link href="/om" className="link-rule text-muted">
                    Om foretaket →
                  </Link>
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
