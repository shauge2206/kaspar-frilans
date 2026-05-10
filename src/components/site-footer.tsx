import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/15 bg-paper-2 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
            ARKIVERT VED
          </p>
          <p className="mt-2 font-serif text-2xl italic">
            USF Verftet, Nordnes
          </p>
          <p className="mt-2 text-sm text-ink-soft max-w-md">
            Kaspar Knudsen driver enkeltpersonforetak som frilansjournalist i Bergen.
            Gravesaker, reportasjer og bilder fra felt — for fagpresse, dagspresse
            og tidsskrifter.
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
            ARKIV
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li><Link href="/saker" className="hover:text-stamp">Saksarkiv</Link></li>
            <li><Link href="/om" className="hover:text-stamp">Om journalisten</Link></li>
            <li><Link href="/kontakt" className="hover:text-stamp">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
            POSTKASSE
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li>
              <a href="mailto:kaspar@hauge.no" className="hover:text-stamp">
                kaspar@hauge.no
              </a>
            </li>
            <li className="font-mono text-xs text-ink-muted">+47 ▮▮▮ ▮▮ ▮▮▮</li>
            <li className="font-mono text-xs text-ink-muted">Org.nr. 932 ▮▮▮ ▮▮▮</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap gap-4 items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          <span>KH-ARKIV / DOSSIER v.1.0 / 2026</span>
          <span>SIDE STEMPLET: ARKIVERT</span>
        </div>
      </div>
    </footer>
  );
}
