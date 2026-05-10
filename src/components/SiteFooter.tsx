import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-paper mt-20">
      <div className="border-b-2 border-paper">
        <div className="px-4 sm:px-6 lg:px-10 py-4 flex flex-wrap items-center justify-between gap-3 mono text-[10px] uppercase tracking-[0.25em]">
          <span>KOLOFON</span>
          <span className="text-red">UTGAVE 01 / 2026</span>
          <span>NR. 247</span>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
            ANSVARLIG REDAKTØR
          </div>
          <div className="display text-5xl md:text-6xl leading-[0.85]">
            KASPAR
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Frilansjournalist med 15 år i Bergens-pressen. Master i undersøkende
            journalistikk. Driver enkeltpersonforetak fra USF Verftet.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
            KONTAKT
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:kaspar@frilans.no"
                className="underline underline-offset-4 decoration-2 hover:text-red"
              >
                kaspar@frilans.no
              </a>
            </li>
            <li className="mono text-xs uppercase tracking-[0.18em]">
              +47 000 00 000
            </li>
            <li className="text-sm leading-tight pt-2">
              USF Verftet
              <br />
              Georgernes Verft 12
              <br />
              5011 Bergen
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
            SEKSJONER
          </div>
          <ul className="space-y-2 mono text-xs uppercase tracking-[0.18em]">
            <li><Link href="/saker" className="hover:text-red">Saker</Link></li>
            <li><Link href="/om" className="hover:text-red">Om Kaspar</Link></li>
            <li><Link href="/kontakt" className="hover:text-red">Kontakt</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
            FAG
          </div>
          <ul className="space-y-2 mono text-xs uppercase tracking-[0.18em]">
            <li>Fiskeri</li>
            <li>Arbeidsliv</li>
            <li>Krim</li>
            <li>Kystindustri</li>
            <li>Reportasje</li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-paper">
        <div className="px-4 sm:px-6 lg:px-10 py-4 flex flex-wrap items-center justify-between gap-3 mono text-[10px] uppercase tracking-[0.25em]">
          <span>© KASPAR FRILANS · ENKELTPERSONFORETAK · BERGEN</span>
          <span className="text-red">◆ TRYKKES PÅ NETT ◆</span>
        </div>
      </div>
    </footer>
  );
}
