import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const BLOG_POSTS = [
  { title: "Taka Buzz -- Complete Guide", to: "/blog/taka-buzz" },
  { title: "Tekka Buzz -- Most Trusted Platform", to: "/blog/tekka-buzz" },
  { title: "TkkaBuzz Official Guide", to: "/blog/tkkabuzz" },
  { title: "TakkaBuzz Platform", to: "/blog/takkabuzz" },
  { title: "TekkaBaz Casino", to: "/blog/tekkabaz" },
  { title: "TekaBuzz Guide", to: "/blog/tekabuzz" },
  { title: "Teka Buzz Guide", to: "/blog/teka-buzz" },
  { title: "TeekaBuzz Platform", to: "/blog/teekabuzz" },
  { title: "Takka Buzz Guide", to: "/blog/takka-buzz" },
  { title: "TakkaBuz Guide", to: "/blog/takkabuz" },
  { title: "TakkBuzz Guide", to: "/blog/takkbuzz" },
  { title: "Tekk Buzz Login Guide", to: "/blog/tekk-buzz" },
  { title: "TekkaBuzz Login Guide", to: "/blog/tekka-buzz-login" },
  { title: "TekkaBuzz Login Access", to: "/blog/tekkabuzz-login" },
  { title: "Tekka Buzz Affiliate", to: "/blog/tekka-buzz-affiliate" },
  { title: "TekkaBuzz Affiliate Program", to: "/blog/tekkabuzz-affiliate" },
  { title: "Tekka Baji Guide", to: "/blog/tekka-baji" },
  { title: "Tekka Buzz Bangladesh", to: "/blog/tekka-buzz-bangladesh" },
  { title: "TekkaBuzz Bengali Guide", to: "/blog/tekkabuzz-bengali" },
  { title: "Tekka Buzz Bet", to: "/blog/tekka-buzz-bet" },
  { title: "TekkaBuzz Casino", to: "/blog/tekkabuzz-casino" },
  { title: "Taka Alliance Gaming", to: "/blog/taka-alliance-gaming" },
];

export default function Blog() {
  return (
    <Layout>
      <Helmet>
        <title>TekkaBuzz Blog | Guides, Tips, and News</title>
        <meta name="description" content="TekkaBuzz blog -- guides, tips, news about taka buzz, tekka buzz, online casino Bangladesh." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tekkabuzz.win/blog" />
      </Helmet>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">TekkaBuzz Blog</h1>
          <div className="grid gap-4">
            {BLOG_POSTS.map((post) => (
              <Link key={post.to} to={post.to} className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all flex items-center justify-between">
                <span className="font-medium text-foreground">{post.title}</span>
                <span className="text-primary text-sm">Read</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
