type Props = {
  className?: string;
};

export function CompassMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="11" strokeWidth="0.8" />
      <path d="M20 4 L23 20 L20 36 L17 20 Z" fill="currentColor" stroke="none" />
      <path
        d="M4 20 L20 17 L36 20 L20 23 Z"
        fill="currentColor"
        opacity="0.35"
        stroke="none"
      />
      <text
        x="20"
        y="9"
        textAnchor="middle"
        fontSize="6"
        fontFamily="var(--font-mono)"
        fill="currentColor"
        stroke="none"
      >
        N
      </text>
    </svg>
  );
}
