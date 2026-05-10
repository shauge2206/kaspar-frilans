"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles, formatCoord, themes, type ThemeKey } from "@/lib/articles";
import { MAP_VIEWBOX, NORWAY_PATH, project } from "@/lib/map";

type Props = {
  variant?: "hero" | "page";
  showLabels?: boolean;
  enableFilters?: boolean;
  className?: string;
};

const ALL_THEMES: ThemeKey[] = ["krim", "arbeidsliv", "kyst", "samfunn", "feature"];

export function FieldMap({
  variant = "hero",
  showLabels = true,
  enableFilters = false,
  className,
}: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [filters, setFilters] = useState<Set<ThemeKey>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  const points = useMemo(
    () =>
      articles.map((a) => ({
        article: a,
        ...project(a.location.lat, a.location.lng),
      })),
    [],
  );

  const filtered = useMemo(() => {
    if (filters.size === 0) return points;
    return points.filter((p) =>
      p.article.themes.some((t) => filters.has(t)),
    );
  }, [filters, points]);

  const activePoint = active
    ? points.find((p) => p.article.slug === active)
    : null;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggleFilter(t: ThemeKey) {
    setFilters((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className ?? ""}`}
    >
      {enableFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-deep/60 mr-2">
            Filtrer felt:
          </span>
          {ALL_THEMES.map((t) => {
            const on = filters.has(t);
            return (
              <button
                key={t}
                onClick={() => toggleFilter(t)}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  on
                    ? "bg-deep text-paper border-deep scale-[1.02]"
                    : "bg-paper text-deep/70 border-line/60 hover:border-deep/40 hover:text-deep"
                }`}
                style={
                  on
                    ? { background: themes[t].color, borderColor: themes[t].color }
                    : undefined
                }
              >
                {themes[t].label}
              </button>
            );
          })}
          {filters.size > 0 && (
            <button
              onClick={() => setFilters(new Set())}
              className="font-mono text-[11px] uppercase tracking-[0.18em] px-2 py-1.5 text-deep/50 hover:text-accent transition-colors"
            >
              Nullstill
            </button>
          )}
        </div>
      )}

      <div className="relative grid lg:grid-cols-[1fr_minmax(0,420px)] gap-6 items-start">
        <div className="relative bg-fog/40 border border-line/50 rounded-lg overflow-hidden">
          <div className="absolute inset-0 grid-paper opacity-50 pointer-events-none" />
          <svg
            viewBox={`${MAP_VIEWBOX.x} ${MAP_VIEWBOX.y} ${MAP_VIEWBOX.w} ${MAP_VIEWBOX.h}`}
            className="w-full h-auto block"
            role="img"
            aria-label="Kart over Norge med plottede reportasjer"
          >
            <defs>
              <pattern
                id="topoLines"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(15)"
              >
                <line
                  x1="0"
                  y1="7"
                  x2="14"
                  y2="7"
                  stroke="#1f3852"
                  strokeWidth="0.4"
                  opacity="0.18"
                />
              </pattern>
              <radialGradient id="landGlow" cx="35%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#f1e7d0" />
                <stop offset="100%" stopColor="#e6dcc7" />
              </radialGradient>
            </defs>

            {/* sea grid markers */}
            <g opacity="0.18">
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1={MAP_VIEWBOX.x}
                  x2={MAP_VIEWBOX.x + MAP_VIEWBOX.w}
                  y1={(i + 1) * 100}
                  y2={(i + 1) * 100}
                  stroke="#1f3852"
                  strokeDasharray="2 6"
                  strokeWidth="0.5"
                />
              ))}
            </g>

            {/* lat labels */}
            <g
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill="#1f3852"
              opacity="0.55"
            >
              {[60, 65, 70].map((lat) => {
                const y = project(lat, 0).y;
                return (
                  <g key={lat}>
                    <text x={-22} y={y + 3}>
                      {lat}°N
                    </text>
                    <line
                      x1="0"
                      x2={MAP_VIEWBOX.w + MAP_VIEWBOX.x - 10}
                      y1={y}
                      y2={y}
                      stroke="#1f3852"
                      strokeWidth="0.4"
                      strokeDasharray="3 7"
                      opacity="0.35"
                    />
                  </g>
                );
              })}
            </g>

            {/* mainland */}
            <g>
              <path
                d={NORWAY_PATH}
                fill="url(#landGlow)"
                stroke="#1f3852"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d={NORWAY_PATH}
                fill="url(#topoLines)"
                stroke="none"
                opacity="0.6"
              />
            </g>

            {/* Bergen reference */}
            {(() => {
              const bergen = project(60.39, 5.32);
              return (
                <g>
                  <circle
                    cx={bergen.x}
                    cy={bergen.y}
                    r="3"
                    fill="#1f3852"
                  />
                  <text
                    x={bergen.x + 9}
                    y={bergen.y + 4}
                    fontFamily="var(--font-mono)"
                    fontSize="10"
                    fill="#1f3852"
                  >
                    BERGEN
                  </text>
                </g>
              );
            })()}

            {/* markers */}
            <g>
              {points.map((p) => {
                const isActive = active === p.article.slug;
                const dimmed =
                  filters.size > 0 &&
                  !p.article.themes.some((t) => filters.has(t));
                return (
                  <g
                    key={p.article.slug}
                    transform={`translate(${p.x} ${p.y})`}
                    style={{
                      cursor: dimmed ? "default" : "pointer",
                      opacity: dimmed ? 0.2 : 1,
                      transition: "opacity 0.3s",
                    }}
                    onClick={() => {
                      if (dimmed) return;
                      setActive(isActive ? null : p.article.slug);
                    }}
                  >
                    {/* pulse */}
                    <circle
                      r="14"
                      fill={themes[p.article.themes[0]!].color}
                      opacity="0.35"
                      className="animate-pulse-ring"
                    />
                    {/* outer halo on active */}
                    {isActive && (
                      <circle
                        r="22"
                        fill="none"
                        stroke="#e95c2b"
                        strokeWidth="1.5"
                        strokeDasharray="2 3"
                      />
                    )}
                    {/* core */}
                    <circle
                      r={isActive ? 10 : 8}
                      fill={
                        isActive
                          ? "#e95c2b"
                          : themes[p.article.themes[0]!].color
                      }
                      stroke="#0e1a26"
                      strokeWidth="1"
                      style={{ transition: "r 0.2s" }}
                    />
                    {/* theme letter */}
                    <text
                      y="3.5"
                      textAnchor="middle"
                      fontSize="9"
                      fontFamily="var(--font-mono)"
                      fontWeight="700"
                      fill="#f4ede0"
                    >
                      {themes[p.article.themes[0]!].label[0]}
                    </text>
                    {/* label */}
                    {showLabels && !isActive && (
                      <g transform="translate(14 4)" opacity="0.95">
                        <rect
                          x="-1"
                          y="-9"
                          width={p.article.location.name.length * 5 + 14}
                          height="13"
                          fill="#f4ede0"
                          stroke="#1f3852"
                          strokeWidth="0.5"
                          rx="1"
                          opacity="0.92"
                        />
                        <text
                          x="6"
                          y="0"
                          fontFamily="var(--font-mono)"
                          fontSize="8.5"
                          fill="#1f3852"
                        >
                          {p.article.location.name.toUpperCase()}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>

            {/* legend */}
            <g transform={`translate(${MAP_VIEWBOX.x + 10} ${MAP_VIEWBOX.y + MAP_VIEWBOX.h - 70})`}>
              <rect
                width="170"
                height="56"
                fill="#f4ede0"
                stroke="#1f3852"
                strokeWidth="0.6"
                rx="2"
              />
              <text
                x="10"
                y="14"
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="#1f3852"
                letterSpacing="1"
              >
                MARKØR — TEMA
              </text>
              <g transform="translate(10 24)">
                <circle r="5" fill={themes.krim.color} />
                <text
                  x="10"
                  y="3"
                  fontFamily="var(--font-mono)"
                  fontSize="8"
                  fill="#1f3852"
                >
                  KRIM
                </text>
              </g>
              <g transform="translate(60 24)">
                <circle r="5" fill={themes.kyst.color} />
                <text
                  x="10"
                  y="3"
                  fontFamily="var(--font-mono)"
                  fontSize="8"
                  fill="#1f3852"
                >
                  KYST
                </text>
              </g>
              <g transform="translate(110 24)">
                <circle r="5" fill={themes.samfunn.color} />
                <text
                  x="10"
                  y="3"
                  fontFamily="var(--font-mono)"
                  fontSize="8"
                  fill="#1f3852"
                >
                  SAMFUNN
                </text>
              </g>
              <g transform="translate(10 40)">
                <circle r="5" fill="#e95c2b" />
                <text
                  x="10"
                  y="3"
                  fontFamily="var(--font-mono)"
                  fontSize="8"
                  fill="#1f3852"
                >
                  AKTIV REPORTASJE
                </text>
              </g>
            </g>
          </svg>

          <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.18em] text-deep/60 bg-paper/80 backdrop-blur px-2.5 py-1.5 rounded">
            Skala 1 : 5 000 000
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.18em] text-deep/60 bg-paper/80 backdrop-blur px-2.5 py-1.5 rounded">
            {filtered.length} av {articles.length} reportasjer
          </div>
        </div>

        {/* side card panel */}
        <aside className="lg:sticky lg:top-24 self-start min-h-[420px]">
          {activePoint ? (
            <SideCard slug={activePoint.article.slug} />
          ) : (
            <Empty variant={variant} />
          )}
        </aside>
      </div>
    </div>
  );
}

function Empty({ variant }: { variant: "hero" | "page" }) {
  return (
    <div className="border border-line/50 bg-sand/40 rounded-lg p-7 text-deep">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-deep/60 mb-4">
        Reportasjeregister
      </div>
      <h2
        className={`font-semibold tracking-tight leading-tight ${
          variant === "hero" ? "text-2xl" : "text-xl"
        } mb-4`}
      >
        Klikk en markør for å lese et utdrag.
      </h2>
      <p className="text-[14.5px] text-deep/75 leading-relaxed mb-6">
        Hver reportasje er plottet på kartet etter stedet den ble laget.
      </p>
      <ul className="space-y-3">
        {articles.map((a, i) => (
          <li
            key={a.slug}
            className="flex items-baseline gap-3 text-[13px] text-deep/80"
          >
            <span className="font-mono text-[11px] text-deep/50 tabular">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-medium">{a.location.name}</span>
            <span className="text-deep/50 truncate">{a.publication}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SideCard({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug)!;
  return (
    <article
      key={slug}
      className="animate-slide-in-right border border-deep/30 bg-paper rounded-lg overflow-hidden shadow-[6px_6px_0_rgba(31,56,82,0.08)]"
    >
      <div className="relative h-48 w-full bg-fog">
        <Image
          src={article.images[0]!.src}
          alt={article.images[0]!.alt}
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {article.themes.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 text-paper"
              style={{ background: themes[t].color }}
            >
              {themes[t].label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-deep/60 mb-3 flex flex-wrap gap-x-3 gap-y-1">
          <span>{article.publication}</span>
          <span>·</span>
          <span>{article.dateLabel}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-ink mb-3">
          {article.title}
        </h3>
        <div className="font-mono text-[10.5px] text-deep/55 mb-4 tabular">
          {formatCoord(article.location.lat, article.location.lng)}
        </div>
        <p className="text-[14.5px] text-deep/80 font-serif leading-relaxed mb-5">
          {article.excerpt}
        </p>
        <Link
          href={`/saker/${article.slug}`}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent hover:text-accent-deep transition-colors"
        >
          Les hele reportasjen
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
