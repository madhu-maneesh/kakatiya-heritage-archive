import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import hero from "@/assets/hero-toranam.jpg";
import ramappa from "@/assets/ramappa.jpg";
import fort from "@/assets/warangal-fort.jpg";
import pillar from "@/assets/thousand-pillar.jpg";
import inscription from "@/assets/inscription.jpg";
import lake from "@/assets/pakhal-lake.jpg";
import sculpture from "@/assets/sculpture.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Kakatiya Gallery — Photography, Sculptures & Sites" },
      { name: "description", content: "A visual archive of Kakatiya monuments, sculptures, inscriptions and landscapes." },
      { property: "og:title", content: "Kakatiya Gallery" },
      { property: "og:description", content: "Visual archive of Kakatiya heritage." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: hero, caption: "Kakatiya Toranam at dawn — Warangal Fort", tall: true },
  { img: ramappa, caption: "Star-shaped platform, Ramappa Temple", tall: true },
  { img: pillar, caption: "Thousand Pillar Temple interior, Hanamkonda" },
  { img: fort, caption: "Aerial view of Warangal Fort ruins" },
  { img: sculpture, caption: "Madanika dance panel, sandstone" , tall: true},
  { img: inscription, caption: "Stone inscription detail" },
  { img: lake, caption: "Pakhal Lake at dawn" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Stone, ink, water — seen close."
        description="A visual archive of Kakatiya monuments, sculptures, inscriptions and landscapes."
      />

      <div className="container-edge pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((it, i) => (
            <figure key={i} className="mb-6 break-inside-avoid group">
              <div className={`overflow-hidden ${it.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img
                  src={it.img}
                  alt={it.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground font-mark">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
