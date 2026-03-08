import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useLocale } from "@/hooks/useLocale";
import { UI } from "@/lib/translations";
import { SITE_URL } from "@/lib/seoSchema";

const BLOG_META: Record<string, { title: string; description: string; heading: string; readLabel: string; newLabel: string; joinCta: string }> = {
  en: {
    title: "TekkaBuzz Blog | Guides, Tips, and News",
    description: "TekkaBuzz blog — guides, tips, news about taka buzz, tekka buzz, online casino Bangladesh.",
    heading: "TekkaBuzz Blog",
    readLabel: "Read",
    newLabel: "NEW",
    joinCta: "Back to Home",
  },
  bn: {
    title: "টেক্কাবাজ ব্লগ | গাইড, টিপস এবং খবর",
    description: "টেক্কাবাজ ব্লগ — গাইড, টিপস, অনলাইন ক্যাসিনো বাংলাদেশ সম্পর্কে খবর।",
    heading: "টেক্কাবাজ ব্লগ",
    readLabel: "পড়ুন",
    newLabel: "নতুন",
    joinCta: "হোমে ফিরুন",
  },
  ur: {
    title: "ٹیکابز بلاگ | گائیڈز، ٹپس اور خبریں",
    description: "ٹیکابز بلاگ — گائیڈز، ٹپس، آن لائن کیسینو بنگلہ دیش کے بارے میں خبریں۔",
    heading: "ٹیکابز بلاگ",
    readLabel: "پڑھیں",
    newLabel: "نیا",
    joinCta: "ہوم پر واپس",
  },
};

