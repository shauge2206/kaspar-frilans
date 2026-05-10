import Link from "next/link";

const nav = [
  { href: "/", label: "Forside" },
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-12 items-baseline gap-x-6 px-6 py-6 md:px-12 md:py-8">
        <div className="col-span-6 md:col-span-4">
          <Link
            href="/"
            className="inline-flex items-baseline gap-3 font-serif"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              NR. 00
            </span>
            <span className="text-base tracking-tight md:text-lg">
              Kaspar Knudsen
            </span>
          </Link>
        </div>
        <nav
          aria-label="Hovedmeny"
          className="col-span-6 flex justify-end gap-6 font-mono text-[11px] uppercase tracking-[0.18em] md:col-span-8 md:gap-10"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-rule text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
