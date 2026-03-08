import GameLandingTemplate from "@/components/GameLandingTemplate";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function FishingLanding() {
  return (
    <GameLandingTemplate
      title="Fishing Games"
      subtitle="Catch Big Wins at TekkaBuzz"
      description="Enjoy the best fishing games with stunning graphics. Shoot fish to win prizes. Multiple rooms with different stakes."
      metaTitle="Fishing Games | TekkaBuzz — Best Fishing Casino Games"
      metaDesc="Play fishing games at TekkaBuzz. Stunning graphics, multiple rooms, big prizes. Fun and easy to play. Join now!"
      keywords="fishing games, fish shooting game, tekkabuzz fishing, online fishing game bangladesh"
      canonicalPath="/games/fishing"
      features={[
        { icon: Trophy, title: "Big Prizes", desc: "Catch rare fish for massive rewards" },
        { icon: Zap, title: "Multiple Rooms", desc: "Different rooms for all budgets" },
        { icon: Star, title: "HD Graphics", desc: "Stunning underwater visuals" },
        { icon: Gift, title: "Daily Bonus", desc: "Free bullets for fishing games" },
      ]}
      reasons={["Easy and fun gameplay", "Multiple fishing rooms", "Stunning HD graphics", "Works on all devices", "Daily free bonus bullets", "Instant payouts"]}
      ctaText="Start Fishing Now — Get Welcome Bonus"
    />
  );
}
