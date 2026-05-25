"use client";
import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const v = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setProgress(v);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent"
    >
      <div
        className="h-full bg-amber transition-[width] duration-150"
        style={{
          width: `${progress}%`,
          boxShadow:
            "0 0 12px color-mix(in oklab, var(--amber) 50%, transparent)",
        }}
      />
    </div>
  );
}
