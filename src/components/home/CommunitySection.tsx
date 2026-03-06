import { Link } from "react-router-dom";
import { TRUST_ICONS } from "@/lib/images";

export default function CommunitySection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12">
          Join the <span className="text-primary">TekkaBuzz Community</span>
        </h2>

        <div className="flex justify-center mb-10">
          <img src={TRUST_ICONS.SUPPORT_24H} alt="24/7 Support" className="h-24 object-contain" loading="lazy" />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { label: "Facebook", to: "/facebook" },
            { label: "Telegram", to: "/telegram" },
            { label: "Instagram", to: "/instagram" },
            { label: "Twitter", to: "/twitter" },
          ].map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="border-2 border-primary text-primary font-bold rounded-lg px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
