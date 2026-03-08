import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLocale } from "@/hooks/useLocale";
import { PROMOTION_PAGE } from "@/lib/gameTranslations";
import { hreflangTags } from "@/lib/seoSchema";

const hreflangs = hreflangTags("/promotion");

export default function Promotion() {
  const locale = useLocale();
  const t = PROMOTION_PAGE[locale];
  return (
    <Layout>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tekkabuzz.win/promotion" />
        {hreflangs.map((h, i) => (
          <link key={i} rel={h.rel} hrefLang={h.hreflang} href={h.href} />
        ))}
      </Helmet>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">{t.heading}</h1>
          <div className="grid gap-6">
            {t.items.map((p, i) => (
              <Link key={i} to={["/bonuses/welcome", "/bonuses/cashback", "/bonuses/referral", "/bonuses/task"][i]} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
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
