const headlines = [
  "SISTE NYTT — Investigative reportasjer fra norskekysten",
  "GRAVESAK — 47 år lang kamp om «Utvik Senior»",
  "FRA FELT — Reportasjer fra Bergen, Sotra og Senja",
  "FAGOMRÅDE — Arbeidsliv, krim, fiskeri og kystindustri",
  "OPPDRAG — Tar inn frilanssaker for redaksjoner i hele landet",
  "NYHET — Nye reportasjer fra USF Verftet, Nordnes",
];

export default function BreakingRibbon() {
  const loop = [...headlines, ...headlines, ...headlines];
  return (
    <div className="sticky top-0 z-50 bg-ink text-paper border-b-4 border-ink">
      <div className="flex items-stretch overflow-hidden">
        <div className="bg-red text-paper mono text-[10px] sm:text-xs font-bold tracking-[0.2em] px-3 py-2 flex items-center whitespace-nowrap border-r-4 border-ink">
          ● SISTE NYTT
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track flex whitespace-nowrap mono text-xs sm:text-sm py-2 uppercase tracking-[0.18em]">
            {loop.map((h, i) => (
              <span key={i} className="px-8 flex items-center gap-8">
                {h}
                <span className="text-red">◆</span>
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:flex bg-paper text-ink mono text-[10px] tracking-[0.2em] px-3 items-center whitespace-nowrap border-l-4 border-ink">
          UTGAVE 01 / NR. 247
        </div>
      </div>
    </div>
  );
}
