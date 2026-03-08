import GameLandingTemplate from "@/components/GameLandingTemplate";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function LotteryLanding() {
  return (
    <GameLandingTemplate
      title="Lottery Games"
      subtitle="Win Big with TekkaBuzz Lottery"
      description="Try your luck with exciting lottery games. Keno, scratch cards, number games and more. Affordable tickets, life-changing prizes."
      metaTitle="Lottery Games | TekkaBuzz — Online Lottery Bangladesh"
      metaDesc="Play lottery games at TekkaBuzz. Keno, scratch cards, number games. Affordable tickets, big prizes. Join now!"
      keywords="lottery games, online lottery, tekkabuzz lottery, keno, scratch cards, number games bangladesh"
      canonicalPath="/games/lottery"
      features={[
        { icon: Trophy, title: "Big Jackpots", desc: "Massive prize pools every day" },
        { icon: Zap, title: "Instant Results", desc: "Know your results immediately" },
        { icon: Star, title: "Multiple Games", desc: "Keno, scratch cards & more" },
        { icon: Gift, title: "Free Tickets", desc: "Daily free lottery tickets" },
      ]}
      reasons={["Affordable ticket prices", "Multiple lottery types", "Daily draws with big prizes", "Instant scratch cards", "Mobile-friendly play", "Secure and fair"]}
      ctaText="Try Your Luck Now — Get Free Tickets"
    />
  );
}
