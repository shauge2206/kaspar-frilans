import type { Metadata } from "next";
import { Stamp } from "@/components/stamp";

export const metadata: Metadata = {
  title: "Kontakt — Kaspar Knudsen",
  description:
    "Kontaktinformasjon til frilansjournalist Kaspar Knudsen. USF Verftet, Nordnes, Bergen.",
};

const subjects = [
  "Forespørsel om oppdrag",
  "Tips til en sak",
  "Periode-jobb i redaksjon",
  "Sitat eller henvendelse om publisert sak",
  "Annet",
];

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10 pb-24">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
        KH-ARKIV / POSTSKJEMA
      </div>

      <div className="mt-6 grid lg:grid-cols-12 gap-10 items-start">
        {/* contact form — like a typed memo form */}
        <div className="lg:col-span-7">
          <div className="paper p-6 md:p-10 relative">
            <span className="tape -top-3 left-12 -rotate-3" />
            <span className="tape -top-3 right-16 rotate-3" />

            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              POSTSKJEMA · KH-2026
            </p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
              Send en melding
            </h1>
            <p className="mt-3 text-ink-soft max-w-xl">
              Skriv kort hva det gjelder. Skjemaet åpner i din e-postklient.
            </p>

            <Form />

            <div className="mt-8 border-t border-ink/15 pt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  E-POST
                </p>
                <p className="mt-1">
                  <a
                    href="mailto:kaspar@knudsen.no"
                    className="underline decoration-stamp/40 hover:text-stamp"
                  >
                    kaspar@knudsen.no
                  </a>
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  TELEFON
                </p>
                <p className="mt-1 font-mono text-sm">+47 ▮▮▮ ▮▮ ▮▮▮</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  ORG.NR.
                </p>
                <p className="mt-1 font-mono text-sm">932 ▮▮▮ ▮▮▮ MVA</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  KONTOR
                </p>
                <p className="mt-1">USF Verftet, Nordnes</p>
              </div>
            </div>
          </div>
        </div>

        {/* sidebar: address card + map */}
        <aside className="lg:col-span-5 space-y-7">
          <div className="paper p-6 relative -rotate-[1deg]">
            <span className="tape -top-3 right-10 rotate-2" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              KONTORADRESSE
            </p>
            <p className="mt-3 font-serif text-3xl leading-tight">
              USF Verftet
            </p>
            <p className="mt-1 text-ink-soft">
              Georgernes Verft 12
              <br />
              5011 Bergen
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-stamp">
              NORDNES · BERGEN · NORGE
            </p>

            <div className="mt-5 absolute -bottom-4 -right-3">
              <Stamp rotate={-9}>BESØKSADRESSE</Stamp>
            </div>
          </div>

          {/* faux map */}
          <div className="paper p-2">
            <div
              className="relative aspect-[4/3] overflow-hidden border border-ink/15"
              style={{
                backgroundColor: "#e6decb",
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(107,79,42,0.18) 0, rgba(107,79,42,0.18) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(107,79,42,0.18) 0, rgba(107,79,42,0.18) 1px, transparent 1px, transparent 24px), radial-gradient(ellipse at 30% 60%, rgba(107,79,42,0.18) 0, transparent 38%), radial-gradient(ellipse at 70% 30%, rgba(107,79,42,0.14) 0, transparent 30%)",
              }}
            >
              {/* coastline */}
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <path
                  d="M0,180 C40,160 80,210 130,200 S210,150 250,170 320,220 400,200 L400,300 L0,300 Z"
                  fill="rgba(107,79,42,0.18)"
                  stroke="rgba(60,40,18,0.4)"
                  strokeWidth="1.2"
                />
                <path
                  d="M0,90 C60,80 90,110 150,95 S260,60 330,80 380,100 400,95"
                  fill="none"
                  stroke="rgba(60,40,18,0.3)"
                  strokeDasharray="3 3"
                />
                {/* X marks the spot */}
                <g transform="translate(200 130)">
                  <circle r="14" fill="rgba(139,31,31,0.18)" />
                  <line x1="-7" y1="-7" x2="7" y2="7" stroke="#8b1f1f" strokeWidth="2.2" />
                  <line x1="-7" y1="7" x2="7" y2="-7" stroke="#8b1f1f" strokeWidth="2.2" />
                </g>
              </svg>

              <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted bg-paper/70 px-1.5 py-0.5">
                BERGEN — NORDNES
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-stamp bg-paper/70 px-1.5 py-0.5">
                ✕ USF VERFTET
              </div>
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted text-center">
              KART · IKKE I MÅLESTOKK
            </p>
          </div>

          <div className="border border-dashed border-ink/30 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stamp">
              KILDEVERN
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Journalister har taushetsplikt om kilder. Tips kan sendes
              anonymt.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Form() {
  // Simple HTML mailto form. No JS needed — meets brief.
  return (
    <form
      method="post"
      action={`mailto:kaspar@knudsen.no`}
      encType="text/plain"
      className="mt-7 grid gap-4 font-mono text-sm"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Navn" name="navn" />
        <Field label="E-post" name="epost" type="email" />
      </div>
      <Field label="Redaksjon eller selskap" name="redaksjon" required={false} />

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          Henvendelse gjelder
        </span>
        <select
          name="emne"
          className="mt-1 w-full bg-paper border border-ink/25 px-3 py-2 font-mono text-sm focus:outline-none focus:border-stamp"
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          Melding
        </span>
        <textarea
          name="melding"
          rows={6}
          required
          className="mt-1 w-full bg-paper border border-ink/25 px-3 py-2 font-mono text-sm leading-relaxed focus:outline-none focus:border-stamp"
          placeholder="Skriv din melding her..."
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
          Skjemaet åpner i din e-postklient
        </p>
        <button type="submit" className="btn">Send melding →</button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
        {label} {required ? "*" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full bg-paper border border-ink/25 px-3 py-2 font-mono text-sm focus:outline-none focus:border-stamp"
      />
    </label>
  );
}
