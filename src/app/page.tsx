import Image from "next/image";
import Link from "next/link";
import { saker } from "@/lib/saker";
import { SakCard } from "@/components/sak-card";
import {
  WaveBackdrop,
  CompassMark,
  WindArrow,
  HorizonLine,
  SectionMarker,
  Buoy,
} from "@/components/nautical";
import { Dateline } from "@/components/dateline";

export default function HomePage() {
  const featured = saker[0];
  const rest = saker.slice(1);

  return (
    <>
      {/* HERO ----------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-deep text-paper">
        <div className="absolute inset-0 -z-10">
          <Image
            src={featured.bilder[0].src}
            alt=""
            fill
            sizes="100vw"
            priority
            aria-hidden
            className="object-cover opacity-70"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-deep/55 via-deep/45 to-deep/85"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-soft-light opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 60% 30% at 30% 30%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(ellipse 50% 30% at 80% 60%, rgba(216,201,168,0.25), transparent 60%)",
            }}
          />
          <WaveBackdrop className="absolute inset-x-0 bottom-0 h-72 w-[105%] -ml-[2%] text-paper animate-drift" />
          <WaveBackdrop className="absolute inset-x-0 bottom-0 h-60 w-[110%] -ml-[5%] text-fog animate-drift-slower" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-[88rem] flex-col px-6 pt-32 pb-28 lg:px-12">
          <div className="flex items-center gap-4 text-sand">
            <CompassMark className="w-6 h-6" />
            <span className="smallcaps text-[0.75rem]">
              kaspar knudsen — frilansjournalist
            </span>
            <span className="hidden md:inline-block h-px w-32 bg-sand/50" />
            <span className="hidden md:inline-block text-[0.7rem] tracking-meta opacity-70">
              utg. № VII · våren 2026
            </span>
          </div>

          <h1 className="mt-12 max-w-5xl font-display text-[clamp(2.7rem,7vw,6rem)] leading-[0.95] tracking-tight text-balance">
            <span className="block italic font-light text-sand/95">
              Historier
            </span>
            <span className="block">fra felt — der</span>
            <span className="block">tåka løfter seg.</span>
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <p className="lg:col-span-5 max-w-md text-paper/85 text-pretty leading-relaxed">
              Bergensbasert journalist med 15 år i bransjen og mastergrad i
              gravejournalistikk. Jeg drar ut til stedene jeg skriver om, møter
              menneskene som bærer historiene, og kommer hjem med både tekst og
              bilder.
            </p>
            <div className="lg:col-span-4 lg:col-start-9 self-end">
              <Dateline
                sted="Bergen"
                koordinat="60.39°N"
                dato="USF Verftet · Nordnes"
                className="text-sand"
              />
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/saker"
                  className="group inline-flex items-center gap-3 bg-sand px-6 py-3 text-[0.78rem] tracking-meta text-deep transition-colors hover:bg-paper"
                >
                  Les utvalgte saker
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/kontakt"
                  className="link-grow text-[0.78rem] tracking-meta text-paper/80"
                >
                  Ta kontakt for oppdrag
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* horizon transition */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <HorizonLine className="text-paper/70" />
        </div>
      </section>

      {/* INTRO STRIP ---------------------------------------------------- */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="-mt-px border-b border-deep/10 py-6 grid grid-cols-2 md:grid-cols-4 gap-y-4 text-[0.72rem] tracking-meta text-deep">
            <div className="flex items-center gap-3">
              <Buoy className="w-3 h-5 text-driftwood" />
              <span>15 år i media</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-driftwood">↟</span>
              <span>Mastergrad i graving</span>
            </div>
            <div className="flex items-center gap-3">
              <WindArrow className="w-9 h-3 text-driftwood" />
              <span>Tekst &amp; foto</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-driftwood">◇</span>
              <span>Fra felt</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFEST ------------------------------------------------------- */}
      <section className="relative">
        <div className="mx-auto max-w-[88rem] px-6 py-32 lg:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-3">
              <SectionMarker label="Manifest · I" />
              <p className="mt-6 smallcaps text-[0.75rem] text-ink-muted">
                hva jeg gjør
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9 lg:col-start-4">
              <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] tracking-tight text-deep text-balance">
                <span className="italic font-light text-driftwood">Kvalitet</span>{" "}
                framfor mengde. Et menneske
                <br className="hidden md:block" /> framfor en overskrift.{" "}
                <span className="italic font-light text-driftwood">Stedet</span>{" "}
                framfor pulten.
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3 text-pretty">
                <Pillar
                  title="Fra felt"
                  body="Jeg drar ut til havnene, til verftene, til de små samfunnene langs kysten. Kvalitetsjournalistikk skjer i møtet, ikke i innboksen."
                />
                <Pillar
                  title="Kritisk graving"
                  body="Mastergrad i undersøkende journalistikk. Praktisk erfaring med kritisk graving innenfor arbeidsliv, krim, fiskeri og kystindustri."
                />
                <Pillar
                  title="Tekst &amp; bilde"
                  body="Jeg leverer ferdige pakker — reportasje, intervju, foto. Ett bestillingssted, en stemme, og bilder som hører til teksten."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[88rem] px-6 lg:px-12">
          <HorizonLine className="text-deep/40" />
        </div>
      </section>

      {/* FEATURED SAKER ------------------------------------------------- */}
      <section className="relative bg-paper-warm/40">
        <div className="mx-auto max-w-[88rem] px-6 py-28 lg:px-12">
          <div className="mb-16 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-7">
              <SectionMarker label="Manifest · II" className="mb-6" />
              <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1] tracking-tight text-deep text-balance">
                Utvalgte saker —
                <br />
                <span className="italic font-light text-deep/70">
                  langs kystens lange linje.
                </span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3 text-pretty">
              <p className="text-ink/80 leading-relaxed">
                Et utvalg av sakene jeg har levert til norske redaksjoner —
                gravesaker, øyeblikksbilder og reportasjer. Klikk for å lese hele
                historien.
              </p>
              <Link
                href="/saker"
                className="mt-6 inline-flex link-grow text-[0.78rem] tracking-meta text-deep"
              >
                Se hele arkivet →
              </Link>
            </div>
          </div>

          <div className="space-y-28">
            <SakCard sak={featured} index={0} />
            {rest.map((sak, i) => (
              <SakCard key={sak.slug} sak={sak} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA ---------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-deep text-paper">
        <WaveBackdrop className="absolute inset-x-0 -bottom-2 h-56 text-paper/70" />
        <div className="mx-auto grid max-w-[88rem] grid-cols-12 gap-6 px-6 py-28 lg:px-12">
          <div className="col-span-12 lg:col-span-7">
            <SectionMarker label="Avgang" className="mb-6 text-sand" />
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-[1] tracking-tight text-balance">
              Har du en sak —
              <br />
              <span className="italic font-light text-sand">
                eller en mistanke om en?
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-paper/80 text-pretty leading-relaxed">
              Jeg tar imot tips, oppdrag og henvendelser fra redaksjoner. Skriv
              til meg på e-post, eller stikk innom kontoret på USF Verftet på
              Nordnes — kaffen er på.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="mailto:kontakt@kasparknudsen.no"
                className="inline-flex items-center gap-3 bg-sand px-6 py-3 text-[0.78rem] tracking-meta text-deep transition-colors hover:bg-paper"
              >
                Skriv til Kaspar →
              </a>
              <Link
                href="/kontakt"
                className="link-grow text-[0.78rem] tracking-meta text-paper/80"
              >
                Mer om kontakt &amp; honorar
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-paper/20 lg:pl-10">
            <div className="smallcaps text-[0.7rem] text-sand">Kontor</div>
            <p className="mt-3 font-display text-2xl leading-snug">
              USF Verftet
              <br />
              Georgernes Verft 12
              <br />
              5011 Bergen
            </p>
            <ul className="mt-8 space-y-3 text-[0.78rem] tracking-meta text-paper/80">
              <li className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-paper/40" />
                <a
                  href="mailto:kontakt@kasparknudsen.no"
                  className="link-grow"
                >
                  kontakt@kasparknudsen.no
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-paper/40" />
                <a href="tel:+4791234567" className="link-grow">
                  +47 912 34 567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-display text-3xl text-driftwood">·</span>
        <h3 className="font-display text-xl tracking-tight text-deep">
          {title.replace("&amp;", "&")}
        </h3>
      </div>
      <p className="mt-3 text-ink/80 leading-relaxed">{body}</p>
    </div>
  );
}
