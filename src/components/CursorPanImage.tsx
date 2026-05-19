"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import Image, { type ImageProps } from "next/image";
import { useRef, type MouseEvent } from "react";

type Props = ImageProps & {
  containerClassName?: string;
  imageClassName?: string;
  range?: number;
};

export function CursorPanImage({
  containerClassName,
  imageClassName,
  range = 6,
  ...img
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 200, damping: 22, mass: 0.6 });

  const onMove = (e: MouseEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    x.set(nx * range);
    y.set(ny * range);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={containerClassName}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <motion.div
        style={{ x: sx, y: sy, position: "absolute", inset: -8 }}
        className={imageClassName}
      >
        <Image
          {...img}
          alt={img.alt}
          fill={img.fill ?? true}
          sizes={img.sizes ?? "100vw"}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
