import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Kakatiya Timeline — 1083 to 1323 CE" },
      { name: "description", content: "An interactive chronological timeline of the Kakatiya dynasty from Beta Raja to the fall of Orugallu." },
      { property: "og:title", content: "Kakatiya Timeline" },
      { property: "og:description", content: "A scrollable chronology of the Kakatiyas of Orugallu." },
    ],
  }),
  component: TimelinePage,
});

const events = [
  { year: "c. 1000", title: "Beta Raja I", text: "Earliest historically attested Kakatiya chieftain, ruling as a feudatory of the Rashtrakutas and then the Western Chalukyas of Kalyani from Kakatipura/Hanamkonda." },
  { year: "1052", title: "Prola I", text: "Receives the territory around Anumakonda (Hanamkonda) as a hereditary grant from Chalukya king Someshvara I. The Kakatiya patrimony is established." },
  { year: "1116–1157", title: "Prola II", text: "Consolidates power, defeats rival Chalukya feudatories, and sets the stage for full independence." },
  { year: "1158–1195", title: "Rudradeva (Prataparudra I)", text: "Declares Kakatiya sovereignty, shifts the capital to the fortified city of Orugallu, and builds the Thousand Pillar Temple at Hanamkonda (1163)." },
  { year: "1199–1262", title: "Ganapati Deva", text: "The longest reign. Empire stretches from Godavari to Kanchi. Pakhal and Ramappa lakes are excavated. Ramappa Temple consecrated in 1213. Motupalli abhaya-shasanam guarantees merchant safety." },
  { year: "1262–1289", title: "Rudrama Devi", text: "Crowned with male regnal name Rudradeva-Maharaja, she rules for nearly three decades — fights the Yadavas of Devagiri, strengthens the Nayankara system, and dies in battle against the Kayastha chief Ambadeva." },
  { year: "1289–1323", title: "Prataparudra II", text: "Last Kakatiya sovereign. Reorganises the military into 75 Nayankaras, withstands the first Khalji invasions, and pays tribute after Malik Kafur's raids." },
  { year: "1309–1310", title: "Malik Kafur's invasion", text: "The Khalji general lays siege to Warangal; Prataparudra surrenders treasure, including the legendary Koh-i-Noor, to avoid annihilation." },
  { year: "1323", title: "Fall of Orugallu", text: "Ulugh Khan (the future Sultan Muhammad bin Tughluq) captures Warangal after a long siege. Prataparudra dies in captivity on the way to Delhi. The Kakatiya state ends; Telangana fragments into Nayankara successor polities." },
];

function TimelinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Chronology"
        title="Two and a half centuries, in nine acts."
        description="From feudatory grant to the fall of Orugallu — the spine of Kakatiya history."
      />

      <div className="container-edge pb-32">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {events.map((e, i) => (
            <div
              key={e.year}
              className={`relative mb-14 md:mb-20 grid md:grid-cols-2 gap-6 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-[5px] md:-translate-x-1/2 mt-2" />
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 [direction:ltr]"}`}>
                <div className="font-mark text-primary">{e.year}</div>
                <h3 className="font-display text-3xl text-ink mt-2 leading-tight">{e.title}</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">{e.text}</p>
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
