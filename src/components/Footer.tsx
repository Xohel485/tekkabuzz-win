import { Link } from "react-router-dom";
import { IMAGES, TRUST_ICONS } from "@/lib/images";

const GAME_LINKS = [
  { label: "Live Casino", to: "/go/casino" },
  { label: "Sports Betting", to: "/go/sports" },
  { label: "Slots", to: "/go/slots" },
  { label: "Crash Games", to: "/go/crash" },
  { label: "Fishing Games", to: "/go/fishing" },
  { label: "Lottery", to: "/go/lottery" },
  { label: "Arcade", to: "/go/arcade" },
  { label: "Table Games", to: "/go/table-games" },
  { label: "VIP Program", to: "/go/vip" },
];

const INFO_LINKS = [
  { label: "About", to: "/about" },
  { label: "Affiliate", to: "/affiliate" },
  { label: "Referral", to: "/referral" },
  { label: "Promotions", to: "/promotion" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Responsible Gaming", to: "/responsible-gaming" },
  { label: "Bonuses", to: "/bonuses/welcome" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={IMAGES.LOGO_FOOTER} alt="TekkaBuzz Footer Logo" className="h-10 md:h-12 mb-3 object-contain" />
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3">
              TekkaBuzz (tekkabuzz.win) is the ONLY official platform. Also known as Taka Buzz, Tekka Buzz, TkkaBuzz, TekkaBaz, TakkaBuzz by Bangladesh players.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Facebook", to: "/facebook" },
                { label: "Telegram", to: "/telegram" },
                { label: "Instagram", to: "/instagram" },
                { label: "Twitter", to: "/twitter" },
              ].map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="text-xs text-muted-foreground hover:text-primary border border-border rounded px-2 py-1 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-heading text-xs md:text-sm font-bold text-primary mb-3 md:mb-4 tracking-wider uppercase">Games</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {GAME_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-heading text-xs md:text-sm font-bold text-primary mb-3 md:mb-4 tracking-wider uppercase">Information</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {INFO_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading text-xs md:text-sm font-bold text-primary mb-3 md:mb-4 tracking-wider uppercase">Legal</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Licences */}
        <div className="border-t border-border pt-6 mb-6 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4">
          <div className="flex gap-3 items-center justify-center">
            <img src={TRUST_ICONS.LICENSE_CURACAO} alt="Gaming Curacao" className="h-8 md:h-10 object-contain opacity-70" />
            <img src={TRUST_ICONS.LICENSE_3} alt="License" className="h-8 md:h-10 object-contain opacity-70" />
            <img src={TRUST_ICONS.CAZVIP} alt="CazVIP" className="h-8 md:h-10 object-contain opacity-70" />
          </div>
          <div className="flex gap-3 items-center justify-center">
            <img src={TRUST_ICONS.GAMCARE} alt="GamCare" className="h-6 md:h-8 object-contain opacity-70" />
            <img src={TRUST_ICONS.AGE_18} alt="18+" className="h-6 md:h-8 object-contain opacity-70" />
            <img src={TRUST_ICONS.RESP_GAMBLING} alt="Responsible Gambling" className="h-6 md:h-8 object-contain opacity-70" />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-4 text-center">
          <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
            &copy; 2025 TekkaBuzz Official (Taka Buzz | Tekka Buzz | TkkaBuzz | TekkaBaz). All Rights Reserved. 18+ Only. Please gamble responsibly. tekkabuzz.win is the ONLY official website. Beware of fake sites.
          </p>
        </div>
      </div>
    </footer>
  );
}
