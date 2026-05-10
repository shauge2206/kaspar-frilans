import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-24">
      <div className="notebook-shell">
        <div className="border-t border-ink/30 border-dashed pt-8 pb-12 grid gap-8 md:grid-cols-3">
          <div>
            <span className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Bakerst i feltboka
            </span>
            <p className="handwritten text-pen-blue text-xl mt-2">
              «Det er menneskene som forteller — jeg holder bare blyanten.»
            </p>
            <p className="typewriter text-xs text-ink-fade mt-3">— K.H.</p>
          </div>

          <div>
            <span className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Kontorpost
            </span>
            <ul className="mt-2 space-y-1 text-sm">
              <li>USF Verftet, Georgernes Verft 12</li>
              <li>5011 Bergen, Nordnes</li>
              <li className="typewriter text-xs mt-2">
                kaspar@feltbok.no
              </li>
              <li className="typewriter text-xs">+47 99 88 77 66</li>
            </ul>
          </div>

          <div>
            <span className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Sider
            </span>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/saker" className="pencil-link">
                  Saker fra felt
                </Link>
              </li>
              <li>
                <Link href="/om" className="pencil-link">
                  Om Kaspar
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="pencil-link">
                  Kontakt og oppdrag
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dotted border-ink/25 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="typewriter text-[0.7rem] tracking-[0.18em] text-ink-fade uppercase">
            © {year} Kaspar Knudsen — Org.nr. 925&nbsp;437&nbsp;108
          </p>
          <p className="handwritten-red text-base">
            Skrevet for hånd, satt med blyant og blekk.
          </p>
        </div>
      </div>
    </footer>
  );
}
