import { Link } from "react-router-dom";
import { useLocale, type Locale } from "@/hooks/useLocale";

const T: Record<Locale, {
  heading: string;
  learnMore: string;
  promos: { title: string; desc: string; ctaText: string }[];
}> = {
  en: {
    heading: 'TekkaBuzz <span class="text-primary">Bonuses and Promotions</span>',
    learnMore: "Learn more",
    promos: [
      { title: "Welcome Bonus", desc: "Up to 20,000 Taka for new players", ctaText: "Claim Bonus" },
      { title: "Weekly Cashback", desc: "Unlimited cashback on all games", ctaText: "Get Cashback" },
      { title: "Referral Bonus", desc: "300 Taka per friend you refer", ctaText: "Get Referral Code" },
      { title: "Task Bonus", desc: "Daily rewards for completing tasks", ctaText: "Start Earning" },
    ],
  },
  bn: {
    heading: 'টেক্কাবাজ <span class="text-primary">বোনাস ও প্রমোশন</span>',
    learnMore: "বিস্তারিত জানুন",
    promos: [
      { title: "ওয়েলকাম বোনাস", desc: "নতুন খেলোয়াড়দের জন্য ২০,০০০ টাকা পর্যন্ত", ctaText: "বোনাস নিন" },
      { title: "সাপ্তাহিক ক্যাশব্যাক", desc: "সব গেমে সীমাহীন ক্যাশব্যাক", ctaText: "ক্যাশব্যাক পান" },
      { title: "রেফারেল বোনাস", desc: "প্রতিটি বন্ধু রেফারে ৩০০ টাকা", ctaText: "রেফারেল কোড পান" },
      { title: "টাস্ক বোনাস", desc: "টাস্ক সম্পন্ন করে দৈনিক পুরস্কার", ctaText: "আয় শুরু করুন" },
    ],
  },
  ur: {
    heading: 'ٹیکابز <span class="text-primary">بونسز اور پروموشنز</span>',
    learnMore: "مزید جانیں",
    promos: [
      { title: "ویلکم بونس", desc: "نئے کھلاڑیوں کے لیے 20,000 ٹاکا تک", ctaText: "بونس حاصل کریں" },
      { title: "ہفتہ وار کیش بیک", desc: "تمام گیمز پر لامحدود کیش بیک", ctaText: "کیش بیک حاصل کریں" },
      { title: "ریفرل بونس", desc: "ہر دوست کے ریفرل پر 300 ٹاکا", ctaText: "ریفرل کوڈ حاصل کریں" },
      { title: "ٹاسک بونس", desc: "ٹاسک مکمل کر کے روزانہ انعامات", ctaText: "کمائی شروع کریں" },
    ],
  },
};

const PROMO_LINKS = ["/bonuses/welcome", "/bonuses/cashback", "/bonuses/referral", "/bonuses/task"];
const CTA_LINKS = ["/signup", "/signup", "/get-refercode", "/signup"];

export default function PromotionsSection() {
  const locale = useLocale();
  const t = T[locale];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12" dangerouslySetInnerHTML={{ __html: t.heading }} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {t.promos.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 md:p-6 hover:border-primary transition-all duration-300 flex flex-col text-center">
              <h3 className="font-heading text-xs md:text-lg font-bold text-primary mb-1 md:mb-2">{p.title}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground mb-3 md:mb-4 flex-1">{p.desc}</p>
              <Link to={PROMO_LINKS[i]} className="text-[10px] md:text-xs text-muted-foreground hover:text-primary mb-2 md:mb-3 underline py-3 inline-block">{t.learnMore}</Link>
              <Link to={CTA_LINKS[i]} className="bg-primary text-primary-foreground font-bold rounded-lg px-3 py-3 text-xs md:text-sm text-center hover:bg-gold-hover transition-all">
                {p.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
