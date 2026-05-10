"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "motion/react";

const links = [
  { href: "/saker", label: "Saker" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 120], [4, 14]);
  const bg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(250, 246, 240, 0.55)", "rgba(250, 246, 240, 0.78)"],
  );
  const border = useTransform(
    scrollY,
    [0, 120],
    ["rgba(230, 220, 203, 0)", "rgba(230, 220, 203, 0.7)"],
  );
  const backdropFilter = useTransform(blur, (v) => `blur(${v}px) saturate(1.1)`);

  return (
    <motion.header
      style={{
        backgroundColor: bg,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        borderBottomColor: border,
      }}
      className="sticky top-0 z-40 border-b border-transparent"
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-[1.05rem] font-medium tracking-tight text-ink"
          aria-label="Kaspar Knudsen — forside"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-coral-300 to-apricot-200 text-ink shadow-soft">
            <span className="font-display text-[0.78rem] font-semibold leading-none">
              KK
            </span>
          </span>
          <span className="hidden sm:inline">Kaspar Knudsen</span>
        </Link>

        <nav aria-label="Hovednavigasjon" className="flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-paper-2 ring-1 ring-line"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
