import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { redirectWithFailover, D1 } from "@/lib/affiliateLinks";
import { ORGANIZATION_SCHEMA, OG_IMAGE, hreflangTags } from "@/lib/seoSchema";

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
  "/deposit": {
    heading: "How to Deposit on TekkaBuzz",
    paragraphs: [
      "Depositing money on TekkaBuzz is instant and secure. We support bKash, Nagad, Rocket, Upay, TAP, SureCash, iPay, OkWallet, bank cards, and cryptocurrency.",
      "Minimum deposit is just 200 Taka. Simply log in to your account, go to the Deposit section, choose your preferred payment method, enter the amount, and confirm. Funds appear in your account within seconds.",
      "All transactions are encrypted with 256-bit SSL security. TekkaBuzz never stores your payment credentials. For large deposits, our VIP team provides personalized assistance.",
    ],
    faqs: [
      { q: "What is the minimum deposit on TekkaBuzz?", a: "The minimum deposit is 200 Taka via any supported payment method." },
      { q: "How long does a deposit take?", a: "Deposits are instant. Your balance updates within seconds after confirmation." },
      { q: "Which payment methods are supported?", a: "bKash, Nagad, Rocket, Upay, TAP, SureCash, iPay, OkWallet, bank cards, and cryptocurrency." },
    ],
  },
  "/withdraw": {
    heading: "How to Withdraw from TekkaBuzz",
    paragraphs: [
      "Withdraw your winnings from TekkaBuzz quickly and securely. We process all withdrawals within 5 minutes — the fastest in Bangladesh.",
      "Go to the Withdraw section in your account, select your payment method (bKash, Nagad, Rocket, or bank transfer), enter the amount, and confirm. Minimum withdrawal is 500 Taka.",
      "TekkaBuzz has paid out over 500 crore Taka to players. Our automated system ensures you get your money fast, every time.",
    ],
    faqs: [
      { q: "How long does withdrawal take?", a: "Most withdrawals are processed within 5 minutes." },
      { q: "What is the minimum withdrawal?", a: "The minimum withdrawal amount is 500 Taka." },
      { q: "Can I withdraw to bKash?", a: "Yes, bKash is one of the most popular withdrawal methods on TekkaBuzz." },
    ],
  },
  "/bkash": {
    heading: "TekkaBuzz bKash — Deposit & Withdraw Instantly",
    paragraphs: [
      "bKash is the most popular payment method on TekkaBuzz. Deposit and withdraw instantly using your bKash personal account.",
      "To deposit via bKash: Log in → Deposit → Select bKash → Enter amount → Follow bKash payment instructions. Minimum deposit 200 Taka. To withdraw: Go to Withdraw → Select bKash → Enter your bKash number and amount → Confirm.",
      "bKash transactions on TekkaBuzz are processed 24/7 with zero fees. Over 15 million bKash transactions processed successfully.",
    ],
    faqs: [
      { q: "How to deposit with bKash on TekkaBuzz?", a: "Log in, go to Deposit, select bKash, enter the amount, and follow the payment instructions." },
      { q: "Is there a fee for bKash transactions?", a: "No, TekkaBuzz does not charge any fees for bKash deposits or withdrawals." },
      { q: "How fast is bKash withdrawal?", a: "bKash withdrawals are processed within 5 minutes." },
    ],
  },
  "/nagad": {
    heading: "TekkaBuzz Nagad — Fast & Secure Payments",
    paragraphs: [
      "Use Nagad for instant deposits and withdrawals on TekkaBuzz. Nagad is Bangladesh's fastest-growing mobile financial service.",
      "Deposit via Nagad in seconds — just select Nagad as your payment method, enter the amount, and complete the transaction through the Nagad app or USSD. Minimum 200 Taka.",
      "Nagad withdrawals are processed within 5 minutes. Trusted by millions of Bangladeshi players on TekkaBuzz.",
    ],
    faqs: [
      { q: "Can I deposit with Nagad?", a: "Yes, Nagad is fully supported for both deposits and withdrawals on TekkaBuzz." },
      { q: "What is the minimum Nagad deposit?", a: "The minimum deposit via Nagad is 200 Taka." },
    ],
  },
  "/rocket": {
    heading: "TekkaBuzz Rocket — Dutch-Bangla Mobile Banking",
    paragraphs: [
      "Rocket by Dutch-Bangla Bank is a trusted payment option on TekkaBuzz. Deposit and withdraw using your Rocket account instantly.",
      "Select Rocket as your payment method, enter the deposit amount, and complete the transaction. All Rocket transactions are processed within minutes.",
    ],
    faqs: [
      { q: "Is Rocket accepted on TekkaBuzz?", a: "Yes, Rocket is fully supported for deposits and withdrawals." },
      { q: "How to withdraw via Rocket?", a: "Go to Withdraw, select Rocket, enter your account number and amount, then confirm." },
    ],
  },
  "/download": {
    heading: "Download TekkaBuzz — Play Anywhere",
    paragraphs: [
      "Download the TekkaBuzz app and enjoy 6,300+ casino games on your mobile device. The app is optimized for fast performance even on low-speed networks.",
      "Available for Android devices. Simply visit tekkabuzz.win from your mobile browser and tap the download button. No app store required — direct APK installation.",
      "The TekkaBuzz app includes all features: live casino, sports betting, slots, crash games, instant deposits via bKash/Nagad, and push notifications for promotions.",
    ],
    faqs: [
      { q: "Where can I download the TekkaBuzz app?", a: "Visit tekkabuzz.win from your mobile browser and tap the download/install button." },
      { q: "Is the app available for iPhone?", a: "Currently the app is optimized for Android. iPhone users can play through the mobile website." },
      { q: "Is the download free?", a: "Yes, the TekkaBuzz app is completely free to download." },
    ],
  },
  "/app": {
    heading: "TekkaBuzz Mobile App — Gaming on the Go",
    paragraphs: [
      "The TekkaBuzz mobile app brings Bangladesh's #1 casino to your fingertips. Play live casino, bet on sports, spin slots, and enjoy crash games — all from your phone.",
      "Features include instant bKash/Nagad deposits, push notifications for bonuses, and a smooth interface designed for mobile gaming.",
    ],
    faqs: [
      { q: "What can I do on the TekkaBuzz app?", a: "Play all 6,300+ games, deposit/withdraw money, claim bonuses, and access live support." },
      { q: "Does the app use a lot of data?", a: "No, the app is optimized for low data usage, perfect for Bangladeshi mobile networks." },
    ],
  },
  "/apk": {
    heading: "TekkaBuzz APK Download — Direct Install",
    paragraphs: [
      "Download the TekkaBuzz APK file directly from our official website. No Google Play Store needed — install directly on your Android device.",
      "The APK is lightweight (under 15MB), virus-free, and always updated. Enable 'Install from Unknown Sources' in your phone settings, then open the downloaded APK to install.",
    ],
    faqs: [
      { q: "Is the TekkaBuzz APK safe?", a: "Yes, the APK from tekkabuzz.win is 100% safe, verified, and malware-free." },
      { q: "How to install TekkaBuzz APK?", a: "Enable 'Unknown Sources' in settings, download the APK from tekkabuzz.win, and tap to install." },
    ],
  },
  "/android": {
    heading: "TekkaBuzz for Android — Best Casino App",
    paragraphs: [
      "TekkaBuzz for Android offers the smoothest mobile casino experience in Bangladesh. Compatible with Android 5.0 and above.",
      "Enjoy full access to live casino tables, sports betting with live odds, 6,300+ slot games, and instant bKash/Nagad transactions. Optimized for all screen sizes.",
    ],
    faqs: [
      { q: "What Android version is required?", a: "TekkaBuzz works on Android 5.0 (Lollipop) and above." },
      { q: "Can I play live casino on Android?", a: "Yes, all live casino games stream perfectly on the TekkaBuzz Android app." },
    ],
  },
  "/ios": {
    heading: "TekkaBuzz for iOS — iPhone & iPad",
    paragraphs: [
      "Play TekkaBuzz on your iPhone or iPad through our mobile-optimized website. Full access to all games, deposits, and withdrawals.",
      "Simply open Safari on your iOS device, visit tekkabuzz.win, and add it to your home screen for app-like experience. All features work seamlessly on iOS.",
    ],
    faqs: [
      { q: "Can I play TekkaBuzz on iPhone?", a: "Yes, visit tekkabuzz.win on Safari and add to home screen for the best experience." },
      { q: "Is there an iOS app?", a: "Use the mobile website on Safari — it works like a native app when added to home screen." },
    ],
  },
  "/get-refercode": {
    heading: "Get Your TekkaBuzz Referral Code",
    paragraphs: [
      "Share your unique TekkaBuzz referral code and earn 300 Taka for every friend who signs up and makes their first deposit.",
      "Log in to your TekkaBuzz account, go to the Referral section, and copy your unique code. Share it on WhatsApp, Facebook, or any social media. There's no limit — refer 100 friends and earn 30,000 Taka!",
    ],
    faqs: [
      { q: "How much do I earn per referral?", a: "You earn 300 Taka for every friend who signs up and deposits using your referral code." },
      { q: "Is there a referral limit?", a: "No, there is no limit. Refer as many friends as you want and keep earning." },
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
