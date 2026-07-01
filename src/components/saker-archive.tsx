"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Sak } from "@/lib/saker";
import { TAGS, type TagId, tagLabel } from "@/lib/tags";
import { Reveal } from "./reveal";

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
  const tema =
    isTagId(temaParam) && TAGS[temaParam].group === "tema" ? temaParam : null;
  const sjanger =
    isTagId(sjangerParam) && TAGS[sjangerParam].group === "sjanger"
      ? sjangerParam
      : null;
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

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
      <section className="relative px-6 pb-10 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-[var(--radius-card)] bg-paper/70 p-6 ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift backdrop-blur-sm md:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
              <label
                htmlFor="saker-search"
                className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute"
              >
                Søk
              </label>
              <input
                id="saker-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tittel, publikasjon, emneknagg, …"
                className="w-full md:max-w-md bg-transparent border-b border-line/70 focus:border-coral-400 outline-none py-2 text-base text-ink placeholder:text-mute transition-colors"
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
                className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute transition-colors hover:text-coral-500"
              >
                ← Alle saker ({saker.length})
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          {filtered.length === 0 ? (
            <div className="rounded-[var(--radius-card)] bg-paper/70 px-6 py-16 text-center ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift backdrop-blur-sm">
              <p className="font-display text-2xl leading-snug text-ink-2">
                Ingen saker matcher dette filteret.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-5 link-underline font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500"
              >
                Vis alle saker →
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-line/60 border-y border-line/60">
              {filtered.map((sak, i) => (
                <Reveal
                  key={`${tema ?? ""}-${sjanger ?? ""}-${query}-${sak.slug}`}
                  delay={i * 0.08}
                >
                  <Link
                    href={`/saker/${sak.slug}`}
                    className="group grid items-stretch gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-12"
                    aria-label={`${sak.tittel}, ${sak.publikasjon}, ${sak.dato}`}
                  >
                    <div className="md:col-span-1">
                      <span className="font-mono text-xs uppercase tracking-[0.22em] text-mute">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="md:col-span-4">
                      <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-card)] bg-paper-2 ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift">
                        <Image
                          src={sak.hovedbilde}
                          alt={sak.bilder[0]?.tekst ?? sak.tittel}
                          fill
                          sizes="(min-width: 768px) 420px, 100vw"
                          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-7 flex flex-col justify-between gap-6 md:py-2">
                      <div>
                        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-coral-500">
                          {sak.publikasjon}
                          {sak.emneknagger[0]
                            ? ` · ${tagLabel(sak.emneknagger[0])}`
                            : ""}
                        </p>
                        <h2 className="mt-3 font-display text-[clamp(1.6rem,2vw+1rem,2.8rem)] font-medium leading-[1.08] tracking-tight text-ink transition-colors group-hover:text-coral-600">
                          {sak.tittel}
                        </h2>
                        <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-relaxed text-ink-2">
                          {sak.ingress}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-mute">
                        <p className="font-mono uppercase tracking-[0.18em]">
                          <time dateTime={sak.datoIso}>{sak.dato}</time> ·{" "}
                          <span className="text-coral-500">
                            {sak.lesetidMinutter} min lesing
                          </span>
                        </p>
                        <span
                          aria-hidden
                          className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink transition-transform duration-500 group-hover:translate-x-1.5"
                        >
                          Les saken
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M5 12h14M13 6l6 6-6 6"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
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
    <div className="mb-4 flex flex-col gap-3 last:mb-0 md:flex-row md:items-center md:gap-5">
      <span className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
        {label}
      </span>
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
                  ? "rounded-none bg-ink px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-paper shadow-soft transition-colors"
                  : "rounded-none bg-paper px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-2 ring-1 ring-line/70 transition-colors hover:bg-paper-2 hover:text-ink"
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
