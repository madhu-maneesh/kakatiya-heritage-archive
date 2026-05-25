import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/rulers")({
  head: () => ({
    meta: [
      { title: "Kakatiya Rulers — Rudrama Devi, Ganapati Deva, Prataparudra" },
      { name: "description", content: "Detailed pages on the rulers of the Kakatiya dynasty including reign, battles, reforms and patronage." },
      { property: "og:title", content: "Kakatiya Rulers" },
      { property: "og:description", content: "Reigns, battles, reforms and patronage of the Kakatiya sovereigns." },
    ],
  }),
  component: RulersPage,
});

const rulers = [
  {
    name: "Rudradeva (Prataparudra I)",
    reign: "c. 1158 – 1195 CE",
    feats: ["Declared Kakatiya independence", "Shifted capital to Orugallu (Warangal)", "Commissioned the Thousand Pillar Temple, 1163"],
    note: "Author of the Sanskrit treatise Niti-sara, Rudradeva combined warrior-king with scholar-king. His Anumakonda inscription is the first to use full sovereign titulature.",
  },
  {
    name: "Mahadeva",
    reign: "1195 – 1199 CE",
    feats: ["Brief reign", "Died in battle against Jaitugi of Devagiri"],
    note: "Father of Ganapati Deva; his death in the Yadava campaign left a child heir and a regent kingdom.",
  },
  {
    name: "Ganapati Deva",
    reign: "1199 – 1262 CE",
    feats: ["Longest reign in Kakatiya history", "Empire from Godavari to Kanchi", "Excavated Pakhal & Ramappa lakes", "Consecrated Ramappa Temple, 1213", "Issued Motupalli abhaya-shasanam"],
    note: "Ganapati's 63-year reign was the dynasty's high noon: a planned capital, a maritime port, a tank-fed agrarian boom, and a constitutional welcome to foreign merchants centuries before similar pledges elsewhere.",
  },
  {
    name: "Rudrama Devi",
    reign: "1262 – 1289 CE",
    feats: ["Reigned in her own right as Rudradeva-Maharaja", "Defeated the Yadava invasion under Mahadeva", "Strengthened the Nayankara system", "Received Marco Polo's praise (via Venetian sources)"],
    note: "Crowned with a male regnal name, Rudrama led armies in the field for nearly three decades. She died in battle against the Kayastha chief Ambadeva at Tripurantakam, c. 1289.",
  },
  {
    name: "Prataparudra II",
    reign: "1289 – 1323 CE",
    feats: ["Reorganised the empire into 75 Nayankaras", "Withstood the first Khalji invasions", "Surrendered the Koh-i-Noor to Malik Kafur, 1310", "Captured at the fall of Orugallu, 1323"],
    note: "The last Kakatiya emperor. His captivity ended a dynasty but seeded the Nayankara successor polities — Musunuri, Reddi, Velama and eventually Vijayanagara.",
  },
];

function RulersPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Rulers"
        title="Eight sovereigns. One thread of stone."
        description="From the feudatory Betas to the captive Prataparudra, the lineage that built and lost Orugallu."
      />

      <div className="container-edge pb-32 space-y-20">
        {rulers.map((r, i) => (
          <article key={r.name} className="grid md:grid-cols-12 gap-8 fade-up">
            <div className="md:col-span-3">
              <div className="font-mark text-primary">Reign {String(i + 1).padStart(2, "0")}</div>
              <h2 className="font-display text-3xl text-ink mt-2 leading-tight">{r.name}</h2>
              <div className="text-sm text-muted-foreground mt-2">{r.reign}</div>
            </div>
            <div className="md:col-span-9 vintage-card p-8">
              <p className="text-lg leading-relaxed text-foreground/85">{r.note}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {r.feats.map((f) => (
                  <div key={f} className="flex gap-3 text-sm text-foreground/75">
                    <span className="text-gold">◆</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
