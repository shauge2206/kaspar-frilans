/**
 * Importerer saker fra Word-dokumenter til nettsiden.
 *
 * Bruk:
 *   1. Legg en `.docx` i `content/saker-docx/`.
 *   2. Kjør `npm run import:saker`.
 *
 * For hver .docx lager skriptet:
 *   - Bildene i `public/images/saker/<slug>/bilde-1..N.<ext>`
 *   - En innholdsfil `src/content/saker/<slug>.md` med front-matter + brødtekst.
 *
 * Skriptet gjetter tittel, ingress, publikasjon, dato, bildetekst og fotograf
 * ut fra dokumentets faste oppsett. Felt det ikke kan lese (emneknagger, og av
 * og til datoIso) markeres med TODO i front-matter, så du bekrefter dem raskt.
 * Eksisterende .md-filer overskrives IKKE hvis du har redigert dem – slett dem
 * først hvis du vil re-importere fra bunnen.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mammoth from "mammoth";
import TurndownService from "turndown";
import { parse as parseHtml } from "node-html-parser";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DOCX_DIR = path.join(ROOT, "content/saker-docx");
const CONTENT_DIR = path.join(ROOT, "src/content/saker");
const PUBLIC_DIR = path.join(ROOT, "public/images/saker");

const MONTHS = {
  januar: "01", februar: "02", mars: "03", april: "04", mai: "05", juni: "06",
  juli: "07", august: "08", september: "09", oktober: "10", november: "11", desember: "12",
};

const td = new TurndownService({ headingStyle: "atx", bulletListMarker: "-" });

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[æ]/g, "ae").replace(/[ø]/g, "o").replace(/[å]/g, "a")
    .replace(/[«»""'']/g, "")
    .replace(/[–—]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanFilename(file) {
  return path.basename(file, ".docx")
    .replace(/^Sak til nettsiden\s*-\s*/i, "")
    .replace(/^Sak\s*-\s*/i, "")
    .trim();
}

function slugFromFilename(file) {
  return slugify(cleanFilename(file)).split("-").slice(0, 6).join("-");
}

// "7. april 2025" -> "2025-04-07"
function toIso(text) {
  const m = text.match(/(\d{1,2})\.?\s+([a-zæøå]+)\s+(\d{4})/i);
  if (!m) return "";
  const mm = MONTHS[m[2].toLowerCase()];
  if (!mm) return "";
  return `${m[3]}-${mm}-${m[1].padStart(2, "0")}`;
}

