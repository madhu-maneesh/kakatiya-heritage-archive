import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Kakatiya Research & References" },
      { name: "description", content: "Books, ASI reports, research papers and epigraphical records on the Kakatiya dynasty." },
      { property: "og:title", content: "Kakatiya Research & References" },
      { property: "og:description", content: "Bibliography for the Kakatiya dynasty." },
    ],
  }),
  component: ResearchPage,
});

const groups = [
  {
    label: "Political History",
    items: [
      { title: "The Kakatiyas of Warangal", author: "P. V. Parabrahma Sastry", year: "1978" },
      { title: "Precolonial India in Practice: Society, Region, and Identity in Medieval Andhra", author: "Cynthia Talbot", year: "2001" },
      { title: "Social History of the Deccan, 1300–1761", author: "Richard M. Eaton", year: "2005" },
    ],
  },
  {
    label: "Architecture",
    items: [
      { title: "Kakatiya Sculpture", author: "M. Radhakrishna Sarma", year: "1972" },
      { title: "Indian Temple Architecture: Form and Transformation", author: "Adam Hardy", year: "1995" },
      { title: "Ramappa Temple — UNESCO Nomination Dossier", author: "Govt. of India", year: "2021" },
    ],
  },
  {
    label: "Epigraphy",
    items: [
      { title: "South Indian Inscriptions, Vols. IV–X", author: "ASI / Epigraphia Indica", year: "1894–present" },
      { title: "Inscriptions of Andhra Pradesh — Warangal District", author: "P. V. Parabrahma Sastry", year: "1974" },
      { title: "Corpus of Telugu Inscriptions", author: "N. Venkataramanayya et al.", year: "1948–" },
    ],
  },
  {
    label: "Irrigation & Society",
    items: [
      { title: "Tanks of South India", author: "K. Sivasubramaniyan", year: "2006" },
      { title: "Mission Kakatiya — Programme Evaluation Reports", author: "Govt. of Telangana", year: "2015–" },
      { title: "Women, Land and Power: The Andhra Region during the Kakatiya Period", author: "Cynthia Talbot", year: "1995" },
    ],
  },
];

function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bibliography"
        title="What we know — and the scholars who taught us."
        description="A curated bibliography for serious study of the Kakatiya dynasty: books, ASI reports, epigraphical corpora and recent research."
      />

      <div className="container-edge pb-32 grid md:grid-cols-2 gap-10">
        {groups.map((g) => (
          <section key={g.label} className="vintage-card p-8">
            <div className="font-mark text-primary mb-4">{g.label}</div>
            <ul className="divide-y divide-border">
              {g.items.map((it) => (
                <li key={it.title} className="py-4">
                  <div className="font-display text-xl text-ink leading-snug">{it.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{it.author} · {it.year}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
