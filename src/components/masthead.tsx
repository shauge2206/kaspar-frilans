"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Forside" },
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
];

const EDITION = {
  city: "BERGEN",
  location: "USF VERFTET · NORDNES",
  role: "FRILANSJOURNALIST",
};

export function Masthead() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-40 bg-paper/95 backdrop-blur-sm",
        "transition-[padding,box-shadow] duration-500 ease-out",
        scrolled
          ? "py-2 shadow-[0_1px_0_0_var(--rule-soft)]"
          : "py-5 shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
        {/* top edition strip */}
        <div
          className={[
            "grid grid-cols-3 items-center text-ink-mute transition-all duration-500",
            scrolled
              ? "h-0 -mb-2 opacity-0 overflow-hidden"
              : "h-auto mb-3 opacity-100",
          ].join(" ")}
        >
          <div className="dateline justify-self-start">
            {EDITION.city} · {EDITION.location}
          </div>
          <div className="dateline justify-self-center hidden md:block">
            FRILANSJOURNALIST · KVALITETSJOURNALISTIKK
          </div>
          <div className="dateline justify-self-end tabular">
            {EDITION.role}
          </div>
        </div>

        <div className="rule-thick mb-3" />

        {/* wordmark + nav */}
        <div className="grid grid-cols-[auto_1fr_auto] items-end gap-6">
          <Link
            href="/"
            aria-label="Til forsiden"
            className="block leading-none"
          >
            <span
              className={[
                "font-serif font-black tracking-[-0.04em] text-ink",
                "transition-[font-size,letter-spacing] duration-500 ease-out",
                scrolled
                  ? "text-[2.2rem] md:text-[2.4rem]"
                  : "text-[3.2rem] md:text-[5.2rem]",
              ].join(" ")}
            >
              KASPAR
            </span>
          </Link>

          <div className="hidden md:block self-end pb-2">
            <div
              className={[
                "dateline transition-opacity duration-500",
                scrolled ? "opacity-0" : "opacity-100",
              ].join(" ")}
            >
              <span className="text-ink">«</span>
              kvalitetsjournalistikk · fra felt · menneskenære historier
              <span className="text-ink">»</span>
            </div>
          </div>

          {/* desktop nav */}
          <nav
            aria-label="Hovednavigasjon"
            className="hidden md:flex items-center gap-7 self-end pb-2"
          >
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "smallcaps link-editorial",
                    active ? "text-accent" : "text-ink",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* mobile burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden self-end pb-2 smallcaps text-ink"
          >
            {open ? "Lukk" : "Meny"}
          </button>
        </div>

        <div className="rule-thin mt-3" />
      </div>

      {/* mobile nav drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Hovednavigasjon mobil"
          className="md:hidden border-t border-rule-soft bg-paper"
        >
          <ul className="mx-auto max-w-[1280px] px-5 py-4 flex flex-col">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="border-b border-rule-soft last:border-b-0">
                  <Link
                    href={item.href}
                    className={[
                      "block py-4 font-serif text-2xl",
                      active ? "text-accent" : "text-ink",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
