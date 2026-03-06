import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex-shrink-0">
          <img src={IMAGES.LOGO_HEADER} alt="TekkaBuzz Logo" className="h-10 object-contain" />
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
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-md z-40 flex flex-col p-8 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-6">
            <Link
              to="/login"
              className="flex-1 text-center border-2 border-primary text-primary rounded-lg px-5 py-3 font-bold hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 text-center bg-primary text-primary-foreground rounded-lg px-5 py-3 font-bold hover:bg-gold-hover transition-all"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
