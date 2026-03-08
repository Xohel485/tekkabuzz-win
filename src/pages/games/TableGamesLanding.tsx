import GameLandingTemplate from "@/components/GameLandingTemplate";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function TableGamesLanding() {
  return (
    <GameLandingTemplate
      title="Table Games"
      subtitle="Classic Casino Table Games at TekkaBuzz"
      description="Play classic table games including Blackjack, Roulette, Baccarat, Poker and more. RNG-based and live dealer options available."
      metaTitle="Table Games | TekkaBuzz — Blackjack, Roulette, Poker"
      metaDesc="Play table games at TekkaBuzz. Blackjack, Roulette, Baccarat, Poker and more. Fair gameplay, great odds. Join now!"
      keywords="table games, blackjack, roulette, baccarat, poker, tekkabuzz table games, casino table games"
      canonicalPath="/games/table-games"
      features={[
        { icon: Trophy, title: "Classic Games", desc: "Blackjack, Roulette, Baccarat & more" },
        { icon: Zap, title: "Fair Play", desc: "Certified RNG for fair results" },
        { icon: Star, title: "Great Odds", desc: "Best table game odds online" },
        { icon: Gift, title: "Table Bonus", desc: "Special bonuses for table game players" },
      ]}
      reasons={["Wide variety of table games", "Both RNG and live dealer options", "Best odds in Bangladesh", "Professional gaming experience", "Low minimum bets", "24/7 availability"]}
      ctaText="Play Table Games Now — Get Welcome Bonus"
    />
  );
}
