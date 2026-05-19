"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursor?: boolean;
  onDone?: () => void;
  as?: "span" | "h1" | "h2" | "p";
};

export function Typewriter({
  text,
  delay = 0,
  speed = 28,
  className,
  cursor = true,
  onDone,
  as: Tag = "span",
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    setCount(0);
    setDone(false);
    let i = 0;
    const start = window.setTimeout(() => {
      const tick = () => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          setDone(true);
          onDone?.();
          return;
        }
        timer.current = window.setTimeout(tick, speed);
      };
      tick();
    }, delay);

    return () => {
      window.clearTimeout(start);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [text, delay, speed, onDone]);

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      {cursor && !done ? <span className="tw-cursor" aria-hidden="true" /> : null}
    </Tag>
  );
}
