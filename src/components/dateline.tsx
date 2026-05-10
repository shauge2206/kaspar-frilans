export function Dateline({
  sted,
  koordinat,
  dato,
  className,
}: {
  sted: string;
  koordinat: string;
  dato: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 text-[0.7rem] tracking-meta text-deep ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden
        className="w-3 h-3 shrink-0"
        fill="currentColor"
      >
        <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.4 4 8.2 4.2 8.4a.4.4 0 0 0 .6 0c.2-.2 4.2-5 4.2-8.4A4.5 4.5 0 0 0 8 1.5Zm0 6.4A1.9 1.9 0 1 1 8 4a1.9 1.9 0 0 1 0 3.9Z" />
      </svg>
      <span className="font-medium">{sted.toUpperCase()}</span>
      <span className="opacity-50">{koordinat}</span>
      <span aria-hidden className="opacity-30">—</span>
      <span className="opacity-70">{dato}</span>
    </div>
  );
}
