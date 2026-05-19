"use client";

import { useState } from "react";
import { Paperclip } from "@/components/Decor";

const TO = "kaspar@knudsen.no";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      body.trim(),
      "",
      "—",
      name.trim() ? `Fra: ${name.trim()}` : null,
      email.trim() ? `E-post: ${email.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const subj = subject.trim() || "Henvendelse via kaspar.no";
    const href = `mailto:${TO}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(lines)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="paper-card p-6 md:p-8 relative"
      style={{ transform: "rotate(-0.4deg)" }}
      aria-label="Kontaktskjema"
    >
      <Paperclip
        className="absolute -top-6 left-8 w-5 h-14 z-10"
        style={{ transform: "rotate(-8deg)" }}
      />
      <p className="typewriter text-[0.7rem] tracking-[0.22em] text-ink-fade uppercase">
        Skriv en henvendelse
      </p>
      <p className="handwritten text-pen-blue text-2xl mt-2 leading-snug">
        Send meg en melding
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="typewriter text-[0.7rem] tracking-[0.16em] uppercase text-ink-fade">
            Navn
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={120}
            autoComplete="name"
            className="mt-1 block w-full bg-transparent border-0 border-b border-ink/40 focus:border-pen-red focus:outline-none py-2 text-lg leading-snug transition-colors"
          />
        </label>
        <label className="block">
          <span className="typewriter text-[0.7rem] tracking-[0.16em] uppercase text-ink-fade">
            E-post
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={200}
            autoComplete="email"
            className="mt-1 block w-full bg-transparent border-0 border-b border-ink/40 focus:border-pen-red focus:outline-none py-2 text-lg leading-snug transition-colors"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="typewriter text-[0.7rem] tracking-[0.16em] uppercase text-ink-fade">
          Emne
        </span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          maxLength={200}
          placeholder="Sak, oppdrag eller samarbeid"
          className="mt-1 block w-full bg-transparent border-0 border-b border-ink/40 focus:border-pen-red focus:outline-none py-2 text-lg leading-snug placeholder:text-ink-fade transition-colors"
        />
      </label>

      <label className="mt-5 block">
        <span className="typewriter text-[0.7rem] tracking-[0.16em] uppercase text-ink-fade">
          Melding
        </span>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={6}
          maxLength={4000}
          placeholder="Hyggelig at du tar kontakt. Skriv noen ord om saken, oppdraget eller hva du tenker på – jeg svarer som regel innen ett døgn."
          className="mt-1 block w-full bg-transparent border border-ink/30 focus:border-pen-red focus:outline-none p-3 text-lg leading-relaxed placeholder:text-ink-fade transition-colors resize-y"
        />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-3 bg-ink text-paper px-5 py-3 typewriter text-[0.78rem] tracking-[0.18em] uppercase hover:bg-ink-soft transition-colors disabled:opacity-50"
          disabled={!name || !email || !body}
        >
          Send melding
          <span aria-hidden="true">→</span>
        </button>
        {sent ? (
          <span
            className="handwritten-red text-xl"
            role="status"
            aria-live="polite"
          >
            E-postklienten din ble åpnet ↗
          </span>
        ) : (
          <span className="typewriter text-[0.7rem] tracking-[0.16em] uppercase text-ink-fade">
            Åpner din e-postklient
          </span>
        )}
      </div>
    </form>
  );
}
