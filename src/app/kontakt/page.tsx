import Link from "next/link";

export const metadata = {
  title: "Kontakt · Kaspar Frilans",
  description:
    "Ta kontakt for oppdrag, idéer og samarbeid. Base på USF Verftet i Bergen.",
};

const oppdragstyper = [
  "Frilanssak",
  "Reportasje",
  "Gravesak",
  "Featuresak",
  "Periode-jobbing",
  "Foto",
  "Annet",
];

export default function Kontakt() {
  const subjectFallback = "Frilanssak";
  const mailto = `mailto:kaspar@frilans.no?subject=${encodeURIComponent(
    `[${subjectFallback}] — `,
  )}&body=${encodeURIComponent(
    "Hei Kaspar,\n\nJeg vil gjerne diskutere et oppdrag.\n\nNavn:\nRedaksjon / oppdragsgiver:\nFrist:\nKort beskrivelse:\n\nMvh,\n",
  )}`;

  return (
    <div>
      {/* MASTHEAD */}
      <section className="px-4 sm:px-6 lg:px-10 pt-10 pb-8 border-b-[6px] border-ink">
        <div className="mono text-[11px] uppercase tracking-[0.3em] flex items-center gap-3 mb-4">
          <span className="bg-red text-paper px-2 py-1">SEKSJON 4</span>
          <span>KONTAKT · OPPDRAG · USF VERFTET</span>
        </div>
        <h1 className="display text-[clamp(3.2rem,11vw,11rem)] leading-[0.8] tracking-[-0.03em] animate-stamp">
          TA<br />
          <span className="text-red">KONTAKT</span><span>.</span>
        </h1>
        <div className="rule-x-thin mt-6" />
        <p className="text-lg md:text-xl leading-snug max-w-3xl pt-5">
          Har du en sak som må fortelles? En idé du vil utvikle? En redaksjon
          som trenger en penn? Send en e-post — jeg svarer som regel innen
          arbeidsdagen.
        </p>
      </section>

      {/* DETAILS + FORM */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 border-b-[6px] border-ink">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          {/* CONTACT BLOCK */}
          <aside className="col-span-12 lg:col-span-5">
            <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
              <span className="bg-ink text-paper px-2 py-1">KOLOFON</span>
              <span>DIREKTE LINJE</span>
            </div>

            <div className="border-4 border-ink p-6 bg-paper-dark">
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">
                E-POST
              </div>
              <a
                href="mailto:kaspar@frilans.no"
                className="display text-3xl md:text-4xl leading-[0.95] underline underline-offset-[6px] decoration-2 hover:text-red break-words"
              >
                kaspar@frilans.no
              </a>

              <div className="rule-x-thin mt-6 pt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-1">
                    TELEFON
                  </div>
                  <div className="mono text-sm tracking-wider">+47 000 00 000</div>
                </div>
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-1">
                    SVARTID
                  </div>
                  <div className="mono text-sm">≤ 1 ARBEIDSDAG</div>
                </div>
              </div>

              <div className="rule-x-thin mt-4 pt-4">
                <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">
                  POSTADRESSE
                </div>
                <address className="not-italic text-base leading-tight">
                  Kaspar Frilans
                  <br />
                  USF Verftet
                  <br />
                  Georgernes Verft 12
                  <br />
                  5011 Bergen
                </address>
              </div>

              <div className="rule-x-thin mt-4 pt-4">
                <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">
                  ORG.NR.
                </div>
                <div className="mono text-sm">000 000 000 (ENK)</div>
              </div>
            </div>

            {/* MAP-LIKE BLOCK */}
            <div className="mt-8 border-4 border-ink relative bg-paper-dark p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #0a0a0a 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, #0a0a0a 0 1px, transparent 1px 24px)",
                }}
              />
              <div className="relative">
                <div className="mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
                  KART · NORDNES
                </div>
                <div className="flex items-center gap-4">
                  <div className="display text-7xl text-red leading-none">+</div>
                  <div>
                    <div className="display text-2xl leading-[0.95]">USF VERFTET</div>
                    <div className="mono text-xs uppercase tracking-[0.2em] mt-1">
                      60.39° N · 5.31° Ø
                    </div>
                    <div className="mono text-xs uppercase tracking-[0.2em]">
                      BERGEN HAVN
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-snug">
                  Sentrum av Nordnes, gangavstand fra Bryggen. Kontoret deles
                  med kunstnere, musikere og andre uavhengige stemmer.
                </p>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
              <span className="bg-ink text-paper px-2 py-1">SKJEMA</span>
              <span>SEND VIA E-POST →</span>
            </div>

            <form
              action="mailto:kaspar@frilans.no"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <fieldset className="border-4 border-ink p-5">
                <legend className="mono text-[10px] uppercase tracking-[0.25em] text-red px-2">
                  OPPDRAGSTYPE
                </legend>
                <div className="flex flex-wrap gap-2">
                  {oppdragstyper.map((t, i) => (
                    <label
                      key={t}
                      className="mono text-xs uppercase tracking-[0.2em] border-2 border-ink px-3 py-2 cursor-crosshair hover:bg-red hover:text-paper hover:border-red has-checked:bg-ink has-checked:text-paper"
                    >
                      <input
                        type="radio"
                        name="oppdragstype"
                        value={t}
                        defaultChecked={i === 0}
                        className="sr-only"
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-red block mb-2">
                    NAVN *
                  </span>
                  <input
                    required
                    type="text"
                    name="navn"
                    className="block w-full bg-paper border-4 border-ink px-4 py-3 mono text-sm focus:outline-none focus:bg-paper-dark"
                    placeholder="Ola Nordmann"
                  />
                </label>
                <label className="block">
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-red block mb-2">
                    REDAKSJON / OPPDRAGSGIVER
                  </span>
                  <input
                    type="text"
                    name="redaksjon"
                    className="block w-full bg-paper border-4 border-ink px-4 py-3 mono text-sm focus:outline-none focus:bg-paper-dark"
                    placeholder="Fiskeribladet"
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-red block mb-2">
                    E-POST *
                  </span>
                  <input
                    required
                    type="email"
                    name="epost"
                    className="block w-full bg-paper border-4 border-ink px-4 py-3 mono text-sm focus:outline-none focus:bg-paper-dark"
                    placeholder="redaksjonen@avis.no"
                  />
                </label>
                <label className="block">
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-red block mb-2">
                    FRIST
                  </span>
                  <input
                    type="text"
                    name="frist"
                    className="block w-full bg-paper border-4 border-ink px-4 py-3 mono text-sm focus:outline-none focus:bg-paper-dark"
                    placeholder="Innen 14 dager"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-red block mb-2">
                  BESKRIVELSE *
                </span>
                <textarea
                  required
                  rows={6}
                  name="beskrivelse"
                  className="block w-full bg-paper border-4 border-ink px-4 py-3 mono text-sm focus:outline-none focus:bg-paper-dark resize-y"
                  placeholder="Kort om saken, vinkelen, kildene og hva dere ser etter..."
                />
              </label>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="hover-jitter mono text-sm uppercase tracking-[0.22em] bg-red text-paper px-6 py-4 border-4 border-ink hover:bg-ink"
                >
                  ↳ SEND HENVENDELSE
                </button>
                <a
                  href={mailto}
                  className="hover-jitter mono text-xs uppercase tracking-[0.22em] bg-paper text-ink px-5 py-4 border-4 border-ink hover:bg-ink hover:text-paper"
                >
                  ↳ ÅPNE I E-POST
                </a>
                <Link
                  href="/saker"
                  className="mono text-xs uppercase tracking-[0.22em] underline underline-offset-4 decoration-2 hover:text-red"
                >
                  ← Tilbake til sakene
                </Link>
              </div>

              <p className="mono text-[10px] uppercase tracking-[0.22em] leading-relaxed pt-2 max-w-prose">
                * Skjemaet sender via e-postklienten din. Om du heller vil:
                send direkte til{" "}
                <a
                  href="mailto:kaspar@frilans.no"
                  className="text-red underline underline-offset-2"
                >
                  kaspar@frilans.no
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA STAMP */}
      <section className="px-4 sm:px-6 lg:px-10 py-14 bg-ink text-paper">
        <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] mb-6">
          <span className="bg-red text-paper px-2 py-1">PUBL.</span>
          <span>SISTE SIDE · NR. 247</span>
        </div>
        <h2 className="display text-[clamp(2.4rem,7vw,6.4rem)] leading-[0.83] max-w-[20ch]">
          STORE SAKER<br />
          STARTER MED<br />
          EN <span className="text-red">SAMTALE</span>.
        </h2>
        <p className="mt-6 max-w-2xl text-base md:text-lg leading-snug">
          Send et par linjer om hva du jobber med, så finner vi ut om det
          passer. Det koster ingenting å spørre — og du får raskt svar.
        </p>
      </section>
    </div>
  );
}
