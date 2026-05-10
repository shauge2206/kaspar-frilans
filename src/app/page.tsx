import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import FadeUp from "./components/FadeUp";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {/* HERO */}
      <section className="grid grid-cols-12 gap-x-6 pt-16 pb-24 md:pt-28 md:pb-40">
        <div className="col-span-12 mb-10 flex items-baseline justify-between md:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 01 — Forside
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
            Bergen · 60.39° N
          </span>
        </div>

        <h1 className="col-span-12 font-serif text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-6xl md:col-span-11 md:text-[112px] lg:text-[140px]">
          Kvalitets&shy;journalistikk
        </h1>

        <div className="col-span-12 mt-12 grid grid-cols-12 gap-x-6 md:mt-20">
          <div className="col-span-12 md:col-span-4 md:col-start-7">
            <p className="font-serif text-xl leading-snug tracking-tight md:text-2xl">
              Frilansjournalist med base på USF Verftet, Bergen. Mastergrad
              i undersøkende journalistikk. Leverer til Fiskeribladet,
              Intrafish, Kystens Næringsliv.
            </p>

            <div className="mt-10 flex flex-col gap-4 font-mono text-[11px] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:gap-8">
              <Link href="/saker" className="link-rule">
                Se utvalgte saker →
              </Link>
              <Link href="/kontakt" className="link-rule text-muted">
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-strong" />

      {/* POSITIONING */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 02 — Posisjon
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeUp>
            <p className="max-w-4xl font-serif text-2xl leading-snug tracking-tight md:text-[34px] md:leading-[1.18]">
              <span className="text-muted">Drar ut i felt. </span>
              Kritisk og undersøkende journalistikk innen arbeidsliv, krim
              og flere områder — levert som bilder og tekst.
            </p>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3">
            {[
              {
                k: "01",
                t: "Fra felt",
                b: "Drar ut i felt.",
              },
              {
                k: "02",
                t: "Graving",
                b: "Mastergrad i undersøkende journalistikk; 15+ år i mediebransjen.",
              },
              {
                k: "03",
                t: "Bilder og tekst",
                b: "Leveres som bilder og tekst; mulig gjenbruk.",
              },
            ].map((x, i) => (
              <FadeUp key={x.k} delay={i * 80}>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    NR. {x.k}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl tracking-tight">
                    {x.t}
                  </h3>
                  <p className="mt-2 font-serif text-base leading-relaxed text-muted">
                    {x.b}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule-strong" />

      {/* FEATURED ARTICLES */}
      <section className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
        <div className="col-span-12 mb-4 flex items-baseline justify-between md:col-span-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 03 — Utvalgte saker
          </span>
          <Link
            href="/saker"
            className="link-rule font-mono text-[11px] uppercase tracking-[0.18em]"
          >
            Alle saker →
          </Link>
        </div>

        <ul className="col-span-12 divide-y divide-hairline border-y border-foreground">
          {articles.map((a) => (
            <li key={a.slug}>
              <FadeUp as="div">
                <Link
                  href={`/saker/${a.slug}`}
                  className="group grid grid-cols-12 items-start gap-x-6 py-10 md:py-14"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted tnum">
                      {a.number}
                    </span>
                  </div>

                  <div className="col-span-10 md:col-span-7">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
                      {a.date} / {a.publication.toUpperCase()} /{" "}
                      {a.category.toUpperCase()}
                    </div>
                    <h3 className="mt-3 font-serif text-2xl leading-[1.12] tracking-tight transition-[letter-spacing] duration-200 group-hover:tracking-[-0.018em] md:text-[40px]">
                      {a.title}
                    </h3>
                    <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-muted md:text-lg">
                      {a.excerpt}
                    </p>
                  </div>

                  <div className="col-span-12 mt-6 md:col-span-4 md:mt-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-hairline">
                      <Image
                        src={a.images[0].src}
                        alt={a.images[0].alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>

      <hr className="rule-strong" />

      {/* CONTACT CTA */}
      <section className="grid grid-cols-12 gap-x-6 py-20 md:py-32">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 04 — Henvendelser
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeUp>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.02em] md:text-6xl">
              Henvendelser
            </h2>
            <p className="mt-8 max-w-2xl font-serif text-xl leading-snug text-muted">
              Innsalg av ideer, ferdige saker, enkeltoppdrag eller
              periode-jobbing i redaksjon. Stykkpris per sak eller betalt
              pr periode.
            </p>

            <div className="mt-12 flex flex-col gap-6 font-mono text-[11px] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:gap-10">
              <a
                href="mailto:kaspar@kasparknudsen.no"
                className="link-rule text-foreground"
              >
                kaspar@kasparknudsen.no
              </a>
              <Link href="/kontakt" className="link-rule text-muted">
                Send melding →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
