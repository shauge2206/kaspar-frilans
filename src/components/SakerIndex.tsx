"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { TransitionLink } from "./TransitionLink";
import type { Sak } from "@/lib/saker";

type Props = { saker: Sak[] };

export function SakerIndex({ saker }: Props) {
  const [cursor, setCursor] = useState(0);
  const rowRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || (e.metaKey || e.ctrlKey)) {
        return;
      }
      if (e.key === "j" || e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, saker.length - 1));
      } else if (e.key === "k" || e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => Math.max(c - 1, 0));
      } else if (e.key === "Enter") {
        rowRefs.current[cursor]?.click();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cursor, saker.length]);

  useEffect(() => {
    rowRefs.current[cursor]?.focus({ preventScroll: false });
  }, [cursor]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <ul className="col-span-12 divide-y divide-hairline lg:col-span-8">
        {saker.map((s, i) => {
          const active = cursor === i;
          return (
            <li
              key={s.slug}
              data-active={active}
              className="row-mark group relative"
            >
              <TransitionLink
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                href={`/saker/${s.slug}`}
                onMouseEnter={() => setCursor(i)}
                onFocus={() => setCursor(i)}
                className="focus-ring grid grid-cols-12 items-baseline gap-4 py-7 transition-[padding] duration-300 data-[active=true]:pl-2"
                data-active={active}
              >
                <span className="col-span-1 font-mono text-[11px] tabular tracking-[0.16em] text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-11 sm:col-span-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
                    {s.seksjon} · {s.publikasjon}
                  </p>
                  <h2 className="mt-2 text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.14] tracking-[-0.015em]">
                    {s.tittel}
                  </h2>
                </div>
                <time
                  dateTime={s.datoIso}
                  className="col-span-6 font-mono text-[11px] tabular tracking-[0.14em] text-ink/55 sm:col-span-2"
                >
                  {s.dato}
                </time>
                <span className="col-span-6 text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55 sm:col-span-2">
                  {s.sted}
                </span>
              </TransitionLink>
            </li>
          );
        })}
      </ul>

      {/* preview panel */}
      <aside className="sticky top-24 col-span-12 hidden h-[28rem] lg:col-span-4 lg:block">
        <div className="relative h-full w-full overflow-hidden border border-hairline bg-ink/5">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={saker[cursor]?.slug ?? "empty"}
              initial={reduce ? false : { opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={saker[cursor]?.hovedbilde ?? ""}
                alt={saker[cursor]?.bildetekst ?? ""}
                fill
                sizes="(max-width: 1024px) 0px, 33vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-0 border-t border-hairline-strong bg-paper/90 p-4 backdrop-blur-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
              Preview · {String(cursor + 1).padStart(2, "0")} /{" "}
              {String(saker.length).padStart(2, "0")}
            </p>
            <p className="mt-1 line-clamp-2 text-[14px] text-ink">
              {saker[cursor]?.ingress}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
          <span>
            <kbd className="border border-hairline px-1.5 py-0.5">J</kbd>{" "}
            <kbd className="border border-hairline px-1.5 py-0.5">K</kbd> for å
            navigere
          </span>
          <span>
            <kbd className="border border-hairline px-1.5 py-0.5">↵</kbd> åpne
          </span>
        </div>
      </aside>
    </div>
  );
}
