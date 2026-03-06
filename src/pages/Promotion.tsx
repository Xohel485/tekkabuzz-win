import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Promotion() {
  return (
    <Layout>
      <Helmet>
        <title>TekkaBuzz Promotions | Bonuses and Offers Bangladesh</title>
        <meta name="description" content="TekkaBuzz promotions -- 20,000 Taka welcome bonus, cashback, referral rewards." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tekkabuzz.win/promotion" />
      </Helmet>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">TekkaBuzz Promotions and Bonuses</h1>
          <div className="grid gap-6">
            {[
              { title: "Welcome Bonus", desc: "Up to 20,000 Taka on first deposit", to: "/bonuses/welcome" },
              { title: "Weekly Cashback", desc: "Unlimited cashback on all games", to: "/bonuses/cashback" },
              { title: "Referral Bonus", desc: "300 Taka per friend", to: "/bonuses/referral" },
              { title: "Task Bonus", desc: "Daily rewards for completing tasks", to: "/bonuses/task" },
            ].map((p) => (
              <Link key={p.to} to={p.to} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
                <h2 className="font-heading text-xl font-bold text-primary mb-2">{p.title}</h2>
                <p className="text-muted-foreground">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
