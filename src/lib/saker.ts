import type { TagId } from "./tags";
import { saker } from "@/content/saker";

export type Sak = {
  slug: string;
  tittel: string;
  ingress: string;
  publikasjon: string;
  dato: string;
  datoIso: string;
  bildetekst: string;
  fotograf: string;
  lesetidMinutter: number;
  hovedbilde: string;
  bilder: { src: string; tekst: string }[];
  brodtekst: string[];
  pullquote?: string;
  emneknagger: TagId[];
};

// Re-export the canonical array so existing consumers keep working.
// Data itself lives in `src/content/saker/`. See README there.
export { saker };

export function hentSak(slug: string): Sak | undefined {
  return saker.find((sak) => sak.slug === slug);
}
