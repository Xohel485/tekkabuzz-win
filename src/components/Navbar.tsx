import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Download, ExternalLink } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { useLocale } from "@/hooks/useLocale";
import { UI } from "@/lib/translations";
import { usePwaInstall } from "@/hooks/usePwaInstall";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const t = UI[locale];
  const navigate = useNavigate();
  const { canInstall, isInstalled, install } = usePwaInstall();

  const handleInstallClick = async () => {
    if (canInstall) {
      await install();
    } else {
      navigate("/app/open");
    }
  };

  const NAV_LINKS = [
    { label: t.liveCasino, to: "/casino" },
    { label: t.sportsBetting, to: "/sports" },
    { label: t.slots, to: "/slots" },
    { label: t.crashGames, to: "/crash" },
    { label: t.affiliate, to: "/affiliate" },
    { label: t.blog, to: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border" style={{ backgroundColor: "#111827" }} role="banner">
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 lg:h-16 gap-3">
          <div className="flex items-center gap-3 flex-shrink-0">
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

            <Link to="/" className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg" aria-label="TekkaBuzz Home">
              <img src={IMAGES.LOGO_HEADER} alt="TekkaBuzz.win Logo" className="h-5 sm:h-7 lg:h-10 w-auto max-w-[100px] sm:max-w-[140px] lg:max-w-none object-contain" loading="eager" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1 flex-grow justify-center" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <LanguageSwitcher />
            <Link to="/login" className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm font-semibold border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all whitespace-nowrap" aria-label={t.login}>
              {t.login}
            </Link>
            <Link to="/signup" className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:brightness-110 active:scale-95 transition-all whitespace-nowrap gold-shimmer" aria-label={t.signUp}>
              {t.signUp}
            </Link>
            <button
              onClick={handleInstallClick}
              className="flex px-1.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm font-semibold bg-secondary text-secondary-foreground rounded-lg hover:brightness-110 active:scale-95 transition-all items-center gap-1"
              title={isInstalled ? "Open TekkaBuzz App" : "Install TekkaBuzz App"}
            >
              {isInstalled ? (
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
              )}
              <span className="hidden sm:inline">{isInstalled ? t.openApp : t.app}</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-border" style={{ backgroundColor: "#0d1117" }} id="mobile-menu" role="dialog" aria-label="Mobile navigation menu">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" role="navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="block px-4 py-3 font-medium text-muted-foreground hover:text-primary rounded-lg transition-colors text-center">
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); handleInstallClick(); }}
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 border border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-primary-foreground transition-all w-full"
            >
              {isInstalled ? <ExternalLink size={16} aria-hidden="true" /> : <Download size={16} aria-hidden="true" />}
              {isInstalled ? t.openApp : t.downloadApp}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
