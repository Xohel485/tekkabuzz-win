import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale, type Locale } from "@/hooks/useLocale";

const T: Record<Locale, { heading: string; faqs: { q: string; a: string }[] }> = {
  en: {
    heading: 'Frequently Asked Questions About <span class="text-primary">TekkaBuzz</span>',
    faqs: [
      { q: "What is Taka Buzz or Tekka Buzz?", a: "Taka Buzz and Tekka Buzz are popular search terms referring to TekkaBuzz -- Bangladesh's official online gaming platform at tekkabuzz.win. Also searched as tkkabuzz, takkabuzz, teekabuzz, tekkabaz, taka buzz, takka buzz -- all pointing to the same official site." },
      { q: "What is TkkaBuzz?", a: "TkkaBuzz is a common spelling variant of TekkaBuzz. Players searching for tkkabuzz, takkabuzz, takkabuz, or takkbuzz will find the same official TekkaBuzz platform at tekkabuzz.win." },
      { q: "How to login TekkaBuzz (Tekk Buzz Login)?", a: "Visit tekkabuzz.win and click Login. Enter your registered mobile number and password. Also searched as tekk buzz login, tekka buzz login, or teka buzz login." },
      { q: "What is TekkaBaz or TakkaBuzz?", a: "TekkaBaz and TakkaBuzz are alternative spellings of TekkaBuzz. All these variations refer to the same official platform at tekkabuzz.win." },
      { q: "What games does TekkaBuzz offer?", a: "TekkaBuzz offers live casino, sports betting, 1000+ slots, crash games (Aviator, JetX), fishing games, lottery, arcade, and table games from 50+ top providers." },
      { q: "How to deposit on TekkaBuzz?", a: "TekkaBuzz supports bKash, Nagad, Rocket, Upay, TAP, SureCash, iPay, OkWallet, bank card, and cryptocurrency. Minimum deposit 200 Taka." },
      { q: "What is TekkaBuzz Affiliate Program?", a: "The tekka buzz affiliate / tekkabuzz affiliate program pays 300 Taka per referral. Visit tekkabuzz.win/affiliate for details." },
      { q: "Is TekkaBuzz same as Taka Alliance Gaming?", a: "Taka Alliance Gaming is a search term associated with TekkaBuzz. TekkaBuzz is Bangladesh's official online gaming platform, and taka alliance gaming searches lead to the same platform." },
    ],
  },
  bn: {
    heading: '<span class="text-primary">টেক্কাবাজ</span> সম্পর্কে সচরাচর জিজ্ঞাসা',
    faqs: [
      { q: "টাকা বাজ বা টেক্কা বাজ কি?", a: "টাকা বাজ এবং টেক্কা বাজ হলো TekkaBuzz-এর জনপ্রিয় সার্চ টার্ম — বাংলাদেশের অফিসিয়াল অনলাইন গেমিং প্ল্যাটফর্ম tekkabuzz.win-এ। tkkabuzz, takkabuzz, teekabuzz, tekkabaz নামেও সার্চ করা হয় — সবগুলো একই অফিসিয়াল সাইটে যায়।" },
      { q: "TkkaBuzz কি?", a: "TkkaBuzz হলো TekkaBuzz-এর একটি সাধারণ বানান ভিন্নতা। tkkabuzz, takkabuzz, takkabuz যা সার্চ করুন — সবই একই অফিসিয়াল TekkaBuzz প্ল্যাটফর্ম tekkabuzz.win-এ পাওয়া যায়।" },
      { q: "টেক্কাবাজে কিভাবে লগইন করবেন?", a: "tekkabuzz.win ভিজিট করুন এবং লগইন বাটনে ক্লিক করুন। আপনার নিবন্ধিত মোবাইল নম্বর এবং পাসওয়ার্ড দিয়ে লগইন করুন।" },
      { q: "টেক্কাবাজে কি কি গেম আছে?", a: "টেক্কাবাজে লাইভ ক্যাসিনো, স্পোর্টস বেটিং, ১০০০+ স্লটস, ক্র্যাশ গেমস (এভিয়েটর, JetX), ফিশিং গেমস, লটারি, আর্কেড এবং টেবিল গেমস আছে ৫০+ প্রোভাইডার থেকে।" },
      { q: "টেক্কাবাজে কিভাবে ডিপোজিট করবেন?", a: "টেক্কাবাজ বিকাশ, নগদ, রকেট, উপায়, TAP, SureCash, iPay, OkWallet, ব্যাংক কার্ড এবং ক্রিপ্টোকারেন্সি সাপোর্ট করে। সর্বনিম্ন ডিপোজিট ২০০ টাকা।" },
      { q: "টেক্কাবাজ অ্যাফিলিয়েট প্রোগ্রাম কি?", a: "টেক্কাবাজ অ্যাফিলিয়েট প্রোগ্রামে প্রতিটি রেফারেলে ৩০০ টাকা পাওয়া যায়। বিস্তারিত জানতে tekkabuzz.win/affiliate ভিজিট করুন।" },
      { q: "টেক্কাবাজ কি নিরাপদ?", a: "হ্যাঁ, টেক্কাবাজ Gaming Curaçao লাইসেন্সড, SSL এনক্রিপ্টেড এবং দায়িত্বশীল গেমিং নীতি অনুসরণ করে। এটি বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন গেমিং প্ল্যাটফর্ম।" },
    ],
  },
  ur: {
    heading: '<span class="text-primary">ٹیکابز</span> کے بارے میں عمومی سوالات',
    faqs: [
      { q: "ٹاکا بز یا ٹیکا بز کیا ہے؟", a: "ٹاکا بز اور ٹیکا بز TekkaBuzz کی مقبول سرچ اصطلاحات ہیں — بنگلہ دیش کا آفیشل آن لائن گیمنگ پلیٹ فارم tekkabuzz.win پر۔ tkkabuzz, takkabuzz, teekabuzz, tekkabaz کے نام سے بھی سرچ کیا جاتا ہے — سب ایک ہی آفیشل سائٹ پر جاتے ہیں۔" },
      { q: "TkkaBuzz کیا ہے؟", a: "TkkaBuzz ٹیکابز کی ایک عام ہجے کی مختلف شکل ہے۔ tkkabuzz, takkabuzz, takkabuz — سب ایک ہی آفیشل ٹیکابز پلیٹ فارم tekkabuzz.win پر ملتے ہیں۔" },
      { q: "ٹیکابز میں لاگ ان کیسے کریں؟", a: "tekkabuzz.win ملاحظہ کریں اور لاگ ان بٹن پر کلک کریں۔ اپنا رجسٹرڈ موبائل نمبر اور پاس ورڈ درج کریں۔" },
      { q: "ٹیکابز پر کون سے گیمز دستیاب ہیں؟", a: "ٹیکابز پر لائیو کیسینو، اسپورٹس بیٹنگ، 1000+ سلاٹس، کریش گیمز (ایوی ایٹر، JetX)، فشنگ گیمز، لاٹری، آرکیڈ اور ٹیبل گیمز 50+ فراہم کنندگان سے دستیاب ہیں۔" },
      { q: "ٹیکابز پر ڈپازٹ کیسے کریں؟", a: "ٹیکابز بی کیش، نگد، راکٹ، یو پے، TAP، SureCash، iPay، OkWallet، بینک کارڈ اور کرپٹو کرنسی سپورٹ کرتا ہے۔ کم از کم ڈپازٹ 200 ٹاکا۔" },
      { q: "ٹیکابز ایفیلیٹ پروگرام کیا ہے؟", a: "ٹیکابز ایفیلیٹ پروگرام میں ہر ریفرل پر 300 ٹاکا ملتے ہیں۔ تفصیلات کے لیے tekkabuzz.win/affiliate ملاحظہ کریں۔" },
      { q: "کیا ٹیکابز محفوظ ہے؟", a: "ہاں، ٹیکابز Gaming Curaçao لائسنس یافتہ، SSL انکرپٹڈ ہے اور ذمہ دار گیمنگ پالیسی کی پیروی کرتا ہے۔" },
    ],
  },
};

export default function FaqSection() {
  const locale = useLocale();
  const t = T[locale];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12" dangerouslySetInnerHTML={{ __html: t.heading }} />
        <Accordion type="single" collapsible className="w-full space-y-3">
          {t.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-foreground font-medium text-left hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
