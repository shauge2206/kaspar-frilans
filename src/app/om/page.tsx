import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Om Kaspar Knudsen — frilansjournalist i Bergen",
  description:
    "Femten år i Bergens medieliv, master i gravejournalistikk, og et kontor på USF Verftet. Slik jobber Kaspar Knudsen.",
};

const verdier = [
  {
    tittel: "Likeverd",
    tekst:
      "Alle stemmer skal høres på samme premiss. Den som er på toppen av et system og den som står utenfor det, skal møte samme respekt — og samme spørsmål.",
  },
  {
    tittel: "Empati",
    tekst:
      "Folk som forteller en sak gir bort noe. Kaspars jobb er å forvalte det med tid, varsomhet og redaksjonell skjerping.",
  },
  {
    tittel: "Ærlighet",
    tekst:
      "Kilder og lesere får det samme bildet. Kontekst, motforestillinger og åpne spørsmål er en del av historien — ikke en utfordring som må løses.",
  },
  {
    tittel: "Kritisk tenkning",
    tekst:
      "Spørsmål før konklusjon. Dokumenter før referat. Avstand før nærhet. Slik holder en gravejournalist linja over tid.",
  },
];

const tjenester = [
  {
    tittel: "Reportasje",
    tekst:
      "Lange tekster fra felt — fiskeri, kyst, arbeidsliv. Skreddersydd for redaksjoner som vil ha noe annet enn pressemeldinger.",
  },
  {
    tittel: "Featurejournalistikk",
    tekst:
      "Portretter, miljøreportasjer og dypdykk. Egne foto følger med, eller fotograf på laget.",
  },
  {
    tittel: "Gravesaker",
    tekst:
      "Lengre prosjekter med dokumentinnsyn, datajournalistikk og kildearbeid over måneder.",
  },
  {
    tittel: "Foto",
    tekst:
      "Stille, observerende billedjournalistikk. Egne bilder til egne saker — eller på oppdrag.",
  },
];

export default function OmPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="smallcaps text-amber mb-5">Bio</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05] tracking-tight max-w-4xl">
          En journalist
          <span className="block italic text-ink-soft">
            som tror på tid og tillit.
          </span>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-ink-mute mb-3">Kort fortalt</p>
            <ul className="font-sans text-sm space-y-3 text-ink-soft">
              <li>15 år i Bergens medieliv</li>
              <li>Master i gravejournalistikk, UiB</li>
              <li>Kontor: USF Verftet, Nordnes</li>
              <li>Fast for Fiskeribladet og Bergens Tidende</li>
              <li>Frilanser siden 2024</li>
            </ul>
          </div>
          <div className="md:col-span-7 md:col-start-6 prose-longform max-w-none">
            <Reveal>
              <p>
                Kaspar Knudsen er født og oppvokst på Vestlandet. Etter femten
                år i fast redaksjonsstilling — sist som politisk reporter i
                Bergens Tidende — gikk han over til frilanstilværelsen for å
                kunne fordype seg i de lange reportasjene. Han driver nå
                enkeltpersonforetak fra et lite kontor på USF Verftet på
                Nordnes.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Hans faglige hjerte ligger i sjøkanten. Fiskeri, oppdrett og
                arbeidsliv langs kysten er feltene han kjenner best, men han
                tar også oppdrag innen krim, samfunn og featurejournalistikk.
                Han er svært opptatt av menneskenære historier — og av at
                journalistikken skal være tilgjengelig også for folk som ikke
                vanligvis leser store reportasjer.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Kaspar tror at god journalistikk krever to ting: tid på
                stedet, og fri vilje til å publisere det som faktisk er
                viktig. Begge deler er forsøkt løst i dette
                enkeltpersonforetaket.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Verdier</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Den indre kompasset.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Fire ord som styrer prioriteringene — fra det første
              telefonintervjuet til siste sitatkontroll.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-rule">
            {verdier.map((v) => (
              <Reveal key={v.tittel}>
                <div className="bg-bg-elev p-7 h-full">
                  <p className="smallcaps text-amber mb-3">{v.tittel}</p>
                  <p className="text-ink-soft leading-relaxed">{v.tekst}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Visjon</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Frihet under ansvar.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 prose-longform max-w-none">
            <p>
              Foretakets visjon er enkel: økonomisk bærekraft som gjør det
              mulig å levere kvalitetsjournalistikk over tid. Det betyr at
              Kaspar takker nei til oppdrag som ikke holder mål — og ja til
              dem som krever det.
            </p>
            <p>
              Frihet under ansvar er det som skiller en god frilanser fra en
              billig en. Tid er den viktigste ressursen i dette yrket. Den må
              brukes på saker som har noe å si.
            </p>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="smallcaps text-amber mb-4">Tjenester</p>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-2xl">
          Det Kaspar tar oppdrag på.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-rule">
          {tjenester.map((t) => (
            <Reveal key={t.tittel}>
              <div className="bg-bg-elev p-8 h-full">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="font-serif text-2xl">{t.tittel}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                    Tilgjengelig
                  </span>
                </div>
                <p className="text-ink-soft leading-relaxed">{t.tekst}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="smallcaps text-amber mb-4">Kontoret</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Et lite arbeidsbord på USF Verftet.
            </h2>
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-2xl">
              På Nordnes ligger USF Verftet — et tidligere
              sardinfabrikkskompleks som i dag huser kunstnere, musikere og
              et fåtall journalister. Herfra ser man rett ut på Vågen, og
              kaffen er sterkere enn de fleste redaksjoner.
            </p>
            <p className="mt-4 text-ink-soft text-lg leading-relaxed max-w-2xl">
              Kontoret fungerer som base mellom turer. Sakene er sjelden
              skrevet ferdig her — de starter i felt og kommer hjem for
              redigering.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex font-sans text-sm bg-amber text-[#0e0e0e] px-5 py-3 rounded-full hover:brightness-110 transition"
            >
              Stikk innom →
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="border border-rule p-7 bg-bg-elev font-sans">
              <p className="smallcaps text-ink-mute mb-3">Adresse</p>
              <p className="font-serif text-xl leading-snug">
                USF Verftet
                <br />
                Georgernes Verft 12
                <br />
                5011 Bergen
              </p>
              <hr className="my-6 border-rule" />
              <p className="smallcaps text-ink-mute mb-3">Åpent</p>
              <p className="text-ink-soft leading-relaxed">
                Mandag–fredag, 09–17.
                <br />
                Avtale anbefales — Kaspar er ofte ute.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
