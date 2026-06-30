import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
  title: "Presse – Kaspar Knudsen",
  description:
    "Bio, portrettbilde og kontaktinfo for presse, profilintervjuer og konferanseprogrammer. Last ned full pressekit.",
};

const bioer = [
  {
    tittel: "Kort bio, 50 ord",
    tekst:
      "Kaspar Knudsen er frilansjournalist med base på USF Verftet i Bergen. Mastergrad i undersøkende journalistikk og lang erfaring med kritisk graving innenfor arbeidsliv, krim og næringsliv. Leverer kvalitetsjournalistikk til Fiskeribladet, Intrafish og Kystens Næringsliv.",
  },
  {
    tittel: "Medium bio, 150 ord",
    tekst:
      "Kaspar Knudsen er frilansjournalist med base på USF Verftet i Bergen. Med mastergrad i undersøkende journalistikk og 15 år i mediebransjen leverer han kritisk og undersøkende journalistikk til norske publikasjoner. Han er kjent for graving innenfor arbeidsliv, krim og næringsliv, og for reportasje fra felt der bilder og tekst leveres som én helhet. Faste oppdragsgivere er Fiskeribladet, Intrafish og Kystens Næringsliv. Knudsen er tilgjengelig for enkeltoppdrag, innsalg av ferdige saker og periode-jobbing som ekstern redaksjonsressurs.",
  },
];

const filer = [
  {
    navn: "Pressekit, PDF",
    detalj: "Bio, portrett i høy oppløsning, klipp-liste, kontakt.",
    href: "/pressekit.pdf",
    type: "PDF, oppdateres",
  },
  {
    navn: "Portrettbilde, høy oppløsning",
    detalj:
      "RGB JPEG, 4000 × 5000 px. Fri bruk i journalistisk sammenheng.",
    href: "/kaspar-knudsen-portrett.jpg",
    type: "JPEG",
  },
];

export default function PressePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal as="p" delay={0.1} y={12}>
            <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="text-coral-500">/</span> Presse
            </span>
          </Reveal>

          <h1 className="mt-7 max-w-[20ch] font-display text-[clamp(2.4rem,4vw+1rem,5.4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            <WordReveal text="For redaksjoner og presse" delay={0.05} />
            <br />
            <WordReveal
              text="som trenger bio eller bilde."
              delay={0.45}
            />
          </h1>

          <Reveal delay={1.0} className="mt-8 max-w-[58ch]">
            <p className="text-[1.05rem] leading-relaxed text-ink-2">
              Tekst og bilder for profilsaker, konferanseprogrammer og
              bestillingsforespørsler. Bruk fritt i journalistisk sammenheng.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILER */}
      <section className="relative px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal as="div" className="md:col-span-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                Last ned
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3vw+1rem,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Filer.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-2">
                Trenger du noe annet, send en e-post til{" "}
                <a
                  href="mailto:post@kasparknudsen.no"
                  className="link-underline font-medium text-coral-500"
                >
                  post@kasparknudsen.no
                </a>
                .
              </p>
            </Reveal>
            <ol className="md:col-span-7">
              {filer.map((f, i) => (
                <Reveal key={f.navn} delay={i * 0.08}>
                  <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-line/70 py-8 first:border-t-0 first:pt-0 md:py-10">
                    <span className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-coral-500 md:col-span-1">
                      {i + 1}
                    </span>
                    <div className="col-span-10 md:col-span-6">
                      <a
                        href={f.href}
                        download
                        className="link-underline font-display text-2xl font-medium leading-tight tracking-tight text-ink"
                      >
                        {f.navn} ↓
                      </a>
                      <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mute">
                        {f.type}
                      </p>
                    </div>
                    <p className="col-span-12 leading-relaxed text-ink-2 md:col-span-5">
                      {f.detalj}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-line/70 pt-16">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal as="div" className="md:col-span-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                Bio
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3vw+1rem,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                To lengder.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-2">
                Velg det formatet som passer. Trykk{" "}
                <span className="font-medium text-coral-500">Kopier tekst</span>{" "}
                for å sende biografien rett til utklippstavla, klar til å lime
                inn i programmet eller saken din.
              </p>
            </Reveal>
            <div className="md:col-span-7">
              <div className="grid gap-8">
                {bioer.map((b, i) => (
                  <Reveal key={b.tittel} delay={i * 0.08}>
                    <article className="rounded-[var(--radius-card)] bg-paper/70 p-6 ring-1 ring-line/70 shadow-soft backdrop-blur-sm md:p-8">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                          {b.tittel}
                        </p>
                        <CopyButton text={b.tekst} />
                      </div>
                      <p className="font-display text-lg font-light leading-relaxed text-ink-2">
                        {b.tekst}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
