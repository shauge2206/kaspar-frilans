"use client";

import { useMemo, useState } from "react";

const TYPER = [
  { value: "tips", label: "Tips til en sak" },
  { value: "oppdrag", label: "Oppdragsforespørsel" },
  { value: "samarbeid", label: "Samarbeid" },
  { value: "annet", label: "Noe annet" },
] as const;

export function ContactForm() {
  const [type, setType] = useState<(typeof TYPER)[number]["value"]>("tips");
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [emne, setEmne] = useState("");
  const [melding, setMelding] = useState("");

  const mailto = useMemo(() => {
    const subjectLabel = TYPER.find((t) => t.value === type)?.label ?? "";
    const subject = `[${subjectLabel}] ${emne || "Ingen emne"}`.trim();
    const body = [
      `Fra: ${navn || "—"} <${epost || "—"}>`,
      `Type: ${subjectLabel}`,
      "",
      melding || "",
    ].join("\n");
    return `mailto:kontakt@kasparknudsen.no?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [type, navn, epost, emne, melding]);

  return (
    <form action={mailto} method="get" className="grid gap-7">
      <fieldset>
        <legend className="smallcaps text-[0.72rem] text-ink-muted mb-3">
          Type henvendelse
        </legend>
        <div className="flex flex-wrap gap-2">
          {TYPER.map((t) => {
            const active = type === t.value;
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => setType(t.value)}
                aria-pressed={active}
                className={[
                  "px-4 py-2 text-[0.78rem] tracking-meta border transition-colors",
                  active
                    ? "bg-deep text-paper border-deep"
                    : "bg-transparent text-deep border-deep/30 hover:border-deep",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-7 md:grid-cols-2">
        <Field label="Navn" htmlFor="navn">
          <input
            id="navn"
            type="text"
            value={navn}
            onChange={(e) => setNavn(e.target.value)}
            required
            className="w-full bg-transparent border-b border-deep/40 py-2 outline-none focus:border-deep transition-colors font-display text-lg text-deep"
          />
        </Field>
        <Field label="E-post" htmlFor="epost">
          <input
            id="epost"
            type="email"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
            required
            className="w-full bg-transparent border-b border-deep/40 py-2 outline-none focus:border-deep transition-colors font-display text-lg text-deep"
          />
        </Field>
      </div>

      <Field label="Emne" htmlFor="emne">
        <input
          id="emne"
          type="text"
          value={emne}
          onChange={(e) => setEmne(e.target.value)}
          required
          className="w-full bg-transparent border-b border-deep/40 py-2 outline-none focus:border-deep transition-colors font-display text-lg text-deep"
        />
      </Field>

      <Field label="Melding" htmlFor="melding">
        <textarea
          id="melding"
          value={melding}
          onChange={(e) => setMelding(e.target.value)}
          rows={6}
          required
          className="w-full bg-transparent border-b border-deep/40 py-2 outline-none focus:border-deep transition-colors font-display text-lg text-deep resize-y"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-5 pt-3">
        <button
          type="submit"
          className="inline-flex items-center gap-3 border border-deep bg-deep text-paper px-6 py-3 text-[0.78rem] tracking-meta transition-colors hover:bg-deep-rich"
        >
          Åpne i e-post
          <span aria-hidden>→</span>
        </button>
        <p className="text-[0.78rem] tracking-meta text-ink-muted">
          Sender til{" "}
          <span className="text-deep">kontakt@kasparknudsen.no</span>
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="smallcaps text-[0.72rem] text-ink-muted block mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
