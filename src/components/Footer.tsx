import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { IMAGES, TRUST_ICONS, PAYMENT_ICONS } from "@/lib/images";
import { useLocale } from "@/hooks/useLocale";
import { UI } from "@/lib/translations";

const LOGO_CROPPED = "/images/tekkabuzz-logo-cropped.png";

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

const TRUST_SECTIONS_DATA = [
  {
    titleKey: "gamingLicence" as const,
    badges: [
      { src: TRUST_ICONS.LICENSE_CURACAO, alt: "Gaming Curacao License" },
      { src: TRUST_ICONS.LICENSE_3, alt: "Licensed & Certified" },
    ],
  },
  {
    titleKey: "responsibleGamingBadge" as const,
    badges: [
      { src: TRUST_ICONS.GAMCARE, alt: "GamCare Certified" },
      { src: TRUST_ICONS.AGE_18, alt: "18+ Only" },
      { src: TRUST_ICONS.RESP_GAMBLING, alt: "Responsible Gambling" },
    ],
  },
  {
    titleKey: "gamingAlliance" as const,
    badges: [{ src: TRUST_ICONS.CAZVIP, alt: "CazVIP Partner" }],
  },
  {
    titleKey: "customerService" as const,
    badges: [{ src: TRUST_ICONS.SUPPORT_24H, alt: "24/7 Support" }],
  },
];

export default function Footer() {
  const locale = useLocale();
  const t = UI[locale];

  const GAME_LINKS = [
    { label: t.liveCasino, to: "/casino" },
    { label: t.sportsBetting, to: "/sports" },
    { label: t.slots, to: "/slots" },
    { label: t.crashGames, to: "/crash" },
    { label: t.fishing, to: "/fishing" },
    { label: t.lottery, to: "/lottery" },
    { label: t.arcade, to: "/arcade" },
    { label: t.tableGames, to: "/table" },
  ];

  const INFO_LINKS = [
    { label: t.about, to: "/about" },
    { label: t.affiliate, to: "/affiliate" },
    { label: t.blog, to: "/blog" },
    { label: t.promotions, to: "/promotion" },
    { label: t.faq, to: "/faq" },
    { label: t.contact, to: "/contact" },
    { label: t.vipProgram, to: "/vip" },
  ];

  const LEGAL_LINKS = [
    { label: t.termsOfService, to: "/terms" },
    { label: t.privacyPolicy, to: "/privacy" },
    { label: t.responsibleGaming, to: "/responsible-gaming" },
  ];

  return (
    <footer className="border-t border-border" style={{ backgroundColor: "#0d1117" }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" aria-label="TekkaBuzz Home">
              <img src={LOGO_CROPPED} alt="TekkaBuzz.win" className="h-8 w-auto object-contain" loading="lazy" width="280" height="32" />
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed mt-3 mb-4">{t.footerDescription}</p>
            <div className="flex gap-2 justify-center">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.href} href={s.href} aria-label={s.ariaLabel} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Games */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4 font-heading">{t.gamesFooter}</h4>
            <ul className="space-y-2">
              {GAME_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4 font-heading">{t.info}</h4>
            <ul className="space-y-2">
              {INFO_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4 font-heading">{t.legal}</h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment icons */}
      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <p className="text-muted-foreground/50 text-xs uppercase tracking-widest">{t.paymentMethods}</p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {PAYMENT_ICONS.map((p) => (
              <img key={p.name} src={p.url} alt={`${p.name} payment`} className="h-8 md:h-10 w-auto object-contain bg-white/10 rounded-md px-1.5 py-1" loading="lazy" width="60" height="32" />
            ))}
            <div className="h-8 md:h-10 bg-white/10 rounded-md px-2.5 py-1 flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 md:h-6 w-auto" aria-label="Bank Card payment">
                <rect x="1" y="4" width="22" height="16" rx="3" fill="#1565C0"/><rect x="1" y="8" width="22" height="3" fill="#0D47A1"/><rect x="3" y="14" width="6" height="2" rx="1" fill="#E3F2FD"/><rect x="3" y="17" width="4" height="1" rx="0.5" fill="#90CAF9"/><circle cx="18" cy="15.5" r="2.5" fill="#FF9800"/><circle cx="20.5" cy="15.5" r="2.5" fill="#F44336" opacity="0.8"/>
              </svg>
              <span className="text-[10px] text-muted-foreground font-medium hidden sm:inline">Bank Card</span>
            </div>
            <div className="h-8 md:h-10 bg-white/10 rounded-md px-2.5 py-1 flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 md:h-6 w-auto" aria-label="Crypto payment">
                <circle cx="12" cy="12" r="11" fill="#F7931A"/><path d="M16.662 10.661c.227-1.513-0.926-2.326-2.5-2.868l.511-2.05-1.248-.311-.498 1.996c-.328-.082-.665-.159-1-.236l.501-2.009-1.247-.311-.511 2.05c-.271-.062-.538-.123-.796-.187l.001-.007-1.721-.43-.332 1.333s.926.212.906.225c.505.126.596.461.581.727l-.582 2.332c.035.009.08.022.13.042l-.132-.033-.815 3.268c-.062.153-.218.383-.572.296.013.018-.907-.226-.907-.226l-.619 1.429 1.624.405c.302.076.598.155.889.229l-.516 2.074 1.246.311.512-2.052c.34.092.671.177.994.257l-.51 2.044 1.248.311.516-2.07c2.125.402 3.723.24 4.395-1.683.541-1.547-.027-2.44-1.145-3.022.814-.188 1.427-.724 1.59-1.831zm-2.846 3.989c-.385 1.546-2.987.71-3.831.5l.683-2.741c.844.211 3.548.628 3.148 2.241zm.384-4.012c-.35 1.406-2.517.691-3.219.516l.62-2.485c.702.175 2.963.502 2.599 1.969z" fill="white"/>
              </svg>
              <span className="text-[10px] text-muted-foreground font-medium hidden sm:inline">Crypto</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_SECTIONS_DATA.map((section) => (
            <div key={section.titleKey} className="flex flex-col items-center text-center gap-3">
              <p className="text-muted-foreground/50 text-[10px] uppercase tracking-widest font-medium">{t[section.titleKey]}</p>
              <div className="flex flex-wrap gap-3 justify-center items-center">
                {section.badges.map((b) => (
                  <img key={b.alt} src={b.src} alt={b.alt} className="h-8 md:h-10 object-contain" loading="lazy" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-4">
        <p className="text-center text-muted-foreground/40 text-xs px-4 leading-relaxed">{t.copyright}</p>
      </div>
    </footer>
  );
}
