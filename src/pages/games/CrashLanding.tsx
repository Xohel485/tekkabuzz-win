import GameLandingTemplate from "@/components/GameLandingTemplate";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function CrashLanding() {
  return (
    <GameLandingTemplate
      title="Crash Games"
      subtitle="Aviator, JetX & More at TekkaBuzz"
      description="Play exciting crash games with multipliers up to 1000x. Simple to play, massive winning potential. Aviator, JetX, Spaceman and more."
      metaTitle="Crash Games | TekkaBuzz — Aviator, JetX Online"
      metaDesc="Play crash games at TekkaBuzz. Aviator, JetX, Spaceman with up to 1000x multipliers. Fast, exciting, instant withdrawals."
      keywords="crash games, aviator game, jetx, tekkabuzz crash, crash gambling, spaceman game"
      canonicalPath="/games/crash"
      features={[
        { icon: Zap, title: "Up to 1000x", desc: "Massive multipliers for big wins" },
        { icon: Trophy, title: "Provably Fair", desc: "Verified fair gameplay" },
        { icon: Star, title: "Popular Games", desc: "Aviator, JetX, Spaceman & more" },
        { icon: Gift, title: "Crash Bonus", desc: "Special bonuses for crash players" },
      ]}
      reasons={["Simple and exciting gameplay", "Provably fair system", "Up to 1000x multipliers", "Auto cash-out feature", "Play on mobile anytime", "Instant withdrawals"]}
      ctaText="Play Crash Games Now"
    />
  );
}
