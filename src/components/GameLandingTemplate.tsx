import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowRight, Trophy, Zap, Star, Gift } from "lucide-react";
import { SITE_URL, ORGANIZATION_SCHEMA, OG_IMAGE, hreflangTags } from "@/lib/seoSchema";
import { LucideIcon } from "lucide-react";

interface GameLandingProps {
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  canonicalPath: string;
  features: { icon: LucideIcon; title: string; desc: string }[];
  reasons: string[];
  ctaText: string;
}

export default function GameLandingTemplate({
  title, subtitle, description, metaTitle, metaDesc, keywords,
  canonicalPath, features, reasons, ctaText,
}: GameLandingProps) {
  const hreflangs = hreflangTags(canonicalPath);

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`${SITE_URL}${canonicalPath}`} />
        {hreflangs.map((h, i) => <link key={i} rel={h.rel} hrefLang={h.hreflang} href={h.href} />)}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
      </Helmet>

      <div className="container mx-auto px-4 pt-4">
        <Breadcrumb items={[{ label: "Games", href: "/" }, { label: title }]} />
      </div>

      {/* Hero */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">{subtitle}</p>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">{description}</p>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Sign Up & Get Bonus
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Play */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-8">
            Why Play at TekkaBuzz?
          </h2>
          <ul className="max-w-2xl mx-auto space-y-3">
            {reasons.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">{ctaText}</h2>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Play Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
