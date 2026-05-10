import Image from "next/image";
import Link from "next/link";
import { saker } from "@/lib/saker";

export default function Home() {
  const lead = saker[0];
  const second = saker[1];
  const third = saker[2];

  return (
    <div className="bg-paper">
      {/* HERO MASTHEAD ============================================== */}
      <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-10 border-b-[6px] border-ink relative">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 items-end">
          <div className="col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-[0.25em] leading-relaxed">
            <div className="rule-x-thin pt-2">
              <div className="font-bold">DATELINE</div>
              <div>BERGEN —</div>
              <div>NORDNES</div>
              <div>BREDSGÅRDEN</div>
            </div>
            <div className="rule-x-thin pt-2 mt-3">
              <div className="font-bold">VÆR</div>
              <div>3°C · REGN</div>
              <div>VIND SV 8 m/s</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="mono text-[11px] uppercase tracking-[0.3em] mb-3 flex items-center gap-3">
              <span className="bg-red text-paper px-2 py-1">FORSIDE</span>
              <span>NR. 247 · {new Date().toLocaleDateString("nb-NO", { day: "2-digit", month: "long", year: "numeric" }).toUpperCase()}</span>
            </div>
            <h2 className="display text-[clamp(3.2rem,11.5vw,11rem)] leading-[0.78] tracking-[-0.035em] animate-stamp">
              SANNHET<br />
              <span className="text-red">UTEN</span><br />
              FILTER<span className="text-red">.</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-[0.25em] leading-relaxed text-right md:text-left">
            <div className="rule-x-thin pt-2">
              <div className="font-bold">PRIS</div>
              <div>GRATIS</div>
              <div>KR 0,-</div>
            </div>
            <div className="rule-x-thin pt-2 mt-3">
              <div className="font-bold">SIDER</div>
              <div>04 SEKSJONER</div>
              <div>03 SAKER</div>
            </div>
          </div>
        </div>

        <div className="rule-x-thin mt-8" />

        <div className="grid grid-cols-12 gap-6 pt-6">
          <p className="col-span-12 md:col-span-7 text-lg md:text-xl leading-snug max-w-3xl">
            Jeg er <strong>Kaspar</strong> — frilansjournalist i Bergen med 15
            år i bransjen og master i undersøkende journalistikk. Jeg drar ut
            <em> i felt</em>, ser stedene, møter menneskene. Saker om
            arbeidsliv, krim, fiskeri og kystindustri — for redaksjoner som tør
            å bruke tid på sannheten.
          </p>
          <div className="col-span-12 md:col-span-5 flex items-end justify-end gap-3 flex-wrap">
            <Link
              href="/saker"
              className="hover-jitter mono text-xs uppercase tracking-[0.2em] bg-ink text-paper px-5 py-3 border-4 border-ink hover:bg-red hover:border-red"
            >
              ↳ Les sakene
            </Link>
            <Link
              href="/kontakt"
              className="hover-jitter mono text-xs uppercase tracking-[0.2em] bg-paper text-ink px-5 py-3 border-4 border-ink hover:bg-red hover:text-paper hover:border-red"
            >
              ↳ Ta kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD STORY ================================================ */}
      <section className="px-4 sm:px-6 lg:px-10 py-10 border-b-[6px] border-ink">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <div className="flex items-center gap-3">
            <span className="bg-ink text-paper px-2 py-1">HOVEDSAK</span>
            <span>FORSIDE · 01</span>
          </div>
          <span className="text-red">◆ {lead.publikasjon.toUpperCase()} ◆</span>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-8">
            <Link href={`/saker/${lead.slug}`} className="group block">
              <div className="mono text-[11px] uppercase tracking-[0.25em] flex items-center gap-3 mb-3">
                <span className="font-bold">{lead.kategori.toUpperCase()}</span>
                <span>·</span>
                <span>{lead.sted.toUpperCase()}</span>
                <span>·</span>
                <span>{lead.dato}</span>
              </div>
              <h3 className="display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[0.86] tracking-[-0.025em] group-hover:text-red">
                {lead.overskrift}
              </h3>
              <div className="rule-x-thin mt-6 mb-4" />
              <p className="dropcap text-base md:text-lg leading-relaxed news-columns-2 max-w-none">
                {lead.artikkel.slice(0, 3).join(" ")}
              </p>
              <div className="mt-6 mono text-xs uppercase tracking-[0.22em] inline-flex items-center gap-2 border-b-2 border-ink pb-1 group-hover:text-red group-hover:border-red">
                FORTSETT Å LESE →
              </div>
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Link href={`/saker/${lead.slug}`} className="block group">
              <div className="relative aspect-[3/4] border-4 border-ink overflow-hidden bg-ink">
                <Image
                  src={lead.bilder[0].src}
                  alt={lead.bilder[0].alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-none"
                />
                <div className="absolute top-3 left-3 bg-red text-paper mono text-[10px] tracking-[0.25em] px-2 py-1">
                  FOTO · {lead.fotograf.toUpperCase()}
                </div>
                <div className="absolute bottom-3 right-3 stamp mono text-[10px] bg-paper">
                  EKSKLUSIV
                </div>
              </div>
              <p className="mono text-[11px] uppercase tracking-[0.18em] leading-relaxed mt-3 max-w-md">
                {lead.bildetekst}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECONDARY GRID ============================================ */}
      <section className="px-4 sm:px-6 lg:px-10 py-10 border-b-[6px] border-ink">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <div className="flex items-center gap-3">
            <span className="bg-ink text-paper px-2 py-1">SIDESAKER</span>
            <span>FORSIDE · 02–03</span>
          </div>
          <span>FRA FELT</span>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <Link
            href={`/saker/${second.slug}`}
            className="col-span-12 md:col-span-7 group block"
          >
            <div className="relative aspect-[16/10] border-4 border-ink overflow-hidden bg-ink mb-4">
              <Image
                src={second.bilder[0].src}
                alt={second.bilder[0].alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
              />
              <div className="absolute top-3 left-3 bg-paper text-ink mono text-[10px] tracking-[0.25em] px-2 py-1 border-2 border-ink">
                NR. 02
              </div>
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.25em] flex items-center gap-3 mb-2">
              <span className="font-bold text-red">{second.kategori.toUpperCase()}</span>
              <span>·</span>
              <span>{second.publikasjon.toUpperCase()}</span>
              <span>·</span>
              <span>{second.dato}</span>
            </div>
            <h4 className="display text-[clamp(1.8rem,4.5vw,3.4rem)] leading-[0.88] tracking-[-0.02em] group-hover:text-red">
              {second.overskrift}
            </h4>
            <p className="mt-3 text-base leading-snug max-w-2xl">{second.ingress}</p>
          </Link>

          <Link
            href={`/saker/${third.slug}`}
            className="col-span-12 md:col-span-5 group block md:border-l-2 md:border-ink md:pl-6"
          >
            <div className="relative aspect-[4/5] border-4 border-ink overflow-hidden bg-ink mb-4">
              <Image
                src={third.bilder[0].src}
                alt={third.bilder[0].alt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
              />
              <div className="absolute top-3 left-3 bg-paper text-ink mono text-[10px] tracking-[0.25em] px-2 py-1 border-2 border-ink">
                NR. 03
              </div>
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.25em] flex items-center gap-3 mb-2">
              <span className="font-bold text-red">{third.kategori.toUpperCase()}</span>
              <span>·</span>
              <span>{third.dato}</span>
            </div>
            <h4 className="display text-[clamp(1.6rem,3.5vw,2.7rem)] leading-[0.9] tracking-[-0.02em] group-hover:text-red">
              {third.overskrift}
            </h4>
            <p className="mt-3 text-base leading-snug">{third.ingress}</p>
          </Link>
        </div>
      </section>

      {/* OPINION / VERDIER ====================================== */}
      <section className="px-4 sm:px-6 lg:px-10 py-14 border-b-[6px] border-ink bg-ink text-paper">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-8">
          <span className="bg-red text-paper px-2 py-1">VERDIER</span>
          <span>SEKSJON · OPINION</span>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <h3 className="col-span-12 lg:col-span-7 display text-[clamp(2.5rem,7vw,6rem)] leading-[0.85]">
            «JEG LEVERER<br />
            <span className="text-red">KVALITETS</span>-<br />
            JOURNALISTIKK<br />
            FRA FELT.»
          </h3>
          <div className="col-span-12 lg:col-span-5 lg:border-l-2 lg:border-paper lg:pl-6 self-end">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mono text-xs uppercase tracking-[0.2em]">
              <li>◆ Likeverd</li>
              <li>◆ Empati</li>
              <li>◆ Ærlighet</li>
              <li>◆ Kritisk</li>
              <li>◆ Nysgjerrig</li>
              <li>◆ Åpen</li>
              <li>◆ Samfunns-engasjert</li>
              <li>◆ Holder ord</li>
            </ul>
            <Link
              href="/om"
              className="hover-jitter mono text-xs uppercase tracking-[0.2em] inline-block mt-6 border-b-2 border-paper pb-1 hover:text-red hover:border-red"
            >
              Les mer om Kaspar →
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION ========================================== */}
      <section className="px-4 sm:px-6 lg:px-10 py-14">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <span className="bg-ink text-paper px-2 py-1">ANNONSE / OPPDRAG</span>
          <span>SISTE SIDE</span>
        </div>
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <h3 className="display text-[clamp(2.2rem,6vw,5rem)] leading-[0.85]">
              HAR DU EN<br />
              <span className="text-red">SAK</span> SOM<br />
              MÅ FORTELLES?
            </h3>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-snug">
              Jeg tar inn frilansoppdrag fra redaksjoner, og selger inn ferdige
              ideer og påbegynte saker. Stykkpris eller periode — vi finner ut
              av det. Ta kontakt for en samtale.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <Link
              href="/kontakt"
              className="hover-jitter block mono text-sm uppercase tracking-[0.2em] bg-red text-paper px-5 py-4 border-4 border-ink text-center hover:bg-ink"
            >
              SEND OPPDRAG →
            </Link>
            <a
              href="mailto:kaspar@frilans.no"
              className="hover-jitter block mono text-xs uppercase tracking-[0.2em] bg-paper text-ink px-5 py-4 border-4 border-ink text-center hover:bg-ink hover:text-paper"
            >
              kaspar@frilans.no
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
