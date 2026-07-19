import { Reveal } from "@/components/Reveal";
import { CopyButton } from "@/components/CopyButton";
import { WordReveal } from "@/components/WordReveal";

export const metadata = {
  title: "Presse, Kaspar Knudsen",
  description:
    "Bio, portrettbilde og kontaktinfo for presse, profilintervjuer og konferanseprogrammer. Last ned full pressekit.",
};

const innhold = [
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
    detalj: "RGB JPEG, 4000 × 5000 px. Fri bruk i journalistisk sammenheng.",
    href: "/kaspar-knudsen-portrett.jpg",
    type: "JPEG",
  },
];

export default function PressePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="smallcaps text-amber mb-5">Presse</p>
        <h1 className="font-serif text-[clamp(2.04rem,3.4vw+0.85rem,4.42rem)] font-medium leading-tight tracking-[-0.02em] max-w-4xl">
          <WordReveal text="For redaksjoner og presse" delay={0.05} />
          <span className="block italic text-ink-soft">
            <WordReveal text="som trenger bio eller bilde." delay={0.4} />
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
          Tekst og bilder for profilsaker, konferanseprogrammer og
          bestillingsforespørsler. Bruk fritt i journalistisk sammenheng.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="border-t border-rule pt-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Last ned</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Filer.
            </h2>
            <p className="mt-5 max-w-md text-ink-soft leading-relaxed">
              Trenger du noe annet, send en e-post til{" "}
              <a
                href="mailto:post@kasparknudsen.no"
                className="text-amber glow font-medium"
              >
                post@kasparknudsen.no
              </a>
              .
            </p>
          </div>
          <ol className="md:col-span-8 md:col-start-5">
            {filer.map((f, i) => (
              <Reveal key={f.navn} delay={i * 80}>
                <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-rule py-8 md:py-10">
                  <div className="col-span-12 md:col-span-7">
                    <a
                      href={f.href}
                      download
                      className="font-serif text-2xl leading-tight text-ink hover:text-amber transition-colors"
                    >
                      {f.navn} ↓
                    </a>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                      {f.type}
                    </p>
                  </div>
                  <p className="col-span-12 text-ink-soft leading-relaxed md:col-span-5">
                    {f.detalj}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Bio</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              To lengder.
            </h2>
            <p className="mt-5 max-w-md text-ink-soft leading-relaxed">
              Velg det formatet som passer. Trykk{" "}
              <span className="text-amber font-semibold">Kopier tekst</span>{" "}
              for å sende biografien rett til utklippstavla, klar til å lime
              inn i programmet eller saken din.
            </p>
          </div>
          <div className="md:col-span-8 md:col-start-5 space-y-10">
            {innhold.map((b, i) => (
              <Reveal key={b.tittel} delay={i * 80}>
                <article>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <p className="smallcaps text-ink-mute">{b.tittel}</p>
                    <CopyButton text={b.tekst} />
                  </div>
                  <p className="font-serif text-lg leading-relaxed text-ink-soft">
                    {b.tekst}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
