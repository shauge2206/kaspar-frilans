import Link from "next/link";
import { CompassMark } from "./nautical";

const nav = [
  { href: "/", label: "Forside" },
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om Kaspar" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-deep/10 bg-paper/80 backdrop-blur supports-[backdrop-filter]:bg-paper/65">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-5 lg:px-12">
        <Link
          href="/"
          aria-label="Til forsiden"
          className="group flex items-center gap-3 text-deep"
        >
          <CompassMark className="w-7 h-7 transition-transform duration-700 group-hover:rotate-12" />
          <div className="leading-tight">
            <div className="font-display text-[1.05rem] tracking-tight">
              Kaspar Knudsen
            </div>
            <div className="smallcaps text-[0.66rem] text-ink-muted">
              frilansjournalist · bergen
            </div>
          </div>
        </Link>

        <nav aria-label="Hovednavigasjon" className="hidden md:block">
          <ul className="flex items-center gap-9 text-[0.78rem] tracking-meta text-deep">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-grow">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/kontakt"
          className="hidden md:inline-flex items-center gap-2 border border-deep/40 px-4 py-2 text-[0.72rem] tracking-meta text-deep transition-colors hover:bg-deep hover:text-paper"
        >
          <span>Ta kontakt</span>
          <span aria-hidden>→</span>
        </Link>

        <details className="md:hidden relative">
          <summary
            aria-label="Åpne meny"
            className="list-none cursor-pointer text-[0.72rem] tracking-meta text-deep border border-deep/40 px-3 py-2"
          >
            Meny
          </summary>
          <div className="absolute right-0 top-full mt-2 w-56 border border-deep/15 bg-paper shadow-xl">
            <ul className="flex flex-col text-[0.78rem] tracking-meta text-deep">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-deep/10 last:border-0">
                  <Link href={item.href} className="block px-4 py-3 hover:bg-fog-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}
