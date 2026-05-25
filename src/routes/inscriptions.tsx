import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import inscription from "@/assets/inscription.jpg";

export const Route = createFileRoute("/inscriptions")({
  head: () => ({
    meta: [
      { title: "Kakatiya Inscriptions & Epigraphy Archive" },
      { name: "description", content: "A searchable archive of Kakatiya inscriptions — Telugu and Sanskrit, with translations and provenance." },
      { property: "og:title", content: "Kakatiya Inscriptions" },
      { property: "og:description", content: "Stone records of the Kakatiya age, transcribed and translated." },
      { property: "og:image", content: inscription },
    ],
  }),
  component: InscriptionsPage,
});

const records = [
  {
    id: "ANK-001",
    title: "Anumakonda Inscription of Rudradeva",
    date: "1163 CE",
    ruler: "Rudradeva",
    location: "Thousand Pillar Temple, Hanamkonda",
    script: "Telugu-Sanskrit",
    summary: "Commemorates the consecration of the Rudreshvara temple. First inscription to use full sovereign titulature for a Kakatiya ruler, marking effective independence from the Western Chalukyas.",
  },
  {
    id: "MTP-014",
    title: "Motupalli Abhaya-Shasanam",
    date: "1244–1262 CE",
    ruler: "Ganapati Deva",
    location: "Motupalli, Prakasam district",
    script: "Telugu",
    summary: "Guarantees safety, fair customs duty (1/30) and protection of shipwrecked cargo to foreign merchants. One of the earliest formal charters of mercantile rights in maritime Asia.",
  },
  {
    id: "BYM-007",
    title: "Bayyaram Tank Inscription",
    date: "c. 1230 CE",
    ruler: "Ganapati Deva (issued by sister Mailamba)",
    location: "Bayyaram, Mahbubabad",
    script: "Sanskrit",
    summary: "Records the construction of the Bayyaram tank and offers a Kakatiya genealogy tracing the dynasty to the fourth varna — a key source in debates over Kakatiya social origins.",
  },
  {
    id: "MLK-003",
    title: "Malkapuram Inscription",
    date: "1261 CE",
    ruler: "Ganapati Deva",
    location: "Malkapuram, Guntur",
    script: "Sanskrit",
    summary: "Records grants by the Saiva acharya Vishveshvara Shiva to a matha. Lists endowments to scholars, dancers, musicians and a hospital — a window on Kakatiya patronage of learning and welfare.",
  },
  {
    id: "CDR-021",
    title: "Chandupatla Inscription",
    date: "1289 CE",
    ruler: "Rudrama Devi",
    location: "Chandupatla, Nalgonda",
    script: "Telugu",
    summary: "Records the death of Rudrama Devi and her general Mallikarjuna Nayaka in battle against Ambadeva — definitive evidence that she died fighting, not in retirement as later chronicles suggest.",
  },
];

function InscriptionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Epigraphy"
        title="The dynasty wrote itself into living rock."
        description="A growing archive of Kakatiya inscriptions with transcriptions, translations and provenance."
      />

      <div className="container-edge pb-32 grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4">
          <div className="sticky top-28 vintage-card overflow-hidden">
            <img src={inscription} alt="Stone inscription detail" loading="lazy" className="w-full aspect-square object-cover" />
            <div className="p-6">
              <div className="font-mark text-primary">About the archive</div>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                Each entry below references the original lithic record, its
                published transcription (where available), and the secondary
                literature. Translations are working drafts, kept close to
                the original syntax to preserve the inscription's voice.
              </p>
            </div>
          </div>
        </aside>

        <div className="md:col-span-8 space-y-6">
          {records.map((r) => (
            <article key={r.id} className="vintage-card p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="font-mark text-primary">{r.id} · {r.date}</div>
                  <h3 className="font-display text-2xl text-ink mt-1">{r.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground border border-border px-2 py-1">{r.script}</span>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                {r.ruler} · {r.location}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">{r.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
