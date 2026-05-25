"use client";
import { useState } from "react";

const emner = [
  "Reportasje",
  "Featurejournalistikk",
  "Gravesak",
  "Foto",
  "Tips til en sak",
  "Annet",
];

export function ContactForm() {
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [emne, setEmne] = useState(emner[0]);
  const [melding, setMelding] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[${emne}] ${navn || "Henvendelse"}`);
    const body = encodeURIComponent(
      `${melding}\n\n– ${navn}\n${epost}`,
    );
    window.location.href = `mailto:post@kasparknudsen.no?subject=${subject}&body=${body}`;
  }

  const inputCls =
    "w-full bg-transparent border-b border-rule focus:border-amber outline-none py-3 font-sans text-base text-ink placeholder:text-ink-mute transition-colors";

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-7">
      <div>
        <label
          htmlFor="navn"
          className="smallcaps text-ink-mute block mb-2"
        >
          Navn
        </label>
        <input
          id="navn"
          type="text"
          required
          value={navn}
          onChange={(e) => setNavn(e.target.value)}
          placeholder="Ditt navn"
          className={inputCls}
        />
      </div>
      <div>
        <label
          htmlFor="epost"
          className="smallcaps text-ink-mute block mb-2"
        >
          E-post
        </label>
        <input
          id="epost"
          type="email"
          required
          value={epost}
          onChange={(e) => setEpost(e.target.value)}
          placeholder="navn@redaksjon.no"
          className={inputCls}
        />
      </div>
      <div>
        <label
          htmlFor="emne"
          className="smallcaps text-ink-mute block mb-2"
        >
          Emne
        </label>
        <select
          id="emne"
          value={emne}
          onChange={(e) => setEmne(e.target.value)}
          className={`${inputCls} cursor-pointer`}
        >
          {emner.map((e) => (
            <option key={e} value={e} className="bg-bg-elev text-ink">
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="melding"
          className="smallcaps text-ink-mute block mb-2"
        >
          Melding
        </label>
        <textarea
          id="melding"
          required
          rows={6}
          value={melding}
          onChange={(e) => setMelding(e.target.value)}
          placeholder="Hva trenger redaksjonen, og når?"
          className={`${inputCls} resize-none`}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
          USF Verftet · Bergen
        </p>
        <button
          type="submit"
          className="font-sans text-sm bg-amber text-bg px-6 py-3.5 rounded-full hover:brightness-110 transition inline-flex items-center gap-2"
        >
          Send melding
          <span aria-hidden>↗</span>
        </button>
      </div>
    </form>
  );
}
