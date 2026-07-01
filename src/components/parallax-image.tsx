"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  offset?: number;
};

export function ParallaxImage({
  src,
  alt,
  className = "",
  priority,
  sizes = "(min-width: 1024px) 600px, 100vw",
  offset = 40,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-[-12%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
