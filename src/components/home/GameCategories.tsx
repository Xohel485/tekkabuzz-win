import { memo } from "react";
import { Link } from "react-router-dom";
import { GAME_ICONS } from "@/lib/images";
import { useLocale, type Locale } from "@/hooks/useLocale";

const T: Record<Locale, {
  heading: string;
  playNow: string;
  cats: { title: string; desc: string }[];
}> = {
  en: {
    heading: 'Popular Games at <span class="text-primary">TekkaBuzz</span>',
    playNow: "Play Now",
    cats: [
      { title: "Live Casino", desc: "Real dealers, baccarat, roulette, blackjack" },
      { title: "Sports Betting", desc: "Cricket, football, live odds, in-play betting" },
      { title: "Slot Games", desc: "1000+ slots from JILI, PG Soft, Pragmatic" },
      { title: "Crash Games", desc: "Aviator, JetX, Spaceman, Plinko" },
      { title: "Fishing Games", desc: "Fun fishing games with big multipliers" },
      { title: "Lottery", desc: "Win jackpots with lottery games" },
      { title: "Arcade Games", desc: "Exciting arcade games for quick wins" },
      { title: "Table Games", desc: "Classic table games with live dealers" },
    ],
  },
  bn: {
    heading: '<span class="text-primary">টেক্কাবাজে</span> জনপ্রিয় গেমস',
    playNow: "এখনই খেলুন",
    cats: [
      { title: "লাইভ ক্যাসিনো", desc: "রিয়েল ডিলার, ব্যাকারাট, রুলেট, ব্ল্যাকজ্যাক" },
      { title: "স্পোর্টস বেটিং", desc: "ক্রিকেট, ফুটবল, লাইভ অডস, ইন-প্লে বেটিং" },
      { title: "স্লট গেমস", desc: "১০০০+ স্লটস JILI, PG Soft, Pragmatic থেকে" },
      { title: "ক্র্যাশ গেমস", desc: "এভিয়েটর, JetX, স্পেসম্যান, প্লিংকো" },
      { title: "ফিশিং গেমস", desc: "বড় মাল্টিপ্লায়ার সহ মজার ফিশিং গেম" },
      { title: "লটারি", desc: "লটারি গেমে জ্যাকপট জিতুন" },
      { title: "আর্কেড গেমস", desc: "দ্রুত জয়ের জন্য উত্তেজনাপূর্ণ আর্কেড গেম" },
      { title: "টেবিল গেমস", desc: "লাইভ ডিলারের সাথে ক্লাসিক টেবিল গেম" },
    ],
  },
  ur: {
    heading: '<span class="text-primary">ٹیکابز</span> پر مقبول گیمز',
    playNow: "ابھی کھیلیں",
    cats: [
      { title: "لائیو کیسینو", desc: "اصلی ڈیلرز، بیکاریٹ، رولیٹ، بلیک جیک" },
      { title: "اسپورٹس بیٹنگ", desc: "کرکٹ، فٹ بال، لائیو آڈز، ان پلے بیٹنگ" },
      { title: "سلاٹ گیمز", desc: "JILI, PG Soft, Pragmatic سے 1000+ سلاٹس" },
      { title: "کریش گیمز", desc: "ایوی ایٹر، JetX، اسپیس مین، پلنکو" },
      { title: "فشنگ گیمز", desc: "بڑے ملٹی پلائرز کے ساتھ مزیدار فشنگ گیم" },
      { title: "لاٹری", desc: "لاٹری گیمز سے جیک پاٹ جیتیں" },
      { title: "آرکیڈ گیمز", desc: "فوری جیت کے لیے دلچسپ آرکیڈ گیمز" },
      { title: "ٹیبل گیمز", desc: "لائیو ڈیلرز کے ساتھ کلاسک ٹیبل گیمز" },
    ],
  },
};

const ICONS = [
  GAME_ICONS.CASINO, GAME_ICONS.SPORT, GAME_ICONS.SLOT, GAME_ICONS.CRASH,
  GAME_ICONS.FISHING, GAME_ICONS.LOTTERY, GAME_ICONS.ARCADE, GAME_ICONS.TABLE,
];

const LINKS = [
  "/go/casino", "/go/sports", "/go/slots", "/go/crash",
  "/go/fishing", "/go/lottery", "/go/arcade", "/go/table-games",
];

function GameCategoriesInner() {
  const locale = useLocale();
  const t = T[locale];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12" dangerouslySetInnerHTML={{ __html: t.heading }} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {t.cats.map((cat, i) => (
            <Link key={LINKS[i]} to={LINKS[i]} className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:border-primary transition-all duration-300 group">
              <img src={ICONS[i]} alt={cat.title} className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 object-contain" loading="lazy" width={64} height={64} decoding="async" />
              <h3 className="font-heading text-xs md:text-base font-bold text-foreground mb-1 md:mb-2">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 hidden md:block">{cat.desc}</p>
              <span className="inline-block bg-primary text-primary-foreground font-bold rounded-lg px-4 py-2 text-xs group-hover:bg-gold-hover transition-all">
                {t.playNow}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const GameCategories = memo(GameCategoriesInner);
export default GameCategories;
