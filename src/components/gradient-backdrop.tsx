export function GradientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-paper" />
      <div className="blob-a" />
      <div className="blob-b" />
      <div className="blob-c" />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/0 via-paper/30 to-paper/85" />
    </div>
  );
}
