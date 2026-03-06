import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface Props {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  heading: string;
  children: React.ReactNode;
}

export default function InfoPage({ title, description, keywords, canonical, heading, children }: Props) {
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">{heading}</h1>
          <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
          <div className="mt-10 flex gap-4">
            <Link to="/signup" className="bg-primary text-primary-foreground font-bold rounded-lg px-8 py-4 hover:bg-gold-hover transition-all gold-shimmer">Sign Up Now</Link>
            <Link to="/login" className="border-2 border-primary text-primary font-bold rounded-lg px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all">Login</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
