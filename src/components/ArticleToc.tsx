"use client";
import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export function ArticleToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => {
      const offset = 140;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = item.id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [items]);

  return (
    <nav aria-label="Innhold" className="space-y-1">
      <p className="smallcaps text-ink-mute mb-3">I denne saken</p>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`toc-link text-sm font-sans ${active === item.id ? "active" : ""}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
