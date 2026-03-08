import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Ticker from "@/components/Ticker";
import HeroSection from "@/components/home/HeroSection";
import BannerSlider from "@/components/home/BannerSlider";
import GameCategories from "@/components/home/GameCategories";
import FeaturesSection from "@/components/home/FeaturesSection";
import PromotionsSection from "@/components/home/PromotionsSection";
import ProviderMarquee from "@/components/home/ProviderMarquee";
import SeoContent from "@/components/home/SeoContent";
import AppDownloadSection from "@/components/home/AppDownloadSection";
import FaqSection from "@/components/home/FaqSection";
import Testimonials from "@/components/Testimonials";
import CompetitorComparison from "@/components/CompetitorComparison";
import SEOKeywordBlock from "@/components/SEOKeywordBlock";
import BannerSlider from "@/components/home/BannerSlider";
import GameCategories from "@/components/home/GameCategories";
import FeaturesSection from "@/components/home/FeaturesSection";
import PromotionsSection from "@/components/home/PromotionsSection";
import ProviderMarquee from "@/components/home/ProviderMarquee";
import SeoContent from "@/components/home/SeoContent";
import AppDownloadSection from "@/components/home/AppDownloadSection";
import FaqSection from "@/components/home/FaqSection";
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, OG_IMAGE, hreflangTags } from "@/lib/seoSchema";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is Taka Buzz or Tekka Buzz?", "acceptedAnswer": { "@type": "Answer", "text": "Taka Buzz and Tekka Buzz are popular search terms referring to TekkaBuzz — Bangladesh's official online gaming platform at tekkabuzz.win." } },
    { "@type": "Question", "name": "What is TkkaBuzz?", "acceptedAnswer": { "@type": "Answer", "text": "TkkaBuzz is a common spelling variant of TekkaBuzz. Players searching for tkkabuzz, takkabuzz, takkabuz, or takkbuzz will find the same official TekkaBuzz platform at tekkabuzz.win." } },
    { "@type": "Question", "name": "How to login to TekkaBuzz?", "acceptedAnswer": { "@type": "Answer", "text": "Visit tekkabuzz.win and click Login. Enter your registered mobile number and password." } },
    { "@type": "Question", "name": "How to deposit on TekkaBuzz?", "acceptedAnswer": { "@type": "Answer", "text": "TekkaBuzz.win supports bKash, Nagad, Rocket, Upay, TAP, SureCash, iPay, OkWallet, bank card, and cryptocurrency. Minimum deposit 200 Taka." } },
    { "@type": "Question", "name": "What is TekkaBuzz Affiliate Program?", "acceptedAnswer": { "@type": "Answer", "text": "The tekkabuzz.win affiliate program pays 300 Taka per referral. Visit tekkabuzz.win/affiliate for details." } },
  ],
};

const hreflangs = hreflangTags("/");

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>TekkaBuzz.win | Taka Buzz | Tekka Buzz — #1 Online Casino Bangladesh</title>
        <meta name="description" content="TekkaBuzz.win — Bangladesh's most trusted online casino. Known as Taka Buzz, Tekka Buzz, TkkaBuzz. 29M+ players, 6300+ games. 20,000 Taka bonus. Instant bKash Nagad withdrawal." />
        <meta name="keywords" content="tekkabuzz.win, taka buzz, tekka buzz, tekkabuzz, tkkabuzz, tekkabaz, takkabuzz, takka buzz, takkabuz, takkbuzz, tekabuzz, teka buzz, teekabuzz, tekk buzz, tekka baji, tekka buzz login, tekkabuzz login, tekka buzz bet, tekka buzz casino, tekka buzz affiliate, tekkabuzz affiliate, online casino bangladesh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tekkabuzz.win/" />
        {hreflangs.map((h, i) => (
          <link key={i} rel={h.rel} hrefLang={h.hreflang} href={h.href} />
        ))}
        <meta property="og:title" content="TekkaBuzz.win | Taka Buzz | Tekka Buzz — Bangladesh's #1 Online Casino" />
        <meta property="og:description" content="Bangladesh's most trusted gaming platform. 29M+ players. 20,000 Taka bonus. Instant bKash Nagad withdrawal." />
        <meta property="og:url" content="https://www.tekkabuzz.win/" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TekkaBuzz.win | Taka Buzz — #1 Casino Bangladesh" />
        <meta name="twitter:description" content="29M+ players. 6300+ games. Instant bKash Nagad withdrawal." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(WEBSITE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <HeroSection />
      <BannerSlider />
      <Ticker />
      <GameCategories />
      <FeaturesSection />
      <PromotionsSection />
      <ProviderMarquee />
      <AppDownloadSection />
      <SeoContent />
      <FaqSection />
    </Layout>
  );
}
