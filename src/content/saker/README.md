# Saker – innholdskilde

Hver `.md`-fil i denne mappa er én sak. Nettsiden leser dem på serveren
(`src/lib/saker.ts`) og sorterer nyeste først etter `datoIso`.

## Legge til en ny sak (vanligste måte)

1. Legg Word-dokumentet (`.docx`) i `content/saker-docx/`.
2. Kjør:

   ```bash
   npm run import:saker
   ```

   Skriptet lager `<slug>.md` her og henter bildene til
   `public/images/saker/<slug>/`.
3. Åpne den nye `.md`-fila og bekreft feltene som er markert med `# TODO`:
   - `emneknagger` – velg tema/sjanger (se `src/lib/tags.ts`).
   - `datoIso` – fylles vanligvis automatisk, men sjekk at den stemmer.

   Se også over `tittel`, `ingress` og `bildetekst`, og fjern eventuelle
   bilder du ikke vil ha (både `.md`-lista og filen i `public/...`).

Skriptet hopper over saker som allerede har en `.md`. Vil du re-importere en
sak fra bunnen, slett `.md`-fila først.

> Merk: kjører `npm run dev` allerede? Start den på nytt etter at du har lagt
> til eller fjernet en sak – saklista leses inn når serveren starter.

Denne README-fila teller ikke som en sak (den hoppes over automatisk).

## Redigere en sak

Rediger `.md`-fila direkte. Front-matter (mellom `---`) er metadata; teksten
under er brødteksten i markdown:

- `## Mellomtittel` gir en mellomtittel.
- `![bildetekst](/images/saker/<slug>/bilde-2.jpeg)` setter et bilde i teksten.
- `> Sitat` gir et uthevet sitat.

## Legge til en sak for hånd (uten docx)

Lag `src/content/saker/<slug>.md` med samme front-matter-felt som de andre
filene, og legg bildene i `public/images/saker/<slug>/`.
