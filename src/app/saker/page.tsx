import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Saker",
  description:
    "Et utvalg journalistisk arbeid av Kaspar Knudsen — fra Senja, Sotra og Bergen.",
};

export default function SakerIndex() {
  return (
    <>
      {/* Page header */}
      <section className="pt-44 md:pt-56 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">Arkivet</p>
            <h1 className="mt-6 font-display font-light text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-[-0.02em]">
              Saker
            </h1>
            <p className="mt-10 max-w-2xl font-display text-xl md:text-2xl leading-snug text-fg-muted">
              Et utvalg featurearbeid og undersøkende journalistikk —
              publisert i norsk dags- og fagpresse mellom 2023 og 2025.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="rule" />
      </div>

      {/* List */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 space-y-24 md:space-y-36">
          {saker.map((sak, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={sak.slug}>
                <article>
                  <Link
                    href={`/saker/${sak.slug}`}
                    className="group grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                  >
                    <div
                      className={`lg:col-span-7 ${
                        reverse ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={sak.hovedbilde}
                          alt={sak.bildetekst}
                          fill
                          sizes="(min-width: 1024px) 60vw, 100vw"
                          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div
                      className={`lg:col-span-5 ${
                        reverse ? "lg:order-1" : ""
                      }`}
                    >
                      <p className="smallcaps text-amber">
                        {String(i + 1).padStart(2, "0")} · {sak.publikasjon}
                      </p>
                      <h2 className="mt-5 font-display font-light text-3xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.015em] transition-colors group-hover:text-amber-soft">
                        {sak.tittel}
                      </h2>
                      <p className="mt-6 text-fg-muted leading-relaxed max-w-xl">
                        {sak.ingress}
                      </p>
                      <div className="mt-7 flex items-center gap-6 smallcaps text-fg-muted">
                        <span>{sak.dato}</span>
                        <span aria-hidden>·</span>
                        <span>{sak.sted}</span>
                        <span aria-hidden>·</span>
                        <span>{sak.lesetidMin} min lesetid</span>
                      </div>
                      <p className="mt-8 inline-flex items-center gap-3 smallcaps text-fg group-hover:text-amber transition-colors">
                        Les saken
                        <span
                          aria-hidden
                          className="transition-transform group-hover:translate-x-2"
                        >
                          →
                        </span>
                      </p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
