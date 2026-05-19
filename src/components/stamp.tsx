type Props = {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
  variant?: "rect" | "circle";
  animate?: boolean;
};

export function Stamp({
  children,
  rotate = -6,
  className = "",
  variant = "rect",
  animate = true,
}: Props) {
  const style = animate
    ? undefined
    : { transform: `rotate(${rotate}deg)` };
  return (
    <span
      className={[
        "stamp",
        variant === "circle" ? "stamp-circle" : "",
        animate ? "stamp-animate" : "",
        className,
      ].join(" ")}
      style={
        animate
          ? ({ ["--rot" as string]: `${rotate}deg` } as React.CSSProperties)
          : style
      }
    >
      {children}
    </span>
  );
}
