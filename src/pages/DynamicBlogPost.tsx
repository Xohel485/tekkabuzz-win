import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { Link } from "react-router-dom";
import { SITE_URL } from "@/lib/seoSchema";

export default function DynamicBlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading } = useBlogPost(slug || "");

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
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary underline">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`;

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | TekkaBuzz Blog</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE_URL}/images/tekka-buzz-hero.png`} />
      </Helmet>

      <article className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">{post.title}</h1>

          <div className="flex gap-4 mb-10">
            <Link to="/signup" className="bg-primary text-primary-foreground font-bold rounded-lg px-6 py-3 hover:bg-gold-hover transition-all gold-shimmer">Sign Up — Get Bonus</Link>
            <Link to="/login" className="border-2 border-primary text-primary font-bold rounded-lg px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all">Login</Link>
          </div>

          <div
            className="text-muted-foreground leading-relaxed space-y-5 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-10 flex gap-4">
            <Link to="/signup" className="bg-primary text-primary-foreground font-bold rounded-lg px-8 py-4 hover:bg-gold-hover transition-all gold-shimmer">Join TekkaBuzz Now</Link>
            <Link to="/login" className="border-2 border-primary text-primary font-bold rounded-lg px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all">Login</Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
