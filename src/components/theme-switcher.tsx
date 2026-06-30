"use client";

import { useEffect, useState } from "react";

// TEMPORARY theme switcher — remove before launch.
type Theme = {
  id: string;
  name: string;
  bg: string;
  accent: string;
  img?: string;
};

const THEMES: Theme[] = [
  { id: "default", name: "Lys", bg: "#faf6f0", accent: "#f25c2a" },
  { id: "sand", name: "Sand", bg: "#f3ede3", accent: "#f25c2a" },
  { id: "leire", name: "Leire", bg: "#ebe1d3", accent: "#f25c2a" },
  { id: "blekkvask", name: "Blekkvask", bg: "#f3eee6", accent: "#e8501f", img: "/backgrounds/blekkvask.png" },
  { id: "vintage", name: "Vintage", bg: "#f6efdc", accent: "#db4e1d", img: "/backgrounds/vintage.png" },
  { id: "lysglimt", name: "Lysglimt", bg: "#f5f1e9", accent: "#f25c2a", img: "/backgrounds/lysglimt.png" },
];

const STORAGE_KEY = "kk-theme";

export function ThemeSwitcher() {
  const [active, setActive] = useState<string>("default");

  useEffect(() => {
    const saved = document.documentElement.dataset.theme || "default";
    setActive(saved);
  }, []);

  function pick(id: string) {
    setActive(id);
    if (id === "default") {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = id;
    }
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {}
  }

  return (
    <div className="fixed left-1/2 top-3 z-[100] w-[95vw] max-w-[760px] -translate-x-1/2">
      <div className="flex flex-wrap items-center justify-center gap-1 rounded-[20px] border border-line/70 bg-paper/80 px-1.5 py-1.5 shadow-lift backdrop-blur-md">
        <span className="px-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mute">
          Tema
        </span>
        {THEMES.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => pick(t.id)}
              aria-pressed={isActive}
              title={t.name}
              className={`group flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 transition-colors ${
                isActive ? "bg-ink/10" : "hover:bg-ink/5"
              }`}
            >
              <span
                className="h-4 w-4 overflow-hidden rounded-full bg-cover bg-center ring-1 ring-black/10"
                style={{
                  background: t.img
                    ? undefined
                    : `radial-gradient(circle at 30% 30%, ${t.accent} 0 45%, ${t.bg} 47%)`,
                  backgroundImage: t.img ? `url("${t.img}")` : undefined,
                  outline: isActive ? `1.5px solid ${t.accent}` : "none",
                  outlineOffset: "1.5px",
                }}
              />
              <span
                className={`font-mono text-[0.62rem] uppercase tracking-[0.12em] ${
                  isActive ? "text-ink" : "text-mute"
                }`}
              >
                {t.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
