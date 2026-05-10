import Image from "next/image";
import Link from "next/link";
import { saker } from "@/lib/saker";

export default function HomePage() {
  const featured = saker[0];
  const rest = saker.slice(1);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-12">
      {/* Cover spread */}
      <section className="cover-fold relative pt-6 pb-12 lg:pt-10 lg:pb-20">
        {/* Top masthead bar */}
        <div className="flex items-baseline justify-between border-b border-ink/70 pb-3 text-[0.78rem] smallcaps">
          <span>Volum I · Nr. 1</span>
          <span>Mai 2026 · Bergen</span>
          <span className="hidden sm:inline">Pris: kvalitet</span>
        </div>

        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.05fr_1fr] mt-8 lg:mt-12">
          {/* Left — masthead + headline */}
          <div className="relative">
            <div className="fade-up">
              <p className="smallcaps text-[0.78rem] text-accent tracking-[0.22em]">
                Magasinet
              </p>
              <h1 className="mt-3 font-display font-semibold tracking-tight leading-[0.86] text-[clamp(3.6rem,9vw,7.5rem)]">
                Kaspar
                <br />
                <span className="italic font-medium">Hauge</span>
              </h1>
              <div className="mt-6 h-px w-24 bg-ink/60" />
              <p className="mt-6 max-w-xl font-display italic text-[1.6rem] leading-snug text-ink-soft">
                Et selvstendig magasin om arbeid, kyst og kritisk
                tenkning — skrevet fra felt.
              </p>
            </div>

            {/* Cover lines / lead-ins */}
            <ul className="fade-up fade-up-d1 mt-12 space-y-4 max-w-md">
              <li className="border-l-2 border-accent pl-4">
                <span className="smallcaps text-[0.7rem] text-accent">
                  Hovedsak
                </span>
                <p className="font-display text-[1.4rem] leading-snug mt-0.5">
                  Snart 50 år etter brorens død — kampen om sannheten i
                  «Utvik Senior»-saken.
                </p>
              </li>
              <li className="border-l border-ink/30 pl-4">
                <span className="smallcaps text-[0.7rem] text-ink-soft">
                  Fra felt · Sotra
                </span>
                <p className="font-display text-[1.2rem] leading-snug mt-0.5">
                  «Han kom mot meg med armbrøst» — drama på Skogsvåg.
                </p>
              </li>
              <li className="border-l border-ink/30 pl-4">
                <span className="smallcaps text-[0.7rem] text-ink-soft">
                  Reportasje · Fyllingsdalen
                </span>
                <p className="font-display text-[1.2rem] leading-snug mt-0.5">
                  Gratisbutikk for flyktninger drukner i ødelagte klær.
                </p>
              </li>
            </ul>

            <div className="fade-up fade-up-d2 mt-12 flex items-baseline gap-6">
              <Link
                href="/saker"
                className="smallcaps tracking-[0.2em] text-[0.82rem] under-link"
              >
                Bla i utgaven →
              </Link>
              <Link
                href="/om"
                className="smallcaps tracking-[0.2em] text-[0.82rem] under-link"
              >
                Om redaktøren
              </Link>
            </div>
          </div>

          {/* Right — cover photo */}
          <figure className="fade-up fade-up-d1 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
              <Image
                src={featured.hovedbilde}
                alt={featured.bildetekst}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {/* Light tape strips at corners */}
              <span className="absolute -top-3 left-10 h-7 w-20 rotate-[-8deg] bg-gold/30 mix-blend-multiply" />
              <span className="absolute -bottom-3 right-12 h-7 w-24 rotate-[6deg] bg-gold/25 mix-blend-multiply" />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[0.82rem]">
              <span className="italic text-ink-soft leading-snug max-w-md">
                {featured.bildetekst}
              </span>
              <span className="smallcaps shrink-0 text-ink-soft">
                Foto: {featured.fotograf}
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Bottom masthead */}
        <div className="mt-14 lg:mt-20 flex items-end justify-between border-t border-ink/70 pt-3 text-[0.78rem] smallcaps">
          <span>Side 1</span>
          <span className="hidden sm:inline">
            Trykt med omhu · Lest med tid
          </span>
          <span>Fortsetter på side 12 →</span>
        </div>
      </section>

      {/* Editor's letter */}
      <section className="grid gap-12 lg:grid-cols-[1fr_2fr] py-16 lg:py-24 border-t border-rule">
        <div>
          <p className="smallcaps text-[0.74rem] text-accent">
            Fra redaktøren
          </p>
          <h2 className="mt-2 font-display text-[2.4rem] leading-tight tracking-tight">
            Hvorfor dette
            <br />
            <em>magasinet?</em>
          </h2>
        </div>
        <div className="prose-paper">
          <p className="dropcap font-serif text-[1.12rem] leading-[1.75] text-ink first-letter:text-accent">
            Det fins fortsatt rom for journalistikk som tar seg tid. Som
            reiser ut, som lytter — og som lar leseren komme tett på
            menneskene saken handler om. Dette er stedet jeg lager den
            slags arbeid: undersøkende reportasjer fra arbeidsliv, kyst
            og fiskerinæring, ofte i samarbeid med redaksjoner som
            <em> Fiskeribladet</em>, <em>Intrafish</em> og{" "}
            <em>Kystens Næringsliv</em>.
          </p>
          <p className="mt-6 font-serif text-[1.05rem] leading-[1.8] text-ink-soft">
            Etter femten år i Bergens-medier og en mastergrad i
            gravejournalistikk, ble dette et naturlig neste steg: å
            jobbe selvstendig, men aldri alene. Hver utgave samler det
            jeg mener er verdt å lese to ganger.
          </p>
        </div>
      </section>

      {/* Featured pieces grid */}
      <section className="py-16 lg:py-24 border-t border-rule">
        <div className="flex items-end justify-between border-b border-ink/60 pb-3 mb-10">
          <h2 className="font-display text-[1.8rem] tracking-tight">
            I denne utgaven
          </h2>
          <span className="smallcaps text-[0.74rem] text-ink-soft">
            Tre utvalgte saker
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {[featured, ...rest].map((sak, i) => (
            <article key={sak.slug} className="group">
              <Link href={`/saker/${sak.slug}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
                  <Image
                    src={sak.hovedbilde}
                    alt={sak.bildetekst}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between text-[0.74rem] smallcaps text-ink-soft">
                  <span>Nr. {String(i + 1).padStart(2, "0")}</span>
                  <span>{sak.kategori}</span>
                  <span>Side {sak.sidetall}</span>
                </div>
                <h3 className="mt-3 font-display text-[1.45rem] leading-[1.15] tracking-tight group-hover:text-accent transition-colors">
                  {sak.tittel}
                </h3>
                <p className="mt-3 italic text-[0.95rem] leading-relaxed text-ink-soft">
                  {sak.ingress}
                </p>
                <p className="mt-3 smallcaps text-[0.7rem] text-ink-soft">
                  {sak.publikasjon} · {sak.dato}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Quote band */}
      <section className="py-20 lg:py-28 border-t border-rule">
        <div className="grid gap-8 lg:grid-cols-[1fr_3fr] items-start">
          <p className="smallcaps text-[0.74rem] text-accent">
            Manifest · Side 3
          </p>
          <blockquote>
            <p className="font-display italic text-[clamp(1.8rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight">
              «Likeverd mellom mennesker. Empati. Ærlighet. Kritisk
              tenkning. Det er ikke et utvalg verdier — det er en
              arbeidsmetode.»
            </p>
            <footer className="mt-6 smallcaps text-[0.78rem] text-ink-soft">
              — Kaspar Knudsen, fra forretningsplanen
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 border-t border-rule">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-end">
          <div>
            <p className="smallcaps text-[0.74rem] text-accent">
              Brev til redaksjonen
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.02] tracking-tight">
              Har du en sak <em>verdt å fortelle?</em>
            </h2>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
              Tips, henvendelser fra redaksjoner og samtaler om
              samarbeid mottas alltid. Jeg svarer som regel innen 24
              timer.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-between border border-ink/80 px-6 py-4 smallcaps tracking-[0.2em] text-[0.84rem] hover:bg-ink hover:text-paper transition-colors"
            >
              Skriv til redaksjonen
              <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:post@kasparhauge.no"
              className="inline-flex items-center justify-between px-6 py-4 smallcaps tracking-[0.2em] text-[0.84rem] under-link"
            >
              post@kasparhauge.no
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
