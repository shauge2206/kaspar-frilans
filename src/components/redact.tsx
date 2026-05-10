type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export function Redact({ children, title, className = "" }: Props) {
  return (
    <span
      className={`redact ${className}`}
      title={title ?? "Sladdet — hold over for å avsløre"}
    >
      {children}
    </span>
  );
}
