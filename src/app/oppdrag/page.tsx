import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Oppdrag og priser, Kaspar Knudsen",
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
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="smallcaps text-amber mb-5">Oppdrag</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-tight tracking-tight max-w-4xl">
          Tre måter å bestille.
          <span className="block italic text-ink-soft">
            Stykkpris, dagsats, periode.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
          Prisene avtales per oppdrag og avhenger av omfang, format og
          publikasjon. Send en kort beskrivelse av saken eller perioden, så
          får du tilbud innen kort tid.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <ol className="border-t border-rule">
          {modeller.map((m, i) => (
            <Reveal key={m.tittel} delay={i * 80}>
              <li className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-b border-rule py-10 md:py-12">
                <span
                  aria-hidden
                  className="col-span-2 font-mono text-sm uppercase tracking-[0.2em] text-amber md:col-span-1"
                >
                  {i + 1}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                    {m.tittel}
                  </h2>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                    {m.fra} · {m.enhet}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 space-y-4">
                  <p className="text-ink-soft leading-relaxed">
                    {m.beskrivelse}
                  </p>
                  <ul className="space-y-1.5 text-sm text-ink-mute">
                    {m.passende.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-amber" aria-hidden>
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
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <Reveal>
          <div className="tile-hover-amber border border-rule bg-bg-elev p-10 md:p-14 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <p className="smallcaps text-amber mb-5">Hvordan bestille</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Send en kort beskrivelse.
              </h2>
              <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
                Skriv hva saken handler om, hvilken publikasjon den er
                tiltenkt, og når den skal være ferdig. Du får tilbud, og
                gjerne et innsalg tilbake, innen et par dager.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-3 md:items-end md:justify-end">
              <Link
                href="/kontakt"
                className="font-sans text-sm bg-amber text-bg px-5 py-3.5 rounded-full hover:brightness-110 transition self-start md:self-end"
              >
                Send forespørsel
              </Link>
              <Link
                href="/saker"
                className="font-sans text-sm border border-rule px-5 py-3.5 rounded-full text-ink-soft hover:text-amber hover:border-amber transition self-start md:self-end"
              >
                Les saker fra arkivet
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
