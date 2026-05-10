import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import KontaktForm from "@/components/KontaktForm";

export const metadata = {
  title: "Kontakt",
  description:
    "Ta kontakt med Kaspar Knudsen for oppdrag, samarbeid eller tips. Base på USF Verftet, Nordnes, Bergen.",
};

export default function Kontakt() {
  return (
    <>
      {/* HERO */}
      <section className="pt-44 md:pt-56 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Kontakt</p>
            <h1 className="mt-6 font-display font-light text-5xl sm:text-7xl md:text-[7.5rem] lg:text-[9rem] leading-[0.92] tracking-[-0.02em]">
              Ta kontakt
              <span className="block italic text-amber-soft">— jeg lytter.</span>
            </h1>
            <p className="mt-12 max-w-3xl font-display text-xl md:text-2xl leading-snug text-fg-muted">
              Tips, oppdrag, samarbeid eller en kopp kaffe på Verftet —
              henvendelser behandles fortrolig.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-14 md:gap-20">
          <div className="lg:col-span-5 space-y-12">
            <Reveal>
              <p className="eyebrow">Direkte</p>
              <ul className="mt-6 space-y-6">
                <li>
                  <p className="smallcaps text-fg-muted text-[0.7rem]">
                    E-post
                  </p>
                  <a
                    href="mailto:kaspar@kasparhauge.no"
                    className="font-display text-2xl md:text-3xl amber-underline"
                  >
                    kaspar@kasparhauge.no
                  </a>
                </li>
                <li>
                  <p className="smallcaps text-fg-muted text-[0.7rem]">
                    Telefon
                  </p>
                  <a
                    href="tel:+4790000000"
                    className="font-display text-2xl md:text-3xl amber-underline"
                  >
                    +47 900 00 000
                  </a>
                </li>
                <li>
                  <p className="smallcaps text-fg-muted text-[0.7rem]">
                    Kryptert tips
                  </p>
                  <p className="font-display text-2xl md:text-3xl">
                    Signal · @kasparhauge
                  </p>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="border-t border-rule pt-10">
                <p className="eyebrow">Adresse</p>
                <p className="mt-6 font-display text-2xl md:text-3xl leading-tight">
                  USF Verftet
                  <br />
                  Georgernes Verft 12
                  <br />
                  5011 Bergen
                </p>
                <p className="mt-6 text-fg-muted leading-relaxed max-w-md">
                  Inngang fra kaisiden. Si ifra i resepsjonen — eller send
                  en melding på forhånd, så møter jeg deg ute.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border-t border-rule pt-10">
                <p className="eyebrow">Treffes</p>
                <ul className="mt-6 space-y-2 font-display text-xl md:text-2xl text-fg">
                  <li className="flex justify-between gap-8">
                    <span>Mandag — torsdag</span>
                    <span className="text-fg-muted">09 — 16</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span>Fredag</span>
                    <span className="text-fg-muted">09 — 14</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span>Helg</span>
                    <span className="text-fg-muted">etter avtale</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <div className="border border-rule p-7 md:p-10 bg-bg-elev/40">
                <p className="eyebrow">Skriv en melding</p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tight leading-tight">
                  Fortell meg kort hva det gjelder.
                </h2>
                <KontaktForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLACE — USF */}
      <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden mt-16 border-t border-rule">
        <ParallaxImage
          src="/images/saker/sak-1/bilde-1.jpeg"
          alt="Bergen, kysten."
          amount={0.16}
          className="absolute inset-0"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/30"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 md:px-10 pb-14 md:pb-20">
          <Reveal>
            <p className="smallcaps text-amber-soft">Bergen — Nordnes</p>
            <h2 className="mt-5 font-display font-light text-4xl md:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.015em] max-w-3xl">
              Møt meg der byen åpner seg mot havet.
            </h2>
          </Reveal>
        </div>
      </section>
    </>
  );
}
