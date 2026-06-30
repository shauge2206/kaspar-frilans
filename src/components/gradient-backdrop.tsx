"use client";

import { usePathname } from "next/navigation";

export function GradientBackdrop() {
  const pathname = usePathname();
  if (pathname?.startsWith("/bakgrunn")) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden paper-grain"
    >
      <div className="screen-bg absolute inset-0" />
      <div className="blob-a" />
      <div className="blob-b" />
      <div className="blob-c" />
      <div className="backdrop-vignette absolute inset-0 bg-gradient-to-b from-paper/0 via-paper/20 to-paper/80" />
    </div>
  );
}
