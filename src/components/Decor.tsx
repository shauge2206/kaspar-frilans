import type { CSSProperties } from "react";

export function Paperclip({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 48 110"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M24 6 C12 6 6 12 6 24 L6 86 C6 96 14 104 24 104 C34 104 42 96 42 86 L42 30 C42 22 36 16 28 16 C20 16 14 22 14 30 L14 78"
        fill="none"
        stroke="#3a3327"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M24 6 C12 6 6 12 6 24 L6 86 C6 96 14 104 24 104 C34 104 42 96 42 86 L42 30 C42 22 36 16 28 16 C20 16 14 22 14 30 L14 78"
        fill="none"
        stroke="#1a1814"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.6"
        strokeDasharray="2 4"
      />
    </svg>
  );
}

export function PushPin({
  className,
  style,
  color = "#b53826",
}: {
  className?: string;
  style?: CSSProperties;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="11" fill={color} />
      <circle cx="16" cy="16" r="3.5" fill="rgba(255,255,255,0.55)" />
      <circle
        cx="20"
        cy="20"
        r="11"
        fill="none"
        stroke="rgba(0,0,0,0.4)"
        strokeWidth="1"
      />
      <circle cx="20" cy="20" r="2.4" fill="rgba(0,0,0,0.55)" />
    </svg>
  );
}

export function ArrowDoodle({
  className,
  style,
  color = "#b53826",
}: {
  className?: string;
  style?: CSSProperties;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 90"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M6 18 C40 8 84 18 110 38 C124 50 130 64 132 78"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M120 64 L132 78 L146 70"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleDoodle({
  className,
  style,
  color = "#b53826",
}: {
  className?: string;
  style?: CSSProperties;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M14 42 C20 16 80 6 130 12 C170 18 196 30 188 50 C180 70 110 78 56 70 C20 64 8 56 12 44 C16 32 60 26 110 28"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
    </svg>
  );
}

export function StarDoodle({
  className,
  style,
  color = "#b53826",
}: {
  className?: string;
  style?: CSSProperties;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M20 4 L24 16 L36 18 L26 26 L29 38 L20 30 L11 38 L14 26 L4 18 L16 16 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Stamp({
  label,
  rotation = -8,
  className,
}: {
  label: string;
  rotation?: number;
  className?: string;
}) {
  return (
    <span
      className={`stamp ${className ?? ""}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {label}
    </span>
  );
}

export function CheckBox({ checked = false }: { checked?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center w-4 h-4 mr-2 align-[-0.18em] border-[1.5px] border-ink/70"
    >
      {checked ? (
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5">
          <path
            d="M2 9 L6 13 L14 3"
            stroke="#b53826"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ) : null}
    </span>
  );
}
