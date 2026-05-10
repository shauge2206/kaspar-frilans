import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hentSak, saker } from "@/lib/saker";
import { ArticleToc } from "@/components/ArticleToc";
import { ListenButton } from "@/components/ListenButton";
import { ShareLinks } from "@/components/ShareLinks";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return saker.map((sak) => ({ slug: sak.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sak = hentSak(slug);
  if (!sak) return {};
  return {
    title: `${sak.tittel} — Kaspar Knudsen`,
    description: sak.ingress,
  };
}

export default async function SakDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sak = hentSak(slug);
  if (!sak) notFound();

  const sectionIds = {
    ingress: "ingress",
    hovedbilde: "hovedbilde",
    brodtekst: "brodtekst",
    sitat: "sitat",
    galleri: "galleri",
    kolofon: "kolofon",
  };

  const tocItems = [
    { id: sectionIds.ingress, label: "Ingress" },
    { id: sectionIds.hovedbilde, label: "Hovedbilde" },
    { id: sectionIds.brodtekst, label: "Reportasjen" },
    ...(sak.pullquote ? [{ id: sectionIds.sitat, label: "Sitat" }] : []),
    { id: sectionIds.galleri, label: "Bilder" },
    { id: sectionIds.kolofon, label: "Kolofon" },
  ];

  const indeks = saker.findIndex((s) => s.slug === sak.slug);
  const neste = saker[(indeks + 1) % saker.length];

  return (
    <article className="relative">
      <header className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-10">
        <Link
          href="/saker"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute hover:text-amber transition"
        >
          ← Tilbake til arkivet
        </Link>
        <div className="mt-8 flex flex-wrap gap-2 items-center">
          <span className="smallcaps text-amber border border-amber/40 px-2 py-0.5 rounded-full">
            {sak.publikasjon}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            {sak.dato}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            ·
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
            {sak.lesetidMinutter} min lesing
          </span>
        </div>
        <h1 className="mt-6 font-serif text-[clamp(2.2rem,5.4vw,4.6rem)] leading-[1.05] tracking-tight max-w-4xl">
          {sak.tittel}
        </h1>
        <p
          id={sectionIds.ingress}
          className="mt-8 max-w-2xl font-serif italic text-ink-soft text-xl md:text-2xl leading-relaxed scroll-mt-24"
        >
          {sak.ingress}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            Av Kaspar Knudsen · Foto: {sak.fotograf}
          </p>
          <ListenButton minutes={sak.lesetidMinutter} />
        </div>
      </header>

      <section id={sectionIds.hovedbilde} className="mx-auto max-w-6xl px-6 scroll-mt-24">
        <figure>
          <div className="relative aspect-[16/10] overflow-hidden border border-rule">
            <Image
              src={sak.hovedbilde}
              alt={sak.bildetekst}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-mute max-w-3xl">
            {sak.bildetekst}{" "}
            <span className="text-ink-mute/70">
              (Foto: {sak.fotograf})
            </span>
          </figcaption>
        </figure>
      </section>

      <div className="mx-auto max-w-6xl px-6 mt-20 grid lg:grid-cols-12 gap-12">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-10">
            <ArticleToc items={tocItems} />
            <div>
              <p className="smallcaps text-ink-mute mb-3">Byline</p>
              <p className="font-serif text-lg leading-snug">Kaspar Knudsen</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                USF Verftet · Bergen
              </p>
            </div>
            <ShareLinks tittel={sak.tittel} />
          </div>
        </aside>

        <div className="lg:col-span-9 lg:pl-6 lg:border-l lg:border-rule">
          <div
            id={sectionIds.brodtekst}
            className="prose-longform max-w-[640px] mx-auto scroll-mt-24"
          >
            {sak.brodtekst.slice(0, 2).map((p, i) => (
              <Reveal key={i}>
                <p>{p}</p>
              </Reveal>
            ))}

            {sak.pullquote ? (
              <Reveal>
                <blockquote
                  id={sectionIds.sitat}
                  className="pullquote scroll-mt-24"
                >
                  {sak.pullquote}
                </blockquote>
              </Reveal>
            ) : null}

            {sak.brodtekst.slice(2).map((p, i) => (
              <Reveal key={`b-${i}`}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <section
            id={sectionIds.galleri}
            className="mt-24 max-w-[760px] mx-auto scroll-mt-24"
          >
            <p className="smallcaps text-amber mb-4">Bilder</p>
            <h2 className="font-serif text-3xl leading-tight">
              Fra reportasjen
            </h2>
            <div className="mt-8 space-y-12">
              {sak.bilder.map((b, i) => (
                <Reveal key={b.src} delay={i * 60}>
                  <figure>
                    <div className="relative aspect-[3/2] border border-rule overflow-hidden">
                      <Image
                        src={b.src}
                        alt={b.tekst}
                        fill
                        sizes="(max-width: 1024px) 100vw, 760px"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-mute">
                      {String(i + 1).padStart(2, "0")} · {b.tekst}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id={sectionIds.kolofon}
            className="mt-24 max-w-[640px] mx-auto scroll-mt-24"
          >
            <div className="border-t border-rule pt-10">
              <p className="smallcaps text-ink-mute mb-3">Kolofon</p>
              <dl className="grid grid-cols-3 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
                <dt className="text-ink-mute">Publikasjon</dt>
                <dd className="col-span-2">{sak.publikasjon}</dd>
                <dt className="text-ink-mute">Publisert</dt>
                <dd className="col-span-2">
                  <time dateTime={sak.datoIso}>{sak.dato}</time>
                </dd>
                <dt className="text-ink-mute">Forfatter</dt>
                <dd className="col-span-2">Kaspar Knudsen</dd>
                <dt className="text-ink-mute">Foto</dt>
                <dd className="col-span-2">{sak.fotograf}</dd>
                <dt className="text-ink-mute">Lesetid</dt>
                <dd className="col-span-2">{sak.lesetidMinutter} minutter</dd>
                <dt className="text-ink-mute">Emner</dt>
                <dd className="col-span-2">{sak.emneknagger.join(", ")}</dd>
              </dl>
            </div>
          </section>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 mt-32 mb-10 grid md:grid-cols-2 gap-6">
        <Link
          href={`/saker/${neste.slug}`}
          className="group border border-rule p-8 hover:bg-bg-elev/40 transition-colors block"
        >
          <p className="smallcaps text-ink-mute mb-3">Neste sak</p>
          <h3 className="font-serif text-2xl leading-tight group-hover:text-amber transition-colors">
            {neste.tittel}
          </h3>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            {neste.publikasjon} · {neste.dato} · {neste.lesetidMinutter} min lesing
          </p>
        </Link>
        <Link
          href="/kontakt"
          className="group border border-rule p-8 hover:bg-bg-elev/40 transition-colors block"
        >
          <p className="smallcaps text-amber mb-3">Et tips eller en sak?</p>
          <h3 className="font-serif text-2xl leading-tight group-hover:text-amber transition-colors">
            Skriv til Kaspar.
          </h3>
          <p className="mt-3 text-ink-soft leading-relaxed">
            Kildevern står sterkt. Krypterte kanaler tilgjengelig på
            forespørsel.
          </p>
        </Link>
      </section>
    </article>
  );
}
