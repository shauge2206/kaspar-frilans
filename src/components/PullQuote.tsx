import Reveal from "./Reveal";

type Props = {
  quote: string;
  attribution?: string;
};

export default function PullQuote({ quote, attribution }: Props) {
  return (
    <Reveal as="figure" className="my-20 md:my-32 max-w-4xl mx-auto px-6">
      <div
        aria-hidden
        className="mx-auto h-px w-24 bg-amber/70"
      />
      <blockquote className="mt-10 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-fg">
        <span className="text-amber font-display">“</span>
        {quote}
        <span className="text-amber font-display">”</span>
      </blockquote>
      {attribution && (
        <figcaption className="mt-8 smallcaps text-fg-muted">
          — {attribution}
        </figcaption>
      )}
      <div aria-hidden className="mx-auto mt-10 h-px w-24 bg-amber/70" />
    </Reveal>
  );
}
