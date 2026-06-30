import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";

export const metadata: Metadata = {
  title: "Kontakt – Kaspar Knudsen",
  description:
    "Skriv til Kaspar Knudsen for redaksjonelle oppdrag eller tips. Kontor på USF Verftet i Bergen.",
};

const kanaler = [
  {
    label: "E-post",
    value: "post@kasparknudsen.no",
    href: "mailto:post@kasparknudsen.no",
  },
  {
    label: "Telefon",
    value: "+47 900 00 000",
    href: "tel:+4790000000",
  },
  {
    label: "Signal",
    value: "På forespørsel",
  },
  {
    label: "Org.nr",
    value: "999 999 999",
    mono: true,
  },
];

const erfaring = [
  "Undersøkende reportasje innen arbeidsliv, krim og samfunn.",
  "Reportasje fra felt – ser stedene og møter menneskene.",
  "Bilder og tekst levert som én helhet.",
  "Ekstern redaksjonsressurs i kortere eller lengre perioder.",
];

export default function KontaktPage() {
  return (
    <section className="relative px-6 pb-32 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal as="p" delay={0.1} y={12}>
              <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute">
                <span className="text-coral-500">/</span> Kontakt
              </span>
            </Reveal>

            <h1 className="mt-7 font-display text-[clamp(2.4rem,4vw+1rem,5.2rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              <WordReveal text="Kontakt Kaspar" delay={0.05} />
              <br />
              <WordReveal
                text="USF Verftet, Bergen."
                delay={0.4}
              />
            </h1>

            <Reveal delay={1.0} className="mt-8 max-w-[44ch]">
              <p className="text-[1.05rem] leading-relaxed text-ink-2">
                For oppdrag, reportasjer eller lengre perioder som ekstern
                redaksjonsressurs.
              </p>
            </Reveal>

            <Reveal delay={1.1} className="mt-10">
              <div className="rounded-[var(--radius-card)] bg-paper/70 p-6 ring-1 ring-line/70 shadow-soft backdrop-blur-sm">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                  På kontoret
                </p>
                <p className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-ink">
                  USF Verftet
                  <br />
                  Georgernes Verft 12
                  <br />
                  5011 Bergen
                </p>
                <hr className="my-6 border-line/70" />
                <ul className="grid gap-3 text-sm">
                  {kanaler.map((k) => (
                    <li
                      key={k.label}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                        {k.label}
                      </span>
                      {k.href ? (
                        <a
                          href={k.href}
                          className="link-underline font-medium text-ink"
                        >
                          {k.value}
                        </a>
                      ) : (
                        <span
                          className={
                            k.mono
                              ? "font-mono text-ink-2"
                              : "text-ink-2"
                          }
                        >
                          {k.value}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <hr className="my-6 border-line/70" />
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                  Sensitive tips
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  Bruk Signal eller kryptert e-post. Kilders identitet
                  beskyttes etter Vær Varsom 3.4.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1.15} className="mt-8">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                Erfaring
              </p>
              <ul className="mt-4 grid gap-3">
                {erfaring.map((e) => (
                  <li
                    key={e}
                    className="text-sm leading-relaxed text-ink-2"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.4} y={36} className="md:col-span-7">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
              Skriv en melding
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink">
              Hva handler det om?
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
              Skjemaet åpner en e-post i din vanlige klient. Du står fritt til
              å sende direkte til{" "}
              <a
                href="mailto:post@kasparknudsen.no"
                className="link-underline text-coral-500"
              >
                post@kasparknudsen.no
              </a>{" "}
              hvis du foretrekker det.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
