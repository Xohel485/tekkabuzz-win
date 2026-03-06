import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

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
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://i.ibb.co.com/VpJLpZpv/Tekka-Buzz-hero.png" />
      </Helmet>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
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
