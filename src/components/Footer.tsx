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
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <img src={IMAGES.LOGO_FOOTER} alt="TekkaBuzz.win Footer Logo" className="h-8 md:h-10 mb-3 object-contain mx-auto sm:mx-0" />
            <p className="text-muted-foreground text-xs leading-relaxed mb-3">
              TekkaBuzz.win is the ONLY official platform. Also known as Taka Buzz, Tekka Buzz, TkkaBuzz, TekkaBaz, TakkaBuzz by Bangladesh players.
            </p>
          </div>

          {/* Games */}
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-xs font-bold text-primary mb-3 tracking-wider uppercase">Games</h3>
            <ul className="space-y-1.5">
              {GAME_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-xs font-bold text-primary mb-3 tracking-wider uppercase">Information</h3>
            <ul className="space-y-1.5">
              {INFO_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h3 className="font-heading text-xs font-bold text-primary mb-3 tracking-wider uppercase">Legal</h3>
            <ul className="space-y-1.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Licences & Responsible Gaming */}
        <div className="border-t border-border pt-6 mb-6">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                <img src={TRUST_ICONS.LICENSE_CURACAO} alt="Gaming Curacao License" className="h-8 md:h-10 object-contain opacity-80" />
                <span className="text-[9px] text-muted-foreground">Gaming Curaçao</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={TRUST_ICONS.LICENSE_3} alt="License Certificate" className="h-8 md:h-10 object-contain opacity-80" />
                <span className="text-[9px] text-muted-foreground">Licensed</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={TRUST_ICONS.CAZVIP} alt="CazVIP Partner" className="h-8 md:h-10 object-contain opacity-80" />
                <span className="text-[9px] text-muted-foreground">CazVIP</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                <img src={TRUST_ICONS.GAMCARE} alt="GamCare Certified" className="h-6 md:h-8 object-contain opacity-80" />
                <span className="text-[9px] text-muted-foreground">GamCare</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={TRUST_ICONS.AGE_18} alt="18+ Only" className="h-6 md:h-8 object-contain opacity-80" />
                <span className="text-[9px] text-muted-foreground">18+ Only</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={TRUST_ICONS.RESP_GAMBLING} alt="Responsible Gambling" className="h-6 md:h-8 object-contain opacity-80" />
                <span className="text-[9px] text-muted-foreground">Responsible Gaming</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-4 text-center">
          <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
            &copy; 2026 TekkaBuzz.win Official (Taka Buzz | Tekka Buzz | TkkaBuzz | TekkaBaz). All Rights Reserved. 18+ Only. Please gamble responsibly. tekkabuzz.win is the ONLY official website. Beware of fake sites.
          </p>
        </div>
      </div>
    </footer>
  );
}
