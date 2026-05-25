import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-toranam.jpg";
import ramappa from "@/assets/ramappa.jpg";
import fort from "@/assets/warangal-fort.jpg";
import pillar from "@/assets/thousand-pillar.jpg";
import inscription from "@/assets/inscription.jpg";
import lake from "@/assets/pakhal-lake.jpg";
import sculpture from "@/assets/sculpture.jpg";
import { ArrowUpRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const monuments = [
  { name: "Ramappa Temple", place: "Palampet · 1213 CE", img: ramappa, to: "/architecture" },
  { name: "Warangal Fort", place: "Orugallu · 13th c.", img: fort, to: "/architecture" },
  { name: "Thousand Pillar Temple", place: "Hanamkonda · 1163 CE", img: pillar, to: "/architecture" },
  { name: "Pakhal Lake", place: "Ganapati Deva · c. 1213", img: lake, to: "/irrigation" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Kakatiya Toranam at Warangal Fort"
          className="absolute inset-0 w-full h-full object-cover kenburns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-background" />

        <div className="relative h-full container-edge flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-3xl text-parchment fade-up">
            <div className="font-mark text-gold mb-6">1083 — 1323 CE · Orugallu</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02]">
              The dynasty that<br/>
              <em className="text-gold not-italic font-display">carved Telangana</em><br/>
              from stone and water.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-parchment/85 leading-relaxed">
              An archive of the Kakatiyas — their kings and queens, their temples
              of star and song, the inscriptions they left in living rock, and the
              chain-tanks that still feed the land.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/dynasty"
                className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-3 font-medium hover:bg-parchment transition-colors"
              >
                Enter the archive <ArrowUpRight size={18} />
              </Link>
              <Link
                to="/timeline"
                className="inline-flex items-center gap-2 border border-parchment/40 text-parchment px-6 py-3 hover:bg-parchment/10 transition-colors"
              >
                View the timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WERE THEY */}
      <section className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="font-mark text-primary">Who They Were</div>
          <div className="ornament mt-4 w-16" />
        </div>
        <div className="md:col-span-8">
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            From feudatory chieftains of the Rashtrakutas, the Kakatiyas rose
            to rule a vast and luminous Telugu kingdom — and gave it the name
            it still answers to.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Across two and a half centuries, eight sovereigns transformed the
            Deccan plateau. They quarried granite into temples that taught
            engineers a thousand years of lessons. They threaded the dry uplands
            with chain-tanks. They invited weavers, merchants, scholars and
            poets to a capital — Orugallu — whose ramparts still stand.
          </p>
          <Link
            to="/dynasty"
            className="mt-8 inline-flex items-center gap-2 text-primary link-underline font-medium"
          >
            Read the dynasty overview <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* MONUMENTS GRID */}
      <section className="bg-secondary/40 py-24 md:py-32 border-y border-border">
        <div className="container-edge">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="font-mark text-primary mb-3">Key Monuments</div>
              <h2 className="font-display text-4xl md:text-5xl text-ink max-w-xl leading-tight">
                Stone bears the longest memory.
              </h2>
            </div>
            <Link to="/architecture" className="text-primary link-underline">
              See all architecture →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monuments.map((m) => (
              <Link
                key={m.name}
                to={m.to}
                className="group block vintage-card overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display text-xl text-ink">{m.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <MapPin size={12} /> {m.place}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="container-edge py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={sculpture} alt="Carved madanika figure" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 font-mark text-parchment bg-ink/70 px-3 py-1">
            Featured
          </div>
        </div>
        <div>
          <div className="font-mark text-primary mb-3">Featured Article</div>
          <h3 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Rudrama Devi — the queen who took a king's name.
          </h3>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            In a thirteenth-century world where succession was a male inheritance,
            Rudrama Devi ruled the Kakatiya empire for nearly three decades —
            crowned with masculine epithets, leading armies in the field, and
            quietly redrawing what a sovereign could be.
          </p>
          <Link to="/rulers" className="mt-8 inline-flex items-center gap-2 text-primary link-underline font-medium">
            Read about the rulers <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* THREE CALLOUTS */}
      <section className="container-edge pb-24 grid md:grid-cols-3 gap-6">
        {[
          { eyebrow: "On this day", title: "1262 — Ganapati Deva is recorded restoring the Motupalli abhaya-shasanam, guaranteeing safety to foreign merchants.", to: "/inscriptions", img: inscription },
          { eyebrow: "Latest research", title: "Sandbox foundation technology of Ramappa: how a 13th-century floating slab still holds.", to: "/architecture", img: ramappa },
          { eyebrow: "Heritage today", title: "Pakhal, Ramappa, Laknavaram: how the chain-tank system shapes modern Telangana agriculture.", to: "/irrigation", img: lake },
        ].map((c) => (
          <Link key={c.eyebrow} to={c.to} className="group vintage-card p-6 block">
            <div className="aspect-[16/10] overflow-hidden mb-5">
              <img src={c.img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="font-mark text-primary">{c.eyebrow}</div>
            <p className="mt-3 font-display text-xl text-ink leading-snug">{c.title}</p>
          </Link>
        ))}
      </section>

      {/* MAP CTA */}
      <section className="container-edge pb-32">
        <div className="vintage-card p-10 md:p-16 text-center">
          <div className="font-mark text-primary">Interactive Map</div>
          <h3 className="mt-4 font-display text-4xl md:text-5xl text-ink max-w-2xl mx-auto leading-tight">
            Walk the empire — from Godavari to the Bay of Bengal.
          </h3>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Trace the borders, trade routes, fort networks, and tank-fed
            agricultural belts of the Kakatiya world.
          </p>
          <Link
            to="/maps"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors"
          >
            Open the map <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
