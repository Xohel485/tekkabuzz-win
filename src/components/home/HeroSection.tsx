import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";
import { useLocale, type Locale } from "@/hooks/useLocale";

const T: Record<Locale, {
  heading: string;
  desc: string;
  signupCta: string;
  loginCta: string;
  appLink: string;
  stats: { value: string; label: string }[];
}> = {
  en: {
    heading: 'Taka Buzz | Tekka Buzz | <span class="text-primary">TekkaBuzz</span> — Bangladesh\'s #1 Online Casino',
    desc: "The platform known as Taka Buzz, TkkaBuzz, TekkaBaz, TakkaBuzz — one official site tekkabuzz.win. Join 29M+ players with 20,000 Taka welcome bonus and instant bKash Nagad withdrawals.",
    signupCta: "Sign Up — Get 20,000 Taka Bonus",
    loginCta: "Login to TekkaBuzz",
    appLink: "Open TekkaBuzz.win Mobile App",
    stats: [
      { value: "29M+", label: "Registered Players" },
      { value: "3M+", label: "Active Players" },
      { value: "6,300+", label: "Games Available" },
      { value: "Instant", label: "Withdrawal" },
    ],
  },
  bn: {
    heading: 'টাকা বাজ | টেক্কা বাজ | <span class="text-primary">টেক্কাবাজ</span> — বাংলাদেশের #১ অনলাইন ক্যাসিনো',
    desc: "টাকা বাজ, টিক্কাবাজ, টেক্কাবাজ — একমাত্র অফিসিয়াল সাইট tekkabuzz.win। ২৯ মিলিয়ন+ খেলোয়াড়ের সাথে যোগ দিন, ২০,০০০ টাকা ওয়েলকাম বোনাস এবং তাৎক্ষণিক বিকাশ নগদ উত্তোলন।",
    signupCta: "সাইন আপ — ২০,০০০ টাকা বোনাস পান",
    loginCta: "টেক্কাবাজে লগইন করুন",
    appLink: "টেক্কাবাজ মোবাইল অ্যাপ খুলুন",
    stats: [
      { value: "২৯M+", label: "নিবন্ধিত খেলোয়াড়" },
      { value: "৩M+", label: "সক্রিয় খেলোয়াড়" },
      { value: "৬,৩০০+", label: "গেমস উপলব্ধ" },
      { value: "তাৎক্ষণিক", label: "উত্তোলন" },
    ],
  },
  ur: {
    heading: 'ٹاکا بز | ٹیکا بز | <span class="text-primary">ٹیکابز</span> — بنگلہ دیش کا نمبر 1 آن لائن کیسینو',
    desc: "ٹاکا بز، ٹیکابز — واحد آفیشل سائٹ tekkabuzz.win۔ 29 ملین+ کھلاڑیوں کے ساتھ شامل ہوں، 20,000 ٹاکا ویلکم بونس اور فوری بی کیش نگد نکلوائی۔",
    signupCta: "سائن اپ — 20,000 ٹاکا بونس حاصل کریں",
    loginCta: "ٹیکابز میں لاگ ان کریں",
    appLink: "ٹیکابز موبائل ایپ کھولیں",
    stats: [
      { value: "29M+", label: "رجسٹرڈ کھلاڑی" },
      { value: "3M+", label: "فعال کھلاڑی" },
      { value: "6,300+", label: "دستیاب گیمز" },
      { value: "فوری", label: "نکلوائی" },
    ],
  },
};

export default function HeroSection() {
  const locale = useLocale();
  const t = T[locale];

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1
            className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 md:mb-6"
            dangerouslySetInnerHTML={{ __html: t.heading }}
          />
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-5 md:mb-8">{t.desc}</p>
          <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start mb-4">
            <Link to="/signup" className="px-6 py-3 text-base font-bold bg-primary text-primary-foreground rounded-lg hover:brightness-110 active:scale-95 transition-all whitespace-nowrap gold-shimmer">
              {t.signupCta}
            </Link>
            <Link to="/login" className="px-6 py-3 text-base font-bold border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all whitespace-nowrap">
              {t.loginCta}
            </Link>
          </div>
          <Link to="/app/open" className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
            {t.appLink}
          </Link>
        </div>
        <div className="flex justify-center">
          <img src={IMAGES.HERO_MAIN} alt="TekkaBuzz.win Casino Bangladesh" className="w-full max-w-xs md:max-w-md drop-shadow-2xl" loading="eager" fetchPriority="high" width={400} height={400} decoding="sync" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {t.stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-3 md:p-4 text-center">
            <div className="text-lg md:text-2xl font-bold text-primary font-heading">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
