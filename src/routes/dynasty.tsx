import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/dynasty")({
  head: () => ({
    meta: [
      { title: "The Kakatiya Dynasty — Origin, Rise & Decline" },
      { name: "description", content: "Origin theories, early feudatories, rise to power, expansion, administration and decline of the Kakatiya dynasty (1083–1323 CE)." },
      { property: "og:title", content: "The Kakatiya Dynasty" },
      { property: "og:description", content: "Origin, rise, administration and decline of the Kakatiyas of Orugallu." },
    ],
  }),
  component: DynastyPage,
});

const sections = [
  {
    title: "Origin Theories",
    body: "Inscriptions and later chronicles offer competing accounts: a lineage from the Solar dynasty, a Durjaya kshatriya line, or — as the Bayyaram inscription suggests — a Shudra-varna chieftain family that rose through service. The name 'Kakati' likely derives from the family's tutelary goddess Kakatamma, worshipped at an early settlement in Kakatipura.",
  },
  {
    title: "Early Feudatories (c. 950–1158 CE)",
    body: "The earliest Kakatiyas served as feudatories of the Rashtrakutas and then the Western Chalukyas of Kalyani, governing a small territory around Anumakonda (modern Hanamkonda). Beta I, Prola I, Beta II and Prola II steadily consolidated power, defended the realm against rival Chalukya nobles, and laid the cultural foundations later inherited by Rudradeva.",
  },
  {
    title: "Rise to Sovereignty",
    body: "Rudradeva (r. c. 1158–1195) declared independence from the weakening Western Chalukyas, shifted the capital from Hanamkonda to the new fortified city of Orugallu (Warangal), and inaugurated the great age of Kakatiya temple-building with the Thousand Pillar Temple. From this moment the Kakatiyas ruled in their own name.",
  },
  {
    title: "Expansion under Ganapati Deva",
    body: "Ganapati Deva (r. 1199–1262), the longest-reigning Kakatiya, extended the kingdom from the Godavari to the southern Tamil country, secured the port of Motupalli on the Bay of Bengal, and issued the Motupalli abhaya-shasanam — one of the world's earliest formal guarantees of merchant safety to foreign traders.",
  },
  {
    title: "Administration",
    body: "The Kakatiya state was held together by the Nayankara system: military-administrative grants to nayakas in return for service and revenue. Land was meticulously surveyed; trade guilds (samayas) flourished; new agricultural settlements were founded around state-funded irrigation tanks. Brahmadeya villages, weavers' colonies and merchant towns thickened the Telugu countryside.",
  },
  {
    title: "Decline",
    body: "After the death of Prataparudra in captivity (c. 1323) following the invasions of Malik Kafur and Ulugh Khan, the Kakatiya state collapsed. The Nayankaras fragmented; some submitted to the Delhi Sultanate, others would later coalesce as the Musunuri Nayakas, the Reddi kingdoms, and ultimately Vijayanagara. The cultural memory, however, endured — in stone, in tank-bed and in tongue.",
  },
];

function DynastyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dynasty Overview"
        title="A kingdom of stone, water and word."
        description="From feudatory chieftains of the Western Chalukyas to sovereigns of the Telugu country, the Kakatiyas ruled Orugallu for two and a half centuries."
      />

      <div className="container-edge pb-32 grid md:grid-cols-12 gap-x-12 gap-y-16">
        {sections.map((s, i) => (
          <article key={s.title} className="md:col-span-10 md:col-start-2">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <div className="font-mark text-primary">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="font-display text-3xl text-ink mt-2 leading-tight">{s.title}</h2>
              </div>
              <p className="md:col-span-9 text-lg leading-relaxed text-foreground/85">
                {s.body}
              </p>
            </div>
            {i < sections.length - 1 && <div className="ornament mt-16" />}
          </article>
        ))}
      </div>
    </>
  );
}
