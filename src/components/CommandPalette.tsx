"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { saker } from "@/lib/saker";

type Action = {
  id: string;
  label: string;
  kind: "side" | "sak" | "kontakt";
  hint?: string;
  href: string;
};

type Ctx = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const CommandCtx = createContext<Ctx | null>(null);

export function useCommandPalette() {
  const ctx = useContext(CommandCtx);
  if (!ctx) throw new Error("CommandPalette context missing");
  return ctx;
}

const SIDE_ACTIONS: Action[] = [
  { id: "forside", label: "Forside", kind: "side", href: "/" },
  { id: "saker", label: "Saker", kind: "side", href: "/saker" },
  { id: "om", label: "Om Kaspar", kind: "side", href: "/om" },
  { id: "kontakt", label: "Kontakt", kind: "kontakt", href: "/kontakt" },
];

export function CommandPaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const actions = useMemo<Action[]>(() => {
    const sakActions: Action[] = saker.map((s) => ({
      id: `sak-${s.slug}`,
      label: s.tittel,
      hint: `${s.publikasjon} · ${s.dato}`,
      kind: "sak",
      href: `/saker/${s.slug}`,
    }));
    const all = [...SIDE_ACTIONS, ...sakActions];
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        (a.hint?.toLowerCase().includes(q) ?? false),
    );
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 30);
      return () => window.clearTimeout(t);
    }
  }, [isOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, actions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      const action = actions[cursor];
      if (action) {
        close();
        if (typeof document !== "undefined" && document.startViewTransition) {
          document.startViewTransition(() => router.push(action.href));
        } else {
          router.push(action.href);
        }
      }
    }
  };

  return (
    <CommandCtx.Provider value={{ open, close, isOpen }}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            aria-modal
            role="dialog"
          >
            <button
              aria-label="Lukk"
              onClick={close}
              className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]"
            />
            <motion.div
              role="combobox"
              aria-expanded
              initial={{ opacity: 0, y: -6, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.985 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[560px] origin-top border border-hairline-strong bg-paper shadow-[0_24px_80px_-12px_rgba(10,10,10,0.18)]"
            >
              <div className="flex items-center gap-3 border-b border-hairline px-4">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                  className="text-ink/60"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M12.5 12.5L9.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCursor(0);
                  }}
                  onKeyDown={onKeyDown}
                  placeholder="Søk saker eller sider…"
                  className="h-12 flex-1 bg-transparent text-[14px] text-ink outline-none placeholder:text-ink/40"
                />
                <kbd className="font-mono hidden h-5 items-center border border-hairline px-1.5 text-[10px] text-ink/60 sm:inline-flex">
                  ESC
                </kbd>
              </div>
              <ul className="max-h-[50vh] overflow-y-auto py-1">
                {actions.length === 0 ? (
                  <li className="px-4 py-6 text-[13px] text-ink/50">
                    Ingen treff på «{query}».
                  </li>
                ) : (
                  actions.map((a, i) => (
                    <li key={a.id}>
                      <button
                        type="button"
                        data-active={i === cursor}
                        onMouseEnter={() => setCursor(i)}
                        onClick={() => {
                          close();
                          if (
                            typeof document !== "undefined" &&
                            document.startViewTransition
                          ) {
                            document.startViewTransition(() =>
                              router.push(a.href),
                            );
                          } else {
                            router.push(a.href);
                          }
                        }}
                        className="group flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors data-[active=true]:bg-ink data-[active=true]:text-paper"
                      >
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40 group-data-[active=true]:text-paper/60"
                        >
                          {a.kind === "sak"
                            ? "Sak"
                            : a.kind === "kontakt"
                              ? "Aksjon"
                              : "Side"}
                        </span>
                        <span className="flex-1 truncate text-[13px]">
                          {a.label}
                        </span>
                        {a.hint ? (
                          <span className="font-mono hidden truncate text-[11px] text-ink/40 group-data-[active=true]:text-paper/60 sm:inline">
                            {a.hint}
                          </span>
                        ) : null}
                        <span
                          aria-hidden
                          className="text-ink/30 group-data-[active=true]:text-paper/70"
                        >
                          ↵
                        </span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
              <div className="flex items-center justify-between border-t border-hairline px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                <span>⌘K — palett</span>
                <span>↑↓ naviger · ↵ velg</span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </CommandCtx.Provider>
  );
}
