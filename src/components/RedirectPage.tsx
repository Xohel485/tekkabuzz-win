import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { redirectWithFailover, D1 } from "@/lib/affiliateLinks";
import { ORGANIZATION_SCHEMA, OG_IMAGE } from "@/lib/seoSchema";

interface Props {
  seoTitle: string;
  seoDesc: string;
  seoKeywords: string;
  canonicalPath: string;
  affiliatePath?: string;
  primaryDomain?: string;
  fixedUrl?: string;
  useFailover?: boolean;
}

const LANGS = [
  { key: "en", dir: "ltr" as const, msg: (kw: string) => `Redirecting you to TekkaBuzz ${kw}...` },
  { key: "bn", dir: "ltr" as const, msg: (kw: string) => `আপনাকে TekkaBuzz ${kw}-এ নিয়ে যাওয়া হচ্ছে...` },
  { key: "ur", dir: "rtl" as const, msg: (kw: string) => `آپ کو TekkaBuzz ${kw} پر لے جایا جا رہا ہے...` },
];

const PAGE_CONTENT: Record<string, { heading: string; paragraphs: string[]; faqs: { q: string; a: string }[] }> = {
  "/login": {
    heading: "How to Login to TekkaBuzz",
    paragraphs: [
      "Logging into your TekkaBuzz account is quick and easy. Visit tekkabuzz.win, click the Login button, enter your registered mobile number and password, and you're in.",
      "Forgot your password? Use the 'Forgot Password' option on the login page. You'll receive a reset link via SMS to your registered number within seconds.",
      "For security, always verify the URL shows tekkabuzz.win before entering your credentials. Enable two-factor authentication in your account settings for extra protection.",
    ],
    faqs: [
      { q: "How do I login to TekkaBuzz?", a: "Visit tekkabuzz.win, click Login, enter your mobile number and password." },
      { q: "What if I forgot my TekkaBuzz password?", a: "Click 'Forgot Password' on the login page and follow the SMS reset instructions." },
      { q: "Can I login from mobile?", a: "Yes, TekkaBuzz works on all mobile browsers and you can also use the TekkaBuzz app." },
    ],
  },
  "/signup": {
    heading: "Why Sign Up at TekkaBuzz?",
    paragraphs: [
      "Join 29M+ players on Bangladesh's most trusted online casino. New members receive a 20,000 Taka welcome bonus on their first deposit.",
      "Registration takes less than 30 seconds. Just enter your mobile number, create a password, and you're ready to play 6,300+ games including live casino, sports betting, slots, and crash games.",
      "TekkaBuzz supports bKash, Nagad, Rocket, Upay, and cryptocurrency for instant deposits. Minimum deposit is just 200 Taka. All withdrawals are processed within 5 minutes.",
    ],
    faqs: [
      { q: "How do I sign up at TekkaBuzz?", a: "Visit tekkabuzz.win, click Sign Up, enter your mobile number and create a password." },
      { q: "What bonus do new players get?", a: "New members receive a 20,000 Taka welcome bonus on their first deposit." },
      { q: "What is the minimum deposit?", a: "The minimum deposit is 200 Taka via bKash, Nagad, Rocket, or other supported methods." },
    ],
  },
  "/register": {
    heading: "Register at TekkaBuzz — Bangladesh's #1 Casino",
    paragraphs: [
      "Create your TekkaBuzz account today and unlock access to over 6,300 games. Registration is free, fast, and secure.",
      "TekkaBuzz offers the best welcome package in Bangladesh — 20,000 Taka bonus plus daily cashback rewards. Our VIP program gives high rollers exclusive benefits.",
    ],
    faqs: [
      { q: "Is registration free?", a: "Yes, creating a TekkaBuzz account is completely free." },
      { q: "How long does registration take?", a: "Less than 30 seconds. Just your mobile number and a password." },
    ],
  },
  "/app/open": {
    heading: "Download the TekkaBuzz App",
    paragraphs: [
      "Get the TekkaBuzz mobile app for the best gaming experience. Fast loading, push notifications for promotions, and instant access to all 6,300+ games.",
      "The app works on all Android devices. Install directly from tekkabuzz.win — no Play Store needed. Lightweight, secure, and optimized for Bangladeshi networks.",
    ],
    faqs: [
      { q: "How do I install the TekkaBuzz app?", a: "Visit tekkabuzz.win/app/open from your mobile browser and follow the installation prompt." },
      { q: "Is the app free?", a: "Yes, the TekkaBuzz app is completely free to download and use." },
    ],
  },
};

