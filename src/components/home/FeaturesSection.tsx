import { Zap, Shield, Headphones } from "lucide-react";
import { useLocale, type Locale } from "@/hooks/useLocale";

const T: Record<Locale, {
  heading: string;
  features: { title: string; desc: string }[];
}> = {
  en: {
    heading: 'Why Choose <span class="text-primary">TekkaBuzz</span>',
    features: [
      { title: "Instant Withdrawals", desc: "bKash, Nagad, Rocket, Upay -- under 5 minutes guaranteed" },
      { title: "100% Secure Platform", desc: "SSL encrypted, Gaming Curacao licensed, safe and trusted" },
      { title: "24/7 Live Support", desc: "Bengali and English support around the clock" },
    ],
  },
  bn: {
    heading: 'কেন <span class="text-primary">টেক্কাবাজ</span> বেছে নেবেন',
    features: [
      { title: "তাৎক্ষণিক উত্তোলন", desc: "বিকাশ, নগদ, রকেট, উপায় — ৫ মিনিটের মধ্যে গ্যারান্টি" },
      { title: "১০০% সুরক্ষিত প্ল্যাটফর্ম", desc: "SSL এনক্রিপ্টেড, Gaming Curaçao লাইসেন্সড, নিরাপদ ও বিশ্বস্ত" },
      { title: "২৪/৭ লাইভ সাপোর্ট", desc: "বাংলা ও ইংরেজিতে সারাক্ষণ সাপোর্ট" },
    ],
  },
  ur: {
    heading: '<span class="text-primary">ٹیکابز</span> کیوں منتخب کریں',
    features: [
      { title: "فوری نکلوائی", desc: "بی کیش، نگد، راکٹ، یو پے — 5 منٹ کے اندر گارنٹی" },
      { title: "100% محفوظ پلیٹ فارم", desc: "SSL انکرپٹڈ، Gaming Curaçao لائسنس یافتہ، محفوظ اور قابل اعتماد" },
      { title: "24/7 لائیو سپورٹ", desc: "بنگالی اور انگریزی میں چوبیس گھنٹے سپورٹ" },
    ],
  },
};

const ICONS = [Zap, Shield, Headphones];

export default function FeaturesSection() {
  const locale = useLocale();
  const t = T[locale];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12" dangerouslySetInnerHTML={{ __html: t.heading }} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {t.features.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <div key={i} className="bg-card border border-border rounded-xl p-6 md:p-8 text-center hover:border-primary transition-all duration-300">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-2 md:mb-3">{f.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
