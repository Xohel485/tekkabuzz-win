import GameLandingTemplate from "@/components/GameLandingTemplate";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function ArcadeLanding() {
  return (
    <GameLandingTemplate
      title="Arcade Games"
      subtitle="Fun & Rewarding Arcade Games at TekkaBuzz"
      description="Play arcade-style casino games with instant wins. Simple gameplay, exciting rewards. Perfect for casual gaming."
      metaTitle="Arcade Games | TekkaBuzz — Fun Casino Arcade"
      metaDesc="Play arcade casino games at TekkaBuzz. Fun, fast, rewarding. Simple gameplay with instant prizes. Join now!"
      keywords="arcade games, casino arcade, tekkabuzz arcade, instant win games, fun casino games"
      canonicalPath="/games/arcade"
      features={[
        { icon: Zap, title: "Instant Wins", desc: "Quick games with immediate results" },
        { icon: Trophy, title: "Variety", desc: "Dozens of unique arcade titles" },
        { icon: Star, title: "Easy to Play", desc: "Simple rules, maximum fun" },
        { icon: Gift, title: "Bonus Rewards", desc: "Extra prizes for arcade players" },
      ]}
      reasons={["Easy to learn, fun to play", "Instant win results", "Wide variety of games", "Mobile-friendly design", "Low minimum bets", "Daily promotions"]}
      ctaText="Play Arcade Games Now"
    />
  );
}
