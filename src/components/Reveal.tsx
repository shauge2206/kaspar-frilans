"use client";
import { useEffect, useRef, useState } from "react";

// Fires the fadeUp animation once, the first time the element enters the
// viewport, then stops observing. It does not re-play on scroll-back, which
// avoids repeated animation work while scrolling.
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            timeoutId = setTimeout(() => setVisible(true), delay);
            obs.disconnect();
          }
        });
      },
      // threshold 0 (not a ratio) so tall elements taller than the viewport
      // still trigger — a ratio like 0.12 can never be met by very long articles.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
