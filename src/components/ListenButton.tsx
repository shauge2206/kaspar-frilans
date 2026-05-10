"use client";
import { useState } from "react";

export function ListenButton({ minutes }: { minutes: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft border border-rule rounded-full px-3 py-2 inline-flex items-center gap-2 hover:text-amber hover:border-amber transition"
        aria-expanded={open}
      >
        <span
          aria-hidden
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: "var(--amber)" }}
        />
        Hør artikkelen · {minutes} min
      </button>
      {open ? (
        <div className="absolute z-30 mt-2 w-64 right-0 border border-rule bg-bg-elev p-3 font-sans text-sm text-ink-soft shadow-xl">
          <p className="leading-relaxed">
            Lydversjon kommer snart. Vil du varsles når den er klar?{" "}
            <a
              href="mailto:kaspar@hauge.no?subject=Lydversjon"
              className="text-amber glow"
            >
              Send en e-post
            </a>
            .
          </p>
        </div>
      ) : null}
    </div>
  );
}
