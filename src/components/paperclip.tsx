type Props = { className?: string };

export function Paperclip({ className = "" }: Props) {
  return (
    <svg
      className={`paperclip ${className}`}
      viewBox="0 0 28 56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 4 C7 4 4 9 4 16 V40 C4 47 9 52 14 52 C19 52 24 47 24 40 V14 C24 9 21 8 18 8 C15 8 12 9 12 14 V40"
        stroke="#3a342a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
