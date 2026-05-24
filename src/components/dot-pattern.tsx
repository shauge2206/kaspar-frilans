import { useId } from "react";

type DotPatternProps = {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
};

export function DotPattern({
  width = 32,
  height = 32,
  x = 0,
  y = 0,
  cx,
  cy,
  cr = 1,
  className,
}: DotPatternProps) {
  const id = useId();
  const centerX = cx ?? width / 2;
  const centerY = cy ?? height / 2;

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-mute/30 ${className ?? ""}`}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle cx={centerX} cy={centerY} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
