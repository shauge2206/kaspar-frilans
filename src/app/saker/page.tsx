import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Saker – Kaspar Knudsen",
  description:
    "Et utvalg artikler fra Kaspar Knudsen – publisert i Fiskeribladet, Intrafish og Kystens Næringsliv.",
};

export default function SakerPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="smallcaps text-amber mb-5">Arkiv</p>
        <h1 className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-tight tracking-tight">
          Saker
          <span className="block italic text-ink-soft text-[0.6em]">
            Et utvalg fra de siste årene.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
          Artikler publisert i Fiskeribladet, Intrafish og Kystens Næringsliv.
          Bilder og tekst – kritisk og undersøkende journalistikk og
          menneskenære historier.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="border-t border-rule">
          {saker.map((sak, i) => (
            <Reveal key={sak.slug} delay={i * 80}>
              <Link
                href={`/saker/${sak.slug}`}
                className="group grid md:grid-cols-12 gap-6 items-start py-10 border-b border-rule hover:bg-bg-elev/40 transition-colors px-2 -mx-2"
              >
                <div className="md:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-4">
                  <div className="relative aspect-[4/5] overflow-hidden border border-rule">
                    <Image
                      src={sak.hovedbilde}
                      alt={sak.bildetekst}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-3">
                    {sak.publikasjon} · {sak.dato}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink group-hover:text-amber transition-colors">
                    {sak.tittel}
                  </h2>
                  <p className="mt-4 text-ink-soft text-lg leading-relaxed max-w-2xl">
                    {sak.ingress}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 items-center">
                    <span className="smallcaps text-amber border border-amber/40 px-2 py-0.5 rounded-full">
                      {sak.lesetidMinutter} min lesing
                    </span>
                    {sak.emneknagger.map((tag) => (
                      <span
                        key={tag}
                        className="smallcaps text-ink-mute border border-rule px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
