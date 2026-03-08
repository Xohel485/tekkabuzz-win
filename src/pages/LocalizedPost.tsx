import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { Link } from "react-router-dom";
import { useLocale } from "@/hooks/useLocale";
import { UI } from "@/lib/translations";
import { SITE_URL } from "@/lib/seoSchema";

const NOT_FOUND: Record<string, { heading: string; back: string }> = {
  en: { heading: "Post Not Found", back: "Back to Blog" },
  bn: { heading: "পোস্ট পাওয়া যায়নি", back: "ব্লগে ফিরুন" },
  ur: { heading: "پوسٹ نہیں ملی", back: "بلاگ پر واپس" },
};

const CTA: Record<string, { signUp: string; login: string; join: string }> = {
  en: { signUp: "Sign Up — Get Bonus", login: "Login", join: "Join TekkaBuzz Now" },
  bn: { signUp: "সাইন আপ — বোনাস পান", login: "লগইন", join: "এখনই টেক্কাবাজে যোগ দিন" },
  ur: { signUp: "سائن اپ — بونس حاصل کریں", login: "لاگ ان", join: "ابھی ٹیکابز میں شامل ہوں" },
};

function getLocalePrefix(locale: string) {
  if (locale === "bn") return "/bd/bn";
  if (locale === "ur") return "/pk/ur";
  return "";
}

export default function LocalizedPost() {
  const { slug } = useParams<{ slug: string }>();
  const locale = useLocale();
  const { post, loading } = useBlogPost(slug || "");
  const prefix = getLocalePrefix(locale);
  const t = UI[locale];
  const notFound = NOT_FOUND[locale] || NOT_FOUND.en;
  const cta = CTA[locale] || CTA.en;

  if (loading) {
    return (
      <Layout>
        <div className="py-16 px-4 text-center text-muted-foreground">Loading...</div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="py-16 px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{notFound.heading}</h1>
          <Link to={`${prefix}/blog`} className="text-primary underline">{notFound.back}</Link>
        </div>
      </Layout>
    );
  }

  const canonical = `${SITE_URL}${prefix}/blog/post/${post.slug}`;

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | TekkaBuzz</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <html lang={locale === "bn" ? "bn" : locale === "ur" ? "ur" : "en"} />
      </Helmet>

      <article className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">{post.title}</h1>

          <div className="flex gap-4 mb-10">
            <Link to={`${prefix}/signup`} className="bg-primary text-primary-foreground font-bold rounded-lg px-6 py-3 hover:bg-gold-hover transition-all gold-shimmer">{cta.signUp}</Link>
            <Link to={`${prefix}/login`} className="border-2 border-primary text-primary font-bold rounded-lg px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all">{cta.login}</Link>
          </div>

          <div
            className="text-muted-foreground leading-relaxed space-y-5 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-10 flex gap-4">
            <Link to={`${prefix}/signup`} className="bg-primary text-primary-foreground font-bold rounded-lg px-8 py-4 hover:bg-gold-hover transition-all gold-shimmer">{cta.join}</Link>
            <Link to={`${prefix}/login`} className="border-2 border-primary text-primary font-bold rounded-lg px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all">{cta.login}</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
