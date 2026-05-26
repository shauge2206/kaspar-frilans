# Saker – innholdskilde

Denne mappa er **sannhetskilden** for alle artikler på nettsiden. Hver `.ts`-fil
representerer én sak.

## Legge til en ny sak

1. Lag en ny fil: `src/content/saker/<slug>.ts`
2. Eksporter et `Sak`-objekt med skjemaet fra `@/lib/saker`:

   ```ts
   import type { Sak } from "@/lib/saker";

   export const sak: Sak = {
     slug: "min-nye-sak",
     tittel: "...",
     ingress: "...",
     publikasjon: "Bergens Tidende",
     dato: "1. januar 2026",
     datoIso: "2026-01-01",
     bildetekst: "...",
     fotograf: "...",
     lesetidMinutter: 7,
     hovedbilde: "/images/saker/sak-4/bilde-1.jpeg",
     bilder: [{ src: "...", tekst: "..." }],
     brodtekst: ["Avsnitt 1", "Avsnitt 2"],
     pullquote: "",
     emneknagger: ["krim", "bergen"],
   };
   ```

3. Importer og legg den til `index.ts` (nyeste først):

   ```ts
   import { sak as minNyeSak } from "./min-nye-sak";
   // ...
   export const saker: Sak[] = [minNyeSak, /* eksisterende */];
   ```

4. Legg tilhørende bilder under `public/images/saker/sak-<n>/`.

Saken vises automatisk i:
- Forsidens "Saker fra arkivet"-tile-grid (3 første saker)
- `/saker` (alle saker)
- `/saker/<slug>` (selve detaljvisningen, statisk generert)
- "Bla videre"-karusellen nederst på andre detaljsider

Alle disse komponentene leser fra `@/lib/saker`, som re-eksporterer arrayet
i `index.ts`. Det finnes ingen annen kilde å oppdatere.

## Skjemafelt

Se `Sak`-typen i `src/lib/saker.ts` for fulle typer.
