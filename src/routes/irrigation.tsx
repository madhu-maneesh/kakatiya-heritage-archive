import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import lake from "@/assets/pakhal-lake.jpg";

export const Route = createFileRoute("/irrigation")({
  head: () => ({
    meta: [
      { title: "Kakatiya Irrigation — Chain Tanks & Engineering" },
      { name: "description", content: "Pakhal, Ramappa, Laknavaram, Bayyaram — the chain-tank irrigation system of the Kakatiyas that still shapes Telangana." },
      { property: "og:title", content: "Kakatiya Irrigation" },
      { property: "og:description", content: "The chain-tank engineering of the Kakatiyas." },
      { property: "og:image", content: lake },
    ],
  }),
  component: IrrigationPage,
});

const tanks = [
  { name: "Pakhal Lake", year: "c. 1213 CE", area: "30 sq km", note: "Commissioned by Ganapati Deva. Bunded across the Munneru tributary, it still irrigates over 4,000 acres." },
  { name: "Ramappa Lake", year: "early 13th c.", area: "8 sq km", note: "Built to serve the Ramappa temple complex and surrounding settlements. Earthen bund nearly two kilometres long." },
  { name: "Laknavaram Lake", year: "13th c.", area: "10 sq km", note: "Held back by three earthen embankments forming an interconnected system, with thirteen wooded islets within it." },
  { name: "Bayyaram Tank", year: "c. 1230 CE", area: "12 sq km", note: "Constructed by Mailamba, sister of Ganapati Deva. Recorded in the Bayyaram inscription." },
];

function IrrigationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engineering"
        title="They thought of land in centuries — and built water to match."
        description="Chain-tanks, cascading reservoirs and meticulous land surveys: the Kakatiyas engineered the Telangana water landscape that still endures."
      />

      <div className="container-edge pb-16">
        <div className="relative aspect-[16/7] overflow-hidden">
          <img src={lake} alt="Pakhal Lake at dawn" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>

      <section className="container-edge pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl text-ink leading-tight">
            The chain-tank system
          </h2>
          <p className="mt-6 text-foreground/85 leading-relaxed">
            Across the undulating Telangana plateau, the Kakatiyas built tanks
            whose surplus fed the next tank downstream. A failure in one season
            was absorbed by the chain. Where the Cholas built granite temples
            to gods, the Kakatiyas built earthen bunds to villages — and the
            two were the same act of devotion.
          </p>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            Many of these tanks were revived under Telangana's Mission Kakatiya
            programme (2014 onwards), restoring an eight-hundred-year-old
            irrigation grid to modern agricultural use.
          </p>
        </div>

        <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
          {tanks.map((t) => (
            <div key={t.name} className="vintage-card p-6">
              <div className="font-mark text-primary">{t.year}</div>
              <h3 className="font-display text-2xl text-ink mt-2">{t.name}</h3>
              <div className="text-xs text-muted-foreground mt-1">Surface area · {t.area}</div>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{t.note}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
