import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-foreground">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-x-6 gap-y-12 px-6 py-16 md:px-12 md:py-24">
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Kolofon
          </div>
          <p className="mt-6 max-w-md font-serif text-2xl leading-snug tracking-tight md:text-3xl">
            Kaspar Knudsen — frilansjournalist med base i Bergen.
            Kvalitetsjournalistikk fra felt.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3 md:col-start-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Kontor
          </div>
          <address className="mt-6 not-italic font-serif text-base leading-relaxed">
            USF Verftet
            <br />
            Georgernes verft 12
            <br />
            5011 Bergen
          </address>
        </div>

        <div className="col-span-6 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Kontakt
          </div>
          <ul className="mt-6 space-y-3 font-serif text-base">
            <li>
              <a
                href="mailto:kaspar@kasparhauge.no"
                className="link-rule"
              >
                kaspar@kasparhauge.no
              </a>
            </li>
            <li>
              <a href="tel:+4799999999" className="link-rule">
                +47 99 99 99 99
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-12 mt-12 grid grid-cols-12 gap-x-6 border-t border-hairline pt-8">
          <div className="col-span-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            © {new Date().getFullYear()} Kaspar Knudsen — Org.nr. 000 000 000
          </div>
          <nav
            aria-label="Bunnmeny"
            className="col-span-6 flex justify-end gap-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted md:gap-10"
          >
            <Link href="/saker" className="link-rule">
              Saker
            </Link>
            <Link href="/om" className="link-rule">
              Om
            </Link>
            <Link href="/kontakt" className="link-rule">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
