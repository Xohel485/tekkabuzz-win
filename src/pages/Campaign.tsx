import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowRight, Gift, Sparkles, Star, Trophy, Shield, Clock, Zap, Users } from "lucide-react";
import { SITE_URL, ORGANIZATION_SCHEMA, OG_IMAGE, hreflangTags } from "@/lib/seoSchema";

export default function Campaign() {
  const hreflangs = hreflangTags("/campaign");

  return (
    <Layout>
      <Helmet>
        <title>TekkaBuzz Campaign — Exclusive Bonus Offers 2026</title>
        <meta name="description" content="Exclusive TekkaBuzz campaign offers. Get up to 20,000৳ welcome bonus, daily cashback, and special promotions. Limited time offer!" />
        <meta name="keywords" content="TekkaBuzz campaign, TekkaBuzz bonus, casino promotion 2026, exclusive bonus, new player bonus, TekkaBuzz deals" />
        <link rel="canonical" href={`${SITE_URL}/campaign`} />
        {hreflangs.map((h, i) => <link key={i} rel={h.rel} hrefLang={h.hreflang} href={h.href} />)}
        <meta property="og:title" content="TekkaBuzz Campaign — Exclusive Bonus Offers" />
        <meta property="og:description" content="Get exclusive bonus offers at TekkaBuzz. Limited time campaign!" />
        <meta property="og:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
      </Helmet>

      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb items={[{ label: "Campaign" }]} />
      </div>

      {/* Hero */}
      <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-primary/40" />
          <Star className="absolute top-1/2 right-1/3 w-3 h-3 text-yellow-500/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 border border-primary/40 text-primary text-sm font-bold rounded-full mb-6">
              <Gift className="w-5 h-5" />
              <span>Exclusive Offer</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Claim Your <br className="hidden sm:block" />
              <span className="text-primary">20,000৳ Welcome Bonus</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Bangladesh's #1 online casino and start winning today. Limited time campaign with exclusive rewards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-sm">
              <span className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <Shield className="w-4 h-4 text-green-500" /> 100% Secure
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <Clock className="w-4 h-4 text-primary" /> Limited Time
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <Zap className="w-4 h-4 text-yellow-500" /> Instant Bonus
              </span>
            </div>

            <a
              href="/signup"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg md:text-xl px-10 py-5 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Claim Offer Now
              <ArrowRight className="w-6 h-6" />
            </a>

            <p className="mt-6 text-sm text-muted-foreground">⚡ Offer expires soon — Don't miss out!</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-10">
            Campaign Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Gift, title: "Welcome Bonus", desc: "Get up to 20,000৳ on your first deposit. 100% matched bonus for new players." },
              { icon: Trophy, title: "Daily Rewards", desc: "Earn daily cashback, free spins, and exclusive tournament entries." },
              { icon: Users, title: "VIP Access", desc: "Campaign participants get fast-tracked to VIP status with premium benefits." },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-primary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Don't Miss This Offer
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Sign up now and claim your exclusive campaign bonus before it's too late.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Start Playing Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
