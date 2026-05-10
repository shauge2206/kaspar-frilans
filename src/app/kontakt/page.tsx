import Link from "next/link";

export const metadata = {
  title: "Kontakt — Kaspar Knudsen · Magasinet",
  description:
    "Kontakt Kaspar Knudsen, frilansjournalist i Bergen. USF Verftet, Nordnes.",
};

export default function KontaktPage() {
  const subject = encodeURIComponent("Henvendelse fra magasinet");
  const body = encodeURIComponent(
    "Hei Kaspar,\n\nJeg tok kontakt fordi …\n\nMvh,\n",
  );

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-12 py-10 lg:py-16">
      {/* Header */}
      <div className="border-b border-ink/70 pb-3 flex items-baseline justify-between text-[0.78rem] smallcaps">
        <span>Volum I · Nr. 1</span>
        <span>Brev til redaksjonen</span>
        <span>Side 99</span>
      </div>

      {/* Title */}
      <header className="mt-12 lg:mt-16 grid gap-8 lg:grid-cols-[1fr_2fr] items-end">
        <p className="smallcaps text-[0.78rem] text-accent">
          Kontakt
        </p>
        <h1 className="font-display text-[clamp(3rem,7.5vw,6.4rem)] leading-[0.92] tracking-tight">
          Skriv til
          <br />
          <em className="font-medium">redaksjonen.</em>
        </h1>
      </header>

      <p className="mt-8 max-w-2xl font-display italic text-[1.4rem] leading-snug text-ink-soft">
        Tips, oppdrag og samtaler om samarbeid mottas alltid. Skriv
        direkte fra denne siden, eller ta turen innom kontoret på
        Nordnes.
      </p>

      {/* Two columns: address card / contact form */}
      <section className="mt-16 lg:mt-20 grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.4fr]">
        {/* Address card */}
        <aside>
          <div className="border-t-2 border-ink pt-4">
            <span className="smallcaps text-[0.7rem] text-accent">
              Adresse
            </span>
            <p className="mt-3 font-display text-[1.6rem] leading-tight tracking-tight">
              USF Verftet
            </p>
            <p className="mt-1 font-serif text-[1rem] leading-relaxed text-ink-soft">
              Georgernes Verft 12
              <br />
              5011 Bergen, Nordnes
            </p>
          </div>

          <div className="mt-10 border-t border-rule pt-4">
            <span className="smallcaps text-[0.7rem] text-ink-soft">
              Direkte
            </span>
            <ul className="mt-3 space-y-2 text-[1rem]">
              <li className="flex justify-between gap-4 border-b border-rule pb-1.5">
                <span className="smallcaps text-[0.7rem] text-ink-soft">
                  E-post
                </span>
                <a
                  className="under-link"
                  href="mailto:post@kasparhauge.no"
                >
                  post@kasparhauge.no
                </a>
              </li>
              <li className="flex justify-between gap-4 border-b border-rule pb-1.5">
                <span className="smallcaps text-[0.7rem] text-ink-soft">
                  Telefon
                </span>
                <a className="under-link" href="tel:+4798765432">
                  +47 98 76 54 32
                </a>
              </li>
              <li className="flex justify-between gap-4">
                <span className="smallcaps text-[0.7rem] text-ink-soft">
                  Kontortid
                </span>
                <span>Man – fre · 09–17</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 border-t border-rule pt-4">
            <span className="smallcaps text-[0.7rem] text-ink-soft">
              Nettverk
            </span>
            <p className="mt-3 font-serif text-[1rem] leading-relaxed text-ink-soft">
              Medlem av Norsk Journalistlag. Nettverk fra 15 år i
              Bergens-medier. Samarbeider gjerne med andre
              frilansere på større graveprosjekter.
            </p>
          </div>
        </aside>

        {/* Form */}
        <form
          action="mailto:post@kasparhauge.no"
          method="post"
          encType="text/plain"
          className="grid gap-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="smallcaps text-[0.7rem] text-ink-soft">
                Avsender
              </span>
              <input
                required
                name="navn"
                type="text"
                placeholder="Ditt navn"
                className="border-b border-ink/60 bg-transparent py-2 font-serif text-[1rem] outline-none focus:border-accent"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="smallcaps text-[0.7rem] text-ink-soft">
                E-post
              </span>
              <input
                required
                name="epost"
                type="email"
                placeholder="navn@redaksjon.no"
                className="border-b border-ink/60 bg-transparent py-2 font-serif text-[1rem] outline-none focus:border-accent"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="smallcaps text-[0.7rem] text-ink-soft">
              Emne
            </span>
            <input
              name="emne"
              type="text"
              placeholder="Tips · oppdrag · samarbeid"
              className="border-b border-ink/60 bg-transparent py-2 font-serif text-[1rem] outline-none focus:border-accent"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="smallcaps text-[0.7rem] text-ink-soft">
              Beskjed
            </span>
            <textarea
              required
              name="beskjed"
              rows={7}
              placeholder="Fortell kort hva det gjelder. Jeg svarer som regel innen 24 timer."
              className="border-b border-ink/60 bg-transparent py-2 font-serif text-[1rem] leading-relaxed outline-none focus:border-accent resize-none"
            />
          </label>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-between gap-6 border border-ink/80 px-6 py-4 smallcaps tracking-[0.2em] text-[0.84rem] hover:bg-ink hover:text-paper transition-colors"
            >
              Send brev
              <span aria-hidden>→</span>
            </button>
            <a
              href={`mailto:post@kasparhauge.no?subject=${subject}&body=${body}`}
              className="smallcaps tracking-[0.2em] text-[0.82rem] under-link"
            >
              Eller åpne i e-postklient ↗
            </a>
          </div>

          <p className="mt-2 italic text-[0.9rem] text-ink-soft">
            Tips behandles fortrolig. Sensitive opplysninger bør sendes
            kryptert — ta gjerne kontakt på telefon først for å avtale.
          </p>
        </form>
      </section>

      {/* Footer cue */}
      <div className="mt-24 border-t border-ink/70 pt-3 flex items-baseline justify-between text-[0.78rem] smallcaps">
        <span>Slutt på utgaven</span>
        <Link href="/" className="under-link">
          ← Tilbake til forsiden
        </Link>
        <span>Side 100</span>
      </div>
    </div>
  );
}
