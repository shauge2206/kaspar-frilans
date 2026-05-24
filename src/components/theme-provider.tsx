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
  "graphite",
  "linen",
  "sand",
  "ember",
  "dawn",
] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_LABELS: Record<Theme, string> = {
  graphite: "Graphite",
  linen: "Linen",
  sand: "Sand",
  ember: "Ember",
  dawn: "Dawn",
};

const STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "graphite";

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

// Commit theme to DOM + localStorage. The site's globals.css has a
// site-wide CSS transition on background-color/color/border-color (360ms,
// ease-spring) so changing the data-theme attribute is enough — every
// themed property crossfades to its new value automatically.
function applyTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore storage failures */
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  // Sync state from the pre-paint script that already set <html data-theme>
  useEffect(() => {
    setThemeState(readInitial());
    const id = window.requestAnimationFrame(() => {
      document.documentElement.classList.remove("theme-booting");
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    applyTheme(t);
  }, []);

  const cycle = useCallback(() => {
    // Read current theme straight from the DOM, not from React state —
    // the attribute is the canonical source and isn't subject to strict-mode
    // double-invocation that would skip a step in the cycle.
    const attr = document.documentElement.getAttribute("data-theme") as Theme | null;
    const curr =
      attr && (THEMES as readonly string[]).includes(attr)
        ? attr
        : DEFAULT_THEME;
    const idx = THEMES.indexOf(curr);
    const next = THEMES[(idx + 1) % THEMES.length];
    setThemeState(next);
    applyTheme(next);
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