export default function RedirectPage({
  seoTitle, seoDesc, seoKeywords, canonicalPath,
  affiliatePath, primaryDomain, fixedUrl, useFailover = true,
}: Props) {
  const [progress, setProgress] = useState(0);
  const [langIdx, setLangIdx] = useState(0);
  const displayName = seoTitle.replace("TekkaBuzz ", "");
  const content = PAGE_CONTENT[canonicalPath];

  const faqSchema = content?.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  } : null;

  useEffect(() => {
    const langTimer = setInterval(() => setLangIdx(i => (i + 1) % 3), 500);
    const progTimer = setInterval(() => setProgress(p => Math.min(p + 4, 100)), 60);
    const redirTimer = setTimeout(async () => {
      if (fixedUrl) { window.location.href = fixedUrl; return; }
      if (!useFailover && affiliatePath && primaryDomain) {
        window.location.href = `${primaryDomain}${affiliatePath}`; return;
      }
      if (affiliatePath) {
        await redirectWithFailover(affiliatePath, primaryDomain || D1);
      }
    }, 1500);

    return () => {
      clearInterval(langTimer);
      clearInterval(progTimer);
      clearTimeout(redirTimer);
    };
  }, [affiliatePath, fixedUrl, primaryDomain, useFailover]);

  const lang = LANGS[langIdx];

  return (
    <>
      <Helmet>
        <title>{seoTitle} | TekkaBuzz — Bangladesh Online Casino</title>
        <meta name="description" content={seoDesc} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.tekkabuzz.win${canonicalPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${seoTitle} | TekkaBuzz`} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:url" content={`https://www.tekkabuzz.win${canonicalPath}`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${seoTitle} | TekkaBuzz`} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <div className="min-h-screen bg-background font-body text-foreground">
        {/* Redirect indicator */}
        <div className="flex flex-col items-center justify-center py-16 px-8">
          <img
            src="/images/tekkabuzz-logo-cropped.png"
            alt="TekkaBuzz"
            className="h-10 mb-6 object-contain"
            loading="eager"
          />

          <h1 className="text-2xl font-extrabold text-primary mb-1 tracking-wide text-center font-heading">
            {seoTitle}
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Bangladesh's #1 Online Casino
          </p>

          <div className="w-[300px] h-[3px] bg-border rounded-full mb-7 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p
            className="text-muted-foreground text-base text-center max-w-[340px] leading-relaxed min-h-[3.5rem]"
            dir={lang.dir}
            style={{ fontFamily: lang.key === "ur" ? "serif" : "inherit" }}
          >
            {lang.msg(displayName)}
          </p>

          <div className="flex gap-2 mt-8 flex-wrap justify-center opacity-45">
            {["/images/payments/bkash.webp",
              "/images/payments/nagad.webp",
              "/images/payments/rocket.webp",
              "/images/payments/upay.webp"].map((src, i) => (
              <img key={i} src={src} alt="payment method" className="h-[18px] object-contain" loading="lazy" />
            ))}
          </div>
        </div>

        {/* SEO Content Section */}
        {content && (
          <section className="max-w-3xl mx-auto px-6 pb-16">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              {content.heading}
            </h2>

            <div className="space-y-4 mb-10">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed">{p}</p>
              ))}
            </div>

            {/* FAQ */}
            {content.faqs.length > 0 && (
              <div className="border-t border-border pt-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-5">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {content.faqs.map((faq, i) => (
                    <details key={i} className="group border border-border rounded-lg">
                      <summary className="px-4 py-3 cursor-pointer text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        {faq.q}
                      </summary>
                      <p className="px-4 pb-3 text-sm text-muted-foreground">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Internal Links */}
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/casino" className="text-xs text-muted-foreground hover:text-primary transition-colors">Live Casino</Link>
              <Link to="/sports" className="text-xs text-muted-foreground hover:text-primary transition-colors">Sports</Link>
              <Link to="/slots" className="text-xs text-muted-foreground hover:text-primary transition-colors">Slots</Link>
              <Link to="/affiliate" className="text-xs text-muted-foreground hover:text-primary transition-colors">Affiliate</Link>
              <Link to="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/faq" className="text-xs text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
