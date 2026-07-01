import type { Metadata } from "next";
import Link from "next/link";
import { BACKDROPS } from "@/components/backdrops";

export const metadata: Metadata = {
  title: "Bakgrunnsvarianter",
  description:
    "Fem varianter av bakgrunnen for nettsiden. Klikk for å se hele forsiden i hver variant.",
  robots: { index: false, follow: false },
};

const swatches: Record<number, React.CSSProperties> = {
  // Stille — flat warm paper
  1: { backgroundColor: "var(--color-paper)" },
  // Avispapir — halftone dot grid
  2: {
    backgroundColor: "var(--color-paper)",
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'><circle cx='2' cy='2' r='1' fill='rgba(40,30,20,0.22)'/></svg>\")",
    backgroundRepeat: "repeat",
  },
  // Lin — diagonal hatching
  3: {
    backgroundColor: "var(--color-paper)",
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><path d='M0 6 L6 0' stroke='rgba(40,30,20,0.11)' stroke-width='0.6'/></svg>\")",
    backgroundRepeat: "repeat",
  },
  // Pennestrøk — scattered ink marks
  4: {
    backgroundColor: "var(--color-paper)",
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><g stroke='rgba(40,30,20,0.20)' stroke-width='0.8' stroke-linecap='round' fill='none'><path d='M 14 28 L 22 26'/><path d='M 56 44 L 64 42'/><path d='M 110 72 L 118 70'/><path d='M 158 32 L 166 30'/><path d='M 28 110 L 36 108'/><path d='M 82 132 L 90 130'/><path d='M 132 156 L 140 154'/><path d='M 176 116 L 184 114'/><path d='M 48 178 L 56 176'/></g><g fill='rgba(40,30,20,0.18)'><circle cx='44' cy='80' r='1'/><circle cx='98' cy='22' r='1'/><circle cx='142' cy='96' r='1'/><circle cx='74' cy='168' r='1'/><circle cx='176' cy='168' r='1'/></g><g stroke='rgba(242,92,42,0.18)' stroke-width='0.7' stroke-linecap='round' fill='none'><path d='M 122 124 L 130 122'/><path d='M 32 148 L 38 146'/></g></svg>\")",
    backgroundRepeat: "repeat",
  },
  // Spaltene — broadsheet column rules
  5: {
    backgroundColor: "var(--color-paper)",
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 1' preserveAspectRatio='none'><g stroke='rgba(40,30,20,0.18)' stroke-width='0.005' vector-effect='non-scaling-stroke'><line x1='1' y1='0' x2='1' y2='1'/><line x1='2' y1='0' x2='2' y2='1'/><line x1='3' y1='0' x2='3' y2='1'/><line x1='4' y1='0' x2='4' y2='1'/><line x1='5' y1='0' x2='5' y2='1'/></g></svg>\")",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
};

export default function BakgrunnIndexPage() {
  return (
    <section className="relative px-6 pb-32 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1100px]">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
          Forhåndsvisning
        </p>
        <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2.04rem,3.4vw+0.85rem,4.08rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          Fem bakgrunner.{" "}
          <span className="italic text-mute">Velg en stemning.</span>
        </h1>
        <p className="mt-6 max-w-[58ch] text-[1.05rem] leading-relaxed text-ink-2">
          Hver variant viser hele forsiden under en egen bakgrunn. Bytt mellom
          dem fra menyen øverst i høyre hjørne, eller åpne én direkte fra
          listen under.
        </p>

        <ol className="mt-14 divide-y divide-line/70 border-y border-line/70">
          {BACKDROPS.map((v) => (
            <li key={v.id} className="group">
              <Link
                href={`/bakgrunn/${v.slug}`}
                className="grid items-stretch gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-sm uppercase tracking-[0.22em] text-coral-500">
                    {String(v.id).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <div
                    className="relative aspect-[5/3] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift"
                    style={swatches[v.id]}
                  >
                    <div className="absolute inset-0 flex items-end justify-between gap-3 p-4">
                      <span className="rounded-none bg-paper/85 px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
                        {v.tone}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 md:col-span-7">
                  <div>
                    <h2 className="font-display text-[clamp(1.6rem,2vw+0.8rem,2.4rem)] font-medium leading-tight tracking-tight text-ink transition-colors group-hover:text-coral-600">
                      {v.name}
                    </h2>
                    <p className="mt-3 max-w-[60ch] leading-relaxed text-ink-2">
                      {v.description}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-transform duration-500 group-hover:translate-x-1.5"
                  >
                    Åpne forhåndsvisning
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
