import Image from "next/image";
import Link from "next/link";
import { saker } from "@/lib/saker";
import {
  ArrowDoodle,
  Paperclip,
  PushPin,
  StarDoodle,
} from "@/components/Decor";

export const metadata = {
  title: "Saker — Kaspar Knudsen",
  description:
    "Utvalgte saker av frilansjournalist Kaspar Knudsen. Publisert i Fiskeribladet, Intrafish, Kystens Næringsliv og Bergens Tidende.",
};

export default function SakerPage() {
  return (
    <div className="notebook-shell pt-4 pb-20">
      {/* Heading — corkboard intro */}
      <section className="grid grid-cols-12 gap-x-6 lg:gap-x-10 pt-8">
        <aside className="col-span-12 md:col-span-3">
          <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
            Saker
          </p>
          <p className="handwritten-red text-2xl mt-1 leading-tight">
            Utvalgte
            <br />
            publikasjoner
          </p>
          <ArrowDoodle
            className="w-24 mt-2 hidden md:block"
            style={{ transform: "rotate(-12deg)" }}
          />
        </aside>

        <div className="col-span-12 md:col-span-9">
          <p className="typewriter text-[0.72rem] tracking-[0.22em] text-ink-fade uppercase">
            Publikasjoner
          </p>
          <h1 className="headline-hand text-5xl md:text-7xl mt-2 leading-[0.95]">
            Saker
            <br />
            <span className="relative inline-block">
              fra Kaspar
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Et utvalg saker publisert i Fiskeribladet, Intrafish, Kystens
            Næringsliv og Bergens Tidende.
          </p>
        </div>
      </section>

      {/* Corkboard */}
      <section className="mt-16 relative">
        {/* String spanning the board */}
        <div
          aria-hidden="true"
          className="absolute hidden md:block string-line"
          style={{
            left: "8%",
            top: "-12px",
            width: "84%",
            transform: "rotate(-0.6deg)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute hidden lg:block string-line"
          style={{
            left: "12%",
            top: "55%",
            width: "76%",
            transform: "rotate(1.8deg)",
            opacity: 0.6,
          }}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {saker.map((sak, i) => (
            <li
              key={sak.slug}
              className="relative"
              style={{ transform: `rotate(${sak.tilt}deg)` }}
            >
              <Link
                href={`/saker/${sak.slug}`}
                className="polaroid block"
                style={{ transform: "rotate(0deg)" }}
              >
                <PushPin
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 z-10 drop-shadow"
                  color={i % 2 === 0 ? "#b53826" : "#233a6b"}
                />

                {i === 1 ? (
                  <Paperclip
                    className="absolute -top-6 -right-2 w-6 h-16 z-10 drop-shadow"
                    style={{ transform: "rotate(14deg)" }}
                  />
                ) : null}

                <div className="relative aspect-[4/5] overflow-hidden bg-ink/10">
                  <Image
                    src={sak.bilder[0].src}
                    alt={sak.bilder[0].alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 90vw"
                    className="object-cover sepia-photo"
                    priority={i < 2}
                  />
                </div>

                <div className="mt-3 px-1">
                  <p className="typewriter text-[0.66rem] tracking-[0.18em] text-ink-fade uppercase">
                    {sak.publikasjon} · {sak.dato}
                  </p>
                  <p className="handwritten text-pen-blue text-xl leading-tight mt-1">
                    {sak.tittel}
                  </p>
                  <p className="typewriter text-[0.7rem] text-ink-fade mt-2">
                    {sak.sted.toUpperCase()}
                  </p>
                </div>

                <div className="fold-corner" aria-hidden="true" />
              </Link>

              {i === 0 ? (
                <StarDoodle
                  aria-hidden="true"
                  className="absolute -top-8 right-2 w-8 h-8 hidden md:block"
                />
              ) : null}
            </li>
          ))}

          {/* Note card slot */}
          <li
            className="relative paper-card p-6 hidden md:flex flex-col justify-between"
            style={{ transform: "rotate(2.2deg)" }}
          >
            <span
              className="absolute -top-3 left-8 tape washi-red h-6 w-24"
              style={{ transform: "rotate(-4deg)" }}
            />
            <div>
              <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
                Publikasjoner
              </p>
              <p className="handwritten-red text-3xl mt-3 leading-tight">
                Fiskeribladet
                <br />
                Intrafish
                <br />
                Kystens Næringsliv
              </p>
              <p className="text-ink-soft mt-3">
                Kvalitetsjournalistikk levert til nisjepublikasjoner.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/kontakt"
                className="pencil-link typewriter text-sm tracking-[0.16em] uppercase"
              >
                Kontakt →
              </Link>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
