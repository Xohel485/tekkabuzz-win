import { Link } from "react-router-dom";
import { IMAGES, TRUST_ICONS } from "@/lib/images";

const SOCIAL_LINKS = [
  { label: "Facebook", icon: "fb", to: "/facebook" },
  { label: "Twitter", icon: "tw", to: "/twitter" },
  { label: "Instagram", icon: "ig", to: "/instagram" },
  { label: "Telegram", icon: "tg", to: "/telegram" },
];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Promotions", to: "/promotion" },
  { label: "VIP Program", to: "/vip" },
];

const BONUS_LINKS = [
  { label: "Welcome Bonus", to: "/bonuses/welcome" },
  { label: "Cashback Bonus", to: "/bonuses/cashback" },
  { label: "Task Bonus", to: "/bonuses/task" },
  { label: "Referral Bonus", to: "/bonuses/referral" },
];

const INFO_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Affiliate", to: "/affiliate" },
  { label: "FAQ", to: "/faq" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Responsible Gaming", to: "/responsible-gaming" },
];

function SocialIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    fb: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    tw: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    ig: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    tg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  };
  return icons[type] || null;
}

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Logo & Description */}
        <div className="text-center mb-8">
          <img src={IMAGES.LOGO_FOOTER} alt="TekkaBuzz.win Footer Logo" className="h-10 md:h-12 mx-auto mb-4 object-contain" />
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-md mx-auto">
            Bangladesh's premier online gaming platform. Experience the thrill of live casino, sports betting, and exclusive bonuses.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-8">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.to}
              href={s.to}
              aria-label={s.label}
              className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <SocialIcon type={s.icon} />
            </a>
          ))}
        </div>

        {/* Links Grid - single column on mobile, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-bold text-primary mb-4 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bonuses */}
          <div>
            <h3 className="font-heading text-sm font-bold text-primary mb-4 tracking-wider uppercase">Bonuses</h3>
            <ul className="space-y-2">
              {BONUS_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-heading text-sm font-bold text-primary mb-4 tracking-wider uppercase">Information</h3>
            <ul className="space-y-2">
              {INFO_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gaming Licence */}
        <div className="border-t border-border pt-6 mb-4">
          <h4 className="font-heading text-xs font-bold text-primary mb-3 tracking-wider uppercase text-center">Gaming Licence</h4>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col items-center gap-1.5">
              <img src={TRUST_ICONS.LICENSE_CURACAO} alt="Gaming Curacao License" className="h-10 md:h-12 object-contain" />
              <span className="text-[10px] text-muted-foreground">Gaming Curaçao</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <img src={TRUST_ICONS.LICENSE_3} alt="License Certificate" className="h-10 md:h-12 object-contain" />
              <span className="text-[10px] text-muted-foreground">Licensed & Certified</span>
            </div>
          </div>
        </div>

        {/* Responsible Gaming */}
        <div className="border-t border-border pt-4 mb-4">
          <h4 className="font-heading text-xs font-bold text-primary mb-3 tracking-wider uppercase text-center">Responsible Gaming</h4>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col items-center gap-1.5">
              <img src={TRUST_ICONS.GAMCARE} alt="GamCare Certified" className="h-8 md:h-10 object-contain" />
              <span className="text-[10px] text-muted-foreground">GamCare</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <img src={TRUST_ICONS.AGE_18} alt="18+ Only" className="h-8 md:h-10 object-contain" />
              <span className="text-[10px] text-muted-foreground">18+ Only</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <img src={TRUST_ICONS.RESP_GAMBLING} alt="Responsible Gambling" className="h-8 md:h-10 object-contain" />
              <span className="text-[10px] text-muted-foreground">Play Responsibly</span>
            </div>
          </div>
        </div>

        {/* Gaming Alliance */}
        <div className="border-t border-border pt-4 mb-4">
          <h4 className="font-heading text-xs font-bold text-primary mb-3 tracking-wider uppercase text-center">Gaming Alliance</h4>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col items-center gap-1.5">
              <img src={TRUST_ICONS.CAZVIP} alt="CazVIP Partner" className="h-10 md:h-12 object-contain" />
              <span className="text-[10px] text-muted-foreground">CazVIP Partner</span>
            </div>
          </div>
        </div>

        {/* Customer Service */}
        <div className="border-t border-border pt-4 mb-6">
          <h4 className="font-heading text-xs font-bold text-primary mb-3 tracking-wider uppercase text-center">Customer Service</h4>
          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col items-center gap-1.5">
              <img src={TRUST_ICONS.SUPPORT_24H} alt="24/7 Support" className="h-10 md:h-12 object-contain" />
              <span className="text-[10px] text-muted-foreground">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-4 text-center">
          <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
            &copy; 2026 TekkaBuzz.win Official (Taka Buzz | Tekka Buzz | TkkaBuzz | TekkaBaz). All Rights Reserved. 18+ Only. Please gamble responsibly. tekkabuzz.win is the ONLY official website.
          </p>
        </div>
      </div>
    </footer>
  );
}
