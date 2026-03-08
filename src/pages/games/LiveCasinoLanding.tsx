import GameLandingTemplate from "@/components/GameLandingTemplate";
import { Trophy, Zap, Star, Gift } from "lucide-react";

export default function LiveCasinoLanding() {
  return (
    <GameLandingTemplate
      title="Live Casino Games"
      subtitle="Play with Real Dealers at TekkaBuzz"
      description="Experience the thrill of a real casino from home. Live Blackjack, Roulette, Baccarat, and more with professional dealers."
      metaTitle="Live Casino Games | TekkaBuzz — Real Dealers Online"
      metaDesc="Play live casino games at TekkaBuzz with real dealers. Live Blackjack, Roulette, Baccarat, Dragon Tiger. HD streaming 24/7."
      keywords="live casino, live dealer, tekkabuzz live casino, online baccarat, live roulette, live blackjack bangladesh"
      canonicalPath="/games/live-casino"
      features={[
        { icon: Star, title: "HD Streaming", desc: "Crystal clear video with professional dealers" },
        { icon: Zap, title: "Real-time Play", desc: "Interact with dealers and other players live" },
        { icon: Trophy, title: "Multiple Tables", desc: "Choose from hundreds of live tables" },
        { icon: Gift, title: "Live Bonus", desc: "Special bonuses for live casino players" },
      ]}
      reasons={[
        "Professional dealers available 24/7",
        "HD quality streaming on all devices",
        "Wide variety of table games",
        "Private tables for VIP players",
        "Instant deposits via bKash & Nagad",
        "Licensed and regulated platform",
      ]}
      ctaText="Join Live Casino Now — Get Welcome Bonus"
    />
  );
}
