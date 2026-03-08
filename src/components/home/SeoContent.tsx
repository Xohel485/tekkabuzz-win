import { Link } from "react-router-dom";
import { useLocale, type Locale } from "@/hooks/useLocale";

const T: Record<Locale, { heading: string; paragraphs: string[]; notice: string }> = {
  en: {
    heading: "About TekkaBuzz.win — Bangladesh's Most Trusted Online Casino",
    paragraphs: [
      'TekkaBuzz.win is Bangladesh\'s premier online gaming platform, widely recognized by players across the country under various names including <strong class="text-foreground">taka buzz</strong> and <strong class="text-foreground">tekka buzz</strong>. With over 29 million registered players and 6,300+ games, TekkaBuzz stands as the undisputed leader in the Bangladeshi online gaming industry.',
      'Many players across Bangladesh search for TekkaBuzz using different spelling variations. Whether you type <strong class="text-foreground">tkkabuzz</strong>, <strong class="text-foreground">tekkabaz</strong>, <strong class="text-foreground">takkabuzz</strong>, <strong class="text-foreground">takka buzz</strong> — they all point to the same official TekkaBuzz platform at tekkabuzz.win.',
      'For sports enthusiasts, <strong class="text-foreground">tekka buzz bet</strong> offers the most comprehensive sports betting coverage in Bangladesh. From IPL, BPL, and Asia Cup to the English Premier League and Champions League.',
      'The <strong class="text-foreground">tekka buzz affiliate</strong> program pays 300 Taka per referral with no limit.',
    ],
    notice: '<strong class="text-foreground">Important Notice:</strong> tekkabuzz.win is the ONLY official website. Licensed under Gaming Curaçao for fair play and responsible gaming.',
  },
  bn: {
    heading: "টেক্কাবাজ — বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন ক্যাসিনো",
    paragraphs: [
      'টেক্কাবাজ (tekkabuzz.win) বাংলাদেশের প্রধান অনলাইন গেমিং প্ল্যাটফর্ম, সারা দেশের খেলোয়াড়দের কাছে <strong class="text-foreground">টাকা বাজ</strong> এবং <strong class="text-foreground">টেক্কা বাজ</strong> সহ বিভিন্ন নামে পরিচিত। ২৯ মিলিয়নেরও বেশি নিবন্ধিত খেলোয়াড় এবং ৬,৩০০+ গেমস নিয়ে টেক্কাবাজ বাংলাদেশি অনলাইন গেমিং শিল্পে অবিসংবাদিত নেতা।',
      'বাংলাদেশের অনেক খেলোয়াড় বিভিন্ন বানানে টেক্কাবাজ সার্চ করেন — <strong class="text-foreground">tkkabuzz</strong>, <strong class="text-foreground">tekkabaz</strong>, <strong class="text-foreground">takkabuzz</strong>, <strong class="text-foreground">takka buzz</strong> — সবগুলোই একই অফিসিয়াল সাইট tekkabuzz.win-এ নিয়ে যায়।',
      'স্পোর্টস প্রেমীদের জন্য <strong class="text-foreground">টেক্কা বাজ বেট</strong> বাংলাদেশে সবচেয়ে ব্যাপক স্পোর্টস বেটিং কভারেজ প্রদান করে। আইপিএল, বিপিএল, এশিয়া কাপ থেকে ইংলিশ প্রিমিয়ার লিগ এবং চ্যাম্পিয়ন্স লিগ পর্যন্ত।',
      '<strong class="text-foreground">টেক্কা বাজ অ্যাফিলিয়েট</strong> প্রোগ্রামে প্রতিটি রেফারেলে ৩০০ টাকা পাওয়া যায়, কোনো সীমা নেই।',
    ],
    notice: '<strong class="text-foreground">গুরুত্বপূর্ণ নোটিশ:</strong> tekkabuzz.win একমাত্র অফিসিয়াল ওয়েবসাইট। ন্যায্য খেলা এবং দায়িত্বশীল গেমিংয়ের জন্য Gaming Curaçao লাইসেন্সপ্রাপ্ত।',
  },
  ur: {
    heading: "ٹیکابز — بنگلہ دیش کا سب سے قابل اعتماد آن لائن کیسینو",
    paragraphs: [
      'ٹیکابز (tekkabuzz.win) بنگلہ دیش کا سب سے بڑا آن لائن گیمنگ پلیٹ فارم ہے، جسے ملک بھر کے کھلاڑی <strong class="text-foreground">ٹاکا بز</strong> اور <strong class="text-foreground">ٹیکا بز</strong> سمیت مختلف ناموں سے جانتے ہیں۔ 29 ملین سے زیادہ رجسٹرڈ کھلاڑی اور 6,300+ گیمز کے ساتھ ٹیکابز بنگلہ دیش کی آن لائن گیمنگ انڈسٹری میں بلامنازعہ رہنما ہے۔',
      'بنگلہ دیش کے بہت سے کھلاڑی ٹیکابز کو مختلف ہجوں میں سرچ کرتے ہیں — <strong class="text-foreground">tkkabuzz</strong>, <strong class="text-foreground">tekkabaz</strong>, <strong class="text-foreground">takkabuzz</strong>, <strong class="text-foreground">takka buzz</strong> — سب ایک ہی آفیشل سائٹ tekkabuzz.win پر لے جاتے ہیں۔',
      'کھیلوں کے شوقین افراد کے لیے <strong class="text-foreground">ٹیکا بز بیٹ</strong> بنگلہ دیش میں سب سے جامع اسپورٹس بیٹنگ کوریج فراہم کرتا ہے۔ آئی پی ایل، بی پی ایل، ایشیا کپ سے لے کر انگلش پریمیئر لیگ تک۔',
      '<strong class="text-foreground">ٹیکا بز ایفیلیٹ</strong> پروگرام میں ہر ریفرل پر 300 ٹاکا ملتے ہیں، کوئی حد نہیں۔',
    ],
    notice: '<strong class="text-foreground">اہم نوٹس:</strong> tekkabuzz.win واحد آفیشل ویب سائٹ ہے۔ منصفانہ کھیل اور ذمہ دار گیمنگ کے لیے Gaming Curaçao لائسنس یافتہ۔',
  },
};

export default function SeoContent() {
  const locale = useLocale();
  const t = T[locale];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto prose prose-invert break-words overflow-hidden text-center">
        <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">{t.heading}</h2>
        {t.paragraphs.map((p, i) => (
          <p key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: t.notice }} />
      </div>
    </section>
  );
}
