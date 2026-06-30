import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";
import { MagneticButton } from "@/components/magnetic-button";

export const metadata: Metadata = {
  title: "Oppdrag og priser – Kaspar Knudsen",
  description:
    "Stykkpris per sak, dagsats og periode-jobbing. Slik bestiller du oppdrag fra Kaspar Knudsen, frilansjournalist i Bergen.",
};

type Modell = {
  tittel: string;
  fra: string;
  enhet: string;
  beskrivelse: string;
  passende: string[];
};

const modeller: Modell[] = [
  {
    tittel: "Stykkpris per sak",
    fra: "fra avtales per oppdrag",
    enhet: "kr / sak",
    beskrivelse:
      "Faste priser per ferdig sak. Avtalt før arbeidet starter, dekker research, intervjuer, skriving og bilder. Egnet for enkeltartikler.",
    passende: [
      "Enkeltreportasje med ferdig vinkel",
      "Innsalg av idé som blir tatt",
      "Kort feature eller intervju",
    ],
  },
  {
    tittel: "Dagsats",
    fra: "fra avtales per oppdrag",
    enhet: "kr / dag",
    beskrivelse:
      "For prosjekter der omfang vokser eller endrer seg underveis. Faktureres etter brukte arbeidsdager, med ukentlig rapportering.",
    passende: [
      "Lengre graveprosjekt med åpent utfall",
      "Reportasjereise med flere intervju",
      "Vikariat på kortere oppdrag",
    ],
  },
  {
    tittel: "Periodejobbing",
    fra: "fra avtales per oppdrag",
    enhet: "kr / uke eller måned",
    beskrivelse:
      "Ekstern redaksjonsressurs over en avtalt periode, gjerne på stedet eller på distanse. Du får en innarbeidet stemme uten ansvar for stillingen.",
    passende: [
      "Sykepermisjon eller ferieavløsning",
      "Prosjektredaksjon på en serie",
      "Avlastning i en travel periode",
    ],
  },
];

export default function OppdragPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal as="p" delay={0.1} y={12}>
            <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="text-coral-500">/</span> Oppdrag
            </span>
          </Reveal>

          <h1 className="mt-7 max-w-[20ch] font-display text-[clamp(2.4rem,4vw+1rem,5.4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            <WordReveal text="Tre måter å bestille." delay={0.05} />
            <br />
            <WordReveal
              text="Stykkpris, dagsats, periode."
              delay={0.45}
            />
          </h1>

          <Reveal delay={1.0} className="mt-8 max-w-[52ch]">
            <p className="text-[1.05rem] leading-relaxed text-ink-2">
              Prisene avtales per oppdrag og avhenger av omfang, format og
              publikasjon. Send en kort beskrivelse av saken eller perioden,
              så får du tilbud innen kort tid.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MODELLER */}
      <section className="relative px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <ol className="border-t border-line/70">
            {modeller.map((m, i) => (
              <Reveal key={m.tittel} delay={i * 0.08}>
                <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-b border-line/70 py-10 md:py-12">
                  <span
                    aria-hidden
                    className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-coral-500 md:col-span-1"
                  >
                    {i + 1}
                  </span>
                  <div className="col-span-10 md:col-span-5">
                    <h2 className="font-display text-[clamp(1.6rem,2vw+0.6rem,2.4rem)] font-medium leading-tight tracking-tight text-ink">
                      {m.tittel}
                    </h2>
                    <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mute">
                      {m.fra} · {m.enhet}
                    </p>
                  </div>
                  <div className="col-span-12 space-y-4 md:col-span-6">
                    <p className="leading-relaxed text-ink-2">
                      {m.beskrivelse}
                    </p>
                    <ul className="space-y-1.5 text-sm text-mute">
                      {m.passende.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-coral-500" aria-hidden>
                            ›
                          </span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-coral-100 via-apricot-50 to-teal-100 p-10 ring-1 ring-line/70 shadow-soft md:p-14">
              <div className="paper-grain absolute inset-0" />
              <div className="relative grid gap-10 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                    Hvordan bestille
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.6rem,2vw+1rem,2.6rem)] font-medium leading-tight tracking-tight text-ink">
                    Send en kort beskrivelse.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
                    Skriv hva saken handler om, hvilken publikasjon den er
                    tiltenkt, og når den skal være ferdig. Du får tilbud, og
                    gjerne et innsalg tilbake, innen et par dager.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:col-span-5 md:items-end md:justify-end">
                  <MagneticButton href="/kontakt">
                    Send forespørsel
                  </MagneticButton>
                  <Link
                    href="/saker"
                    className="link-underline px-1 py-2 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-ink"
                  >
                    Les saker fra arkivet →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
