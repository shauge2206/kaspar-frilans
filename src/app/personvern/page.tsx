import type { Metadata } from "next";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";
import { WordReveal } from "@/components/word-reveal";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description:
    "Hvordan personopplysninger behandles på kasparknudsen.no, inkludert kildevern og rettigheter etter GDPR.",
};

type Section = {
  kicker: string;
  title: string;
  body: string;
  list?: string[];
  extra?: string;
};

const sections: Section[] = [
  {
    kicker: "1",
    title: "Behandlingsansvarlig",
    body: "Kaspar Knudsen, frilansjournalist, USF Verftet, Nordnes, Bergen, er behandlingsansvarlig for personopplysninger som beskrives i denne erklæringen.",
    extra: "Kontakt: post@kasparknudsen.no",
  },
  {
    kicker: "2",
    title: "Hvilke opplysninger som samles inn",
    body: "Det samles kun inn opplysninger du frivillig oppgir gjennom kontaktskjemaet, eller som du sender via e-post eller telefon:",
    list: [
      "Navn",
      "E-postadresse",
      "Tema for henvendelsen (valgfritt)",
      "Innholdet i meldingen din",
    ],
  },
  {
    kicker: "3",
    title: "Formål med behandlingen",
    body: "Opplysningene brukes utelukkende til å besvare henvendelsen din, vurdere mulige oppdrag og eventuelt holde løpende kontakt for senere samarbeid. Opplysninger selges ikke videre eller deles med tredjeparter.",
  },
  {
    kicker: "4",
    title: "Rettslig grunnlag (GDPR Art. 6)",
    body: "Behandlingen er basert på samtykket du gir ved å sende inn skjemaet eller ta kontakt (Art. 6(1)(a)), og berettiget interesse i å besvare henvendelser om journalistisk arbeid (Art. 6(1)(f)).",
  },
  {
    kicker: "5",
    title: "Lagring og sletting",
    body: "Personopplysninger lagres kun så lenge det er nødvendig for å oppfylle formålet. Henvendelser og tilhørende opplysninger slettes innen tolv måneder etter at saken er avsluttet, med mindre noe annet er avtalt. Sensitive tips og kildemateriale håndteres etter eget regime, se Kildevern under.",
  },
  {
    kicker: "6",
    title: "Dine rettigheter",
    body: "Du har rett til å:",
    list: [
      "Be om innsyn i hvilke opplysninger som er lagret om deg",
      "Be om retting eller sletting av opplysninger",
      "Trekke tilbake samtykket ditt når som helst",
      "Klage til Datatilsynet dersom du mener behandlingen er ulovlig",
    ],
    extra:
      "For å utøve rettighetene dine, send en e-post til post@kasparknudsen.no.",
  },
  {
    kicker: "7",
    title: "Kildevern",
    body: "Som journalist har Kaspar Knudsen plikt til å beskytte kilders identitet etter Vær Varsom-plakaten punkt 3.4 og kildevernet i straffeprosessloven § 125.",
  },
  {
    kicker: "8",
    title: "Informasjonskapsler (cookies)",
    body: "Nettsiden bruker ingen informasjonskapsler for sporing eller markedsføring. Valg av tema lagres lokalt i nettleseren din (localStorage) slik at preferansen din følger med ved neste besøk. Denne lagringen forlater aldri din egen enhet.",
  },
  {
    kicker: "9",
    title: "Endringer",
    body: "Denne personvernerklæringen kan oppdateres ved behov.",
    extra: "Sist oppdatert: mai 2026.",
  },
];

export default function PersonvernPage() {
  return (
    <section className="relative px-6 pt-20 pb-32 md:px-10 md:pt-28 md:pb-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <header className="md:col-span-12">
            <Reveal as="p" delay={0.1} y={12}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-paper/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-mute backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-coral-400" />
                Personvern
              </span>
            </Reveal>

            <h1 className="mt-7 font-display text-[clamp(2.6rem,4.6vw+1rem,5.6rem)] font-bold leading-[1.02] tracking-[-0.025em] text-ink">
              <WordReveal text="Personvernerklæring" delay={0.05} />
            </h1>

            <Reveal as="p" delay={0.7} y={14}>
              <span className="mt-8 block max-w-[60ch] text-[1.05rem] leading-relaxed text-ink-2 md:text-[1.15rem]">
                Hvordan personopplysninger behandles på kasparknudsen.no.
                Kortfattet, klart språk. Tips og sensitive henvendelser har sitt
                eget regime (se Kildevern).
              </span>
            </Reveal>
          </header>
        </div>

        <Reveal y={20} className="mt-20 md:mt-24">
          <ol className="md:max-w-[80ch]">
            {sections.map((s) => (
              <li
                key={s.kicker}
                className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-line/70 py-10 first:border-t-0 first:pt-0 md:py-12"
              >
                <span
                  aria-hidden
                  className="col-span-2 font-mono text-[0.78rem] uppercase tracking-[0.2em] text-mute md:col-span-1"
                >
                  {s.kicker}
                </span>
                <div className="col-span-10 md:col-span-11">
                  <h2 className="font-display text-[clamp(1.4rem,1.6vw+0.8rem,1.9rem)] font-semibold leading-tight tracking-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-[60ch] text-[1rem] leading-relaxed text-ink-2">
                    {s.body}
                  </p>
                  {s.list && (
                    <ul className="mt-4 max-w-[60ch] list-disc space-y-1.5 pl-5 text-[1rem] leading-relaxed text-ink-2 marker:text-mute">
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {s.extra && (
                    <p className="mt-4 max-w-[60ch] text-[0.95rem] leading-relaxed text-mute">
                      {s.extra}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-20 border-t border-line/70 pt-10 md:max-w-[80ch]">
            <Kicker>Spørsmål</Kicker>
            <p className="mt-3 max-w-[55ch] text-[1.05rem] leading-relaxed text-ink-2">
              Lurer du på noe om personvern eller kildevern? Send en e-post
              til{" "}
              <a
                href="mailto:post@kasparknudsen.no"
                className="link-underline text-ink"
              >
                post@kasparknudsen.no
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
