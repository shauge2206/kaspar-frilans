import Link from "next/link";
import Image from "next/image";
import { saker } from "@/lib/saker";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="smallcaps text-amber mb-6 inline-flex items-center gap-3">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--amber)" }}
              />
              Utgave 09 · Mai 2026
            </p>
            <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] tracking-tight text-ink">
              Kaspar Knudsen
              <span className="block italic text-ink-soft">
                Frilansjournalist i Bergen.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-ink-soft">
              Frilansjournalist med base på USF Verftet, Bergen. Mastergrad i
              undersøkende journalistikk. Leverer til Fiskeribladet, Intrafish
              og Kystens Næringsliv.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/saker"
                className="font-sans text-sm tracking-wide bg-amber text-[#0e0e0e] px-5 py-3 rounded-full hover:brightness-110 transition"
              >
                Les saker →
              </Link>
              <Link
                href="/kontakt"
                className="font-sans text-sm tracking-wide border border-rule px-5 py-3 rounded-full text-ink-soft hover:text-amber hover:border-amber transition"
              >
                Lei en frilanser
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <div className="border border-rule p-6 bg-bg-elev">
              <p className="smallcaps text-ink-mute mb-3">Sist publisert</p>
              <p className="font-serif text-xl leading-snug text-ink">
                {saker[0].tittel}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                {saker[0].publikasjon} · {saker[0].dato}
              </p>
              <Link
                href={`/saker/${saker[0].slug}`}
                className="glow font-sans text-sm mt-5 inline-flex items-center gap-2 text-amber"
              >
                Åpne saken
                <span aria-hidden>↘</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="smallcaps text-amber mb-4">Posisjon</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Kvalitetsjournalistikk fra Bergen.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 prose-longform max-w-none">
            <p>
              Jeg er frilansjournalist i Bergen, med kontor på USF Verftet på
              Nordnes. Mastergrad i undersøkende journalistikk og 15 år i
              mediebransjen.
            </p>
            <p>
              Jeg leverer kvalitetsjournalistikk til nisjepublikasjoner som
              Fiskeribladet, Intrafish og Kystens Næringsliv – særlig
              gravejournalistikk innen arbeidsliv, krim og flere felt. Drar
              ut i felt.
            </p>
          </div>
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <p className="smallcaps text-amber mb-3">Utvalgt</p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Saker fra arkivet
            </h2>
          </div>
          <Link
            href="/saker"
            className="font-sans text-sm text-ink-soft hover:text-amber transition glow"
          >
            Alle saker →
          </Link>
        </div>

        <div className="space-y-2">
          {saker.map((sak, i) => (
            <Reveal key={sak.slug} delay={i * 80}>
              <Link
                href={`/saker/${sak.slug}`}
                className="group grid md:grid-cols-12 gap-6 items-start py-8 border-t border-rule hover:bg-bg-elev/40 transition-colors px-2 -mx-2 rounded-sm"
              >
                <div className="md:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute pt-1">
                  №&nbsp;{String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-2">
                    {sak.publikasjon} · {sak.dato} ·{" "}
                    <span className="text-amber">{sak.lesetidMinutter} min lesing</span>
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight text-ink group-hover:text-amber transition-colors">
                    {sak.tittel}
                  </h3>
                  <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">
                    {sak.ingress}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
                <div className="md:col-span-4">
                  <div className="relative aspect-[4/3] overflow-hidden border border-rule">
                    <Image
                      src={sak.hovedbilde}
                      alt={sak.bildetekst}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.45) 100%)",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rule-grad h-px mx-auto max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="border border-rule bg-bg-elev p-10 md:p-14">
            <p className="smallcaps text-amber mb-5">Bestilling</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl">
              Trenger redaksjonen din en frilanser?
            </h2>
            <p className="mt-6 max-w-2xl text-ink-soft text-lg leading-relaxed">
              Undersøkende reportasje, research, intervju og bilder – levert
              som ferdig sak fra felt. Tilgjengelig for både enkeltoppdrag og
              lengre perioder i redaksjonen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="font-sans text-sm bg-amber text-[#0e0e0e] px-5 py-3 rounded-full hover:brightness-110 transition"
              >
                Ta kontakt
              </Link>
              <Link
                href="/om"
                className="font-sans text-sm border border-rule px-5 py-3 rounded-full text-ink-soft hover:text-amber hover:border-amber transition"
              >
                Om Kaspar
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
