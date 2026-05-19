import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import { Stamp } from "@/components/stamp";
import { Paperclip } from "@/components/paperclip";

export default function Home() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden">
        {/* desk surface */}
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 0%, rgba(107, 79, 42, 0.18), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(107, 79, 42, 0.12), transparent 50%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-24">
          {/* Top dossier slip */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                DOSSIER · KH-2026 · MAPPE 001
              </p>
              <h1 className="mt-3 font-serif text-5xl md:text-7xl leading-[1.05] text-ink">
                <span className="typed">Kaspar Knudsen</span>
              </h1>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-stamp">
                FRILANSJOURNALIST I BERGEN
              </p>
              <p className="mt-5 max-w-xl text-base md:text-lg text-ink-soft leading-relaxed">
                Frilansjournalist med base på USF Verftet, Bergen. Mastergrad i
                undersøkende journalistikk. Leverer til Fiskeribladet, Intrafish
                og Kystens Næringsliv.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/saker" className="btn">
                  Bla i saksarkivet
                </Link>
                <Link
                  href="/om"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft underline decoration-ink-muted/40 hover:text-stamp"
                >
                  Om journalisten →
                </Link>
              </div>
            </div>

            {/* meta block / file plate */}
            <div className="paper px-5 py-4 max-w-xs w-full font-mono text-[11px] leading-relaxed text-ink-soft">
              <div className="flex justify-between border-b border-ink/15 pb-1.5 mb-2">
                <span className="uppercase tracking-[0.16em]">Saksregister</span>
                <span className="uppercase tracking-[0.16em]">2026-05</span>
              </div>
              <dl className="space-y-1">
                <div className="flex justify-between">
                  <dt>Arkivansvarlig</dt>
                  <dd>K. Knudsen</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Distrikt</dt>
                  <dd>Bergen / Vestland</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Spesialitet</dt>
                  <dd>Gravejournalistikk</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Klassifisering</dt>
                  <dd>Åpen til innsyn</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saker registrert</dt>
                  <dd>{saker.length.toString().padStart(3, "0")}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Pinned brief – like a bulletin with strings */}
          <div className="relative mt-6 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 paper p-7 md:p-9 relative">
              <div className="holes hidden md:flex">
                <span /><span /><span /><span /><span />
              </div>
              <div className="md:pl-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  VISJON
                </p>
                <p className="mt-3 font-serif text-2xl md:text-3xl leading-snug">
                  «Jeg drar ut i felt for å se stedene og møte menneskene jeg skriver om – det er det som gjør journalistikken nærmere.»
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  – Kaspar Knudsen
                </p>

                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  {[
                    { k: "Kvalitet", v: "Kvalitetsjournalistikk" },
                    { k: "Fra felt", v: "Leverer fra felt" },
                    { k: "Fleksibilitet", v: "Tilgjengelighet og fleksibilitet" },
                  ].map((b) => (
                    <div key={b.k} className="border border-ink/15 p-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stamp">
                        {b.k}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">{b.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <span className="tape -top-4 left-10 -rotate-6" />
              <span className="tape -bottom-4 right-12 rotate-3" />

            </div>

            <div className="lg:col-span-5 relative">
              {/* faux pinned photo + index card */}
              <div className="polaroid rotate-[3deg] relative max-w-[340px] mx-auto group">
                <Paperclip />
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/saker/sak-2/bilde-1.jpeg"
                    alt="Felt – Skogsvåg, Øygarden"
                    fill
                    className="object-cover grayscale-[20%]"
                    sizes="(min-width: 1024px) 340px, 80vw"
                    priority
                  />
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft text-center">
                  KH · 2023 – fra felt, Sotra
                </p>
              </div>

              <div className="paper mt-6 ml-auto max-w-[300px] p-4 -rotate-2 relative">
                <span className="tape -top-3 left-6 rotate-2" />
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  POSTKASSE
                </p>
                <p className="mt-2 text-sm">
                  Tips, oppdrag eller spørsmål?{" "}
                  <Link href="/kontakt" className="underline decoration-stamp/40 text-stamp">
                    kaspar@knudsen.no
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured files fanned out */}
      <section className="border-t border-ink/15 bg-paper-2/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                MAPPER PÅ ARBEIDSBORDET
              </p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                Saker som ligger fremme
              </h2>
            </div>
            <Link
              href="/saker"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft underline decoration-ink-muted/40 hover:text-stamp"
            >
              Hele saksarkivet →
            </Link>
          </div>

          {/* fanned folder layout */}
          <div className="grid md:grid-cols-3 gap-7 lg:gap-3">
            <FeaturedFolder index={0} />
            <FeaturedFolder index={1} />
            <FeaturedFolder index={2} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="paper p-8 md:p-12 relative overflow-hidden">
          <span className="tape -top-4 left-12 -rotate-6" />
          <span className="tape -top-4 right-16 rotate-3" />
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                ÅPEN FOR OPPDRAG · 2026
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                Ta kontakt for oppdrag
              </h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                Enkeltsaker, ferdige artikler eller periode-jobbing i
                redaksjoner. Stykkpris per sak eller betalt pr periode.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn">
                  Send melding
                </Link>
                <a
                  href="mailto:kaspar@knudsen.no"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft underline decoration-ink-muted/40 hover:text-stamp"
                >
                  kaspar@knudsen.no
                </a>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <Stamp variant="circle" rotate={-12}>
                <span className="block text-[11px]">SAKSREGISTER</span>
                <span className="block text-base mt-1">ÅPENT</span>
                <span className="block text-[10px] mt-1 opacity-80">2026</span>
              </Stamp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedFolder({ index }: { index: 0 | 1 | 2 }) {
  const sak = saker[index];
  const rotates = [-2, 1.5, -1] as const;
  const margins = ["", "lg:mt-8", "lg:mt-2"] as const;
  return (
    <div className={margins[index]}>
      <FeaturedFolderInner sak={sak} rotate={rotates[index]} />
    </div>
  );
}

function FeaturedFolderInner({
  sak,
  rotate,
}: {
  sak: (typeof saker)[number];
  rotate: number;
}) {
  // small wrapper so we can pass rotation via inline style and still keep group hover
  return (
    <Link
      href={`/saker/${sak.slug}`}
      className="group block focus:outline-none"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <article className="folder pt-7 pb-6 px-6 min-h-[420px] flex flex-col relative">
        <span className="tab absolute -top-3 left-6">{sak.shortLabel}</span>
        <div className="flex justify-between items-start gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
            {sak.caseNumber}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted text-right">
            {sak.publication}
          </p>
        </div>

        <div className="mt-5 polaroid w-full max-w-[300px] mx-auto rotate-[-1deg] group-hover:rotate-0 transition-transform">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-ink/10">
            <Image
              src={sak.images[0].src}
              alt={sak.images[0].alt}
              fill
              className="object-cover grayscale-[30%] group-hover:grayscale-0 transition"
              sizes="(min-width: 1024px) 300px, 80vw"
            />
          </div>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft text-center">
            {sak.field}
          </p>
        </div>

        <h3 className="mt-5 font-serif text-xl leading-snug text-ink line-clamp-3">
          {sak.title}
        </h3>

        <p className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          {sak.date} · {sak.field}
        </p>

        {sak.stamps[0] ? (
          <div className="absolute -top-2 right-4">
            <Stamp rotate={9} animate={false}>{sak.stamps[0]}</Stamp>
          </div>
        ) : null}
      </article>
    </Link>
  );
}
