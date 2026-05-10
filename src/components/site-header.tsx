import Link from "next/link";

const nav = [
  { href: "/", label: "Forside" },
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12 py-3 flex items-baseline justify-between gap-6">
        <Link
          href="/"
          className="group flex items-baseline gap-3 leading-none"
        >
          <span className="font-display text-[1.7rem] tracking-tight">
            Kaspar Knudsen
          </span>
          <span className="hidden sm:inline smallcaps text-[0.72rem] text-ink-soft">
            Magasinet · Bergen
          </span>
        </Link>
        <nav className="flex items-baseline gap-5 sm:gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="smallcaps text-[0.78rem] hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
