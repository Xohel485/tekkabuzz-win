import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import Ticker from "@/components/Ticker";
import HeroSection from "@/components/home/HeroSection";
import BannerSlider from "@/components/home/BannerSlider";
import GameCategories from "@/components/home/GameCategories";
import FeaturesSection from "@/components/home/FeaturesSection";
import PromotionsSection from "@/components/home/PromotionsSection";
import PaymentMethods from "@/components/home/PaymentMethods";
import ProviderMarquee from "@/components/home/ProviderMarquee";
import SeoContent from "@/components/home/SeoContent";
import FaqSection from "@/components/home/FaqSection";

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TekkaBuzz.win",
    "alternateName": ["Taka Buzz", "Tekka Buzz", "TkkaBuzz", "TekkaBaz", "TakkaBuzz"],
    "url": "https://www.tekkabuzz.win",
    "description": "Bangladesh's #1 Online Casino — Live Casino, Sports Betting, Slots, Crash Games. 29M+ registered players."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Taka Buzz or Tekka Buzz?", "acceptedAnswer": { "@type": "Answer", "text": "Taka Buzz and Tekka Buzz are popular search terms referring to TekkaBuzz — Bangladesh's official online gaming platform at tekkabuzz.win." } },
      { "@type": "Question", "name": "What is TkkaBuzz?", "acceptedAnswer": { "@type": "Answer", "text": "TkkaBuzz is a common spelling variant of TekkaBuzz. Players searching for tkkabuzz, takkabuzz, takkabuz, or takkbuzz will find the same official TekkaBuzz platform at tekkabuzz.win." } },
      { "@type": "Question", "name": "How to login to TekkaBuzz?", "acceptedAnswer": { "@type": "Answer", "text": "Visit tekkabuzz.win and click Login. Enter your registered mobile number and password." } },
      { "@type": "Question", "name": "How to deposit on TekkaBuzz?", "acceptedAnswer": { "@type": "Answer", "text": "TekkaBuzz.win supports bKash, Nagad, Rocket, Upay, TAP, SureCash, iPay, OkWallet, bank card, and cryptocurrency. Minimum deposit 200 Taka." } },
      { "@type": "Question", "name": "What is TekkaBuzz Affiliate Program?", "acceptedAnswer": { "@type": "Answer", "text": "The tekkabuzz.win affiliate program pays 300 Taka per referral. Visit tekkabuzz.win/affiliate for details." } }
    ]
  }
];

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>TekkaBuzz.win | Taka Buzz | Tekka Buzz — #1 Online Casino Bangladesh</title>
        <meta name="description" content="TekkaBuzz.win — Bangladesh's most trusted online casino. Known as Taka Buzz, Tekka Buzz, TkkaBuzz. 29M+ players, 6300+ games. 20,000 Taka bonus. Instant bKash Nagad withdrawal." />
        <meta name="keywords" content="tekkabuzz.win, taka buzz, tekka buzz, tekkabuzz, tkkabuzz, tekkabaz, takkabuzz, takka buzz, takkabuz, takkbuzz, tekabuzz, teka buzz, teekabuzz, tekk buzz, tekka baji, tekka buzz login, tekkabuzz login, tekka buzz bet, tekka buzz casino, tekka buzz affiliate, tekkabuzz affiliate, online casino bangladesh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tekkabuzz.win/" />
        <meta property="og:title" content="TekkaBuzz.win | Taka Buzz | Tekka Buzz — Bangladesh's #1 Online Casino" />
        <meta property="og:description" content="Bangladesh's most trusted gaming platform. 29M+ players. 20,000 Taka bonus. Instant bKash Nagad withdrawal." />
        <meta property="og:url" content="https://www.tekkabuzz.win/" />
        <meta property="og:image" content="https://tekkabuzz-win.lovable.app/images/tekka-buzz-hero.png" />
        <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      </Helmet>

      <HeroSection />
      <BannerSlider />
      <Ticker />
      <GameCategories />
      <FeaturesSection />
      <PromotionsSection />
      <PaymentMethods />
      <ProviderMarquee />
      <SeoContent />
      <FaqSection />
    </Layout>
  );
}
