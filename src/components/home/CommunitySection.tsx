import { TRUST_ICONS } from "@/lib/images";

export default function CommunitySection() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mb-8 md:mb-12">
          Join the <span className="text-primary">TekkaBuzz.win</span> Community
        </h2>

        <div className="flex justify-center mb-8">
          <img src={TRUST_ICONS.SUPPORT_24H} alt="24/7 Live Support at TekkaBuzz.win" className="h-16 md:h-24 object-contain" loading="lazy" />
        </div>

        <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-2xl mx-auto">
          Connect with 29M+ TekkaBuzz.win players on our official social channels. Get exclusive bonuses, updates, and 24/7 support.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-lg md:max-w-2xl mx-auto">
          {[
            { label: "Facebook", to: "/facebook" },
            { label: "Telegram", to: "/telegram" },
            { label: "Instagram", to: "/instagram" },
            { label: "Twitter", to: "/twitter" },
          ].map((s) => (
            <a
              key={s.to}
              href={s.to}
              className="border-2 border-primary text-primary font-bold rounded-lg px-4 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-all text-center"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
