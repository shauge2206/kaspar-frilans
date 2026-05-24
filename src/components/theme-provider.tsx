"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const THEMES = [
  "midnight",
  "linen",
  "marine",
  "sand",
  "forest",
  "dawn",
  "ember",
  "slate",
  "graphite",
] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_LABELS: Record<Theme, string> = {
  midnight: "Midnight",
  linen: "Linen",
  marine: "Marine",
  sand: "Sand",
  forest: "Forest",
  dawn: "Dawn",
  ember: "Ember",
  slate: "Slate",
  graphite: "Graphite",
};

const STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "midnight";

type ThemeCtx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  cycle: () => void;
};

const Ctx = createContext<ThemeCtx | null>(null);

function readInitial(): Theme {
  if (typeof document === "undefined") return DEFAULT_THEME;
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr && (THEMES as readonly string[]).includes(attr)) {
    return attr as Theme;
  }
  return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  // Sync state from the pre-paint script that already set <html data-theme>
  useEffect(() => {
    setThemeState(readInitial());
    // Allow transitions after the first paint
    const id = window.requestAnimationFrame(() => {
      document.documentElement.classList.remove("theme-booting");
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore storage failures */
    }
  }, []);

  const cycle = useCallback(() => {
    setThemeState((curr) => {
      const idx = THEMES.indexOf(curr);
      const next = THEMES[(idx + 1) % THEMES.length];
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<ThemeCtx>(
    () => ({ theme, setTheme, cycle }),
    [theme, setTheme, cycle],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    return {
      theme: DEFAULT_THEME,
      setTheme: () => {},
      cycle: () => {},
    };
  }
  return ctx;
}

/* Pre-paint script — must run before React hydrates to avoid a flash. */
export const themeBootScript = `(function(){try{var k='${STORAGE_KEY}';var v=localStorage.getItem(k);var allow=${JSON.stringify(
  THEMES,
)};if(!v||allow.indexOf(v)===-1){v='${DEFAULT_THEME}';}var d=document.documentElement;d.setAttribute('data-theme',v);d.classList.add('theme-booting');}catch(e){document.documentElement.setAttribute('data-theme','${DEFAULT_THEME}');}})();`;
