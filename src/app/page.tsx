import Image from "next/image";
import Link from "next/link";
import { saker } from "@/lib/saker";
import { SplitText } from "@/components/split-text";

export default function HomePage() {
  const [lead, ...rest] = saker;

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
              Forsiden · Utgave 014
            </p>

            <SplitText
              as="h1"
              text="Historier fra felt — fortalt med varme og kritisk blikk."
              className="font-serif font-black text-[2.6rem] sm:text-[3.6rem] md:text-[5.4rem] leading-[0.95] tracking-[-0.035em] text-ink mt-5"
              delayBase={150}
              step={70}
            />

            <p
              className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-soft fade-up"
              style={{ animationDelay: "1100ms" }}
            >
              Kaspar er frilansjournalist i Bergen. Femten år i media, master
              i undersøkende journalistikk og kontor på USF Verftet. Han
              skriver for nyhets- og fagpresse — med blikk for arbeidsliv,
              krim, fiskeri og kystens næringer.
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
                Tips · oppdrag · samarbeid
              </Link>
            </div>
          </div>

          {/* right column: edition meta + values */}
          <aside
            className="md:col-span-4 md:col-rule md:pl-8 fade-up"
            style={{ animationDelay: "900ms" }}
          >
            <div className="rule-bar mb-4" />
            <p className="smallcaps mb-3">Avdelinger</p>
            <ul className="font-serif text-2xl leading-snug space-y-2">
              <li>
                <Link href="/saker" className="link-editorial">
                  Reportasje
                </Link>
              </li>
              <li>
                <Link href="/saker" className="link-editorial">
                  Feature
                </Link>
              </li>
              <li>
                <Link href="/saker" className="link-editorial text-accent">
                  Graving
                </Link>
              </li>
            </ul>

            <div className="rule-thin mt-8 pt-5">
              <p className="smallcaps mb-3 text-ink-mute">I dag</p>
              <p className="text-ink-soft leading-relaxed">
                Stortinget vurderer å gjenåpne én av Norges mest omdiskuterte
                forlissaker. Les Kaspars langlesning fra Senja og Nord-Norge.
              </p>
              <Link
                href={`/saker/${saker[0].slug}`}
                className="smallcaps link-editorial text-accent mt-3 inline-block"
              >
                Til hovedsaken
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <div className="rule-thick" />

      {/* lead story */}
      <section aria-labelledby="lead-heading" className="py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Link
              href={`/saker/${lead.slug}`}
              className="card group block"
            >
              <div className="card-image relative aspect-[5/4] md:aspect-[6/5] bg-paper-deep">
                <Image
                  src={lead.hovedbilde}
                  alt={lead.bildetekst}
                  fill
                  priority
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="dateline mt-4">
                {lead.sted} · {lead.dato.toUpperCase()} · {lead.publikasjon.toUpperCase()}
              </p>
            </Link>
          </div>

          <div className="md:col-span-5 md:col-rule md:pl-10">
            <p className="smallcaps text-accent">
              Hovedsak · {lead.seksjon}
            </p>
            <h2
              id="lead-heading"
              className="font-serif font-bold text-[2.2rem] md:text-[3.2rem] leading-[1.02] tracking-[-0.025em] mt-4"
            >
              <Link
                href={`/saker/${lead.slug}`}
                className="card-headline"
              >
                <span className="card-headline">{lead.tittel}</span>
              </Link>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {lead.ingress}
            </p>

            <div className="rule-thin mt-7 pt-5">
              <p className="dateline">
                Av Kaspar · {lead.dato} · for {lead.publikasjon}
              </p>
              <Link
                href={`/saker/${lead.slug}`}
                className="smallcaps link-editorial mt-4 inline-block"
              >
                Les hele saken →
              </Link>
            </div>
          </div>
        </div>
      </section>

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
            Tett på menneskene. Ute i felt. Med kritisk blikk.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-rule md:pl-10">
          <p className="text-lg leading-relaxed text-ink-soft">
            Kaspar har 15 år bak seg i bergensmedier og en master i
            gravejournalistikk. Spesialitetene er reportasje og undersøkende
            saker innen arbeidsliv, krim, fiskeri og kystens næringer.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Han drar ut til stedene, møter menneskene og forteller historien
            med både tekst og foto. Faste oppdragsgivere er nisjepresse som
            Fiskeribladet, Intrafish og Kystens Næringsliv — i tillegg til
            regionale og nasjonale aviser.
          </p>

          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
            {[
              "Kvalitet",
              "Fra felt",
              "Fleksibilitet",
              "Menneskenært",
              "Kritisk",
              "Undersøkende",
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
