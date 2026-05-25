import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-rule mt-24">
      {/* Contact-on-every-page: editors don't navigate to /kontakt
          when they're already ready to call or email. */}
      <div className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <p className="smallcaps text-ink-mute">Kontakt direkte</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm">
            <a
              href="mailto:post@kasparknudsen.no"
              className="text-amber glow font-medium"
            >
              post@kasparknudsen.no
            </a>
            <a
              href="tel:+4790000000"
              className="text-ink-soft glow"
            >
              +47 900 00 000
            </a>
            <span className="text-ink-mute hidden md:inline">
              USF Verftet, Bergen
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
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
                href="mailto:post@kasparknudsen.no"
                className="glow text-ink-soft"
              >
                post@kasparknudsen.no
              </a>
            </li>
          </ul>
        </div>
        <div className="font-sans text-sm">
          {/* TODO: bytt URL-ene under til Kaspars faktiske profiler. */}
          <p className="smallcaps text-ink-mute mb-3">På nett</p>
          <ul className="space-y-1.5">
            <li>
              <a
                href="https://www.linkedin.com/in/kaspar-knudsen/"
                target="_blank"
                rel="noopener noreferrer"
                className="glow text-ink-soft"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/kasparknudsen"
                target="_blank"
                rel="noopener noreferrer"
                className="glow text-ink-soft"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/kasparknudsen"
                target="_blank"
                rel="noopener noreferrer"
                className="glow text-ink-soft"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
          <span>© {new Date().getFullYear()} Kaspar Knudsen</span>
          <span>Org.nr 999 999 999</span>
          <span className="text-sm normal-case tracking-normal font-sans text-ink-soft md:text-right">
            Lagd av{" "}
            <a
              href="https://www.naermedia.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber font-semibold glow hover:brightness-110"
            >
              Nær Media
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
