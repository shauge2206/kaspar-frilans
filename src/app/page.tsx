import Link from "next/link";
import Image from "next/image";
import { FieldMap } from "@/components/FieldMap";
import { CompassRose } from "@/components/CompassRose";
import { articles, formatCoord, themes } from "@/lib/articles";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/40">
        <div className="absolute inset-0 contour pointer-events-none" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-12 pb-6">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Reportasjer fra felt
                </span>
                <span>·</span>
                <span className="tabular">60°23′N · 05°19′Ø</span>
              </div>
              <h1 className="font-semibold tracking-[-0.02em] leading-[0.95] text-[clamp(2.6rem,6vw,5.2rem)] text-ink">
                Historiene
                <br />
                ligger der
                <br />
                <span className="text-accent">menneskene er.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pl-8 lg:border-l border-line/50">
              <p className="text-[17px] leading-relaxed text-deep/80 max-w-md font-serif">
                Kaspar Knudsen er frilansjournalist i Bergen — med spesialfelt
                innen gravejournalistikk, arbeidsliv, kyst og samfunn. Han drar
                ut i felt: til kaier, kontorer, kommunale møter og kjøkkenbord.
                Arbeidet er plottet på kartet — der det faktisk ble laget.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/saker"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] bg-deep text-paper px-5 py-3 rounded-full hover:bg-accent transition-colors"
                >
                  Se alle reportasjer
                </Link>
                <Link
                  href="/kontakt"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] border border-deep/40 text-deep px-5 py-3 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  Ta kontakt
                </Link>
              </div>
            </div>
          </div>

          <FieldMap variant="hero" />
        </div>
      </section>

      {/* positioning strip */}
      <section className="border-b border-line/40 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10">
          {[
            {
              k: "01",
              title: "Fra felt",
              body: "Reportasjer som starter med at noen åpner døren — ikke en e-post.",
            },
            {
              k: "02",
              title: "Kvalitet",
              body: "Master i gravejournalistikk og 15 år i Bergens-mediene. Tid til å sjekke.",
            },
            {
              k: "03",
              title: "Menneskenært",
              body: "Likeverd og empati i møtet — også når historien er ubehagelig.",
            },
            {
              k: "04",
              title: "Fleksibel",
              body: "Tar oppdrag fra hele bransjen: nyhet, feature, foto, dokumentar.",
            },
          ].map((c) => (
            <div key={c.k}>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent tabular mb-3">
                {c.k} · {c.title}
              </div>
              <p className="text-[15px] leading-relaxed text-deep/85 font-serif">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* featured */}
      <section className="border-b border-line/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-4">
                Utvalgte reportasjer
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink leading-[1.05] max-w-3xl">
                Tre saker, tre steder.
              </h2>
            </div>
            <Link
              href="/saker"
              className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-deep hover:text-accent transition-colors"
            >
              Hele arkivet
              <span aria-hidden>→</span>
            </Link>
          </div>

          <ul className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <li key={a.slug}>
                <Link
                  href={`/saker/${a.slug}`}
                  className="group block border border-line/50 bg-paper rounded-lg overflow-hidden hover:border-deep/60 transition-colors"
                >
                  <div className="relative h-56 bg-fog">
                    <Image
                      src={a.images[0]!.src}
                      alt={a.images[0]!.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {a.themes.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 text-paper"
                          style={{ background: themes[t].color }}
                        >
                          {themes[t].label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 mb-3 flex items-center gap-2">
                      <span className="tabular">
                        № {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="w-3 h-px bg-deep/30" />
                      <span>{a.location.name}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink leading-snug mb-3 group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <div className="font-mono text-[10px] text-deep/50 tabular">
                      {formatCoord(a.location.lat, a.location.lng)}
                    </div>
                    <div className="font-mono text-[10.5px] text-deep/60 mt-2">
                      {a.publication} · {a.dateLabel}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* contact CTA */}
      <section className="bg-deep text-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-[1fr_auto] items-center gap-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60 mb-5">
              Tipse · Bestille · Samarbeide
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
              Har du en sak som
              <br />
              fortjener tid?
            </h2>
            <p className="text-[17px] text-paper/80 max-w-xl leading-relaxed font-serif mb-8">
              Jeg tar imot tips, redaksjonelle bestillinger og samarbeid med
              andre frilansere og fotografer. Bergen er base — kysten er
              feltet.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="font-mono text-[11px] uppercase tracking-[0.18em] bg-accent text-paper px-6 py-3.5 rounded-full hover:bg-accent-deep transition-colors"
              >
                Send melding
              </Link>
              <a
                href="mailto:post@kasparhauge.no"
                className="font-mono text-[11px] uppercase tracking-[0.18em] border border-paper/30 text-paper px-6 py-3.5 rounded-full hover:border-paper transition-colors"
              >
                post@kasparhauge.no
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <CompassRose className="w-44 h-44 text-paper/70" />
          </div>
        </div>
      </section>
    </>
  );
}
