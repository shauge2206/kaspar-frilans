// Tag registry. The single source of truth for every emneknagg on the site.
// Adding a new sak with a tag not registered here is a TypeScript compile
// error, which keeps the filter list clean and stops typo drift like
// "Krim" vs "krim" vs "krimsak".
//
// To add a new tag:
//   1. Add an entry below with a stable lowercase id, a display label,
//      and a group ("tema" for topics/places, "sjanger" for genre/form).
//   2. Use the id in any sak's emneknagger array in saker.ts.

export type TagGroup = "tema" | "sjanger";

type TagDef = {
  label: string;
  group: TagGroup;
};

export const TAGS = {
  // Tema: topics, places, subjects
  fiskeri:    { label: "Fiskeri",   group: "tema" },
  krim:       { label: "Krim",      group: "tema" },
  samfunn:    { label: "Samfunn",   group: "tema" },
  bergen:     { label: "Bergen",    group: "tema" },
  senja:      { label: "Senja",     group: "tema" },

  // Sjanger: journalistic forms
  gravejournalistikk: { label: "Gravejournalistikk", group: "sjanger" },
  reportasje:         { label: "Reportasje",         group: "sjanger" },
  featurereportasje:  { label: "Featurereportasje",  group: "sjanger" },
} as const satisfies Record<string, TagDef>;

export type TagId = keyof typeof TAGS;

export const TAG_IDS = Object.keys(TAGS) as TagId[];

export function tagsInGroup(group: TagGroup): TagId[] {
  return TAG_IDS.filter((id) => TAGS[id].group === group);
}

export function tagLabel(id: TagId): string {
  return TAGS[id].label;
}
