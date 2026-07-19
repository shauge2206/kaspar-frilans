import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { TagId } from "./tags";

export type SakBilde = { src: string; tekst: string };

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
  bilder: SakBilde[];
  emneknagger: TagId[];
  /** Brødtekst rendret fra markdown til HTML (mellomtitler, bilder, sitater). */
  bodyHtml: string;
};

// Single source of truth: every `.md` file in this folder is one sak. Add a new
// sak by dropping a `.docx` in `content/saker-docx/` and running
// `npm run import:saker`, or by writing a `.md` here by hand. This module reads
// the files on the server at build time; only server components import it.
const DIR = path.join(process.cwd(), "src/content/saker");

function load(): Sak[] {
  if (!fs.existsSync(DIR)) return [];
  const files = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md");

  const list = files.map((file) => {
    const raw = fs.readFileSync(path.join(DIR, file), "utf8");
    const { data, content } = matter(raw);
    const bilder: SakBilde[] = Array.isArray(data.bilder)
      ? data.bilder.map((b: SakBilde) => ({ src: b.src, tekst: b.tekst ?? "" }))
      : [];
    return {
      slug: data.slug ?? file.replace(/\.md$/, ""),
      tittel: data.tittel ?? "",
      ingress: data.ingress ?? "",
      publikasjon: data.publikasjon ?? "",
      dato: data.dato ?? "",
      datoIso: data.datoIso ?? "",
      bildetekst: data.bildetekst ?? "",
      fotograf: data.fotograf ?? "",
      lesetidMinutter: Number(data.lesetidMinutter ?? 1),
      hovedbilde: data.hovedbilde ?? bilder[0]?.src ?? "",
      bilder,
      emneknagger: (Array.isArray(data.emneknagger) ? data.emneknagger : []) as TagId[],
      bodyHtml: marked.parse(content, { async: false }) as string,
    } satisfies Sak;
  });

  // Newest first. Skip anything without a title (e.g. stray non-sak files).
  return list
    .filter((s) => s.tittel)
    .sort((a, b) => (b.datoIso || "").localeCompare(a.datoIso || ""));
}

export const saker: Sak[] = load();

export function hentSak(slug: string): Sak | undefined {
  return saker.find((sak) => sak.slug === slug);
}
