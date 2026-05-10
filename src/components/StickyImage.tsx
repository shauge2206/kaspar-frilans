import Image from "next/image";
import Reveal from "./Reveal";

type Props = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  reverse?: boolean;
};

export default function StickyImage({
  src,
  alt,
  caption,
  credit,
  reverse = false,
}: Props) {
  return (
    <section className="my-24 md:my-40">
      <Reveal>
        <div className="grid gap-10 md:gap-14 lg:grid-cols-12 items-start max-w-[1400px] mx-auto px-6 md:px-10">
          <figure
            className={`relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden lg:col-span-8 ${
              reverse ? "lg:order-2" : ""
            }`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </figure>

          <aside
            className={`lg:col-span-4 ${reverse ? "lg:order-1" : ""}`}
          >
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Bildetekst</p>
              <p className="mt-5 font-display text-xl md:text-2xl leading-snug text-fg">
                {caption}
              </p>
              <div className="mt-6 h-px w-12 bg-amber" />
              <p className="mt-5 smallcaps text-fg-muted">{credit}</p>
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
