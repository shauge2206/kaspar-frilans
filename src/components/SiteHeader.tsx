import Link from "next/link";

const nav = [
  { href: "/", label: "FORSIDE" },
  { href: "/saker", label: "SAKER" },
  { href: "/om", label: "OM KASPAR" },
  { href: "/kontakt", label: "KONTAKT" },
];

export default function SiteHeader() {
  return (
    <header className="bg-paper text-ink border-b-[6px] border-ink relative z-40">
      <div className="px-4 sm:px-6 lg:px-10 pt-6 pb-3">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="mono text-[10px] sm:text-xs uppercase tracking-[0.25em] flex items-center gap-3">
            <span>BERGEN</span>
            <span className="text-red">●</span>
            <span>USF VERFTET</span>
            <span className="text-red">●</span>
            <span>NORDNES</span>
          </div>
          <div className="mono text-[10px] sm:text-xs uppercase tracking-[0.25em] hidden sm:block">
            FRILANS · GRAVEJOURNALISTIKK · FRA FELT
          </div>
        </div>
        <div className="rule-x-thin mt-3 mb-3" />
        <Link
          href="/"
          className="block hover-jitter"
          aria-label="Til forsiden"
        >
          <h1 className="display text-[clamp(3rem,10vw,8.5rem)] leading-[0.82] tracking-[-0.03em]">
            KASPAR<span className="text-red">.</span>
          </h1>
          <div className="flex items-center justify-between mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-1">
            <span>FRILANSJOURNALIST</span>
            <span className="hidden sm:inline">EST. MMXXVI</span>
            <span>NR. 247</span>
          </div>
        </Link>
      </div>
      <nav className="border-t-[6px] border-ink bg-ink text-paper">
        <ul className="flex flex-wrap items-stretch divide-x-2 divide-paper">
          {nav.map((item) => (
            <li key={item.href} className="flex-1 min-w-[7rem]">
              <Link
                href={item.href}
                className="block mono text-xs sm:text-sm uppercase tracking-[0.22em] py-3 px-3 sm:px-5 text-center hover:bg-red hover:text-paper transition-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
