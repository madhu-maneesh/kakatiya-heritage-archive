import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import ramappa from "@/assets/ramappa.jpg";
import fort from "@/assets/warangal-fort.jpg";
import pillar from "@/assets/thousand-pillar.jpg";
import sculpture from "@/assets/sculpture.jpg";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Kakatiya Architecture — Temples, Forts & Sculptures" },
      { name: "description", content: "Ramappa, Thousand Pillar Temple, Warangal Fort, Ghanpur — the architectural legacy of the Kakatiyas in stone." },
      { property: "og:title", content: "Kakatiya Architecture" },
      { property: "og:description", content: "Star-shaped platforms, sandbox foundations, dance panels and engineering." },
      { property: "og:image", content: ramappa },
      { property: "twitter:image", content: ramappa },
    ],
  }),
  component: ArchitecturePage,
});

const monuments = [
  {
    name: "Ramappa Temple",
    place: "Palampet · 1213 CE · UNESCO World Heritage",
    img: ramappa,
    detail: "Star-shaped platform of red sandstone with a floating black-basalt vimana built on a 3-metre 'sandbox' foundation — sand packed beneath the platform absorbs seismic shock. Named, uniquely in Indian temple history, after its sculptor.",
    facts: ["Sandbox foundation", "Floating basalt bricks", "Madanika dance panels", "Star-shaped plinth"],
  },
  {
    name: "Thousand Pillar Temple",
    place: "Hanamkonda · 1163 CE",
    img: pillar,
    detail: "Commissioned by Rudradeva as the dynasty's first sovereign monument. A trikutalaya (three-shrine) plan dedicated to Shiva, Vishnu and Surya, lined with finely lathe-turned black basalt pillars whose carvings still catch raking morning light.",
    facts: ["Trikutalaya plan", "Lathe-turned pillars", "Black basalt and sandstone"],
  },
  {
    name: "Warangal Fort",
    place: "Orugallu · 13th c.",
    img: fort,
    detail: "Triple concentric fortification — outer mud rampart, middle stone wall, inner granite citadel — pierced by four monumental Kakatiya Toranams that still stand. The fort plan inspired the state emblem of Telangana.",
    facts: ["Triple ramparts", "Four toranams", "Concentric plan", "Svayambhu Temple"],
  },
  {
    name: "Ghanpur Group of Temples",
    place: "Ghanpur · 13th c.",
    img: sculpture,
    detail: "A cluster of 22 temples in varying states of preservation, exemplifying late Kakatiya experimentation with composite mythical creatures — gajakesari, vyala — on bracket figures of striking sculptural ambition.",
    facts: ["22 shrines", "Vyala bracket figures", "Late-Kakatiya style"],
  },
];

function ArchitecturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Architecture"
        title="A grammar of stone, taught in star and song."
        description="The Kakatiyas wrote their theology in sandstone and basalt — star-shaped platforms, floating bricks, dancing girls in granite."
      />

      <div className="container-edge pb-32 space-y-24">
        {monuments.map((m, i) => (
          <article key={m.name} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
            <div className="md:col-span-7 [direction:ltr]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-5 [direction:ltr]">
              <div className="font-mark text-primary">{m.place}</div>
              <h2 className="font-display text-4xl text-ink mt-3 leading-tight">{m.name}</h2>
              <p className="mt-5 text-foreground/85 leading-relaxed text-lg">{m.detail}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {m.facts.map((f) => (
                  <span key={f} className="text-xs border border-border bg-card px-3 py-1.5 text-foreground/70">{f}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
