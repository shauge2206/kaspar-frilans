"use client";

import { useState, type FormEvent } from "react";

const KIND_OPTIONS = [
  { value: "tips", label: "Tips" },
  { value: "redaksjon", label: "Redaksjon" },
  { value: "oppdrag", label: "Oppdrag" },
  { value: "annet", label: "Annet" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kind, setKind] = useState("tips");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Henvendelse — ${KIND_OPTIONS.find((k) => k.value === kind)?.label ?? "Annet"}`;
    const body = `Fra: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:kaspar@kasparknudsen.no?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-foreground pt-10"
    >
      <Field
        label="Navn"
        n="01"
        className="col-span-12 md:col-span-6"
      >
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          className="w-full bg-transparent border-0 border-b border-foreground py-2 font-serif text-xl tracking-tight outline-none focus:border-accent placeholder:text-muted"
          placeholder="For- og etternavn"
        />
      </Field>

      <Field
        label="E-post"
        n="02"
        className="col-span-12 md:col-span-6"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="w-full bg-transparent border-0 border-b border-foreground py-2 font-serif text-xl tracking-tight outline-none focus:border-accent placeholder:text-muted"
          placeholder="navn@eksempel.no"
        />
      </Field>

      <Field label="Type henvendelse" n="03" className="col-span-12">
        <div className="flex flex-wrap gap-2 pt-2">
          {KIND_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setKind(opt.value)}
              className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-[letter-spacing] duration-200 hover:tracking-[0.2em] ${
                kind === opt.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-hairline text-foreground hover:border-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Melding" n="04" className="col-span-12">
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y bg-transparent border-0 border-b border-foreground py-2 font-serif text-xl leading-snug tracking-tight outline-none focus:border-accent placeholder:text-muted"
          placeholder="Skriv kort hva henvendelsen gjelder."
        />
      </Field>

      <div className="col-span-12 mt-6 flex flex-col gap-6 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted max-w-md">
          Skjemaet åpner et utkast i din e-postklient. Ingen data lagres
          på denne nettsiden.
        </p>
        <button
          type="submit"
          className="link-rule self-start font-mono text-xs uppercase tracking-[0.22em] text-foreground sm:self-auto"
        >
          Send melding →
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  n,
  children,
  className = "",
}: {
  label: string;
  n: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted tnum">
          {n}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          {label}
        </span>
      </div>
      <div className="mt-2">{children}</div>
    </label>
  );
}
