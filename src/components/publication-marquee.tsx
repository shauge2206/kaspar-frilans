"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  label: string;
  publications: string[];
  className?: string;
};

const RULE_EASE = [0.16, 1, 0.3, 1] as const;

function Rule({ delay = 0, reduce }: { delay?: number; reduce: boolean }) {
  if (reduce) {
    return <span aria-hidden className="block h-px w-full bg-line/70" />;
  }
  return (
    <motion.span
      aria-hidden
      className="block h-px w-full origin-left bg-line/70"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: RULE_EASE }}
    />
  );
}

export function PublicationMarquee({
  label,
  publications,
  className = "",
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      <Rule reduce={!!reduce} delay={0} />
      <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mute">
          {label}
        </p>
        {reduce ? (
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 font-display text-[1.25rem] font-medium leading-none tracking-tight text-ink-2 md:text-[1.6rem]">
            {publications.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        ) : (
          <div
            className="group/marquee relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            }}
            aria-label={label}
          >
            <ul
              className="animate-marquee flex w-max gap-x-12 group-hover/marquee:[animation-play-state:paused]"
              role="list"
            >
              {[...publications, ...publications].map((p, i) => (
                <li
                  key={`${p}-${i}`}
                  className="font-display text-[1.25rem] font-medium leading-none tracking-tight text-ink-2 md:text-[1.6rem]"
                  aria-hidden={i >= publications.length}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Rule reduce={!!reduce} delay={0.15} />
    </div>
  );
}
