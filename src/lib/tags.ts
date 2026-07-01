export type TagGroup = "tema" | "sjanger";

type TagDef = {
  label: string;
  group: TagGroup;
};

export const TAGS = {
  fiskeri: { label: "Fiskeri", group: "tema" },
  krim: { label: "Krim", group: "tema" },
  samfunn: { label: "Samfunn", group: "tema" },
  bergen: { label: "Bergen", group: "tema" },
  senja: { label: "Senja", group: "tema" },

  gravejournalistikk: { label: "Gravejournalistikk", group: "sjanger" },
  reportasje: { label: "Reportasje", group: "sjanger" },
  featurereportasje: { label: "Featurereportasje", group: "sjanger" },
} as const satisfies Record<string, TagDef>;

export type TagId = keyof typeof TAGS;

export const TAG_IDS = Object.keys(TAGS) as TagId[];

export function tagsInGroup(group: TagGroup): TagId[] {
  return TAG_IDS.filter((id) => TAGS[id].group === group);
}

export function tagLabel(id: TagId): string {
  return TAGS[id].label;
}
