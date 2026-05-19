import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-24">
      <div className="notebook-shell">
        <div className="border-t border-ink/30 border-dashed pt-8 pb-12 grid gap-8 md:grid-cols-3">
          <div>
            <span className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Om Kaspar
            </span>
            <p className="typewriter text-sm text-ink mt-2">
              Frilansjournalist med kontor på USF Verftet, Nordnes i Bergen.
            </p>
          </div>

          <div>
            <span className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Adresse
            </span>
            <ul className="mt-2 space-y-1 text-sm">
              <li>USF Verftet</li>
              <li>Nordnes, Bergen</li>
            </ul>
          </div>

          <div>
            <span className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
              Sider
            </span>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/saker" className="pencil-link">
                  Saker
                </Link>
              </li>
              <li>
                <Link href="/om" className="pencil-link">
                  Om Kaspar
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="pencil-link">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dotted border-ink/25 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="typewriter text-[0.7rem] tracking-[0.18em] text-ink-fade uppercase">
            © {year} Kaspar Knudsen
          </p>
          <p className="handwritten-red text-base max-w-2xl md:text-right">
            «Jeg drar ut i felt for å se stedene og møte menneskene jeg skriver om – det er det som gjør journalistikken nærmere.»
          </p>
        </div>
        <p className="pb-4 text-center typewriter text-[0.7rem] tracking-[0.18em] text-ink-fade uppercase">
          Lagd av{" "}
          <a
            href="https://www.naermedia.no/"
            target="_blank"
            rel="noopener noreferrer"
            className="pencil-link"
          >
            Nær Media
          </a>
        </p>
      </div>
    </footer>
  );
}
