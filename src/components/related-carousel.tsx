"use client";

import { useRef, useState, useEffect } from "react";
import type { Sak } from "@/lib/saker";
import { ArticleCard } from "@/components/article-card";

export function RelatedCarousel({ items }: { items: Sak[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const n = items.length;
  const triple = n > 1 ? [...items, ...items, ...items] : items;

  const cardWidth = (): number => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const slide = el.querySelector<HTMLDivElement>("[data-slide]");
    return slide?.getBoundingClientRect().width ?? 0;
  };

  const scrollToCard = (i: number, smooth: boolean) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cw = cardWidth();
    if (cw <= 0) return;
    const target = i * cw - (el.clientWidth - cw) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: smooth ? "smooth" : "auto" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    if (n > 1) {
      requestAnimationFrame(() => scrollToCard(n, false));
    }

    let resetTimer: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      const cw = cardWidth();
      if (cw <= 0) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      const raw = Math.round((center - cw / 2) / cw);
      const display = n > 1 ? (((raw - n) % n) + n) % n : 0;
      indexRef.current = display;
      setIndex(display);

      if (n > 1) {
        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          const cw2 = cardWidth();
          if (cw2 <= 0) return;
          const c = el.scrollLeft + el.clientWidth / 2;
          const current = Math.round((c - cw2 / 2) / cw2);
          if (current < n || current >= 2 * n) {
            const middle = ((((current - n) % n) + n) % n) + n;
            scrollToCard(middle, false);
          }
        }, 220);
      }
    };

    const onResize = () => {
      if (n > 1) scrollToCard(n + indexRef.current, false);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (resetTimer) clearTimeout(resetTimer);
    };
  }, [n]);

  const step = (delta: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cw = cardWidth();
    if (cw <= 0) return;
    el.scrollBy({ left: delta * cw, behavior: "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    }
  };

  if (n === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="karusell"
      aria-label="Saker fra arkivet"
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      <div
        ref={scrollerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 md:mx-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {triple.map((s, i) => {
          const displayIdx = ((i % n) + n) % n;
          const isActive = n > 1 ? displayIdx === index && Math.floor(i / n) === 1 : true;
          return (
            <div
              key={`${s.slug}-${i}`}
              data-slide
              className="snap-center shrink-0 w-[88%] md:w-1/3 px-4 md:px-3 transition-opacity duration-500"
              style={{ opacity: isActive ? 1 : 0.5 }}
              aria-roledescription="slide"
              aria-label={`${displayIdx + 1} av ${n}`}
              aria-hidden={n > 1 ? Math.floor(i / n) !== 1 : false}
            >
              <ArticleCard sak={s} size="md" />
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <p
          className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute"
          aria-live="polite"
        >
          <span aria-hidden="true">
            {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
          <span className="sr-only">
            Sak {index + 1} av {n}
          </span>
        </p>
        {n > 1 ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Forrige sak"
              className="inline-flex h-10 w-10 items-center justify-center rounded-none bg-paper/80 text-ink ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Neste sak"
              className="inline-flex h-10 w-10 items-center justify-center rounded-none bg-paper/80 text-ink ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
