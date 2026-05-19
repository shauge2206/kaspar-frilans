import { TransitionLink } from "./TransitionLink";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-hairline bg-paper">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:grid-cols-12 sm:px-8">
        <div className="sm:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
            01 – Frilans · Bergen
          </p>
          <p className="mt-3 text-[18px] leading-[1.4] tracking-[-0.005em] text-ink/80">
            «Jeg drar ut i felt for å se stedene og møte menneskene jeg skriver om – det er det som gjør journalistikken nærmere.»
          </p>
        </div>

        <div className="sm:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
            02 – Indeks
          </p>
          <ul className="mt-3 space-y-2 text-[14px]">
            <li>
              <TransitionLink
                href="/saker"
                className="underline-offset-4 hover:underline"
              >
                Saker
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                href="/om"
                className="underline-offset-4 hover:underline"
              >
                Om
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                href="/kontakt"
                className="underline-offset-4 hover:underline"
              >
                Kontakt
              </TransitionLink>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
            03 – Kontakt
          </p>
          <ul className="mt-3 space-y-2 text-[14px]">
            <li>
              <a
                href="mailto:post@kasparknudsen.no"
                className="underline-offset-4 hover:underline"
              >
                post@kasparknudsen.no
              </a>
            </li>
            <li className="text-[13px] text-ink/60">
              USF Verftet, Nordnes, Bergen
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {year} – Kaspar Knudsen</span>
          <span>Idé 07 · Precision Monochrome</span>
        </div>
      </div>
    </footer>
  );
}
