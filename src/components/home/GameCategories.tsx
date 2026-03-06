import { Link } from "react-router-dom";
import { GAME_ICONS } from "@/lib/images";

const CATEGORIES = [
  { title: "Live Casino", desc: "Real dealers, baccarat, roulette, blackjack", icon: GAME_ICONS.CASINO, to: "/go/casino" },
  { title: "Sports Betting", desc: "Cricket, football, live odds, in-play betting", icon: GAME_ICONS.SPORT, to: "/go/sports" },
  { title: "Slot Games", desc: "1000+ slots from JILI, PG Soft, Pragmatic", icon: GAME_ICONS.SLOT, to: "/go/slots" },
  { title: "Crash Games", desc: "Aviator, JetX, Spaceman, Plinko", icon: GAME_ICONS.CRASH, to: "/go/crash" },
  { title: "Fishing Games", desc: "Fun fishing games with big multipliers", icon: GAME_ICONS.FISHING, to: "/go/fishing" },
  { title: "Lottery", desc: "Win jackpots with lottery games", icon: GAME_ICONS.LOTTERY, to: "/go/lottery" },
  { title: "Arcade Games", desc: "Exciting arcade games for quick wins", icon: GAME_ICONS.ARCADE, to: "/go/arcade" },
  { title: "Table Games", desc: "Classic table games with live dealers", icon: GAME_ICONS.TABLE, to: "/go/table-games" },
];

export default function GameCategories() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Popular Games at <span className="text-primary">TekkaBuzz</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.to}
              to={cat.to}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 group"
            >
              <img src={cat.icon} alt={cat.title} className="w-16 h-16 mx-auto mb-4 object-contain" loading="lazy" />
              <h3 className="font-heading text-sm md:text-base font-bold text-foreground mb-2">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 hidden md:block">{cat.desc}</p>
              <span className="inline-block bg-primary text-primary-foreground font-bold rounded-lg px-4 py-2 text-xs group-hover:bg-gold-hover transition-all">
                Play Now
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
