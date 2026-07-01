"use client";

import Link from "next/link";
import { BACKDROPS } from "@/components/backdrops";

type Props = {
  activeId: number;
};

export function BackdropSwitcher({ activeId }: Props) {
  return (
    <div className="fixed right-4 top-[5.25rem] z-40 flex flex-col gap-1 rounded-none bg-paper/85 p-1.5 ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift backdrop-blur-md md:right-6">
      {BACKDROPS.map((v) => {
        const isActive = v.id === activeId;
        return (
          <Link
            key={v.id}
            href={`/bakgrunn/${v.slug}`}
            aria-label={`${v.name} – ${v.tone}`}
            title={`${v.name} · ${v.tone}`}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "inline-flex h-8 w-8 items-center justify-center rounded-none bg-ink font-mono text-[0.72rem] text-paper transition-colors"
                : "inline-flex h-8 w-8 items-center justify-center rounded-none font-mono text-[0.72rem] text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
            }
          >
            {v.id}
          </Link>
        );
      })}
    </div>
  );
}
