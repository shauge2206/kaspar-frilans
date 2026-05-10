import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SplitText } from "@/components/split-text";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Kaspar — frilansjournalist på USF Verftet i Bergen. Tips, oppdrag og samarbeid.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10 pt-6 pb-20">
      <header className="grid gap-10 md:grid-cols-12 pb-10">
        <div className="md:col-span-8">
          <p className="smallcaps text-accent">Redaksjon · Henvendelser</p>
          <SplitText
            as="h1"
            text="Tips, oppdrag eller en god historie."
            className="font-serif font-black text-[2.6rem] sm:text-[3.6rem] md:text-[5rem] leading-[0.97] tracking-[-0.03em] mt-4 block"
            step={55}
          />
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-soft fade-up" style={{ animationDelay: "1100ms" }}>
            Send meg en e-post, ring eller stikk innom kontoret på USF
            Verftet. Tips behandles fortrolig. Oppdragsforespørsler besvares
            som regel innen ett døgn.
          </p>
        </div>
      </header>

      <div className="rule-thick mb-12" />

      <div className="grid gap-12 md:grid-cols-12">
        {/* venstre: kontaktinfo */}
        <aside className="md:col-span-5">
          <p className="smallcaps text-accent mb-4">Direkte</p>
          <ul className="space-y-6 mb-10">
            <li>
              <p className="dateline">E-post</p>
              <a
                href="mailto:post@kaspar.no"
                className="font-serif text-2xl md:text-3xl link-editorial"
              >
                post@kaspar.no
              </a>
            </li>
            <li>
              <p className="dateline">Telefon</p>
              <a
                href="tel:+4795000000"
                className="font-serif text-2xl md:text-3xl link-editorial tabular"
              >
                +47 950 00 000
              </a>
            </li>
            <li>
              <p className="dateline">Signal / Sikker kanal</p>
              <p className="font-serif text-xl">På forespørsel — for tipsere</p>
            </li>
          </ul>

          <div className="rule-thin pt-6">
            <p className="smallcaps text-accent mb-3">Kontor</p>
            <address className="not-italic font-serif text-xl leading-snug">
              USF Verftet
              <br />
              Georgernes Verft 12
              <br />
              5011 Bergen
            </address>
            <p className="dateline mt-4">
              T-BANE / BUSS · NORDNES · 7 MIN FRA TORGALMENNINGEN
            </p>
          </div>

          <div className="rule-thin mt-8 pt-6">
            <p className="smallcaps text-accent mb-3">Sosialt</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="link-editorial">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="link-editorial">Bluesky</a>
              </li>
              <li>
                <a href="#" className="link-editorial">Norsk Journalistlag</a>
              </li>
            </ul>
          </div>
        </aside>

        {/* høyre: skjema */}
        <section className="md:col-span-7 md:col-rule md:pl-10">
          <p className="smallcaps text-accent mb-4">Skriv en melding</p>
          <h2 className="font-serif font-bold text-3xl md:text-[2.4rem] leading-[1.1] tracking-[-0.02em] mb-6">
            Send et tips eller en oppdragsforespørsel
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
