"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Forside" },
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om Kaspar" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative z-20">
      <div className="notebook-shell pt-6 pb-4">
        <div className="flex items-start justify-between gap-6 border-b border-dashed border-ink/25 pb-4">
          <Link
            href="/"
            className="group flex flex-col leading-none"
            aria-label="Til forsiden"
          >
            <span className="typewriter text-[0.68rem] tracking-[0.32em] text-ink-fade uppercase">
              Felt&shy;bok&nbsp;·&nbsp;Bergen
            </span>
            <span className="headline-hand text-3xl md:text-4xl mt-1">
              Kaspar&nbsp;Knudsen
            </span>
            <span className="handwritten-red text-[0.95rem] -mt-1 ml-0.5">
              frilansjournalist
            </span>
          </Link>

          <nav aria-label="Hovednavigasjon" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav-link"
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex flex-col items-end pt-1">
            <span className="typewriter text-[0.68rem] tracking-[0.22em] text-ink-fade">
              FELTNOTAT NR. 047
            </span>
            <span className="handwritten text-pen-blue text-base">
              USF Verftet, Nordnes
            </span>
          </div>
        </div>

        {/* Mobile nav */}
        <nav aria-label="Mobilnavigasjon" className="md:hidden mt-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
