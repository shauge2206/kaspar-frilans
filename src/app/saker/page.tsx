import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { saker } from "@/lib/saker";
import { SplitText } from "@/components/split-text";

export const metadata: Metadata = {
  title: "Saker — Arkiv",
  description:
    "Et utvalg saker av Kaspar — reportasje, feature og graving for Bergens Tidende, Fiskeribladet og andre.",
};

export default function SakerPage() {
  const [lead, ...rest] = saker;

  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10 pt-6 pb-16">
      <header className="pb-10">
        <p className="smallcaps text-accent">Arkiv · Utvalgte saker</p>
        <SplitText
          as="h1"
          text="Saker"
          className="font-serif font-black text-[3.6rem] md:text-[6.4rem] leading-[0.92] tracking-[-0.04em] mt-3 block"
          step={0}
        />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft fade-up" style={{ animationDelay: "300ms" }}>
          Et representativt utvalg fra de siste årene — fra langlesninger om
          forlissaker i nord til nattlige drama på Sotra og hverdagsreportasjer
          fra Fyllingsdalen.
        </p>
      </header>

      <div className="rule-thick mb-10" />

      {/* lead in archive */}
      <article className="card group grid gap-8 md:grid-cols-12 mb-14">
        <Link
          href={`/saker/${lead.slug}`}
          className="md:col-span-7 block"
        >
          <div className="card-image relative aspect-[5/4] bg-paper-deep">
            <Image
              src={lead.hovedbilde}
              alt={lead.bildetekst}
              fill
              priority
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Link>
        <div className="md:col-span-5 md:col-rule md:pl-10 flex flex-col">
          <p className="smallcaps text-accent">
            {lead.seksjon} · {lead.publikasjon.toUpperCase()}
          </p>
          <h2 className="font-serif font-bold text-[2rem] md:text-[3rem] leading-[1.04] tracking-[-0.025em] mt-3">
            <Link href={`/saker/${lead.slug}`} className="card-headline">
              {lead.tittel}
            </Link>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            {lead.ingress}
          </p>
          <p className="dateline mt-6">
            {lead.sted} · {lead.dato.toUpperCase()} · KASPAR
          </p>
        </div>
      </article>

      <div className="rule-thick mb-10" />

      <section>
        <ul className="grid gap-y-14 md:grid-cols-2 md:gap-x-10">
          {rest.map((sak, idx) => (
            <li
              key={sak.slug}
              className={["card group", idx > 0 ? "md:col-rule md:pl-10" : ""].join(" ")}
            >
              <Link href={`/saker/${sak.slug}`} className="block">
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
                <h3 className="font-serif font-semibold text-2xl md:text-[1.9rem] leading-[1.08] tracking-[-0.02em] mt-3">
                  <span className="card-headline">{sak.tittel}</span>
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">
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
  );
}
