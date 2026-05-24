type KickerProps = {
  children: React.ReactNode;
  className?: string;
};

// The signature section-opener label: small mono-uppercase, tracked, with a
// coral dot to its left. Used at the top of every major section so every
// opener carries the same editorial mark.
export function Kicker({ children, className = "" }: KickerProps) {
  return (
    <p
      className={`flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-mute ${className}`}
    >
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-coral-400"
      />
      {children}
    </p>
  );
}
