"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useState } from "react";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const reduce = useReducedMotion();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-none bg-paper/80 p-7 ring-1 ring-line/70 shadow-soft transition-shadow hover:shadow-lift backdrop-blur-md md:p-10"
    >
      <Field label="Navn" name="navn" autoComplete="name" required />
      <Field
        label="E-post"
        type="email"
        name="epost"
        autoComplete="email"
        required
      />
      <Field
        label="Tema"
        name="tema"
        placeholder="Tips, oppdrag, eller noe annet?"
      />
      <Field
        label="Melding"
        name="melding"
        textarea
        rows={5}
        required
      />

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-mute">
          Sensitive opplysninger? Bruk gjerne kryptert e-post eller{" "}
          <a className="link-underline text-ink" href="https://signal.org">
            Signal
          </a>
          .
        </p>
        <motion.button
          type="submit"
          disabled={status !== "idle"}
          whileHover={reduce || status !== "idle" ? undefined : { scale: 1.02 }}
          whileTap={reduce || status !== "idle" ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="relative inline-flex items-center justify-center gap-2 self-start overflow-hidden rounded-none bg-ink px-7 py-3.5 text-sm font-medium text-paper shadow-soft transition-shadow duration-500 hover:shadow-lift disabled:opacity-90"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "idle" && (
              <motion.span
                key="idle"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2"
              >
                Send melding
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.span>
            )}
            {status === "sending" && (
              <motion.span
                key="sending"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2"
              >
                <span className="inline-block h-3 w-3 animate-spin rounded-none border-2 border-paper/40 border-t-paper" />
                Sender …
              </motion.span>
            )}
            {status === "sent" && (
              <motion.span
                key="sent"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12l5 5 9-11"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Takk – jeg svarer snart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  textarea,
  rows = 4,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  textarea?: boolean;
  rows?: number;
}) {
  const id = `field-${name}`;
  const baseClasses =
    "peer w-full rounded-none bg-paper px-4 pt-7 pb-2.5 text-base text-ink ring-1 ring-line/80 outline-none transition-all duration-300 placeholder:text-transparent focus:ring-2 focus:ring-coral-400 focus:bg-paper-2/60";

  return (
    <div className="group relative">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder ?? label}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder ?? label}
          className={baseClasses}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-mute transition-colors duration-300 peer-focus:text-coral-500"
      >
        {label}
      </label>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 bottom-0 h-[2px] origin-left scale-x-0 rounded-none bg-gradient-to-r from-coral-400 to-apricot-200 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100"
      />
    </div>
  );
}
