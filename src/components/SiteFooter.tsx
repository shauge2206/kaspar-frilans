import Link from "next/link";

export default function SiteFooter() {
  const aar = new Date().getFullYear();
  return (
    <footer className="border-t border-rule mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Kolofon</p>
            <p className="mt-4 font-display text-2xl md:text-3xl leading-tight max-w-md">
              Kaspar Knudsen — frilansjournalist med base på USF Verftet i
              Bergen.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Kontakt</p>
            <ul className="mt-4 space-y-2 text-fg-muted">
              <li>
                <a
                  href="mailto:kaspar@kasparknudsen.no"
                  className="amber-underline"
                >
                  kaspar@kasparknudsen.no
                </a>
              </li>
              <li>
                <a href="tel:+4790000000" className="amber-underline">
                  +47 900 00 000
                </a>
              </li>
              <li className="pt-2 text-sm">
                USF Verftet, Georgernes Verft 12
                <br />
                5011 Bergen
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Sider</p>
            <ul className="mt-4 space-y-2 text-fg-muted">
              <li>
                <Link href="/saker" className="amber-underline">
                  Saker
                </Link>
              </li>
              <li>
                <Link href="/om" className="amber-underline">
                  Om
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="amber-underline">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Publiserer for</p>
            <ul className="mt-4 space-y-2 text-fg-muted text-sm">
              <li>Fiskeribladet</li>
              <li>Intrafish</li>
              <li>Kystens Næringsliv</li>
              <li>Bergens Tidende</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-fg-muted">
          <p className="smallcaps">© {aar} Kaspar Knudsen — alle rettigheter</p>
          <p className="smallcaps">
            Org.nr 999 999 999 — Medlem av Norsk Journalistlag
          </p>
        </div>
      </div>
    </footer>
  );
}
