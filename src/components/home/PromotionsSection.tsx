import { Link } from "react-router-dom";

const PROMOS = [
  { title: "Welcome Bonus", desc: "Up to 20,000 Taka for new players", link: "/bonuses/welcome", cta: "/signup", ctaText: "Claim Bonus" },
  { title: "Weekly Cashback", desc: "Unlimited cashback on all games", link: "/bonuses/cashback", cta: "/signup", ctaText: "Get Cashback" },
  { title: "Referral Bonus", desc: "300 Taka per friend you refer", link: "/bonuses/referral", cta: "/get-refercode", ctaText: "Get Referral Code" },
  { title: "Task Bonus", desc: "Daily rewards for completing tasks", link: "/bonuses/task", cta: "/signup", ctaText: "Start Earning" },
];

export default function PromotionsSection() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
          TekkaBuzz <span className="text-primary">Bonuses and Promotions</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {PROMOS.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-xl p-4 md:p-6 hover:border-primary transition-all duration-300 flex flex-col text-center">
              <h3 className="font-heading text-xs md:text-lg font-bold text-primary mb-1 md:mb-2">{p.title}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground mb-3 md:mb-4 flex-1">{p.desc}</p>
              <Link to={p.link} className="text-[10px] md:text-xs text-muted-foreground hover:text-primary mb-2 md:mb-3 underline">Learn more</Link>
              <Link
                to={p.cta}
                className="bg-primary text-primary-foreground font-bold rounded-lg px-3 py-2 text-xs md:text-sm text-center hover:bg-gold-hover transition-all"
              >
                {p.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
