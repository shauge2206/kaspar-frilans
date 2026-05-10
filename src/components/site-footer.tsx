import Link from "next/link";
import { Lighthouse, DepthLines } from "./nautical";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-deep text-paper">
      <DepthLines className="absolute inset-x-0 top-0 h-12 w-full text-paper/40" />
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <div className="flex items-start gap-5">
            <Lighthouse className="w-9 h-16 text-sand" />
            <div>
              <h2 className="font-display text-3xl leading-tight tracking-tight">
                Kaspar Knudsen.
              </h2>
              <p className="mt-3 max-w-md text-paper/75 text-pretty">
                «Økonomisk bærekraft i selskapet, å levere kvalitetsjournalistikk,
                frihet under ansvar — å styre bedriften selv»
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="smallcaps text-[0.7rem] text-sand">Posisjon</div>
          <p className="mt-3 font-display text-xl leading-snug">
            USF Verftet
            <br />
            Georgernes Verft 12
            <br />
            5011 Bergen
          </p>
          <p className="mt-2 text-[0.78rem] tracking-meta text-paper/55">
            60.39°N · 5.30°Ø
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="smallcaps text-[0.7rem] text-sand">Kontakt</div>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            <li>
              <a
                href="mailto:kontakt@kasparknudsen.no"
                className="link-grow text-paper"
              >
                kontakt@kasparknudsen.no
              </a>
            </li>
            <li>
              <a href="tel:+4791234567" className="link-grow text-paper">
                +47 912 34 567
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="smallcaps text-[0.7rem] text-sand">Sider</div>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            <li>
              <Link href="/saker" className="link-grow text-paper">
                Saker
              </Link>
            </li>
            <li>
              <Link href="/om" className="link-grow text-paper">
                Om Kaspar
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="link-grow text-paper">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-6 py-6 text-[0.72rem] tracking-meta text-paper/55 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <span>
            © {new Date().getFullYear()} Kaspar Knudsen — enkeltpersonforetak
          </span>
          <span>USF Verftet · Bergen</span>
        </div>
      </div>
    </footer>
  );
}
