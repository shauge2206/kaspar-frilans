"use client";

type Props = {
  text: string;
  className?: string;
  per?: "word" | "char";
  delayBase?: number;
  step?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export function SplitText({
  text,
  className,
  per = "word",
  delayBase = 0,
  step = 60,
  as: Tag = "span",
}: Props) {
  const tokens =
    per === "word" ? text.split(/(\s+)/) : Array.from(text);

  return (
    <Tag className={className}>
      {tokens.map((token, i) => {
        if (per === "word" && /^\s+$/.test(token)) {
          return <span key={i}>{token}</span>;
        }
        return (
          <span
            key={i}
            className="split-word"
            style={{
              animationDelay: `${delayBase + i * step}ms`,
              willChange: "transform, opacity, filter",
            }}
          >
            {token}
          </span>
        );
      })}
    </Tag>
  );
}
