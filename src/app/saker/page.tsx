import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import FadeUp from "../components/FadeUp";

export const metadata: Metadata = {
  title: "Saker",
  description:
    "Et utvalg saker av frilansjournalist Kaspar Knudsen — reportasje, nyhet og feature fra Bergen og kysten.",
};

export default function SakerPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {/* Masthead */}
      <section className="grid grid-cols-12 gap-x-6 pt-16 pb-16 md:pt-28 md:pb-24">
        <div className="col-span-12 mb-10 flex items-baseline justify-between md:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            NR. 02 — Arkiv
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
            {articles.length} oppføringer
          </span>
        </div>

        <h1 className="col-span-12 font-serif text-5xl leading-[1.02] tracking-[-0.02em] md:col-span-10 md:text-[96px]">
          Saker.
        </h1>

        <p className="col-span-12 mt-10 max-w-3xl font-serif text-xl leading-snug text-muted md:col-span-7 md:col-start-6 md:mt-16 md:text-2xl">
          Et utvalg publiserte saker — reportasje, nyhet og feature.
          Skrevet for Fiskeribladet, Bergens Tidende og andre
          redaksjoner.
        </p>
      </section>

      <hr className="rule-strong" />

      {/* Article listing */}
      <ul className="divide-y divide-hairline">
        {articles.map((a) => (
          <li key={a.slug}>
            <FadeUp as="div">
              <Link
                href={`/saker/${a.slug}`}
                className="group grid grid-cols-12 items-start gap-x-6 py-12 md:py-20"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted tnum">
                    {a.number}
                  </span>
                </div>

                <div className="col-span-10 md:col-span-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
                    {a.date} / {a.publication.toUpperCase()} /{" "}
                    {a.category.toUpperCase()}
                  </div>
                  <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight transition-[letter-spacing] duration-200 group-hover:tracking-[-0.018em] md:text-[52px]">
                    {a.title}
                  </h2>
                  <p className="mt-5 max-w-xl font-serif text-base leading-relaxed text-muted md:text-lg">
                    {a.excerpt}
                  </p>
                  <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground">
                    <span className="link-rule">Les saken →</span>
                  </div>
                </div>

                <div className="col-span-12 mt-8 md:col-span-5 md:mt-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-hairline">
                    <Image
                      src={a.images[0].src}
                      alt={a.images[0].alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {a.photoCredit}
                  </div>
                </div>
              </Link>
            </FadeUp>
          </li>
        ))}
      </ul>

      <hr className="rule-strong" />

      <section className="grid grid-cols-12 gap-x-6 py-20 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Forespørsel
          </span>
        </div>
        <div className="col-span-12 md:col-span-9">
          <p className="max-w-3xl font-serif text-2xl leading-snug tracking-tight md:text-3xl">
            Saker tilbys for innsalg eller gjenbruk. Ta kontakt for arkiv,
            bilder eller utvidet versjon.{" "}
            <Link href="/kontakt" className="link-rule italic text-muted">
              Send en melding →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
