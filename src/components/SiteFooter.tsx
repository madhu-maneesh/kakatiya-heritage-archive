import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-edge py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-mark text-primary">Kakatiya Heritage Archive</div>
          <p className="mt-4 max-w-md font-display text-2xl leading-snug text-foreground/90">
            Preserving the memory of a dynasty that shaped the soul of Telangana —
            stone by stone, tank by tank, inscription by inscription.
          </p>
        </div>

        <div>
          <div className="font-mark text-foreground/60 mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/dynasty" className="hover:text-primary">Dynasty</Link></li>
            <li><Link to="/rulers" className="hover:text-primary">Rulers</Link></li>
            <li><Link to="/architecture" className="hover:text-primary">Architecture</Link></li>
            <li><Link to="/inscriptions" className="hover:text-primary">Inscriptions</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-mark text-foreground/60 mb-4">Archive</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/irrigation" className="hover:text-primary">Irrigation</Link></li>
            <li><Link to="/research" className="hover:text-primary">Research</Link></li>
            <li><Link to="/timeline" className="hover:text-primary">Timeline</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edge py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Kakatiya Heritage Archive. An educational tribute.</div>
          <div>Orugallu · Hanamkonda · Palampet · Motupalli</div>
        </div>
      </div>
    </footer>
  );
}
