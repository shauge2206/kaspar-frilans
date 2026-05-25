"use client";

import { useState } from "react";

type Props = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = "Kopier tekst" }: Props) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("ok");
    } catch {
      setState("err");
    }
    setTimeout(() => setState("idle"), 1800);
  }

  const display =
    state === "ok"
      ? "Kopiert ✓"
      : state === "err"
        ? "Klarte ikke kopiere"
        : label;

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="font-sans text-[11px] uppercase tracking-[0.18em] text-ink-mute hover:text-amber transition-colors border border-rule hover:border-amber px-3 py-1.5 rounded-full bg-bg-elev"
    >
      {display}
    </button>
  );
}
