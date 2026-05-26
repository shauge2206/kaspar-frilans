import type { Sak } from "@/lib/saker";
import { sak as utvikSenior } from "./utvik-senior";
import { sak as dramaPaSotra } from "./drama-pa-sotra";
import { sak as gratisbutikkFlyktninger } from "./gratisbutikk-flyktninger";

/**
 * Single source of truth for every sak rendered on the site.
 *
 * To add a new sak:
 *   1. Create `src/content/saker/<slug>.ts` exporting `export const sak: Sak = { ... }`.
 *   2. Import it here and add it to the `saker` array below (newest first).
 *
 * Every component that lists or links to saker (home page tiles, /saker page,
 * /saker/[slug] detail page, related-stories carousel) reads from this array
 * via `@/lib/saker`. There is no other store; updating this file updates the
 * whole site.
 */
export const saker: Sak[] = [
  utvikSenior,
  dramaPaSotra,
  gratisbutikkFlyktninger,
];
