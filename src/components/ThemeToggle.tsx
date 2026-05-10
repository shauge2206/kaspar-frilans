"use client";
import { useSyncExternalStore } from "react";

function getTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  const t = document.documentElement.getAttribute("data-theme");
  return t === "light" ? "light" : "dark";
}

function subscribe(cb: () => void) {
  if (typeof document === "undefined") return () => {};
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => obs.disconnect();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Bytt til lys lesemodus" : "Bytt til mørk lesemodus"}
      className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute hover:text-ink transition-colors px-2 py-1 border border-rule rounded-full inline-flex items-center gap-2"
      title="Lesemodus"
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--amber)" }}
      />
      {theme === "dark" ? "Mørk" : "Lys"}
    </button>
  );
}
