import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { IMAGES, TRUST_ICONS, PAYMENT_ICONS } from "@/lib/images";

const LOGO_CROPPED = "/images/tekkabuzz-logo-cropped.png";

const GAME_LINKS = [
  { label: "Live Casino", to: "/casino" },
  { label: "Sports Betting", to: "/sports" },
  { label: "Slots", to: "/slots" },
  { label: "Crash Games", to: "/crash" },
  { label: "Fishing", to: "/fishing" },
  { label: "Lottery", to: "/lottery" },
  { label: "Arcade", to: "/arcade" },
  { label: "Table Games", to: "/table" },
];

const INFO_LINKS = [
  { label: "About", to: "/about" },
  { label: "Affiliate", to: "/affiliate" },
  { label: "Blog", to: "/blog" },
  { label: "Promotions", to: "/promotion" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
  { label: "VIP Program", to: "/vip" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Responsible Gaming", to: "/responsible-gaming" },
];

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Facebook, href: "/facebook", ariaLabel: "Facebook" },
  { icon: TelegramIcon, href: "/telegram", ariaLabel: "Telegram" },
  { icon: InstagramIcon, href: "/instagram", ariaLabel: "Instagram" },
  { icon: XIcon, href: "/twitter", ariaLabel: "Twitter" },
];

const TRUST_BADGES = [
  { src: TRUST_ICONS.LICENSE_CURACAO, alt: "Gaming Curacao License" },
  { src: TRUST_ICONS.LICENSE_3, alt: "Licensed & Certified" },
  { src: TRUST_ICONS.GAMCARE, alt: "GamCare Certified" },
  { src: TRUST_ICONS.AGE_18, alt: "18+ Only" },
  { src: TRUST_ICONS.RESP_GAMBLING, alt: "Responsible Gambling" },
  { src: TRUST_ICONS.CAZVIP, alt: "CazVIP Partner" },
  { src: TRUST_ICONS.SUPPORT_24H, alt: "24/7 Support" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border" style={{ backgroundColor: "#0d1117" }}>
      {/* 4-column grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Col 1: Brand */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" aria-label="TekkaBuzz Home">
              <img
                src={LOGO_CROPPED}
                alt="TekkaBuzz.win"
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed mt-3 mb-4">
              TekkaBuzz (tekkabuzz.win) — Official platform. Also known as Taka Buzz, Tekka Buzz, TkkaBuzz.
            </p>
            <div className="flex gap-2 justify-center">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-label={s.ariaLabel}
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Games */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4 font-heading">Games</h4>
            <ul className="space-y-2">
              {GAME_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Info */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4 font-heading">Info</h4>
            <ul className="space-y-2">
              {INFO_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4 font-heading">Legal</h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment icons */}
      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <p className="text-muted-foreground/50 text-xs uppercase tracking-widest">Payment Methods</p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {PAYMENT_ICONS.map((p) => (
              <img key={p.name} src={p.url} alt={`${p.name} payment`} className="h-8 md:h-10 w-auto object-contain" loading="lazy" />
            ))}
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t border-border py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-5">
          {TRUST_BADGES.map((b) => (
            <img key={b.alt} src={b.src} alt={b.alt} className="h-8 md:h-10 object-contain" loading="lazy" />
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-4">
        <p className="text-center text-muted-foreground/40 text-xs px-4 leading-relaxed">
          &copy; 2026 TekkaBuzz Official (Taka Buzz | Tekka Buzz | TkkaBuzz). All Rights Reserved. 18+ Only. Gamble Responsibly. tekkabuzz.win is the ONLY official website.
        </p>
      </div>
    </footer>
  );
}
