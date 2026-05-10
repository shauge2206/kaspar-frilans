import Link from "next/link";
import { CompassMark } from "./CompassMark";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-paper mt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <CompassMark className="w-9 h-9 text-paper" />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
                Frilansjournalist · Bergen
              </div>
              <div className="font-semibold text-lg tracking-tight">
                Kaspar Knudsen
              </div>
            </div>
          </div>
          <p className="text-paper/70 max-w-md leading-relaxed text-[15px]">
            Reportasjer fra felt — om arbeidsliv, kyst, kriminalsaker og
            samfunn. Med base på USF Verftet i Bergen, og et stort
            interesseområde langs hele kysten.
          </p>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50 mb-4">
            Kontakt
          </div>
          <ul className="space-y-2 text-[14px] text-paper/85">
            <li>
              <a
                href="mailto:post@kasparhauge.no"
                className="dotted-link hover:text-accent"
              >
                post@kasparhauge.no
              </a>
            </li>
            <li className="font-mono text-[12px] text-paper/60">
              +47 90 00 00 00
            </li>
            <li className="text-[13px] text-paper/60">
              USF Verftet, Georgernes Verft 12
              <br />
              5011 Bergen
            </li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50 mb-4">
            Sidekart
          </div>
          <ul className="space-y-2 text-[14px] text-paper/85">
            <li>
              <Link href="/" className="dotted-link hover:text-accent">
                Felt
              </Link>
            </li>
            <li>
              <Link href="/saker" className="dotted-link hover:text-accent">
                Saker
              </Link>
            </li>
            <li>
              <Link href="/om" className="dotted-link hover:text-accent">
                Om
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="dotted-link hover:text-accent">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/55">
          <span>© {new Date().getFullYear()} Kaspar Knudsen</span>
          <span>Org.nr 999 999 999 — Enkeltpersonforetak</span>
        </div>
      </div>
    </footer>
  );
}
