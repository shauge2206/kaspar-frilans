import type { Metadata } from "next";
import { SakerView } from "@/components/SakerView";

export const metadata: Metadata = {
  title: "Saker",
  description:
    "Arkiv over Kaspar Knudsens reportasjer – bla i kart eller liste, eller filtrer på tema.",
};

export default function SakerPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14">
      <header className="grid lg:grid-cols-12 gap-10 items-end mb-10">
        <div className="lg:col-span-7">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-deep/60 mb-4">
            Arkiv · Reportasjer
          </div>
          <h1 className="font-semibold tracking-[-0.02em] leading-[0.95] text-[clamp(2.4rem,5vw,4.4rem)] text-ink">
            Hver sak har et sted.
          </h1>
        </div>
        <div className="lg:col-span-5 lg:pl-8 lg:border-l border-line/50">
          <p className="text-[16px] leading-relaxed text-deep/80 max-w-md font-serif">
            Bla gjennom arkivet i kartvisning eller som liste. Sakene er
            kategorisert etter tema – krim, arbeidsliv, kyst, samfunn og
            feature. Dato og publikasjon er likestilt med stedet de ble
            laget.
          </p>
        </div>
      </header>

      <SakerView />
    </section>
  );
}
