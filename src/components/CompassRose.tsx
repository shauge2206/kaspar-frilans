type Props = {
  className?: string;
};

export function CompassRose({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="56"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <circle
        cx="60"
        cy="60"
        r="42"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="60"
        cy="60"
        r="26"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
      />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const long = i % 4 === 0;
        const r1 = 56;
        const r2 = long ? 44 : 50;
        const x1 = 60 + Math.sin(angle) * r1;
        const y1 = 60 - Math.cos(angle) * r1;
        const x2 = 60 + Math.sin(angle) * r2;
        const y2 = 60 - Math.cos(angle) * r2;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={long ? 1 : 0.5}
            opacity={long ? 0.7 : 0.35}
          />
        );
      })}
      <path
        d="M60 8 L66 60 L60 50 L54 60 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M60 112 L54 60 L60 70 L66 60 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M8 60 L60 54 L50 60 L60 66 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M112 60 L60 66 L70 60 L60 54 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <text
        x="60"
        y="6"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-mono)"
        fill="currentColor"
        opacity="0.85"
      >
        N
      </text>
      <text
        x="116"
        y="62"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-mono)"
        fill="currentColor"
        opacity="0.6"
      >
        Ø
      </text>
      <text
        x="60"
        y="118"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-mono)"
        fill="currentColor"
        opacity="0.6"
      >
        S
      </text>
      <text
        x="4"
        y="62"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-mono)"
        fill="currentColor"
        opacity="0.6"
      >
        V
      </text>
    </svg>
  );
}
