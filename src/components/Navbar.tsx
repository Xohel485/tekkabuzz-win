import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { IMAGES } from "@/lib/images";

const NAV_LINKS = [
  { label: "Live Casino", to: "/casino" },
  { label: "Sports Betting", to: "/sports" },
  { label: "Slots", to: "/slots" },
  { label: "Crash Games", to: "/crash" },
  { label: "Affiliate", to: "/affiliate" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex-shrink-0">
          <img src={IMAGES.LOGO_HEADER} alt="TekkaBuzz.win Logo" className="h-8 md:h-10 object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="border-2 border-primary text-primary rounded-lg px-5 py-2 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-primary text-primary-foreground rounded-lg px-5 py-2 text-sm font-bold hover:bg-gold-hover transition-all gold-shimmer"
          >
            Sign Up
          </Link>
          <Link
            to="/app/open"
            className="border border-border text-muted-foreground rounded-lg px-4 py-2 text-sm font-medium hover:text-primary hover:border-primary transition-all flex items-center gap-1.5"
          >
            <Download size={14} />
            Download
          </Link>
        </div>

        {/* Mobile CTAs + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            to="/login"
            className="border border-primary text-primary rounded-md px-3 py-1.5 text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-xs font-bold hover:bg-gold-hover transition-all gold-shimmer"
          >
            Sign Up
          </Link>
          <button
            className="text-foreground p-1.5 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border flex flex-col p-4 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2.5 border-b border-border text-center"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/app/open"
            className="mt-3 border border-primary text-primary rounded-lg px-4 py-2.5 text-sm font-bold text-center flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => setOpen(false)}
          >
            <Download size={16} />
            Download App
          </Link>
        </div>
      )}
    </nav>
  );
}
