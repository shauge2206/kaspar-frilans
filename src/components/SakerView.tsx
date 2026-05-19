"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FieldMap } from "@/components/FieldMap";
import { articles, formatCoord, themes, type ThemeKey } from "@/lib/articles";

const ALL_THEMES: ThemeKey[] = ["krim", "arbeidsliv", "kyst", "samfunn", "feature"];

export function SakerView() {
  const [view, setView] = useState<"kart" | "liste">("kart");
  const [filters, setFilters] = useState<Set<ThemeKey>>(new Set());

  const filtered = useMemo(() => {
    if (filters.size === 0) return articles;
    return articles.filter((a) => a.themes.some((t) => filters.has(t)));
  }, [filters]);

  function toggleFilter(t: ThemeKey) {
    setFilters((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-8 pb-5 border-b border-line/40">
        <div
          role="tablist"
          className="inline-flex p-1 bg-sand/60 border border-line/50 rounded-full"
        >
          {(["kart", "liste"] as const).map((v) => (
            <button
              key={v}
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-all ${
                view === v
                  ? "bg-deep text-paper"
                  : "text-deep/70 hover:text-deep"
              }`}
            >
              {v === "kart" ? "Kart" : "Liste"}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-deep/55 mr-1">
            Tema:
          </span>
          {ALL_THEMES.map((t) => {
            const on = filters.has(t);
            return (
              <button
                key={t}
                onClick={() => toggleFilter(t)}
                className="font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border transition-all duration-200"
                style={{
                  borderColor: on ? themes[t].color : "rgba(31,56,82,0.25)",
                  background: on ? themes[t].color : "transparent",
                  color: on ? "#f4ede0" : "rgba(20,40,60,0.75)",
                }}
              >
                {themes[t].label}
              </button>
            );
          })}
          {filters.size > 0 && (
            <button
              onClick={() => setFilters(new Set())}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-deep/55 hover:text-accent px-2 py-1.5"
            >
              Nullstill
            </button>
          )}
        </div>

        <div className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-deep/55 tabular">
          {filtered.length} av {articles.length} reportasjer
        </div>
      </div>

      {view === "kart" ? (
        <FieldMap variant="page" />
      ) : (
        <ul className="divide-y divide-line/40 border-t border-b border-line/40">
          {filtered.map((a, i) => (
            <li key={a.slug}>
              <Link
                href={`/saker/${a.slug}`}
                className="grid md:grid-cols-[80px_140px_1fr_auto] items-center gap-6 py-6 group"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-deep/45 tabular">
                  № {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative h-20 w-32 rounded-md overflow-hidden bg-fog">
                  <Image
                    src={a.images[0]!.src}
                    alt={a.images[0]!.alt}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/55 mb-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
                    <span>{a.location.name}</span>
                    <span>·</span>
                    <span>{a.publication}</span>
                    <span>·</span>
                    <span className="tabular">{a.dateLabel}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink leading-snug max-w-3xl group-hover:text-accent transition-colors">
                    {a.title}
                  </h3>
                  <div className="font-mono text-[10px] text-deep/45 tabular mt-1">
                    {formatCoord(a.location.lat, a.location.lng)}
                  </div>
                </div>
                <div className="hidden md:flex flex-col items-end gap-1.5">
                  {a.themes.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 text-paper"
                      style={{ background: themes[t].color }}
                    >
                      {themes[t].label}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="py-16 text-center text-deep/60 font-serif">
              Ingen reportasjer matcher de valgte filtrene.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
