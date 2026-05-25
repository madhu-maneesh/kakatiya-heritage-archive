import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import icon from "@/assets/icon.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/dynasty", label: "Dynasty" },
  { to: "/timeline", label: "Timeline" },
  { to: "/rulers", label: "Rulers" },
  { to: "/architecture", label: "Architecture" },
  { to: "/inscriptions", label: "Inscriptions" },
  { to: "/irrigation", label: "Irrigation" },
  { to: "/gallery", label: "Gallery" },
  { to: "/research", label: "Research" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
        <img src={icon}
        alt="Kakatiya Logo"
        className="w-10 h-10 object-contain"
      />
          <div className="leading-tight">
            <div className="font-mark text-primary">Kakatiya</div>
            <div className="font-display text-sm text-muted-foreground -mt-0.5">
              Heritage Archive
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/80 hover:text-primary link-underline"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-edge py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80 hover:text-primary"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
