import type { SVGProps } from "react";

export function CompassMark({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.6}
      aria-hidden
      className={className}
      {...rest}
    >
      <circle cx={32} cy={32} r={29} />
      <circle cx={32} cy={32} r={22} strokeDasharray="1 3" />
      <path d="M32 4 L32 60 M4 32 L60 32" />
      <path d="M32 8 L34 32 L32 56 L30 32 Z" fill="currentColor" opacity={0.85} />
      <path d="M8 32 L32 30 L56 32 L32 34 Z" fill="currentColor" opacity={0.4} />
      <text
        x={32}
        y={11}
        textAnchor="middle"
        fontSize={4.5}
        fill="currentColor"
        stroke="none"
        letterSpacing={0.6}
      >
        N
      </text>
    </svg>
  );
}

export function HorizonLine({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 1200 12" preserveAspectRatio="none" className="w-full h-3">
        <line
          x1={0}
          y1={6}
          x2={1200}
          y2={6}
          stroke="currentColor"
          strokeWidth={0.7}
          opacity={0.6}
        />
        <line
          x1={0}
          y1={9}
          x2={1200}
          y2={9}
          stroke="currentColor"
          strokeWidth={0.4}
          opacity={0.25}
          strokeDasharray="2 6"
        />
      </svg>
    </div>
  );
}

export function DepthLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} aria-hidden fill="none">
      <path
        d="M0 8 Q50 14 100 8 T200 8"
        stroke="currentColor"
        strokeWidth={0.5}
        opacity={0.5}
      />
      <path
        d="M0 24 Q50 30 100 24 T200 24"
        stroke="currentColor"
        strokeWidth={0.5}
        opacity={0.35}
      />
      <path
        d="M0 40 Q50 46 100 40 T200 40"
        stroke="currentColor"
        strokeWidth={0.5}
        opacity={0.2}
      />
    </svg>
  );
}

export function Lighthouse({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.7}
      aria-hidden
      className={className}
    >
      <path d="M11 60 L21 60 L19 22 L13 22 Z" />
      <path d="M10 22 L22 22 L21 18 L11 18 Z" />
      <rect x={13} y={10} width={6} height={8} />
      <path d="M14 10 L18 10 L17 6 L15 6 Z" />
      <circle cx={16} cy={4} r={1} fill="currentColor" />
      <path d="M11 60 L21 60 L23 63 L9 63 Z" />
      <path d="M9 14 L13 14 M19 14 L23 14" opacity={0.6} />
    </svg>
  );
}

export function Buoy({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.7}
      aria-hidden
      className={className}
    >
      <path d="M12 4 L12 22" />
      <path d="M9 4 L15 4" />
      <ellipse cx={12} cy={28} rx={9} ry={6} />
      <path d="M3 28 Q12 24 21 28" opacity={0.5} />
      <path d="M3 28 Q12 32 21 28" />
      <circle cx={12} cy={2} r={1} fill="currentColor" />
    </svg>
  );
}

export function WindArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.7}
      aria-hidden
      className={className}
    >
      <path d="M2 8 L58 8" />
      <path d="M50 3 L58 8 L50 13" />
      <path d="M14 8 L18 4 M22 8 L26 4 M30 8 L34 4" opacity={0.7} />
    </svg>
  );
}

export function WaveBackdrop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
      fill="none"
    >
      <path
        d="M0 200 C 240 140 480 260 720 200 S 1200 140 1440 200 L 1440 320 L 0 320 Z"
        fill="currentColor"
        opacity={0.08}
      />
      <path
        d="M0 230 C 240 170 480 290 720 230 S 1200 170 1440 230"
        stroke="currentColor"
        strokeWidth={0.6}
        opacity={0.35}
      />
      <path
        d="M0 250 C 280 210 520 290 760 250 S 1200 210 1440 250"
        stroke="currentColor"
        strokeWidth={0.4}
        opacity={0.2}
      />
      <path
        d="M0 270 C 320 240 580 290 820 270 S 1200 240 1440 270"
        stroke="currentColor"
        strokeWidth={0.4}
        opacity={0.15}
      />
    </svg>
  );
}

export function SectionMarker({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      <CompassMark className="w-5 h-5 text-deep" />
      <span className="text-[11px] tracking-meta text-deep">{label}</span>
      <span className="flex-1 h-px bg-deep/25" />
    </div>
  );
}