const STATIC_POSTS = [
  { title: "Taka Buzz — Complete Guide", titleBn: "টাকা বাজ — সম্পূর্ণ গাইড", titleUr: "ٹاکا بز — مکمل گائیڈ", slug: "taka-buzz" },
  { title: "Tekka Buzz — Most Trusted Platform", titleBn: "টেক্কা বাজ — সবচেয়ে বিশ্বস্ত প্ল্যাটফর্ম", titleUr: "ٹیکا بز — سب سے قابل اعتماد پلیٹ فارم", slug: "tekka-buzz" },
  { title: "TkkaBuzz Official Guide", titleBn: "TkkaBuzz অফিসিয়াল গাইড", titleUr: "TkkaBuzz آفیشل گائیڈ", slug: "tkkabuzz" },
  { title: "TakkaBuzz Platform", titleBn: "TakkaBuzz প্ল্যাটফর্ম", titleUr: "TakkaBuzz پلیٹ فارم", slug: "takkabuzz" },
  { title: "TekkaBaz Casino", titleBn: "TekkaBaz ক্যাসিনো", titleUr: "TekkaBaz کیسینو", slug: "tekkabaz" },
  { title: "TekaBuzz Guide", titleBn: "TekaBuzz গাইড", titleUr: "TekaBuzz گائیڈ", slug: "tekabuzz" },
  { title: "Teka Buzz Guide", titleBn: "টেকা বাজ গাইড", titleUr: "ٹیکا بز گائیڈ", slug: "teka-buzz" },
  { title: "TeekaBuzz Platform", titleBn: "TeekaBuzz প্ল্যাটফর্ম", titleUr: "TeekaBuzz پلیٹ فارم", slug: "teekabuzz" },
  { title: "Takka Buzz Guide", titleBn: "তক্কা বাজ গাইড", titleUr: "ٹکا بز گائیڈ", slug: "takka-buzz" },
  { title: "TakkaBuz Guide", titleBn: "TakkaBuz গাইড", titleUr: "TakkaBuz گائیڈ", slug: "takkabuz" },
  { title: "TakkBuzz Guide", titleBn: "TakkBuzz গাইড", titleUr: "TakkBuzz گائیڈ", slug: "takkbuzz" },
  { title: "Tekk Buzz Login Guide", titleBn: "Tekk Buzz লগইন গাইড", titleUr: "Tekk Buzz لاگ ان گائیڈ", slug: "tekk-buzz" },
  { title: "TekkaBuzz Login Guide", titleBn: "টেক্কাবাজ লগইন গাইড", titleUr: "ٹیکابز لاگ ان گائیڈ", slug: "tekka-buzz-login" },
  { title: "TekkaBuzz Login Access", titleBn: "টেক্কাবাজ লগইন অ্যাক্সেস", titleUr: "ٹیکابز لاگ ان رسائی", slug: "tekkabuzz-login" },
  { title: "Tekka Buzz Affiliate", titleBn: "টেক্কা বাজ অ্যাফিলিয়েট", titleUr: "ٹیکا بز ایفیلیٹ", slug: "tekka-buzz-affiliate" },
  { title: "TekkaBuzz Affiliate Program", titleBn: "টেক্কাবাজ অ্যাফিলিয়েট প্রোগ্রাম", titleUr: "ٹیکابز ایفیلیٹ پروگرام", slug: "tekkabuzz-affiliate" },
  { title: "Tekka Baji Guide", titleBn: "টেক্কা বাজি গাইড", titleUr: "ٹیکا باجی گائیڈ", slug: "tekka-baji" },
  { title: "Tekka Buzz Bangladesh", titleBn: "টেক্কা বাজ বাংলাদেশ", titleUr: "ٹیکا بز بنگلہ دیش", slug: "tekka-buzz-bangladesh" },
  { title: "TekkaBuzz Bengali Guide", titleBn: "টেক্কাবাজ বাংলা গাইড", titleUr: "ٹیکابز بنگالی گائیڈ", slug: "tekkabuzz-bengali" },
  { title: "Tekka Buzz Bet", titleBn: "টেক্কা বাজ বেট", titleUr: "ٹیکا بز بیٹ", slug: "tekka-buzz-bet" },
  { title: "TekkaBuzz Casino", titleBn: "টেক্কাবাজ ক্যাসিনো", titleUr: "ٹیکابز کیسینو", slug: "tekkabuzz-casino" },
  { title: "Taka Alliance Gaming", titleBn: "টাকা অ্যালায়েন্স গেমিং", titleUr: "ٹاکا الائنس گیمنگ", slug: "taka-alliance-gaming" },
];

function getLocalePrefix(locale: string) {
  if (locale === "bn") return "/bd/bn";
  if (locale === "ur") return "/pk/ur";
  return "";
}

export default function LocalizedBlog() {
  const locale = useLocale();
  const { publishedPosts } = useBlogPosts();
  const meta = BLOG_META[locale] || BLOG_META.en;
  const prefix = getLocalePrefix(locale);
  const canonical = `${SITE_URL}${prefix}/blog`;
  const t = UI[locale];

  return (
    <Layout>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <html lang={locale === "bn" ? "bn" : locale === "ur" ? "ur" : "en"} />
      </Helmet>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">{meta.heading}</h1>
          <div className="grid gap-4">
            {publishedPosts.map((post) => (
              <Link
                key={post.id}
                to={`${prefix}/blog/post/${post.slug}`}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all flex items-center justify-between"
              >
                <div>
                  <span className="font-medium text-foreground">{post.title}</span>
                  <span className="text-xs text-muted-foreground ml-2">{meta.newLabel}</span>
                </div>
                <span className="text-primary text-sm">{meta.readLabel}</span>
              </Link>
            ))}
            {STATIC_POSTS.map((post) => {
              const title = locale === "bn" ? post.titleBn : locale === "ur" ? post.titleUr : post.title;
              return (
                <Link
                  key={post.slug}
                  to={`${prefix}/blog/${post.slug}`}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all flex items-center justify-between"
                >
                  <span className="font-medium text-foreground">{title}</span>
                  <span className="text-primary text-sm">{meta.readLabel}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
