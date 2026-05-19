import Link from "next/link";

const nav = [
  { href: "/", label: "FORSIDE" },
  { href: "/saker", label: "SAKSARKIV" },
  { href: "/om", label: "OM JOURNALISTEN" },
  { href: "/kontakt", label: "KONTAKT" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-ink/15 bg-paper/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
            KH-ARKIV / 2026
          </span>
          <span className="hidden sm:inline-block h-4 w-px bg-ink/30" />
          <span className="font-serif text-lg italic text-ink leading-none">
            Kaspar Knudsen
          </span>
          <span className="hidden md:inline-block uppercase-mono text-ink-muted">
            · Frilansjournalist · Bergen
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/80 px-3 py-2 hover:text-stamp transition-colors relative"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="md:hidden flex items-center gap-2">
          <Link
            href="/saker"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/80"
          >
            ARKIV
          </Link>
          <Link
            href="/kontakt"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-stamp"
          >
            KONTAKT
          </Link>
        </nav>
      </div>
    </header>
  );
}
