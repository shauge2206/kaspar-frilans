import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Kaspar Knudsen — frilansjournalist på USF Verftet, Bergen.",
};

const channels = [
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
    label: "Adresse",
    value: "USF Verftet, Nordnes",
  },
  {
    label: "Sted",
    value: "Bergen, Norge",
  },
];

export default function KontaktPage() {
  return (
    <section className="relative px-6 pt-20 pb-32 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal as="p" delay={0.1} y={12}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-paper/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-coral-400" />
                Kontakt
              </span>
            </Reveal>

            <h1 className="mt-7 font-display text-[clamp(2.4rem,4vw+1rem,5.2rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              <WordReveal text="Ta kontakt" delay={0.05} />
              <br />
              <WordReveal
                text="for oppdrag"
                highlightWords={["oppdrag"]}
                delay={0.3}
              />
              <br />
              <WordReveal text="og samarbeid." delay={0.6} />
            </h1>

            <Reveal delay={1.05} className="mt-8 max-w-[44ch]">
              <p className="text-[1.05rem] leading-relaxed text-ink-2">
                Enkeltoppdrag, innsalg av ideer eller periode-jobbing i
                redaksjoner. Send en e-post eller ring direkte.
              </p>
            </Reveal>

            <Reveal delay={1.15} className="mt-10 grid gap-3">
              {channels.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center justify-between gap-4 rounded-[18px] bg-paper/70 px-5 py-4 ring-1 ring-line/70 shadow-soft backdrop-blur-sm"
                >
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="link-underline font-display text-[1.05rem] font-medium tracking-tight text-ink"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-display text-[1.05rem] font-medium tracking-tight text-ink">
                      {c.value}
                    </span>
                  )}
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.4} y={36} className="md:col-span-7">
            <ContactForm />
            <p className="mt-5 text-xs leading-relaxed text-mute">
              Skjemaet er en demonstrasjon — i produksjon kan det kobles til
              en e-postservice eller webhook. Inntil videre er det raskest
              å sende e-post direkte.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
