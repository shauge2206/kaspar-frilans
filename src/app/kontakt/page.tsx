import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Ta kontakt med Kaspar Knudsen — frilansjournalist i Bergen.",
};

export default function KontaktPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-[1240px] px-5 pt-12 sm:px-8 sm:pt-20">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
          <span aria-hidden className="inline-block h-px w-8 bg-ink/40" />
          <span>Kontakt</span>
          <span aria-hidden className="dot-divider" />
          <span>USF Verftet — Bergen</span>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-7">
            <RevealGroup className="space-y-6">
              <RevealItem
                as="h1"
                className="text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.03em]"
              >
                Tips. Oppdrag. Spørsmål.
              </RevealItem>
              <RevealItem
                as="p"
                className="max-w-[56ch] text-[17px] leading-[1.6] text-ink/75"
              >
                Ta kontakt om enkelt-ideer, påbegynte eller ferdige
                artikler, enkeltoppdrag eller periodejobbing i redaksjoner.
              </RevealItem>
            </RevealGroup>
          </div>

          <aside className="col-span-12 sm:col-span-5">
            <FadeIn delay={0.15}>
              <dl className="grid grid-cols-2 gap-y-5 border-l border-hairline pl-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                <div className="col-span-2">
                  <dt>E-post</dt>
                  <dd className="mt-1 text-[14px] tracking-normal text-ink">
                    <a
                      href="mailto:post@kasparknudsen.no"
                      className="underline-offset-4 hover:underline"
                    >
                      post@kasparknudsen.no
                    </a>
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt>Adresse</dt>
                  <dd className="mt-1 text-[14px] tracking-normal text-ink">
                    USF Verftet, Nordnes, Bergen
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt>Foretak</dt>
                  <dd className="mt-1 text-[14px] tracking-normal text-ink">
                    Enkeltpersonforetak
                  </dd>
                </div>
              </dl>
            </FadeIn>
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1240px] border-y border-hairline px-5 py-16 sm:px-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Skjema — 01
            </p>
            <p className="mt-3 text-[14px] leading-[1.6] text-ink/65">
              Skjemaet er en demo: meldingen sendes ikke til en server, men
              gir samme respons. Bruk e-post for ekte henvendelser.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1240px] px-5 pb-24 sm:px-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Spørsmål — 02
            </p>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <FaqItem
              q="Hva slags oppdrag tar du?"
              a="Innsalg av enkelt-ideer, innsalg av påbegynte eller ferdige artikler, enkeltoppdrag og periodejobbing i redaksjoner."
            />
            <FaqItem
              q="Hva er fagfeltet?"
              a="Gravejournalistikk innenfor arbeidsliv, krim og flere områder. Mastergrad i undersøkende journalistikk."
            />
            <FaqItem
              q="Hvilke publikasjoner leverer du til?"
              a="Nisjepublikasjoner som Fiskeribladet, Intrafish og Kystens Næringsliv."
            />
            <FaqItem
              q="Pris?"
              a="Stykkpris per sak og betalt pr periode."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-hairline py-5 transition-colors">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium leading-[1.3] tracking-[-0.005em]">
        <span>{q}</span>
        <span
          aria-hidden
          className="font-mono text-[18px] leading-none text-ink/55 transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="mt-3 max-w-[62ch] text-[14px] leading-[1.7] text-ink/70">
        {a}
      </p>
    </details>
  );
}
