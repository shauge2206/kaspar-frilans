import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { saker } from "@/lib/saker";
import { SplitText } from "@/components/split-text";

export const metadata: Metadata = {
  title: "Saker – Arkiv",
  description:
    "Et utvalg saker av Kaspar – reportasje, feature og graving for Bergens Tidende, Fiskeribladet og andre.",
};

export default function SakerPage() {
  return (
    <div className="w-full pt-6 pb-16">
      <header className="mx-auto w-full max-w-[1280px] px-5 md:px-10 pb-10">
        <p className="smallcaps text-accent">Arkiv · Utvalgte saker</p>
        <SplitText
          as="h1"
          text="Saker"
          className="font-serif font-black text-[3.6rem] md:text-[6.4rem] leading-[0.92] tracking-[-0.04em] mt-3 block"
          step={0}
        />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft fade-up" style={{ animationDelay: "300ms" }}>
          Et utvalg saker publisert for Fiskeribladet, Bergens Tidende og
          andre. Kritisk og undersøkende journalistikk med bilder og tekst –
          levert fra felt.
        </p>
        <p className="mt-6 dateline text-ink-mute">
          {saker.length} saker · bla horisontalt →
        </p>
      </header>

      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
        <div className="rule-thick mb-10" />

        <section
          aria-label="Saksregister"
          className="overflow-x-auto snap-x snap-mandatory [scrollbar-width:thin]"
        >
          <ul className="flex gap-6 md:gap-8 pb-4">
            {saker.map((sak) => (
              <li
                key={sak.slug}
                className="card group shrink-0 snap-start w-[280px] sm:w-[340px] md:w-[380px]"
              >
                <Link href={`/saker/${sak.slug}`} className="block">
                  <div className="card-image relative aspect-[4/3] bg-paper-deep">
                    <Image
                      src={sak.hovedbilde}
                      alt={sak.bildetekst}
                      fill
                      sizes="(min-width: 768px) 380px, 80vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="dateline mt-4">
                    {sak.seksjon} · {sak.publikasjon.toUpperCase()}
                  </p>
                  <h3 className="font-serif font-semibold text-xl md:text-[1.6rem] leading-[1.1] tracking-[-0.02em] mt-2">
                    <span className="card-headline">{sak.tittel}</span>
                  </h3>
                  <p className="mt-3 text-ink-soft leading-relaxed line-clamp-3">
                    {sak.ingress}
                  </p>
                  <p className="dateline mt-4">
                    {sak.sted} · {sak.dato}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
