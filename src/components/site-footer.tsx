import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="smallcaps text-[0.72rem] text-ink-soft">
            Kolofon
          </div>
          <p className="mt-3 font-display text-[1.55rem] leading-tight tracking-tight">
            Kaspar Knudsen
            <br />
            <span className="italic text-ink-soft">
              Frilansjournalist, Bergen
            </span>
          </p>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
            Et selvstendig magasin for gravejournalistikk og reportasjer fra
            felt. Drives fra USF Verftet på Nordnes — siden 2026.
          </p>
        </div>

        <div>
          <div className="smallcaps text-[0.72rem] text-ink-soft">Adresse</div>
          <p className="mt-3 leading-relaxed">
            USF Verftet
            <br />
            Georgernes Verft 12
            <br />
            5011 Bergen
          </p>
        </div>

        <div>
          <div className="smallcaps text-[0.72rem] text-ink-soft">
            Kontakt
          </div>
          <ul className="mt-3 space-y-1.5">
            <li>
              <a
                className="under-link"
                href="mailto:post@kasparhauge.no"
              >
                post@kasparhauge.no
              </a>
            </li>
            <li>
              <Link className="under-link" href="/kontakt">
                Skriv til redaksjonen
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-4 text-[0.76rem]">
          <span className="smallcaps text-ink-soft">
            © Kaspar Knudsen · Volum I · Nr. 1 · 2026
          </span>
          <span className="smallcaps text-ink-soft">
            Trykket på papir av nøysom kvalitet
          </span>
        </div>
      </div>
    </footer>
  );
}
