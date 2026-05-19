"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TransitionLink } from "./TransitionLink";
import { useCommandPalette } from "./CommandPalette";

const NAV = [
  { href: "/", label: "Forside" },
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
];

export function TopNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { open } = useCommandPalette();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="sticky top-0 z-40 w-full transition-[background,backdrop-filter,border-color] duration-200"
      style={{
        backgroundColor: scrolled ? "var(--surface-blur)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-14 max-w-[1240px] items-center gap-6 px-5 sm:px-8">
        <TransitionLink
          href="/"
          className="focus-ring -ml-1 rounded-[2px] px-1 py-0.5 font-mono text-[12px] uppercase leading-none tracking-[0.16em] text-ink"
          aria-label="Forside"
        >
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 -translate-y-[0.5px] bg-ink"
            />
            KK
          </span>
        </TransitionLink>

        <nav className="hidden flex-1 items-center gap-1 sm:flex">
          {NAV.slice(1).map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                data-active={active}
                className="focus-ring relative rounded-[2px] px-3 py-1.5 text-[13px] text-ink/70 transition-colors duration-150 hover:text-ink data-[active=true]:text-ink"
              >
                <span className="relative">
                  {item.label}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100 data-[active=true]:scale-x-100"
                    data-active={active}
                  />
                </span>
              </TransitionLink>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={open}
            className="focus-ring group inline-flex h-8 items-center gap-2 border border-hairline bg-paper/60 px-2.5 text-[12px] text-ink/70 transition-colors duration-150 hover:border-hairline-strong hover:text-ink"
            aria-label="Åpne kommandopalett"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <circle
                cx="5.25"
                cy="5.25"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M10.5 10.5L8 8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="hidden sm:inline">Søk</span>
            <kbd className="font-mono ml-1 hidden h-5 items-center justify-center border border-hairline px-1.5 text-[10px] tabular text-ink/60 sm:inline-flex">
              ⌘K
            </kbd>
          </button>

          <TransitionLink
            href="/kontakt"
            className="focus-ring relative inline-flex h-8 items-center bg-ink px-3 text-[12px] font-medium tracking-wide text-paper transition-transform duration-150 hover:scale-[1.02]"
          >
            Ta kontakt
            <span
              aria-hidden
              className="ml-2 inline-block h-1 w-1 translate-y-[0.5px] bg-paper"
            />
          </TransitionLink>
        </div>
      </div>
    </header>
  );
}
