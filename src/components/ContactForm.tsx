"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "motion/react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isPending, startTransition] = useTransition();

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("navn") || !data.get("epost") || !data.get("melding")) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    startTransition(() => {
      window.setTimeout(() => {
        setStatus("sent");
        form.reset();
      }, 900);
    });
  }

  const pill = (() => {
    switch (status) {
      case "sending":
        return { label: "Sender…", dot: "bg-ink/60 animate-pulse" };
      case "sent":
        return { label: "Sendt — takk", dot: "bg-ink" };
      case "error":
        return { label: "Fyll ut alle felter", dot: "bg-ink" };
      default:
        return { label: "Klar", dot: "bg-ink/30" };
    }
  })();

  return (
    <form
      onSubmit={submit}
      noValidate
      className="grid grid-cols-12 gap-x-6 gap-y-2"
    >
      <Field
        name="navn"
        label="Navn"
        index="01"
        type="text"
        autoComplete="name"
        className="col-span-12 sm:col-span-6"
      />
      <Field
        name="epost"
        label="E-post"
        index="02"
        type="email"
        autoComplete="email"
        className="col-span-12 sm:col-span-6"
      />
      <Field
        name="emne"
        label="Emne"
        index="03"
        type="text"
        optional
        className="col-span-12"
      />
      <FieldTextarea
        name="melding"
        label="Melding"
        index="04"
        className="col-span-12"
      />

      <div className="col-span-12 mt-4 flex flex-col gap-4 border-t border-hairline pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-2 border border-hairline px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={pill.label}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <span aria-hidden className={`inline-block h-1.5 w-1.5 ${pill.dot}`} />
              {pill.label}
            </motion.span>
          </AnimatePresence>
        </div>

        <button
          type="submit"
          disabled={isPending || status === "sending"}
          className="focus-ring relative inline-flex h-12 items-center bg-ink px-6 text-[13px] font-medium tracking-wide text-paper transition-transform duration-150 hover:scale-[1.015] disabled:opacity-60"
        >
          Send melding
          <span
            aria-hidden
            className="ml-3 inline-block h-1 w-1 translate-y-[0.5px] bg-paper"
          />
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  index: string;
  type: string;
  autoComplete?: string;
  optional?: boolean;
  className?: string;
};

function Field({
  name,
  label,
  index,
  type,
  autoComplete,
  optional,
  className,
}: FieldProps) {
  return (
    <label className={`group block ${className ?? ""}`}>
      <span className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
        <span>
          {index} · {label}
        </span>
        {optional ? <span className="text-ink/35">valgfritt</span> : null}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={!optional}
        className="mt-2 h-11 w-full border-0 border-b border-hairline bg-transparent text-[15px] text-ink outline-none transition-colors duration-200 focus:border-ink"
      />
    </label>
  );
}

function FieldTextarea({
  name,
  label,
  index,
  className,
}: {
  name: string;
  label: string;
  index: string;
  className?: string;
}) {
  return (
    <label className={`group block ${className ?? ""}`}>
      <span className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
        <span>
          {index} · {label}
        </span>
      </span>
      <textarea
        name={name}
        rows={6}
        required
        className="mt-2 w-full resize-none border-0 border-b border-hairline bg-transparent py-2 text-[15px] leading-[1.6] text-ink outline-none transition-colors duration-200 focus:border-ink"
      />
    </label>
  );
}