function yaml(value) {
  const s = String(value).replace(/"/g, '\\"');
  return `"${s}"`;
}

async function importDoc(file) {
  const slug = slugFromFilename(file);
  const outMd = path.join(CONTENT_DIR, `${slug}.md`);
  if (fs.existsSync(outMd)) {
    console.log(`↷  hopper over ${slug} (finnes allerede – slett .md for re-import)`);
    return;
  }

  const imgDir = path.join(PUBLIC_DIR, slug);
  fs.mkdirSync(imgDir, { recursive: true });

  // Convert docx -> HTML, saving each image to disk in document order.
  let imgCount = 0;
  const result = await mammoth.convertToHtml(
    { path: path.join(DOCX_DIR, file) },
    {
      convertImage: mammoth.images.imgElement(async (image) => {
        imgCount += 1;
        const ext = (image.contentType || "image/jpeg").split("/")[1].replace("jpeg", "jpeg");
        const name = `bilde-${imgCount}.${ext}`;
        const buffer = Buffer.from(await image.read("base64"), "base64");
        fs.writeFileSync(path.join(imgDir, name), buffer);
        return { src: `/images/saker/${slug}/${name}`, alt: "" };
      }),
    },
  );

  // Walk the HTML into ordered blocks.
  const root = parseHtml(result.value);
  const blocks = [];
  for (const el of root.childNodes) {
    if (el.nodeType !== 1) continue;
    const tag = el.rawTagName?.toLowerCase();
    const img = el.querySelector("img");
    if (tag === "img" || (img && el.text.trim() === "")) {
      blocks.push({ type: "img", src: (el.querySelector("img") || el).getAttribute("src") });
      continue;
    }
    const text = el.text.replace(/\s+/g, " ").trim();
    if (!text) continue;
    const isHeadingTag = ["h1", "h2", "h3", "h4"].includes(tag);
    const strong = el.querySelector("strong, b");
    const fullyBold = strong && strong.text.trim() === text && text.length < 80;
    blocks.push({
      type: isHeadingTag || fullyBold ? "h" : "p",
      text,
      html: el.innerHTML,
    });
  }

  const textBlocks = blocks.filter((b) => b.type !== "img");

  // Tittelen leses fra filnavnet (rein overskrift – mest pålitelig).
  const tittel = cleanFilename(file);

  const dateRe = /\d{1,2}\.?\s+[a-zæøå]+\s+\d{4}/i;
  let bildetekst = "", fotograf = "", publikasjon = "", dato = "", ingress = "";
  let bodyStartText = null;

  // Bildetekst + fotograf fra billedteksten som inneholder "... FOTO: <navn>".
  const fotoIdx = textBlocks.findIndex((b) => /\bfoto\s*[:.]/i.test(b.text));
  if (fotoIdx !== -1) {
    const capBlock = textBlocks[fotoIdx].text;
    fotograf = (capBlock.match(/foto\s*[:.]?\s*(.*)$/i)?.[1] ?? "").replace(/\s*\.\s*$/, "").trim();
    bildetekst = capBlock.replace(/\s*foto\s*[:.].*$/i, "").trim();
    if (!bildetekst) {
      const prev = textBlocks[fotoIdx - 1];
      if (prev && !/^sak\b/i.test(prev.text)) bildetekst = prev.text;
    }
  }

  // Publikasjon + dato = den korte linja med en dato (etter bildeteksten).
  // Ingressen står rett etter, og brødteksten begynner der igjen.
  const searchFrom = fotoIdx !== -1 ? fotoIdx + 1 : 0;
  const pubIdx = textBlocks.findIndex((b, i) => i >= searchFrom && b.text.length < 60 && dateRe.test(b.text));
  if (pubIdx !== -1) {
    const pubLine = textBlocks[pubIdx].text;
    dato = pubLine.match(dateRe)?.[0] ?? "";
    publikasjon = pubLine.replace(dato, "").replace(/\s*[.,]\s*$/, "").trim();
    ingress = textBlocks[pubIdx + 1]?.text ?? "";
    bodyStartText = textBlocks[pubIdx + 2];
  } else {
    const start = fotoIdx !== -1 ? fotoIdx + 1 : textBlocks.findIndex((b) => !/^sak\b/i.test(b.text));
    ingress = textBlocks[start]?.text ?? "";
    bodyStartText = textBlocks[start + 1];
  }

  const datoIso = toIso(dato);

  // Body = every block from the first body paragraph onward, keeping images
  // inline but dropping the lead image (shown separately as the hero).
  const bodyStartIndex = bodyStartText ? blocks.indexOf(bodyStartText) : blocks.length;
  const hero = `/images/saker/${slug}/bilde-1.jpeg`;
  const lines = [];
  for (let i = bodyStartIndex; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type === "img") {
      if (b.src && b.src !== hero) lines.push(`![](${b.src})`);
    } else if (b.type === "h") {
      lines.push(`## ${b.text}`);
    } else {
      lines.push(td.turndown(b.html).trim());
    }
  }
  const body = lines.filter(Boolean).join("\n\n");

  const words = body.split(/\s+/).filter(Boolean).length;
  const lesetid = Math.max(1, Math.round(words / 200));

  const heroExt = fs.existsSync(path.join(imgDir, "bilde-1.jpeg")) ? "jpeg"
    : (fs.readdirSync(imgDir).find((f) => f.startsWith("bilde-1")) || "bilde-1.jpeg").split(".").pop();
  const heroPath = `/images/saker/${slug}/bilde-1.${heroExt}`;

  const bilderList = fs.readdirSync(imgDir)
    .filter((f) => /^bilde-\d+\./.test(f))
    .sort((a, b) => Number(a.match(/\d+/)) - Number(b.match(/\d+/)))
    .map((f, i) => `  - src: /images/saker/${slug}/${f}\n    tekst: ${yaml(i === 0 ? bildetekst : "")}`)
    .join("\n");

  const frontmatter = [
    "---",
    `slug: ${slug}`,
    `tittel: ${yaml(tittel)}`,
    `ingress: ${yaml(ingress)}`,
    `publikasjon: ${yaml(publikasjon)}`,
    `dato: ${yaml(dato)}`,
    `datoIso: ${yaml(datoIso)}${datoIso ? "" : "   # TODO: fyll inn dato (YYYY-MM-DD)"}`,
    `bildetekst: ${yaml(bildetekst)}`,
    `fotograf: ${yaml(fotograf)}`,
    `lesetidMinutter: ${lesetid}`,
    `hovedbilde: ${heroPath}`,
    "bilder:",
    bilderList,
    "emneknagger: []   # TODO: velg tema/sjanger, se src/lib/tags.ts",
    "---",
    "",
  ].join("\n");

  fs.writeFileSync(outMd, frontmatter + body + "\n");
  console.log(`✓  ${slug}  (${imgCount} bilder, ${words} ord)  ${datoIso || "DATO?"}`);
  if (!tittel || !ingress) console.log(`   ⚠  sjekk tittel/ingress i ${slug}.md`);
}

async function main() {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  const files = fs.readdirSync(DOCX_DIR).filter((f) => f.toLowerCase().endsWith(".docx"));
  if (!files.length) {
    console.log(`Ingen .docx i ${path.relative(ROOT, DOCX_DIR)}`);
    return;
  }
  for (const file of files) await importDoc(file);
  console.log("\nFerdig. Bekreft TODO-feltene (emneknagger/dato) i src/content/saker/*.md.");
}

main().catch((e) => { console.error(e); process.exit(1); });
