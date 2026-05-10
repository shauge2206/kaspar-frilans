import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Kontakt — Kaspar Knudsen",
  description:
    "Skriv til Kaspar Knudsen for redaksjonelle oppdrag, tips eller bare en kaffeprat på USF Verftet i Bergen.",
};

export default function KontaktPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="smallcaps text-amber mb-5">Kontakt</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05] tracking-tight max-w-4xl">
          Send et tips,
          <span className="block italic text-ink-soft">
            eller en bestilling.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
          E-post er enklest, men du finner Kaspar også på USF Verftet om du
          vil ta en kaffe. Kildevern står sterkt — krypterte kanaler er
          tilgjengelige på forespørsel.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-10">
          <Reveal>
            <div className="border border-rule p-8 bg-bg-elev">
              <p className="smallcaps text-amber mb-3">På kontoret</p>
              <p className="font-serif text-2xl leading-snug">
                USF Verftet
                <br />
                Georgernes Verft 12
                <br />
                5011 Bergen
              </p>
              <hr className="my-6 border-rule" />
              <ul className="space-y-3 font-sans text-sm">
                <li className="flex justify-between gap-4">
                  <span className="text-ink-mute">E-post</span>
                  <a
                    href="mailto:kaspar@hauge.no"
                    className="text-amber glow"
                  >
                    kaspar@hauge.no
                  </a>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-ink-mute">Telefon</span>
                  <a href="tel:+4790000000" className="text-ink-soft glow">
                    +47 900 00 000
                  </a>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-ink-mute">Signal</span>
                  <span className="text-ink-soft">På forespørsel</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-ink-mute">Org.nr</span>
                  <span className="text-ink-soft font-mono">999 999 999</span>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="smallcaps text-ink-mute mb-3">Slik jobber Kaspar</p>
              <ul className="tick-list font-sans text-sm">
                <li>
                  <span className="text-amber font-mono">01</span>
                  <span className="text-ink-soft">
                    Brief på telefon eller e-post — hva slags sak, hvor lang,
                    når.
                  </span>
                </li>
                <li>
                  <span className="text-amber font-mono">02</span>
                  <span className="text-ink-soft">
                    Tilbud med pris og tidsplan innen ett døgn.
                  </span>
                </li>
                <li>
                  <span className="text-amber font-mono">03</span>
                  <span className="text-ink-soft">
                    Reportasjearbeid i felt, gjerne med fotograf på laget.
                  </span>
                </li>
                <li>
                  <span className="text-amber font-mono">04</span>
                  <span className="text-ink-soft">
                    Levering med kildeliste, sitatkontroll og bildevalg.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="border border-rule p-8 md:p-10 bg-bg-elev">
              <p className="smallcaps text-amber mb-3">Skriv en melding</p>
              <h2 className="font-serif text-3xl leading-tight">
                Hva handler det om?
              </h2>
              <p className="mt-3 text-ink-soft leading-relaxed">
                Skjemaet åpner en e-post i din vanlige klient. Du står fritt
                til å sende direkte til{" "}
                <a
                  href="mailto:kaspar@hauge.no"
                  className="text-amber glow"
                >
                  kaspar@hauge.no
                </a>{" "}
                hvis du foretrekker det.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
