import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/maps")({
  head: () => ({
    meta: [
      { title: "Kakatiya Maps & Geography" },
      { name: "description", content: "Empire expansion, trade routes, fort networks and tank-irrigation maps of the Kakatiyas." },
      { property: "og:title", content: "Kakatiya Maps" },
      { property: "og:description", content: "Geography of the Kakatiya world." },
    ],
  }),
  component: MapsPage,
});

const places = [
  { name: "Orugallu (Warangal)", role: "Capital", x: 56, y: 52 },
  { name: "Hanamkonda", role: "First capital", x: 54, y: 48 },
  { name: "Palampet", role: "Ramappa Temple", x: 60, y: 44 },
  { name: "Motupalli", role: "Port on Bay of Bengal", x: 78, y: 70 },
  { name: "Godavari basin", role: "Northern frontier", x: 48, y: 28 },
  { name: "Kanchi", role: "Southern campaign", x: 64, y: 88 },
];

function MapsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Geography"
        title="An empire mapped in tanks, forts and ports."
        description="From the Godavari to Kanchi and the Bay of Bengal — the spatial reach of the Kakatiyas at their height."
      />

      <div className="container-edge pb-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <div className="relative aspect-[4/5] vintage-card overflow-hidden">
            <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="paper" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.3" fill="oklch(0.6 0.04 50 / 0.25)" />
                </pattern>
              </defs>
              <rect width="100" height="120" fill="url(#paper)" />
              {/* stylized peninsula */}
              <path
                d="M30,10 Q60,5 80,20 Q95,45 85,75 Q70,110 50,115 Q25,108 18,80 Q12,45 30,10 Z"
                fill="oklch(0.88 0.05 75)"
                stroke="oklch(0.4 0.08 40)"
                strokeWidth="0.4"
              />
              {/* empire area */}
              <path
                d="M35,25 Q70,20 78,40 Q82,65 70,80 Q55,95 40,80 Q28,55 35,25 Z"
                fill="oklch(0.38 0.13 27 / 0.18)"
                stroke="oklch(0.38 0.13 27)"
                strokeWidth="0.5"
                strokeDasharray="1.5 1"
              />
              {places.map((p) => (
                <g key={p.name}>
                  <circle cx={p.x} cy={p.y} r="0.9" fill="oklch(0.38 0.13 27)" />
                  <circle cx={p.x} cy={p.y} r="2.2" fill="none" stroke="oklch(0.38 0.13 27)" strokeWidth="0.2" />
                  <text x={p.x + 3} y={p.y + 1} fontSize="2.4" fill="oklch(0.22 0.04 40)" fontFamily="Cormorant Garamond">
                    {p.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <p className="mt-4 text-xs text-muted-foreground font-mark">
            Schematic — illustrative, not to scale. Outline shows the Deccan & Tamil south.
          </p>
        </div>

        <aside className="lg:col-span-4 space-y-4">
          <h2 className="font-display text-3xl text-ink">Key locations</h2>
          <ul className="divide-y divide-border vintage-card">
            {places.map((p) => (
              <li key={p.name} className="p-5 flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <div>
                  <div className="font-display text-xl text-ink leading-tight">{p.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.role}</div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
