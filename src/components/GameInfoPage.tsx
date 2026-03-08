import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { ORGANIZATION_SCHEMA, OG_IMAGE, breadcrumbSchema, hreflangTags } from "@/lib/seoSchema";

interface GamePageProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  heading: string;
  ctaText: string;
  ctaLink: string;
  content: string;
}

export default function GameInfoPage({ title, description, keywords, canonical, heading, ctaText, ctaLink, content }: GamePageProps) {
  const location = useLocation();
  const basePath = location.pathname.replace(/^\/(bd\/bn|pk\/ur)/, "") || "/";
  const hreflangs = hreflangTags(basePath);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Games", url: "/casino" },
    { name: heading.replace("Play ", "").replace(" at TekkaBuzz", ""), url: basePath },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        {hreflangs.map((h, i) => (
          <link key={i} rel={h.rel} hrefLang={h.hreflang} href={h.href} />
        ))}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(crumbs))}</script>
      </Helmet>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-1">/</span>}
                {i < crumbs.length - 1 ? (
                  <Link to={c.url} className="hover:text-primary transition-colors">{c.name}</Link>
                ) : (
                  <span className="text-foreground">{c.name}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {heading}
          </h1>
          <div className="flex gap-4 mb-10">
            <Link to={ctaLink} className="bg-primary text-primary-foreground font-bold rounded-lg px-8 py-4 hover:bg-gold-hover transition-all gold-shimmer">
              {ctaText}
            </Link>
            <Link to="/signup" className="border-2 border-primary text-primary font-bold rounded-lg px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all">
              Sign Up
            </Link>
          </div>
          <div className="text-muted-foreground leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
    </Layout>
  );
}
