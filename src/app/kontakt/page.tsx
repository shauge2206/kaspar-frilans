import type { Metadata } from "next";
import {
  CompassMark,
  HorizonLine,
  WaveBackdrop,
  SectionMarker,
  Lighthouse,
  Buoy,
} from "@/components/nautical";
import { Dateline } from "@/components/dateline";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skriv til Kaspar Knudsen — frilansjournalist på USF Verftet i Bergen. Tips, oppdrag og henvendelser fra redaksjoner.",
};

export default function KontaktPage() {
  return (
    <>
      {/* HERO ----------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-deep text-paper">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 70% at 30% 30%, rgba(216,201,168,0.18), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 70%, rgba(207,214,219,0.18), transparent 60%)",
          }}
        />
        <WaveBackdrop className="absolute inset-x-0 -bottom-2 h-44 text-paper/60 animate-drift" />

        <div className="mx-auto max-w-[88rem] px-6 pt-32 pb-24 lg:px-12">
          <div className="flex items-center gap-4 text-sand">
            <CompassMark className="w-5 h-5" />
            <span className="smallcaps text-[0.72rem]">kontakt · usf verftet</span>
          </div>
          <h1 className="mt-10 max-w-5xl font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-tight text-balance">
            Skriv til
            <br />
            <span className="italic font-light text-sand">redaksjonen.</span>
          </h1>
          <p className="mt-10 max-w-xl text-paper/85 text-pretty leading-relaxed">
            Tips om saker, henvendelser fra redaksjoner, eller bare en hilsen
            — alt er velkomment. Skriv på e-post, eller stikk innom kontoret
            på USF Verftet om du er i Bergen.
          </p>
          <Dateline
            sted="Bergen"
            koordinat="60.39°N"
            dato="åpen for nye oppdrag · våren 2026"
            className="mt-8 text-sand"
          />
        </div>
      </section>

      {/* CONTACT GRID --------------------------------------------------- */}
      <section>
        <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            {/* Form column */}
            <div className="col-span-12 lg:col-span-7">
              <SectionMarker label="Skjema · I" className="mb-8" />
              <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight text-deep text-balance mb-3">
                Send en melding.
              </h2>
              <p className="text-ink/75 leading-relaxed max-w-xl mb-10 text-pretty">
                Skjemaet under åpner e-postklienten din med teksten ferdig
                utfylt — så kan du sende fra din egen adresse. Foretrekker du
                kryptert kommunikasjon, ta kontakt så avtaler vi en kanal.
              </p>
              <ContactForm />
            </div>

            {/* Info column */}
            <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
              <SectionMarker label="Posisjon · II" className="mb-8" />
              <div className="border border-deep/15 bg-fog-soft/40 p-7">
                <Lighthouse className="w-7 h-12 text-driftwood" />
                <h3 className="mt-5 font-display text-2xl leading-snug text-deep">
                  USF Verftet
                  <br />
                  <span className="italic font-light text-deep/70">
                    Georgernes Verft 12
                  </span>
                </h3>
                <p className="mt-2 text-[0.78rem] tracking-meta text-ink-muted">
                  5011 Bergen · Norge
                </p>

                <div className="my-7 h-px bg-deep/20" />

                <ul className="space-y-5">
                  <li>
                    <div className="smallcaps text-[0.7rem] text-deep mb-1">
                      E-post
                    </div>
                    <a
                      href="mailto:kontakt@kasparhauge.no"
                      className="link-grow font-display text-lg text-deep"
                    >
                      kontakt@kasparhauge.no
                    </a>
                  </li>
                  <li>
                    <div className="smallcaps text-[0.7rem] text-deep mb-1">
                      Telefon
                    </div>
                    <a
                      href="tel:+4791234567"
                      className="link-grow font-display text-lg text-deep"
                    >
                      +47 912 34 567
                    </a>
                  </li>
                  <li>
                    <div className="smallcaps text-[0.7rem] text-deep mb-1">
                      Sosialt
                    </div>
                    <div className="font-display text-lg text-deep">
                      <span className="link-grow mr-3">LinkedIn</span>
                      <span className="link-grow mr-3">Bluesky</span>
                      <span className="link-grow">Mastodon</span>
                    </div>
                  </li>
                </ul>

                <div className="my-7 h-px bg-deep/20" />

                <ul className="space-y-3 text-[0.85rem] text-ink/80">
                  <li className="flex items-start gap-3">
                    <Buoy className="w-3 h-5 text-driftwood shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-medium text-deep">Norsk Journalistlag.</strong>{" "}
                      Følger Vær Varsom-plakaten i alt redaksjonelt arbeid.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Buoy className="w-3 h-5 text-driftwood shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-medium text-deep">Org.nr.</strong> 932 110 480 —
                      enkeltpersonforetak.
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          <HorizonLine className="text-deep/30 mt-24" />

          {/* Tipplinje */}
          <div className="mt-16 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <SectionMarker label="Tipslinje · III" className="mb-5" />
              <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight text-deep text-balance">
                Sitter du på en historie ingen vil høre?
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 max-w-[60ch] text-pretty">
              <p className="text-[1.05rem] leading-[1.75] text-ink/85">
                Mye av det viktigste journalistikken handler om begynner med
                noen som tar mot til seg og sender en melding til en
                journalist. Jeg behandler tips konfidensielt. Hvis du trenger
                det, kan vi avtale et kryptert møtepunkt før du forteller noe
                som helst.
              </p>
              <p className="mt-5 text-[1.05rem] leading-[1.75] text-ink/85">
                Du trenger ikke å vite hva slags sak det er. Det er min jobb å
                finne ut.
              </p>
              <a
                href="mailto:tips@kasparhauge.no"
                className="mt-8 inline-flex items-center gap-3 border border-deep/40 px-6 py-3 text-[0.78rem] tracking-meta text-deep transition-colors hover:bg-deep hover:text-paper"
              >
                Send tips → tips@kasparhauge.no
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
