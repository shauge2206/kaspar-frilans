"use client";

import { useMemo, useState } from "react";

export function ContactForm() {
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [emne, setEmne] = useState("");
  const [melding, setMelding] = useState("");

  const mailto = useMemo(() => {
    const subject = (emne || "Ingen emne").trim();
    const body = [
      `Fra: ${navn || "—"} <${epost || "—"}>`,
      "",
      melding || "",
    ].join("\n");
    return `mailto:post@kaspar.no?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [navn, epost, emne, melding]);

  return (
    <form
      action={mailto}
      method="get"
      className="grid gap-6"
      onSubmit={(e) => {
        // browser will follow the action mailto when used as form action
        // no-op here
        void e;
      }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Navn" htmlFor="navn">
          <input
            id="navn"
            type="text"
            value={navn}
            onChange={(e) => setNavn(e.target.value)}
            required
            className="w-full bg-transparent border-b border-ink py-2 outline-none focus:border-accent transition-colors font-serif text-lg"
          />
        </Field>
        <Field label="E-post" htmlFor="epost">
          <input
            id="epost"
            type="email"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
            required
            className="w-full bg-transparent border-b border-ink py-2 outline-none focus:border-accent transition-colors font-serif text-lg"
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
          className="w-full bg-transparent border-b border-ink py-2 outline-none focus:border-accent transition-colors font-serif text-lg"
        />
      </Field>

      <Field label="Melding" htmlFor="melding">
        <textarea
          id="melding"
          value={melding}
          onChange={(e) => setMelding(e.target.value)}
          rows={6}
          required
          className="w-full bg-transparent border-b border-ink py-2 outline-none focus:border-accent transition-colors font-serif text-lg resize-y"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-5 pt-3">
        <button
          type="submit"
          className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 smallcaps hover:bg-accent transition-colors"
        >
          Åpne i e-post
          <span aria-hidden>→</span>
        </button>
        <p className="dateline text-ink-mute">
          Skjemaet sender til <span className="text-ink">post@kaspar.no</span>
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
      <span className="smallcaps text-ink-mute block mb-1">{label}</span>
      {children}
    </label>
  );
}
