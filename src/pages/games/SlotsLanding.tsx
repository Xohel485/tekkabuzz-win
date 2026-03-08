import GameLandingTemplate from "@/components/GameLandingTemplate";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function SlotsLanding() {
  return (
    <GameLandingTemplate
      title="Best Online Slots Games"
      subtitle="Play 1000+ Premium Slot Games at TekkaBuzz"
      description="Discover the most exciting slot games with high RTP, massive jackpots, and stunning graphics. From classic fruit machines to modern video slots."
      metaTitle="Best Online Slots Games | TekkaBuzz Casino Bangladesh"
      metaDesc="Play 1000+ online slot games at TekkaBuzz. High RTP, massive jackpots, free spins. Top providers like Pragmatic Play, NetEnt. Sign up & get bonus!"
      keywords="online slots, slot games, tekkabuzz slots, best slots bangladesh, pragmatic play slots, free spins, jackpot slots"
      canonicalPath="/games/slots"
      features={[
        { icon: Trophy, title: "Huge Jackpots", desc: "Win life-changing progressive jackpots" },
        { icon: Zap, title: "Fast Payouts", desc: "Withdraw your winnings instantly" },
        { icon: Star, title: "Top Providers", desc: "Games from Pragmatic Play, NetEnt & more" },
        { icon: Gift, title: "Free Spins", desc: "Daily free spins for all players" },
      ]}
      reasons={[
        "Over 1000+ slot games from top providers",
        "High RTP slots up to 98%",
        "Progressive jackpots worth millions",
        "Mobile-optimized for play anywhere",
        "24/7 customer support",
        "Secure and licensed platform",
      ]}
      ctaText="Join Now & Get 100% Welcome Bonus"
    />
  );
}
