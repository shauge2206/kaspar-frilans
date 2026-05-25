"use client";
import { useEffect, useRef, useState } from "react";

// Re-fires the fadeUp animation every time the element re-enters the viewport.
// When the element scrolls out, `visible` is cleared and the CSS animation is
// removed; re-entering re-adds the class, replaying the animation.
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
          } else {
            if (timeoutId) {
              clearTimeout(timeoutId);
              timeoutId = null;
            }
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
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
