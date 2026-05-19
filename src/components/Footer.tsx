import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-rule mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl leading-snug">
            Kaspar Knudsen
            <span className="block text-ink-mute text-base mt-1 italic">
              Frilansjournalist · Bergen
            </span>
          </p>
        </div>
        <div className="font-sans text-sm">
          <p className="smallcaps text-ink-mute mb-3">Kontor</p>
          <p className="text-ink-soft leading-relaxed">
            USF Verftet
            <br />
            Georgernes Verft 12
            <br />
            5011 Bergen
          </p>
        </div>
        <div className="font-sans text-sm">
          <p className="smallcaps text-ink-mute mb-3">Naviger</p>
          <ul className="space-y-1.5">
            <li>
              <Link href="/saker" className="glow text-ink-soft">
                Saker
              </Link>
            </li>
            <li>
              <Link href="/om" className="glow text-ink-soft">
                Om Kaspar
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="glow text-ink-soft">
                Kontakt
              </Link>
            </li>
            <li>
              <a
                href="mailto:kaspar@knudsen.no"
                className="glow text-ink-soft"
              >
                kaspar@knudsen.no
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center">
          <p className="font-serif text-lg md:text-xl text-ink-soft">
            Lagd av{" "}
            <a
              href="https://www.naermedia.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber font-semibold glow hover:brightness-110"
            >
              Nær Media
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
          <span>© {new Date().getFullYear()} Kaspar Knudsen</span>
          <span>Org.nr 999 999 999</span>
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--amber)" }}
            />
            Sist oppdatert mai 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
