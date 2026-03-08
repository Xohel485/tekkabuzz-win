import GameLandingTemplate from "@/components/GameLandingTemplate";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function SportsLanding() {
  return (
    <GameLandingTemplate
      title="Sports Betting"
      subtitle="Bet on Cricket, Football & More at TekkaBuzz"
      description="Best odds on cricket, football, tennis, kabaddi and more. Live betting with instant payouts. Pre-match and in-play betting available."
      metaTitle="Sports Betting | TekkaBuzz — Best Odds Bangladesh"
      metaDesc="Bet on cricket, football & more at TekkaBuzz. Best odds, live betting, instant payouts via bKash. Join now & get sports bonus!"
      keywords="sports betting, cricket betting, football betting, tekkabuzz sports, live betting bangladesh, best odds"
      canonicalPath="/games/sports"
      features={[
        { icon: Trophy, title: "Best Odds", desc: "Competitive odds on all major sports" },
        { icon: Zap, title: "Live Betting", desc: "Bet in real-time as the action unfolds" },
        { icon: Star, title: "50+ Sports", desc: "Cricket, football, tennis, kabaddi & more" },
        { icon: Gift, title: "Sports Bonus", desc: "Special bonuses for sports bettors" },
      ]}
      reasons={[
        "Best cricket betting odds in Bangladesh",
        "Live in-play betting with instant updates",
        "IPL, BPL, World Cup coverage",
        "Football: EPL, La Liga, Champions League",
        "Fast withdrawals via bKash, Nagad, Rocket",
        "24/7 customer support",
      ]}
      ctaText="Start Betting Now — Get Sports Welcome Bonus"
    />
  );
}
