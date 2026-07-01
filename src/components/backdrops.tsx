import type { ComponentType } from "react";

// 1. QUIET / MINIMAL  — pure flat warm paper, no decoration
function BackdropStille() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-paper"
    />
  );
}

// 2. PATTERNED  — uniform halftone dot grid (newsprint)
function BackdropAvispapir() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-paper" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'><circle cx='2' cy='2' r='1' fill='rgba(40,30,20,0.22)'/></svg>\")",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}

// 3. TACTILE / TEXTURED  — fine diagonal hatching like linen / engineering paper fill
function BackdropLin() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-paper" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><path d='M0 6 L6 0' stroke='rgba(40,30,20,0.11)' stroke-width='0.6'/></svg>\")",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}

// 4. HUMANLIKE  — scattered ink marks, as if jotted in a notebook
function BackdropPennestrok() {
  const tile =
    "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>" +
    "<g stroke='rgba(40,30,20,0.20)' stroke-width='0.8' stroke-linecap='round' fill='none'>" +
    "<path d='M 14 28 L 22 26' />" +
    "<path d='M 56 44 L 64 42' />" +
    "<path d='M 110 72 L 118 70' />" +
    "<path d='M 158 32 L 166 30' />" +
    "<path d='M 28 110 L 36 108' />" +
    "<path d='M 82 132 L 90 130' />" +
    "<path d='M 132 156 L 140 154' />" +
    "<path d='M 176 116 L 184 114' />" +
    "<path d='M 48 178 L 56 176' />" +
    "</g>" +
    "<g fill='rgba(40,30,20,0.18)'>" +
    "<circle cx='44' cy='80' r='1' />" +
    "<circle cx='98' cy='22' r='1' />" +
    "<circle cx='142' cy='96' r='1' />" +
    "<circle cx='74' cy='168' r='1' />" +
    "<circle cx='176' cy='168' r='1' />" +
    "</g>" +
    "<g stroke='rgba(242,92,42,0.18)' stroke-width='0.7' stroke-linecap='round' fill='none'>" +
    "<path d='M 122 124 L 130 122' />" +
    "<path d='M 32 148 L 38 146' />" +
    "</g>" +
    "</svg>";
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-paper" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${tile}")`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}

// 5. EDITORIAL  — faint vertical broadsheet column rules, no gradient
function BackdropSpaltene() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-paper" />
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 6 1"
      >
        {[1, 2, 3, 4, 5].map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="1"
            stroke="rgba(40,30,20,0.11)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  );
}

export type BackdropVariant = {
  id: number;
  slug: string;
  name: string;
  tone: string;
  description: string;
  component: ComponentType;
};

export const BACKDROPS: BackdropVariant[] = [
  {
    id: 1,
    slug: "1",
    name: "Stille",
    tone: "Minimal, ren",
    description:
      "Bare papirtonen, ingenting annet. Lar typografi og bilder bære hele inntrykket. Roligst og mest profesjonell av variantene.",
    component: BackdropStille,
  },
  {
    id: 2,
    slug: "2",
    name: "Avispapir",
    tone: "Mønster, trykk",
    description:
      "Jevnt finkornet rasterpunkt over hele flaten. Henter referansen rett fra avistrykk og gir siden et stoffaktig grunnlag.",
    component: BackdropAvispapir,
  },
  {
    id: 3,
    slug: "3",
    name: "Lin",
    tone: "Taktil, vevet",
    description:
      "Tette diagonale streker, som linstoff eller skraveringen i en gammel tegning. Synlig på nært hold, nesten umerkelig fra avstand.",
    component: BackdropLin,
  },
  {
    id: 4,
    slug: "4",
    name: "Pennestrøk",
    tone: "Menneskelig, notatbok",
    description:
      "Spredte pennedrag og prikker, som glemte notater i marg. Et lite korall-anslag her og der røper at det er en hånd bak.",
    component: BackdropPennestrok,
  },
  {
    id: 5,
    slug: "5",
    name: "Spaltene",
    tone: "Redaksjonell, sober",
    description:
      "Svake loddrette spalteregler som i en broadsheet. Strukturen ligger i bakgrunnen og rammer inn lesningen uten å rope.",
    component: BackdropSpaltene,
  },
];
