import Image from "next/image";
import Link from "next/link";
import { saker } from "@/lib/saker";
import { SplitText } from "@/components/split-text";
import { RotatingLead } from "@/components/rotating-lead";
import { RandomTeaser } from "@/components/random-teaser";

export default function HomePage() {
  const rest = saker.slice(1);

  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
      {/* hero front-page block */}
      <section aria-label="Forside" className="pt-6 pb-14 md:pb-20">
        <div className="grid gap-10 md:grid-cols-12">
          {/* left column: section label + headline */}
          <div className="md:col-span-8">
            <p
              className="smallcaps text-accent fade-up"
              style={{ animationDelay: "60ms" }}
            >
              Forsiden · Frilansjournalist
            </p>

            <SplitText
              as="h1"
              text="Kvalitetsjournalistikk fra Bergen."
              className="font-serif font-black text-[2.4rem] sm:text-[3.2rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[0.98] tracking-[-0.035em] text-ink mt-5"
              delayBase={150}
              step={70}
            />

            <p
              className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-soft fade-up"
              style={{ animationDelay: "1100ms" }}
            >
              Jeg er frilansjournalist med kontor på USF Verftet på Nordnes. Mastergrad i undersøkende journalistikk og 15 år i mediebransjen i Bergen – jeg leverer til Fiskeribladet, Intrafish og Kystens Næringsliv.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 fade-up"
              style={{ animationDelay: "1300ms" }}
            >
              <Link
                href="/saker"
                className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 smallcaps hover:bg-accent transition-colors duration-300"
              >
                Les sakene
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/kontakt"
                className="smallcaps link-editorial text-ink"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* right column: edition meta + values */}
          <aside
            className="md:col-span-4 md:col-rule md:pl-8 fade-up"
            style={{ animationDelay: "900ms" }}
          >
            <div className="rule-bar mb-4" />
            <p className="smallcaps mb-3">Publikasjoner</p>
            <ul className="font-serif text-2xl leading-snug space-y-2">
              <li>
                <Link href="/saker" className="link-editorial">
                  Fiskeribladet
                </Link>
              </li>
              <li>
                <Link href="/saker" className="link-editorial">
                  Intrafish
                </Link>
              </li>
              <li>
                <Link href="/saker" className="link-editorial text-accent">
                  Kystens Næringsliv
                </Link>
              </li>
            </ul>

            <RandomTeaser saker={saker} />
          </aside>
        </div>
      </section>

      <div className="rule-thick" />

      {/* rotating lead – random sak every 15s with a swoop-in on change */}
      <RotatingLead saker={saker} />

      <div className="rule-thick" />

      {/* secondary stories */}
      <section aria-labelledby="more-heading" className="py-10 md:py-14">
        <div className="flex items-baseline justify-between mb-8">
          <h2
            id="more-heading"
            className="font-serif text-3xl md:text-4xl tracking-[-0.02em]"
          >
            Flere saker
          </h2>
          <Link
            href="/saker"
            className="smallcaps link-editorial text-ink"
          >
            Se alle →
          </Link>
        </div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {rest.map((sak, idx) => (
            <article
              key={sak.slug}
              className={[
                "card group",
                idx > 0 ? "md:col-rule md:pl-10" : "",
              ].join(" ")}
            >
              <Link href={`/saker/${sak.slug}`}>
                <div className="card-image relative aspect-[4/3] bg-paper-deep">
                  <Image
                    src={sak.hovedbilde}
                    alt={sak.bildetekst}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="dateline mt-4">
                  {sak.seksjon} · {sak.publikasjon.toUpperCase()}
                </p>
                <h3 className="font-serif font-semibold text-2xl md:text-3xl leading-[1.08] tracking-[-0.02em] mt-3">
                  <span className="card-headline">{sak.tittel}</span>
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  {sak.ingress}
                </p>
                <p className="dateline mt-4">
                  {sak.sted} · {sak.dato}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="rule-thick" />

      {/* about strip */}
      <section
        aria-labelledby="about-strip"
        className="py-12 md:py-20 grid gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-5">
          <p className="smallcaps text-accent">Om journalisten</p>
          <h2
            id="about-strip"
            className="font-serif font-bold text-[2rem] md:text-[2.8rem] leading-[1.05] tracking-[-0.025em] mt-3"
          >
            Kvalitetsjournalistikk. Frihet under ansvar.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-rule md:pl-10">
          <p className="text-lg leading-relaxed text-ink-soft">
            Jeg er frilansjournalist i Bergen, med kontor på USF Verftet på
            Nordnes. Mastergrad i undersøkende journalistikk og 15 år i
            mediebransjen – særlig gravejournalistikk innen arbeidsliv, krim
            og flere felt.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Jeg leverer kritisk og undersøkende journalistikk og menneskenære
            historier – bilder og tekst, til nisjepublikasjoner som
            Fiskeribladet, Intrafish og Kystens Næringsliv. Alt levert fra
            felt.
          </p>

          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
            {[
              "Likeverd",
              "Empati",
              "Ærlighet",
              "Samfunnsengasjert",
              "Kritisk tenkning",
              "Nysgjerrig",
            ].map((v) => (
              <li
                key={v}
                className="smallcaps text-ink border-l-2 border-accent pl-3"
              >
                {v}
              </li>
            ))}
          </ul>

          <Link
            href="/om"
            className="smallcaps link-editorial mt-8 inline-block"
          >
            Mer om Kaspar →
          </Link>
        </div>
      </section>
    </div>
  );
}
