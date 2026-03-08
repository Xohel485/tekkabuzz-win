import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Download } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border" style={{ backgroundColor: "#111827" }} role="banner">
      {/* Gold top line */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 lg:h-16 gap-3">

          {/* LEFT: Hamburger + Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Hamburger - always visible */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-1.5 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <X className="w-5 h-5 text-primary" aria-hidden="true" />
              ) : (
                <div className="flex flex-col gap-[5px]">
                  <span className="block w-5 h-0.5 bg-primary rounded" />
                  <span className="block w-5 h-0.5 bg-primary rounded" />
                  <span className="block w-5 h-0.5 bg-primary rounded" />
                </div>
              )}
            </button>

            {/* Logo with crop technique */}
            <Link
              to="/"
              className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="TekkaBuzz Home"
            >
              <img
                src={IMAGES.LOGO_HEADER}
                alt="TekkaBuzz.win Logo"
                className="h-5 sm:h-7 lg:h-10 w-auto max-w-[100px] sm:max-w-[140px] lg:max-w-none object-contain"
                loading="eager"
              />
            </Link>
          </div>

          {/* CENTER: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-grow justify-center" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Login + SignUp + Download */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <Link
              to="/login"
              className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm font-semibold border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all whitespace-nowrap"
              aria-label="Login to TekkaBuzz"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:brightness-110 active:scale-95 transition-all whitespace-nowrap gold-shimmer"
              aria-label="Sign up for TekkaBuzz"
            >
              Sign Up
            </Link>
            <Link
              to="/app/open"
              className="hidden sm:flex px-3 py-1.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded-lg hover:brightness-110 active:scale-95 transition-all items-center gap-1.5"
              title="Install TekkaBuzz App"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              App
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile/Hamburger Menu */}
      {open && (
        <div
          className="border-t border-border"
          style={{ backgroundColor: "#0d1117" }}
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" role="navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 font-medium text-muted-foreground hover:text-primary rounded-lg transition-colors text-center"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/app/open"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 border border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Download size={16} aria-hidden="true" />
              Download App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
