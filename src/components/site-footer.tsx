import Link from "next/link";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-line/70 bg-paper/60 backdrop-blur-sm">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-[1.25rem] leading-snug tracking-tight text-ink italic">
            «Jeg drar ut i felt for å se stedene og møte menneskene jeg
            skriver om – det er det som gjør journalistikken{" "}
            <span className="text-coral-500">nærmere.»</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            Kaspar Knudsen – frilansjournalist i Bergen.
            USF Verftet, Nordnes.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute">
            Sider
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="link-underline text-ink-2 hover:text-ink">
                Forside
              </Link>
            </li>
            <li>
              <Link
                href="/saker"
                className="link-underline text-ink-2 hover:text-ink"
              >
                Saker
              </Link>
            </li>
            <li>
              <Link href="/om" className="link-underline text-ink-2 hover:text-ink">
                Om
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="link-underline text-ink-2 hover:text-ink"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:post@kasparknudsen.no"
                className="link-underline text-ink-2 hover:text-ink"
              >
                post@kasparknudsen.no
              </a>
            </li>
            <li>
              <a
                href="tel:+4790000000"
                className="link-underline text-ink-2 hover:text-ink"
              >
                +47 900 00 000
              </a>
            </li>
            <li className="text-mute">USF Verftet, Nordnes</li>
            <li className="text-mute">Bergen, Norge</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-mute md:flex-row md:items-center md:px-10">
          <p>© {year} Kaspar Knudsen</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            Bygget i Bergen
          </p>
        </div>
      </div>
    </footer>
  );
}
