import { Link } from "react-router-dom";
import { IMAGES, TRUST_ICONS, PAYMENT_ICONS } from "@/lib/images";

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

const SOCIAL_LINKS = [
  { label: "F", href: "/facebook", ariaLabel: "Facebook" },
  { label: "T", href: "/telegram", ariaLabel: "Telegram" },
  { label: "I", href: "/instagram", ariaLabel: "Instagram" },
  { label: "X", href: "/twitter", ariaLabel: "Twitter" },
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
              <div style={{ height: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                <img
                  src={IMAGES.LOGO_FOOTER}
                  alt="TekkaBuzz"
                  style={{ height: "144px", width: "auto", marginTop: "-56px", objectFit: "contain" }}
                  loading="lazy"
                />
              </div>
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
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {s.label}
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
