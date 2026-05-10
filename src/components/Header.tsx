import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/", label: "Forside" },
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/85 border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-baseline gap-3 group"
          aria-label="Kaspar Knudsen — forside"
        >
          <span className="font-serif text-xl tracking-tight group-hover:text-amber transition-colors">
            Kaspar Knudsen
          </span>
          <span className="hidden sm:inline smallcaps text-ink-mute">
            Frilansjournalist · Bergen
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-3">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-sans text-sm text-ink-soft hover:text-amber transition-colors px-2 py-1"
            >
              {n.label}
            </Link>
          ))}
          <span className="hidden sm:inline-block w-px h-5 bg-rule mx-2" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
