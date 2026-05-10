"use client";

import { useState } from "react";

export default function KontaktForm() {
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [emne, setEmne] = useState("Oppdrag");
  const [melding, setMelding] = useState("");

  const buildMailto = () => {
    const subject = `${emne} fra ${navn || "kontaktskjema"}`;
    const body = `${melding}\n\n— ${navn}\n${epost}`;
    return `mailto:kaspar@kasparknudsen.no?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = buildMailto();
  };

  return (
    <form className="mt-8 space-y-7" onSubmit={onSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <Felt
          label="Ditt navn"
          id="navn"
          value={navn}
          onChange={setNavn}
          required
        />
        <Felt
          label="E-post"
          id="epost"
          type="email"
          value={epost}
          onChange={setEpost}
          required
        />
      </div>

      <div>
        <p className="smallcaps text-fg-muted text-[0.7rem] mb-3">
          Henvendelsen gjelder
        </p>
        <div className="flex flex-wrap gap-2">
          {["Oppdrag", "Tips", "Samarbeid", "Annet"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setEmne(opt)}
              className={`smallcaps px-4 py-2 border transition-colors ${
                emne === opt
                  ? "border-amber text-amber"
                  : "border-rule text-fg-muted hover:text-fg hover:border-fg/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="melding"
          className="smallcaps text-fg-muted text-[0.7rem] block mb-3"
        >
          Melding
        </label>
        <textarea
          id="melding"
          required
          rows={6}
          value={melding}
          onChange={(e) => setMelding(e.target.value)}
          className="w-full bg-transparent border border-rule focus:border-amber outline-none px-4 py-3 font-display text-lg leading-relaxed transition-colors placeholder:text-fg-muted/60"
          placeholder="Skriv noen ord om saken — jeg svarer som regel innen et døgn."
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-fg-muted max-w-md">
          Skjemaet åpner e-postprogrammet ditt med innholdet. Foretrekker
          du kryptert kanal, send en melding på Signal i stedet.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-3 border border-amber px-7 py-4 smallcaps text-amber transition-colors hover:bg-amber hover:text-bg"
        >
          Send melding
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

type FeltProps = {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
};

function Felt({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
}: FeltProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="smallcaps text-fg-muted text-[0.7rem] block mb-3"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border border-rule focus:border-amber outline-none px-4 py-3 font-display text-lg transition-colors"
      />
    </div>
  );
}
