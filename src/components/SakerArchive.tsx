"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Sak } from "@/lib/saker";
import { TAGS, type TagId, tagLabel } from "@/lib/tags";
import { Reveal } from "./Reveal";

type Props = {
  saker: Sak[];
};

function isTagId(value: string | null): value is TagId {
  return value !== null && value in TAGS;
}

export function SakerArchive({ saker }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const temaParam = searchParams.get("tema");
  const sjangerParam = searchParams.get("sjanger");
  const tema = isTagId(temaParam) && TAGS[temaParam].group === "tema"
    ? temaParam
    : null;
  const sjanger = isTagId(sjangerParam) && TAGS[sjangerParam].group === "sjanger"
    ? sjangerParam
    : null;
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  // Derive chip lists from the data. Only tags that actually appear in
  // at least one sak get a chip (no empty filter buttons). Order is
  // registry order, not first-occurrence, so the chip row stays stable.
  const { temaList, sjangerList } = useMemo(() => {
    const used = new Set<TagId>();
    for (const s of saker) for (const t of s.emneknagger) used.add(t);
    const tema: TagId[] = [];
    const sjanger: TagId[] = [];
    for (const id of Object.keys(TAGS) as TagId[]) {
      if (!used.has(id)) continue;
      if (TAGS[id].group === "tema") tema.push(id);
      else sjanger.push(id);
    }
    return { temaList: tema, sjangerList: sjanger };
  }, [saker]);

  // Filtered list: AND across Tema + Sjanger + free-text query when set.
  // Search hits tittel, ingress, publikasjon, and tag labels.
  const filtered = useMemo(() => {
    return saker.filter((s) => {
      const temaOk = !tema || s.emneknagger.includes(tema);
      const sjangerOk = !sjanger || s.emneknagger.includes(sjanger);
      if (!temaOk || !sjangerOk) return false;
      if (!query) return true;
      const haystack = [
        s.tittel,
        s.ingress,
        s.publikasjon,
        ...s.emneknagger.map((t) => TAGS[t].label),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [saker, tema, sjanger, query]);

  function setFilter(group: "tema" | "sjanger", value: TagId | null) {
    const next = new URLSearchParams(searchParams.toString());
    // Toggle: clicking the active value clears it.
    if (value === null || next.get(group) === value) {
      next.delete(group);
    } else {
      next.set(group, value);
    }
    const qs = next.toString();
    router.replace(qs ? `/saker?${qs}` : "/saker", { scroll: false });
  }

  function clearAll() {
    router.replace("/saker", { scroll: false });
  }

  function setQuery(value: string) {
    const next = new URLSearchParams(searchParams.toString());
    const trimmed = value.trim();
    if (trimmed) next.set("q", trimmed);
    else next.delete("q");
    const qs = next.toString();
    router.replace(qs ? `/saker?${qs}` : "/saker", { scroll: false });
  }

  const hasActiveFilter = Boolean(tema) || Boolean(sjanger) || Boolean(query);

  return (
    <>
      {/* FILTER BAR */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="border-t border-rule pt-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
            <label
              htmlFor="saker-search"
              className="smallcaps text-ink-mute shrink-0"
            >
              Søk
            </label>
            <input
              id="saker-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tittel, publikasjon, emneknagg, …"
              className="w-full md:max-w-md bg-transparent border-b border-rule focus:border-amber outline-none py-2 font-sans text-base text-ink placeholder:text-ink-mute transition-colors"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <FilterRow
            label="Tema"
            chips={temaList}
            active={tema}
            onPick={(v) => setFilter("tema", v)}
          />
          <FilterRow
            label="Sjanger"
            chips={sjangerList}
            active={sjanger}
            onPick={(v) => setFilter("sjanger", v)}
          />
          {hasActiveFilter && (
            <button
              type="button"
              onClick={clearAll}
              className="mt-4 font-sans text-xs uppercase tracking-[0.18em] text-ink-mute hover:text-amber transition-colors"
            >
              ← Alle saker ({saker.length})
            </button>
          )}
        </div>
      </section>

      {/* ARTICLE LIST */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        {filtered.length === 0 ? (
          <div className="border-t border-rule pt-12 text-center">
            <p className="font-serif text-2xl leading-snug text-ink-soft">
              Ingen saker matcher dette filteret.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-5 font-sans text-sm uppercase tracking-[0.18em] text-amber glow"
            >
              Vis alle saker →
            </button>
          </div>
        ) : (
          <div className="border-t border-rule">
            {filtered.map((sak, i) => (
              // Re-key by filter signature so each filter change replays Reveal.
              <Reveal
                key={`${tema ?? ""}-${sjanger ?? ""}-${query}-${sak.slug}`}
                delay={i * 80}
              >
                <Link
                  href={`/saker/${sak.slug}`}
                  className="group grid lg:grid-cols-12 gap-6 items-start py-10 border-b border-rule hover:bg-bg-elev/40 transition-colors px-2 -mx-2"
                >
                  <div className="lg:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute pt-1">
                    {i + 1}
                  </div>
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[3/2] overflow-hidden border border-rule bg-bg-elev">
                      <Image
                        src={sak.hovedbilde}
                        alt={sak.bildetekst}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-3">
                      {sak.publikasjon} · {sak.dato}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink group-hover:text-amber transition-colors">
                      {sak.tittel}
                    </h2>
                    <p className="mt-4 text-ink-soft text-lg leading-relaxed max-w-2xl">
                      {sak.ingress}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2 items-center">
                      <span className="smallcaps text-amber border border-amber/40 px-2 py-0.5 rounded-full">
                        {sak.lesetidMinutter} min lesing
                      </span>
                      {sak.emneknagger.map((tag) => (
                        <span
                          key={tag}
                          className="smallcaps text-ink-mute border border-rule px-2 py-0.5 rounded-full"
                        >
                          {tagLabel(tag)}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function FilterRow({
  label,
  chips,
  active,
  onPick,
}: {
  label: string;
  chips: TagId[];
  active: TagId | null;
  onPick: (value: TagId) => void;
}) {
  if (chips.length === 0) return null;
  return (
    <div className="mb-5 flex flex-col gap-3 last:mb-0 md:flex-row md:items-center md:gap-5">
      <span className="smallcaps text-ink-mute shrink-0">{label}</span>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => {
          const isActive = active === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onPick(c)}
              aria-pressed={isActive}
              className={
                isActive
                  ? "smallcaps bg-amber text-bg border border-amber px-3 py-1.5 rounded-full transition-colors"
                  : "tile-hover-amber smallcaps text-ink-soft border border-rule bg-bg-elev px-3 py-1.5 rounded-full transition-colors"
              }
            >
              {tagLabel(c)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
