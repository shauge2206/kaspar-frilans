"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 py-4 md:py-5">
        <Link
          href="/"
          aria-label="Til forsiden"
          className="group flex items-center gap-3"
        >
          <span
            aria-hidden
            className="block h-2 w-2 rotate-45 bg-amber transition-transform duration-500 group-hover:rotate-[225deg]"
          />
          <span className="font-display text-lg md:text-xl tracking-tight">
            Kaspar Knudsen
          </span>
        </Link>

        <nav aria-label="Hovedmeny" className="flex items-center gap-7 md:gap-10">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`smallcaps text-[0.78rem] transition-colors duration-300 ${
                  active ? "text-amber" : "text-fg hover:text-amber-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
