import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule-soft bg-paper-deep">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10 py-12">
        <div className="rule-thick mb-8" />

        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif font-black text-4xl tracking-[-0.04em] leading-none">
              KASPAR
            </div>
            <p className="dateline mt-3">
              FRILANSJOURNALIST · BERGEN · ETABLERT APRIL 2026
            </p>
            <p className="mt-5 max-w-md text-ink-soft">
              «God journalistikk begynner med å være der saken er. Jeg drar ut
              i felt og lar virkeligheten forme det jeg skriver.»
            </p>
          </div>

          <div>
            <p className="smallcaps text-ink-mute mb-4">Redaksjon</p>
            <address className="not-italic text-ink-soft leading-7">
              USF Verftet
              <br />
              Georgernes Verft 12
              <br />
              5011 Bergen
            </address>
          </div>

          <div>
            <p className="smallcaps text-ink-mute mb-4">Innhold</p>
            <ul className="space-y-2">
              <li>
                <Link href="/saker" className="link-editorial">
                  Alle saker
                </Link>
              </li>
              <li>
                <Link href="/om" className="link-editorial">
                  Om Kaspar
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="link-editorial">
                  Tips og henvendelser
                </Link>
              </li>
              <li>
                <a
                  href="mailto:post@kaspar.no"
                  className="link-editorial"
                >
                  post@kaspar.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-thin mt-12 pt-5 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 dateline text-ink-mute">
          <span>© {new Date().getFullYear()} KASPAR KNUDSEN</span>
          <span>ENKELTPERSONFORETAK · BERGEN</span>
          <span className="md:text-right text-sm normal-case tracking-normal">
            Lagd av{" "}
            <a
              href="https://www.naermedia.no/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold link-editorial"
            >
              Nær Media
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
