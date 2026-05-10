import Link from "next/link";
import { CompassMark } from "./CompassMark";

const nav = [
  { href: "/", label: "Felt" },
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line/60 bg-paper/80 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <CompassMark className="w-8 h-8 text-deep group-hover:text-accent transition-colors" />
          <div className="leading-tight">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-deep/60">
              60°23′N · 05°19′Ø
            </div>
            <div className="font-semibold text-[15px] tracking-tight text-ink">
              Kaspar Knudsen
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-2 rounded-full text-deep/80 hover:text-accent hover:bg-sand/60 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
