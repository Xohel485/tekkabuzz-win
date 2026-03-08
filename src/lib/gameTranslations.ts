import { Locale } from "@/hooks/useLocale";

export interface GameContent {
  title: string;
  description: string;
  heading: string;
  ctaText: string;
  content: string;
}

export const GAME_PAGES: Record<string, Record<Locale, GameContent>> = {
  casino: {
    en: {
      title: "TekkaBuzz Live Casino | Taka Buzz Casino — Best Online Casino Bangladesh",
      description: "TekkaBuzz live casino — baccarat, roulette, blackjack, teen patti with real dealers. Instant bKash Nagad withdrawal.",
      heading: "TekkaBuzz Live Casino — Real Dealers, Real Wins",
      ctaText: "Play Live Casino Now",
      content: "<p>Experience the thrill of a real casino from the comfort of your home with <strong>TekkaBuzz Live Casino</strong>. Known across Bangladesh as <strong>taka buzz casino</strong> and <strong>tekka buzz casino</strong>, our live casino features professional dealers streaming 24/7.</p><p>Play Baccarat, Roulette, Blackjack, Teen Patti, Dragon Tiger, and more. Deposits start at 200 Taka through bKash, Nagad, Rocket. Withdrawals processed within 5 minutes.</p>",
    },
    bn: {
      title: "TekkaBuzz লাইভ ক্যাসিনো | টেক্কাবাজ ক্যাসিনো বাংলাদেশ",
      description: "TekkaBuzz লাইভ ক্যাসিনো — ব্যাকারেট, রুলেট, ব্ল্যাকজ্যাক, তিন পাত্তি রিয়েল ডিলারদের সাথে। তাৎক্ষণিক বিকাশ নগদ উত্তোলন।",
      heading: "TekkaBuzz লাইভ ক্যাসিনো — আসল ডিলার, আসল জয়",
      ctaText: "এখনই লাইভ ক্যাসিনো খেলুন",
      content: "<p>আপনার ঘরে বসে আসল ক্যাসিনোর রোমাঞ্চ অনুভব করুন <strong>TekkaBuzz লাইভ ক্যাসিনো</strong>-তে। বাংলাদেশ জুড়ে <strong>টেক্কাবাজ ক্যাসিনো</strong> নামে পরিচিত, আমাদের লাইভ ক্যাসিনোতে পেশাদার ডিলাররা ২৪/৭ স্ট্রিমিং করেন।</p><p>ব্যাকারেট, রুলেট, ব্ল্যাকজ্যাক, তিন পাত্তি, ড্রাগন টাইগার এবং আরও অনেক কিছু খেলুন। বিকাশ, নগদ, রকেটের মাধ্যমে মাত্র ২০০ টাকা থেকে ডিপোজিট। ৫ মিনিটে উত্তোলন।</p>",
    },
    ur: {
      title: "TekkaBuzz لائیو کیسینو | بنگلہ دیش آن لائن کیسینو",
      description: "TekkaBuzz لائیو کیسینو — حقیقی ڈیلرز کے ساتھ باکاریٹ، رولیٹ، بلیک جیک۔ فوری ادائیگی۔",
      heading: "TekkaBuzz لائیو کیسینو — اصلی ڈیلرز، اصلی جیت",
      ctaText: "ابھی لائیو کیسینو کھیلیں",
      content: "<p>اپنے گھر بیٹھے حقیقی کیسینو کا سنسنی محسوس کریں <strong>TekkaBuzz لائیو کیسینو</strong> میں۔ پیشہ ور ڈیلرز 24/7 اسٹریمنگ کرتے ہیں۔</p><p>باکاریٹ، رولیٹ، بلیک جیک، ٹین پٹی، ڈریگن ٹائیگر اور مزید کھیلیں۔ بی کیش، نگد، راکٹ سے فوری ادائیگی۔</p>",
    },
  },
  sports: {
    en: {
      title: "TekkaBuzz Sports Betting | Tekka Buzz Bet — Cricket Football Bangladesh",
      description: "Tekka buzz bet — cricket, football, tennis betting. Live odds, in-play, instant bKash payout.",
      heading: "TekkaBuzz Sports Betting — Bet on Cricket, Football and More",
      ctaText: "Place Your Bet",
      content: "<p><strong>Tekka buzz bet</strong> is Bangladesh's premier sports betting destination. Bet on IPL, BPL, Asia Cup, ICC World Cup, EPL, Champions League and more with competitive odds and live in-play betting.</p><p>Minimum bet is just 50 Taka. Winnings credited instantly and can be withdrawn to bKash, Nagad, or Rocket within minutes.</p>",
    },
    bn: {
      title: "TekkaBuzz স্পোর্টস বেটিং | টেক্কাবাজ বেট — ক্রিকেট ফুটবল বাংলাদেশ",
      description: "টেক্কাবাজ বেট — ক্রিকেট, ফুটবল, টেনিস বেটিং। লাইভ অডস, ইন-প্লে, তাৎক্ষণিক বিকাশ পেআউট।",
      heading: "TekkaBuzz স্পোর্টস বেটিং — ক্রিকেট, ফুটবল এবং আরও অনেক কিছুতে বাজি ধরুন",
      ctaText: "বাজি ধরুন",
      content: "<p><strong>টেক্কাবাজ বেট</strong> বাংলাদেশের সেরা স্পোর্টস বেটিং গন্তব্য। আইপিএল, বিপিএল, এশিয়া কাপ, আইসিসি বিশ্বকাপ, ইপিএল, চ্যাম্পিয়ন্স লিগ এবং আরও অনেক কিছুতে প্রতিযোগিতামূলক অডস এবং লাইভ ইন-প্লে বেটিং-এ বাজি ধরুন।</p><p>সর্বনিম্ন বাজি মাত্র ৫০ টাকা। জয়ের অর্থ তাৎক্ষণিকভাবে জমা হয় এবং কয়েক মিনিটের মধ্যে বিকাশ, নগদ বা রকেটে উত্তোলন করা যায়।</p>",
    },
    ur: {
      title: "TekkaBuzz سپورٹس بیٹنگ | کرکٹ فٹ بال بنگلہ دیش",
      description: "TekkaBuzz بیٹ — کرکٹ، فٹ بال، ٹینس بیٹنگ۔ لائیو آڈز، فوری ادائیگی۔",
      heading: "TekkaBuzz سپورٹس بیٹنگ — کرکٹ، فٹ بال اور مزید پر شرط لگائیں",
      ctaText: "شرط لگائیں",
      content: "<p><strong>TekkaBuzz بیٹ</strong> بنگلہ دیش کا سرکردہ سپورٹس بیٹنگ مقام ہے۔ آئی پی ایل، بی پی ایل، ایشیا کپ، عالمی کپ پر بہترین آڈز کے ساتھ شرط لگائیں۔</p><p>کم از کم شرط صرف 50 ٹکا۔ جیت فوری طور پر جمع ہو جاتی ہے۔</p>",
    },
  },
  slots: {
    en: {
      title: "TekkaBuzz Slots | Taka Buzz Slots — JILI PG Soft Bangladesh",
      description: "1000+ slots at TekkaBuzz. JILI, PG Soft, Pragmatic Play. High RTP, free spins, jackpots.",
      heading: "TekkaBuzz Slots — 1000+ Slot Games",
      ctaText: "Play Slots Now",
      content: "<p>Explore over 1,000 slot games at TekkaBuzz featuring JILI, PG Soft, Pragmatic Play, Habanero, CQ9, NetEnt, and more. From classic fruit slots to modern video slots with massive jackpots.</p><p>Popular titles: Fortune Tiger, Lucky Neko, Starlight Princess, Gates of Olympus, Sweet Bonanza. RTP rates 95-98%. Start spinning with 10 Taka per spin via bKash, Nagad.</p>",
    },
    bn: {
      title: "TekkaBuzz স্লটস | টেক্কাবাজ স্লটস — JILI PG Soft বাংলাদেশ",
      description: "TekkaBuzz-এ ১০০০+ স্লট গেম। JILI, PG Soft, Pragmatic Play। উচ্চ RTP, ফ্রি স্পিন, জ্যাকপট।",
      heading: "TekkaBuzz স্লটস — ১০০০+ স্লট গেম",
      ctaText: "এখনই স্লটস খেলুন",
      content: "<p>TekkaBuzz-এ JILI, PG Soft, Pragmatic Play, Habanero, CQ9, NetEnt এবং আরও অনেক প্রোভাইডারের ১,০০০+ স্লট গেম অন্বেষণ করুন। ক্লাসিক ফ্রুট স্লট থেকে আধুনিক ভিডিও স্লট বিশাল জ্যাকপট সহ।</p><p>জনপ্রিয় গেম: Fortune Tiger, Lucky Neko, Starlight Princess, Gates of Olympus। RTP ৯৫-৯৮%। বিকাশ, নগদের মাধ্যমে মাত্র ১০ টাকায় স্পিন শুরু করুন।</p>",
    },
    ur: {
      title: "TekkaBuzz سلاٹس | JILI PG Soft بنگلہ دیش",
      description: "TekkaBuzz پر 1000+ سلاٹ گیمز۔ JILI، PG Soft، Pragmatic Play۔",
      heading: "TekkaBuzz سلاٹس — 1000+ سلاٹ گیمز",
      ctaText: "ابھی سلاٹس کھیلیں",
      content: "<p>TekkaBuzz پر JILI، PG Soft، Pragmatic Play، Habanero، CQ9 اور مزید کے 1000+ سلاٹ گیمز دریافت کریں۔ بڑے جیک پاٹس کے ساتھ۔</p><p>مقبول گیمز: Fortune Tiger، Lucky Neko، Starlight Princess۔ RTP 95-98%۔ صرف 10 ٹکا فی اسپن سے شروع کریں۔</p>",
    },
  },
  crash: {
    en: {
      title: "TekkaBuzz Crash Games | Aviator JetX Spaceman Bangladesh",
      description: "Aviator, JetX, Spaceman crash games at TekkaBuzz. Provably fair, big multipliers.",
      heading: "TekkaBuzz Crash Games — Aviator, JetX, Spaceman",
      ctaText: "Play Crash Games",
      content: "<p>Crash games are the hottest trend and TekkaBuzz brings you the best. Play Aviator, JetX, Spaceman, Plinko with provably fair mechanics and multipliers reaching 1000x+.</p><p>Watch the multiplier rise and cash out before it crashes. Bets from 20 Taka, instant payouts to bKash and Nagad.</p>",
    },
    bn: {
      title: "TekkaBuzz ক্র্যাশ গেমস | Aviator JetX Spaceman বাংলাদেশ",
      description: "TekkaBuzz-এ Aviator, JetX, Spaceman ক্র্যাশ গেমস। প্রমাণিতভাবে ন্যায্য, বড় মাল্টিপ্লায়ার।",
      heading: "TekkaBuzz ক্র্যাশ গেমস — Aviator, JetX, Spaceman",
      ctaText: "ক্র্যাশ গেমস খেলুন",
      content: "<p>ক্র্যাশ গেমস অনলাইন গেমিং-এর সবচেয়ে জনপ্রিয় ট্রেন্ড এবং TekkaBuzz আপনার জন্য সেরাগুলো নিয়ে এসেছে। Aviator, JetX, Spaceman, Plinko খেলুন প্রমাণিতভাবে ন্যায্য মেকানিক্স এবং ১০০০x+ মাল্টিপ্লায়ার সহ।</p><p>মাল্টিপ্লায়ার বাড়তে দেখুন এবং ক্র্যাশের আগে ক্যাশ আউট করুন। ২০ টাকা থেকে বাজি, বিকাশ ও নগদে তাৎক্ষণিক পেআউট।</p>",
    },
    ur: {
      title: "TekkaBuzz کریش گیمز | Aviator JetX بنگلہ دیش",
      description: "TekkaBuzz پر Aviator، JetX، Spaceman کریش گیمز۔ بڑے ملٹی پلائرز۔",
      heading: "TekkaBuzz کریش گیمز — Aviator، JetX، Spaceman",
      ctaText: "کریش گیمز کھیلیں",
      content: "<p>کریش گیمز سب سے مقبول ٹرینڈ ہے اور TekkaBuzz آپ کے لیے بہترین لاتا ہے۔ Aviator، JetX، Spaceman کھیلیں 1000x+ ملٹی پلائرز کے ساتھ۔</p><p>20 ٹکا سے شرط، بی کیش اور نگد میں فوری ادائیگی۔</p>",
    },
  },
  fishing: {
    en: {
      title: "TekkaBuzz Fishing Games | Taka Buzz Fishing Bangladesh",
      description: "Play fishing games at TekkaBuzz. Win big with fishing games Bangladesh.",
      heading: "TekkaBuzz Fishing Games — Catch Big Wins",
      ctaText: "Play Fishing Games",
      content: "<p>TekkaBuzz fishing games offer exciting gameplay. Aim your cannon, catch fish, win prizes. The bigger the fish, the bigger the payout. Multipliers up to 1000x.</p><p>Featuring titles from JILI, CQ9. Deposits start at 200 Taka via bKash, Nagad, and Rocket.</p>",
    },
    bn: {
      title: "TekkaBuzz ফিশিং গেমস | টেক্কাবাজ ফিশিং বাংলাদেশ",
      description: "TekkaBuzz-এ ফিশিং গেমস খেলুন। বাংলাদেশে ফিশিং গেমস দিয়ে বড় জিতুন।",
      heading: "TekkaBuzz ফিশিং গেমস — বড় জয় ধরুন",
      ctaText: "ফিশিং গেমস খেলুন",
      content: "<p>TekkaBuzz ফিশিং গেমসে রোমাঞ্চকর গেমপ্লে উপভোগ করুন। আপনার কামান তাক করুন, মাছ ধরুন, পুরস্কার জিতুন। যত বড় মাছ, তত বড় পুরস্কার। ১০০০x পর্যন্ত মাল্টিপ্লায়ার।</p><p>JILI, CQ9 এর গেমস। বিকাশ, নগদ, রকেটের মাধ্যমে ২০০ টাকা থেকে ডিপোজিট।</p>",
    },
    ur: {
      title: "TekkaBuzz فشنگ گیمز | بنگلہ دیش",
      description: "TekkaBuzz پر فشنگ گیمز کھیلیں۔ بڑی جیت حاصل کریں۔",
      heading: "TekkaBuzz فشنگ گیمز — بڑی جیت پکڑیں",
      ctaText: "فشنگ گیمز کھیلیں",
      content: "<p>TekkaBuzz فشنگ گیمز میں دلچسپ گیم پلے۔ اپنی توپ نشانہ لگائیں، مچھلی پکڑیں، انعامات جیتیں۔ 1000x تک ملٹی پلائرز۔</p><p>JILI، CQ9 کی گیمز۔ بی کیش، نگد سے 200 ٹکا سے ڈپازٹ۔</p>",
    },
  },
  lottery: {
    en: {
      title: "TekkaBuzz Lottery | Taka Buzz Lottery Bangladesh",
      description: "Play lottery at TekkaBuzz. Win jackpots with lottery Bangladesh.",
      heading: "TekkaBuzz Lottery — Win Big Jackpots",
      ctaText: "Play Lottery",
      content: "<p>Try your luck with TekkaBuzz lottery games. Instant scratch cards to number-based lottery draws. Simple gameplay, transparent draws, instant payouts.</p><p>Lottery tickets from 50 Taka. Winnings credited instantly, withdrawable via bKash, Nagad, Rocket.</p>",
    },
    bn: {
      title: "TekkaBuzz লটারি | টেক্কাবাজ লটারি বাংলাদেশ",
      description: "TekkaBuzz-এ লটারি খেলুন। বাংলাদেশে লটারি দিয়ে জ্যাকপট জিতুন।",
      heading: "TekkaBuzz লটারি — বড় জ্যাকপট জিতুন",
      ctaText: "লটারি খেলুন",
      content: "<p>TekkaBuzz লটারি গেমসে আপনার ভাগ্য পরীক্ষা করুন। ইনস্ট্যান্ট স্ক্র্যাচ কার্ড থেকে নম্বর-ভিত্তিক লটারি ড্র। সহজ গেমপ্লে, স্বচ্ছ ড্র, তাৎক্ষণিক পেআউট।</p><p>৫০ টাকা থেকে লটারি টিকিট। জয়ের অর্থ তাৎক্ষণিকভাবে জমা, বিকাশ, নগদ, রকেটে উত্তোলনযোগ্য।</p>",
    },
    ur: {
      title: "TekkaBuzz لاٹری | بنگلہ دیش",
      description: "TekkaBuzz پر لاٹری کھیلیں۔ جیک پاٹ جیتیں۔",
      heading: "TekkaBuzz لاٹری — بڑے جیک پاٹ جیتیں",
      ctaText: "لاٹری کھیلیں",
      content: "<p>TekkaBuzz لاٹری گیمز میں اپنی قسمت آزمائیں۔ انسٹنٹ اسکریچ کارڈز سے نمبر پر مبنی لاٹری ڈرا۔ آسان گیم پلے، شفاف ڈرا، فوری ادائیگی۔</p><p>50 ٹکا سے لاٹری ٹکٹ۔ جیت فوری جمع، بی کیش، نگد سے نکلوائی۔</p>",
    },
  },
  arcade: {
    en: {
      title: "TekkaBuzz Arcade | Taka Buzz Arcade Games Bangladesh",
      description: "Play arcade games at TekkaBuzz. Fun arcade games Bangladesh.",
      heading: "TekkaBuzz Arcade Games — Quick Fun, Big Wins",
      ctaText: "Play Arcade Games",
      content: "<p>TekkaBuzz arcade games bring classic gaming fun with real money prizes. Easy to play, instant rewards. Skill-based challenges and luck-driven games.</p><p>Mobile-optimized, loads instantly. Bets from 20 Taka. Instant bKash and Nagad withdrawals.</p>",
    },
    bn: {
      title: "TekkaBuzz আর্কেড | টেক্কাবাজ আর্কেড গেমস বাংলাদেশ",
      description: "TekkaBuzz-এ আর্কেড গেমস খেলুন। মজাদার আর্কেড গেমস বাংলাদেশ।",
      heading: "TekkaBuzz আর্কেড গেমস — দ্রুত মজা, বড় জয়",
      ctaText: "আর্কেড গেমস খেলুন",
      content: "<p>TekkaBuzz আর্কেড গেমসে ক্লাসিক গেমিং মজা উপভোগ করুন আসল টাকার পুরস্কার সহ। খেলতে সহজ, তাৎক্ষণিক পুরস্কার।</p><p>মোবাইলে অপটিমাইজড, তাৎক্ষণিক লোড। ২০ টাকা থেকে বাজি। বিকাশ ও নগদে তাৎক্ষণিক উত্তোলন।</p>",
    },
    ur: {
      title: "TekkaBuzz آرکیڈ | بنگلہ دیش",
      description: "TekkaBuzz پر آرکیڈ گیمز کھیلیں۔",
      heading: "TekkaBuzz آرکیڈ گیمز — فوری مزہ، بڑی جیت",
      ctaText: "آرکیڈ گیمز کھیلیں",
      content: "<p>TekkaBuzz آرکیڈ گیمز میں کلاسک گیمنگ مزہ حقیقی رقم کے انعامات کے ساتھ۔ کھیلنا آسان، فوری انعامات۔</p><p>موبائل آپٹیمائزڈ۔ 20 ٹکا سے شرط۔ بی کیش اور نگد میں فوری نکلوائی۔</p>",
    },
  },
  table: {
    en: {
      title: "TekkaBuzz Table Games | Taka Buzz Table Games Bangladesh",
      description: "Play table games at TekkaBuzz. Baccarat, blackjack, roulette.",
      heading: "TekkaBuzz Table Games — Classic Casino Experience",
      ctaText: "Play Table Games",
      content: "<p>Experience classic casino table games at TekkaBuzz. Baccarat, blackjack, roulette, poker with virtual and live dealer options.</p><p>Minimum bets from 100 Taka with instant bKash and Nagad payouts.</p>",
    },
    bn: {
      title: "TekkaBuzz টেবিল গেমস | টেক্কাবাজ টেবিল গেমস বাংলাদেশ",
      description: "TekkaBuzz-এ টেবিল গেমস খেলুন। ব্যাকারেট, ব্ল্যাকজ্যাক, রুলেট।",
      heading: "TekkaBuzz টেবিল গেমস — ক্লাসিক ক্যাসিনো অভিজ্ঞতা",
      ctaText: "টেবিল গেমস খেলুন",
      content: "<p>TekkaBuzz-এ ক্লাসিক ক্যাসিনো টেবিল গেমস অভিজ্ঞতা নিন। ব্যাকারেট, ব্ল্যাকজ্যাক, রুলেট, পোকার ভার্চুয়াল ও লাইভ ডিলার অপশন সহ।</p><p>১০০ টাকা থেকে সর্বনিম্ন বাজি। বিকাশ ও নগদে তাৎক্ষণিক পেআউট।</p>",
    },
    ur: {
      title: "TekkaBuzz ٹیبل گیمز | بنگلہ دیش",
      description: "TekkaBuzz پر ٹیبل گیمز کھیلیں۔ باکاریٹ، بلیک جیک، رولیٹ۔",
      heading: "TekkaBuzz ٹیبل گیمز — کلاسک کیسینو تجربہ",
      ctaText: "ٹیبل گیمز کھیلیں",
      content: "<p>TekkaBuzz پر کلاسک کیسینو ٹیبل گیمز کا تجربہ کریں۔ باکاریٹ، بلیک جیک، رولیٹ، پوکر ورچوئل اور لائیو ڈیلر آپشنز کے ساتھ۔</p><p>100 ٹکا سے کم از کم شرط۔ بی کیش اور نگد میں فوری ادائیگی۔</p>",
    },
  },
  "live-casino": {
    en: {
      title: "TekkaBuzz Live Casino | লাইভ ক্যাসিনো বাংলাদেশ",
      description: "Play live casino games at TekkaBuzz. Live dealer baccarat, roulette, blackjack.",
      heading: "TekkaBuzz Live Casino — Real Dealers, Real Action",
      ctaText: "Play Live Casino",
      content: "<p>Experience real casino gaming from anywhere with TekkaBuzz Live Casino. Professional dealers streaming in HD 24/7.</p><p>Live Baccarat, Roulette, Blackjack, Dragon Tiger, Teen Patti. Minimum bets from ৳50. Partners: Evolution Gaming, Pragmatic Play Live, Ezugi.</p>",
    },
    bn: {
      title: "TekkaBuzz লাইভ ক্যাসিনো | লাইভ ক্যাসিনো বাংলাদেশ",
      description: "TekkaBuzz-এ লাইভ ক্যাসিনো গেমস খেলুন। রিয়েল ডিলারদের সাথে।",
      heading: "TekkaBuzz লাইভ ক্যাসিনো — আসল ডিলার, আসল অ্যাকশন",
      ctaText: "লাইভ ক্যাসিনো খেলুন",
      content: "<p>যেকোনো জায়গা থেকে আসল ক্যাসিনো গেমিং অনুভব করুন TekkaBuzz লাইভ ক্যাসিনোতে। পেশাদার ডিলাররা HD-তে ২৪/৭ স্ট্রিমিং করেন।</p><p>লাইভ ব্যাকারেট, রুলেট, ব্ল্যাকজ্যাক, ড্রাগন টাইগার, তিন পাত্তি। সর্বনিম্ন বাজি ৫০ টাকা থেকে। Evolution Gaming, Pragmatic Play Live, Ezugi।</p>",
    },
    ur: {
      title: "TekkaBuzz لائیو کیسینو | بنگلہ دیش",
      description: "TekkaBuzz پر لائیو کیسینو گیمز کھیلیں۔ حقیقی ڈیلرز کے ساتھ۔",
      heading: "TekkaBuzz لائیو کیسینو — اصلی ڈیلرز، اصلی ایکشن",
      ctaText: "لائیو کیسینو کھیلیں",
      content: "<p>کہیں سے بھی حقیقی کیسینو گیمنگ کا تجربہ کریں۔ پیشہ ور ڈیلرز HD میں 24/7 اسٹریمنگ۔</p><p>لائیو باکاریٹ، رولیٹ، بلیک جیک، ڈریگن ٹائیگر، ٹین پٹی۔ کم از کم شرط 50 ٹکا۔</p>",
    },
  },
  baccarat: {
    en: { title: "TekkaBuzz Baccarat | ব্যাকারেট বাংলাদেশ", description: "Play Baccarat at TekkaBuzz. Live and digital baccarat.", heading: "Play Baccarat at TekkaBuzz", ctaText: "Play Baccarat", content: "<p>Baccarat is one of the most popular card games at TekkaBuzz. Choose Player, Banker, or Tie. Speed Baccarat, No Commission, Lightning Baccarat. Min bet ৳50.</p>" },
    bn: { title: "TekkaBuzz ব্যাকারেট | ব্যাকারেট বাংলাদেশ", description: "TekkaBuzz-এ ব্যাকারেট খেলুন। লাইভ ও ডিজিটাল ব্যাকারেট।", heading: "TekkaBuzz-এ ব্যাকারেট খেলুন", ctaText: "ব্যাকারেট খেলুন", content: "<p>ব্যাকারেট TekkaBuzz-এর সবচেয়ে জনপ্রিয় কার্ড গেমগুলোর একটি। প্লেয়ার, ব্যাংকার বা টাই বেছে নিন। স্পিড ব্যাকারেট, নো কমিশন, লাইটনিং ব্যাকারেট। সর্বনিম্ন বাজি ৫০ টাকা।</p>" },
    ur: { title: "TekkaBuzz باکاریٹ | بنگلہ دیش", description: "TekkaBuzz پر باکاریٹ کھیلیں۔", heading: "TekkaBuzz پر باکاریٹ کھیلیں", ctaText: "باکاریٹ کھیلیں", content: "<p>باکاریٹ TekkaBuzz کی سب سے مقبول کارڈ گیمز میں سے ایک ہے۔ پلیئر، بینکر یا ٹائی منتخب کریں۔ کم از کم شرط 50 ٹکا۔</p>" },
  },
  blackjack: {
    en: { title: "TekkaBuzz Blackjack | ব্ল্যাকজ্যাক বাংলাদেশ", description: "Play Blackjack at TekkaBuzz. Live dealer and digital blackjack.", heading: "Play Blackjack at TekkaBuzz", ctaText: "Play Blackjack", content: "<p>Test your skills in TekkaBuzz Blackjack. Get close to 21 without going bust. Classic, Infinite, and VIP Blackjack tables with live dealers in HD.</p>" },
    bn: { title: "TekkaBuzz ব্ল্যাকজ্যাক | ব্ল্যাকজ্যাক বাংলাদেশ", description: "TekkaBuzz-এ ব্ল্যাকজ্যাক খেলুন। লাইভ ডিলার সহ।", heading: "TekkaBuzz-এ ব্ল্যাকজ্যাক খেলুন", ctaText: "ব্ল্যাকজ্যাক খেলুন", content: "<p>TekkaBuzz ব্ল্যাকজ্যাকে আপনার দক্ষতা পরীক্ষা করুন। ২১-এর কাছাকাছি যান বাস্ট না হয়ে। ক্লাসিক, ইনফিনিট এবং VIP ব্ল্যাকজ্যাক টেবিল লাইভ ডিলারদের সাথে HD-তে।</p>" },
    ur: { title: "TekkaBuzz بلیک جیک | بنگلہ دیش", description: "TekkaBuzz پر بلیک جیک کھیلیں۔", heading: "TekkaBuzz پر بلیک جیک کھیلیں", ctaText: "بلیک جیک کھیلیں", content: "<p>TekkaBuzz بلیک جیک میں اپنی مہارت آزمائیں۔ 21 کے قریب جائیں بغیر بسٹ ہوئے۔ لائیو ڈیلرز کے ساتھ HD میں۔</p>" },
  },
  roulette: {
    en: { title: "TekkaBuzz Roulette | রুলেট বাংলাদেশ", description: "Play Roulette at TekkaBuzz. European, American and Lightning Roulette.", heading: "Play Roulette at TekkaBuzz", ctaText: "Play Roulette", content: "<p>Spin the wheel at TekkaBuzz Roulette. European, American, and Lightning Roulette. Place bets on numbers, colors, or sections with live dealers.</p>" },
    bn: { title: "TekkaBuzz রুলেট | রুলেট বাংলাদেশ", description: "TekkaBuzz-এ রুলেট খেলুন। ইউরোপিয়ান, আমেরিকান ও লাইটনিং রুলেট।", heading: "TekkaBuzz-এ রুলেট খেলুন", ctaText: "রুলেট খেলুন", content: "<p>TekkaBuzz রুলেটে চাকা ঘোরান। ইউরোপিয়ান, আমেরিকান এবং লাইটনিং রুলেট। নম্বর, রঙ বা সেকশনে লাইভ ডিলারদের সাথে বাজি রাখুন।</p>" },
    ur: { title: "TekkaBuzz رولیٹ | بنگلہ دیش", description: "TekkaBuzz پر رولیٹ کھیلیں۔", heading: "TekkaBuzz پر رولیٹ کھیلیں", ctaText: "رولیٹ کھیلیں", content: "<p>TekkaBuzz رولیٹ میں پہیہ گھمائیں۔ یورپین، امریکن اور لائٹننگ رولیٹ۔ لائیو ڈیلرز کے ساتھ نمبروں، رنگوں پر شرط لگائیں۔</p>" },
  },
  poker: {
    en: { title: "TekkaBuzz Poker | পোকার বাংলাদেশ", description: "Play Poker at TekkaBuzz. Texas Hold'em, Three Card Poker.", heading: "Play Poker at TekkaBuzz", ctaText: "Play Poker", content: "<p>Show your poker skills at TekkaBuzz. Texas Hold'em, Three Card Poker, Caribbean Stud, Casino Hold'em. Join live tables or play video poker.</p>" },
    bn: { title: "TekkaBuzz পোকার | পোকার বাংলাদেশ", description: "TekkaBuzz-এ পোকার খেলুন। টেক্সাস হোল্ডেম, থ্রি কার্ড পোকার।", heading: "TekkaBuzz-এ পোকার খেলুন", ctaText: "পোকার খেলুন", content: "<p>TekkaBuzz-এ আপনার পোকার দক্ষতা দেখান। টেক্সাস হোল্ডেম, থ্রি কার্ড পোকার, ক্যারিবিয়ান স্টাড, ক্যাসিনো হোল্ডেম। লাইভ টেবিলে যোগ দিন বা ভিডিও পোকার খেলুন।</p>" },
    ur: { title: "TekkaBuzz پوکر | بنگلہ دیش", description: "TekkaBuzz پر پوکر کھیلیں۔", heading: "TekkaBuzz پر پوکر کھیلیں", ctaText: "پوکر کھیلیں", content: "<p>TekkaBuzz میں اپنی پوکر مہارت دکھائیں۔ ٹیکساس ہولڈم، تھری کارڈ پوکر۔ لائیو ٹیبلز میں شامل ہوں۔</p>" },
  },
  "teen-patti": {
    en: { title: "TekkaBuzz Teen Patti | তিন পাত্তি বাংলাদেশ", description: "Play Teen Patti at TekkaBuzz with live dealers.", heading: "Play Teen Patti at TekkaBuzz", ctaText: "Play Teen Patti", content: "<p>Teen Patti, the beloved South Asian card game, at TekkaBuzz with live dealers. Classic and variant versions with side bets and multipliers.</p>" },
    bn: { title: "TekkaBuzz তিন পাত্তি | তিন পাত্তি বাংলাদেশ", description: "TekkaBuzz-এ লাইভ ডিলারদের সাথে তিন পাত্তি খেলুন।", heading: "TekkaBuzz-এ তিন পাত্তি খেলুন", ctaText: "তিন পাত্তি খেলুন", content: "<p>তিন পাত্তি, দক্ষিণ এশিয়ার প্রিয় কার্ড গেম, এখন TekkaBuzz-এ লাইভ ডিলারদের সাথে। ক্লাসিক ও বিভিন্ন ভেরিয়েন্ট সাইড বেট ও মাল্টিপ্লায়ার সহ।</p>" },
    ur: { title: "TekkaBuzz ٹین پٹی | بنگلہ دیش", description: "TekkaBuzz پر ٹین پٹی کھیلیں۔", heading: "TekkaBuzz پر ٹین پٹی کھیلیں", ctaText: "ٹین پٹی کھیلیں", content: "<p>ٹین پٹی، جنوبی ایشیا کا پسندیدہ کارڈ گیم، TekkaBuzz پر لائیو ڈیلرز کے ساتھ۔ سائڈ بیٹس اور ملٹی پلائرز کے ساتھ۔</p>" },
  },
  "andar-bahar": {
    en: { title: "TekkaBuzz Andar Bahar | আন্দার বাহার বাংলাদেশ", description: "Play Andar Bahar at TekkaBuzz. Simple card game with live dealers.", heading: "Play Andar Bahar at TekkaBuzz", ctaText: "Play Andar Bahar", content: "<p>Andar Bahar — pick Andar or Bahar and win instantly. Live dealers, fast payouts via bKash, Nagad, Rocket.</p>" },
    bn: { title: "TekkaBuzz আন্দার বাহার | আন্দার বাহার বাংলাদেশ", description: "TekkaBuzz-এ আন্দার বাহার খেলুন।", heading: "TekkaBuzz-এ আন্দার বাহার খেলুন", ctaText: "আন্দার বাহার খেলুন", content: "<p>আন্দার বাহার — আন্দার বা বাহার বেছে নিন এবং তাৎক্ষণিকভাবে জিতুন। লাইভ ডিলার, বিকাশ, নগদ, রকেটে দ্রুত পেআউট।</p>" },
    ur: { title: "TekkaBuzz اندر باہر | بنگلہ دیش", description: "TekkaBuzz پر اندر باہر کھیلیں۔", heading: "TekkaBuzz پر اندر باہر کھیلیں", ctaText: "اندر باہر کھیلیں", content: "<p>اندر باہر — اندر یا باہر منتخب کریں اور فوری جیتیں۔ لائیو ڈیلرز، بی کیش، نگد سے فوری ادائیگی۔</p>" },
  },
  "dragon-tiger": {
    en: { title: "TekkaBuzz Dragon Tiger | ড্রাগন টাইগার বাংলাদেশ", description: "Play Dragon Tiger at TekkaBuzz. Fast-paced live card game.", heading: "Play Dragon Tiger at TekkaBuzz", ctaText: "Play Dragon Tiger", content: "<p>Dragon Tiger — the fastest card game. Bet on Dragon or Tiger, higher card wins. Each round takes seconds.</p>" },
    bn: { title: "TekkaBuzz ড্রাগন টাইগার | ড্রাগন টাইগার বাংলাদেশ", description: "TekkaBuzz-এ ড্রাগন টাইগার খেলুন।", heading: "TekkaBuzz-এ ড্রাগন টাইগার খেলুন", ctaText: "ড্রাগন টাইগার খেলুন", content: "<p>ড্রাগন টাইগার — সবচেয়ে দ্রুত কার্ড গেম। ড্রাগন বা টাইগারে বাজি ধরুন, উচ্চ কার্ড জেতে। প্রতিটি রাউন্ড কয়েক সেকেন্ডে।</p>" },
    ur: { title: "TekkaBuzz ڈریگن ٹائیگر | بنگلہ دیش", description: "TekkaBuzz پر ڈریگن ٹائیگر کھیلیں۔", heading: "TekkaBuzz پر ڈریگن ٹائیگر کھیلیں", ctaText: "ڈریگن ٹائیگر کھیلیں", content: "<p>ڈریگن ٹائیگر — سب سے تیز کارڈ گیم۔ ڈریگن یا ٹائیگر پر شرط لگائیں۔ ہر راؤنڈ سیکنڈوں میں۔</p>" },
  },
  esports: {
    en: { title: "TekkaBuzz Esports | ই-স্পোর্টস বাংলাদেশ", description: "Bet on Esports at TekkaBuzz. CS2, Dota 2, LoL, Valorant.", heading: "TekkaBuzz Esports Betting", ctaText: "Bet on Esports", content: "<p>Bet on CS2, Dota 2, League of Legends, Valorant, PUBG Mobile at TekkaBuzz. Live esports betting with competitive odds.</p>" },
    bn: { title: "TekkaBuzz ই-স্পোর্টস | ই-স্পোর্টস বেটিং বাংলাদেশ", description: "TekkaBuzz-এ ই-স্পোর্টসে বাজি ধরুন।", heading: "TekkaBuzz ই-স্পোর্টস বেটিং", ctaText: "ই-স্পোর্টসে বাজি ধরুন", content: "<p>TekkaBuzz-এ CS2, Dota 2, League of Legends, Valorant, PUBG Mobile-এ বাজি ধরুন। প্রতিযোগিতামূলক অডস সহ লাইভ ই-স্পোর্টস বেটিং।</p>" },
    ur: { title: "TekkaBuzz ای سپورٹس | بنگلہ دیش", description: "TekkaBuzz پر ای سپورٹس پر شرط لگائیں۔", heading: "TekkaBuzz ای سپورٹس بیٹنگ", ctaText: "ای سپورٹس پر شرط", content: "<p>TekkaBuzz پر CS2، Dota 2، LoL، Valorant، PUBG Mobile پر شرط لگائیں۔ مسابقتی آڈز کے ساتھ لائیو بیٹنگ۔</p>" },
  },
  "cricket-betting": {
    en: { title: "TekkaBuzz Cricket Betting | ক্রিকেট বেটিং বাংলাদেশ", description: "Bet on cricket at TekkaBuzz. IPL, BPL, World Cup.", heading: "Cricket Betting at TekkaBuzz", ctaText: "Bet on Cricket", content: "<p>Best cricket betting in Bangladesh. IPL, BPL, World Cup, Asia Cup. Live in-play betting with ball-by-ball odds.</p>" },
    bn: { title: "TekkaBuzz ক্রিকেট বেটিং | ক্রিকেট বেটিং বাংলাদেশ", description: "TekkaBuzz-এ ক্রিকেটে বাজি ধরুন। আইপিএল, বিপিএল, বিশ্বকাপ।", heading: "TekkaBuzz-এ ক্রিকেট বেটিং", ctaText: "ক্রিকেটে বাজি ধরুন", content: "<p>বাংলাদেশে সেরা ক্রিকেট বেটিং। আইপিএল, বিপিএল, বিশ্বকাপ, এশিয়া কাপ। বল-বাই-বল অডস সহ লাইভ ইন-প্লে বেটিং।</p>" },
    ur: { title: "TekkaBuzz کرکٹ بیٹنگ | بنگلہ دیش", description: "TekkaBuzz پر کرکٹ پر شرط لگائیں۔", heading: "TekkaBuzz پر کرکٹ بیٹنگ", ctaText: "کرکٹ پر شرط", content: "<p>بنگلہ دیش میں بہترین کرکٹ بیٹنگ۔ آئی پی ایل، بی پی ایل، ورلڈ کپ، ایشیا کپ۔ بال بائی بال آڈز کے ساتھ لائیو بیٹنگ۔</p>" },
  },
  "football-betting": {
    en: { title: "TekkaBuzz Football Betting | ফুটবল বেটিং বাংলাদেশ", description: "Bet on football at TekkaBuzz. Premier League, Champions League.", heading: "Football Betting at TekkaBuzz", ctaText: "Bet on Football", content: "<p>Bet on Premier League, La Liga, Serie A, Bundesliga, Champions League. Live in-play betting with real-time odds.</p>" },
    bn: { title: "TekkaBuzz ফুটবল বেটিং | ফুটবল বেটিং বাংলাদেশ", description: "TekkaBuzz-এ ফুটবলে বাজি ধরুন। প্রিমিয়ার লিগ, চ্যাম্পিয়ন্স লিগ।", heading: "TekkaBuzz-এ ফুটবল বেটিং", ctaText: "ফুটবলে বাজি ধরুন", content: "<p>প্রিমিয়ার লিগ, লা লিগা, সেরিয়ে আ, বুন্দেসলিগা, চ্যাম্পিয়ন্স লিগে বাজি ধরুন। রিয়েল-টাইম অডস সহ লাইভ ইন-প্লে বেটিং।</p>" },
    ur: { title: "TekkaBuzz فٹ بال بیٹنگ | بنگلہ دیش", description: "TekkaBuzz پر فٹ بال پر شرط لگائیں۔", heading: "TekkaBuzz پر فٹ بال بیٹنگ", ctaText: "فٹ بال پر شرط", content: "<p>پریمیئر لیگ، لا لیگا، سیری اے، بنڈس لیگا، چیمپیئنز لیگ پر شرط لگائیں۔ ریئل ٹائم آڈز کے ساتھ لائیو بیٹنگ۔</p>" },
  },
  mines: {
    en: { title: "TekkaBuzz Mines | মাইনস গেম বাংলাদেশ", description: "Play Mines at TekkaBuzz. Reveal gems, avoid mines.", heading: "Play Mines at TekkaBuzz", ctaText: "Play Mines", content: "<p>Mines — reveal gems while avoiding hidden mines. More gems = higher multiplier. Cash out anytime. Choose risk level by selecting mine count.</p>" },
    bn: { title: "TekkaBuzz মাইনস | মাইনস গেম বাংলাদেশ", description: "TekkaBuzz-এ মাইনস খেলুন। রত্ন খুঁজুন, মাইন এড়িয়ে চলুন।", heading: "TekkaBuzz-এ মাইনস খেলুন", ctaText: "মাইনস খেলুন", content: "<p>মাইনস — লুকানো মাইন এড়িয়ে রত্ন আবিষ্কার করুন। যত বেশি রত্ন = তত বেশি মাল্টিপ্লায়ার। যেকোনো সময় ক্যাশ আউট করুন। মাইনের সংখ্যা বেছে ঝুঁকির মাত্রা নির্ধারণ করুন।</p>" },
    ur: { title: "TekkaBuzz مائنز | بنگلہ دیش", description: "TekkaBuzz پر مائنز کھیلیں۔", heading: "TekkaBuzz پر مائنز کھیلیں", ctaText: "مائنز کھیلیں", content: "<p>مائنز — چھپی ہوئی بارودی سرنگوں سے بچتے ہوئے جواہرات تلاش کریں۔ زیادہ جواہرات = زیادہ ملٹی پلائر۔ کسی بھی وقت کیش آؤٹ کریں۔</p>" },
  },
  plinko: {
    en: { title: "TekkaBuzz Plinko | প্লিংকো গেম বাংলাদেশ", description: "Play Plinko at TekkaBuzz. Drop the ball and win up to 1000x.", heading: "Play Plinko at TekkaBuzz", ctaText: "Play Plinko", content: "<p>Plinko — drop a ball from the top of a peg pyramid. Watch it bounce and land on a multiplier. Win up to 1000x! Low, medium, high risk modes.</p>" },
    bn: { title: "TekkaBuzz প্লিংকো | প্লিংকো গেম বাংলাদেশ", description: "TekkaBuzz-এ প্লিংকো খেলুন। বল ফেলুন এবং ১০০০x পর্যন্ত জিতুন।", heading: "TekkaBuzz-এ প্লিংকো খেলুন", ctaText: "প্লিংকো খেলুন", content: "<p>প্লিংকো — পেগ পিরামিডের উপর থেকে একটি বল ফেলুন। এটি বাউন্স করে একটি মাল্টিপ্লায়ারে পড়তে দেখুন। ১০০০x পর্যন্ত জিতুন! লো, মিডিয়াম, হাই রিস্ক মোড।</p>" },
    ur: { title: "TekkaBuzz پلنکو | بنگلہ دیش", description: "TekkaBuzz پر پلنکو کھیلیں۔ 1000x تک جیتیں۔", heading: "TekkaBuzz پر پلنکو کھیلیں", ctaText: "پلنکو کھیلیں", content: "<p>پلنکو — پیگ پیرامڈ سے گیند گرائیں۔ اسے اچھلتے اور ملٹی پلائر پر گرتے دیکھیں۔ 1000x تک جیتیں!</p>" },
  },
  "sports-betting": {
    en: { title: "TekkaBuzz Sports Betting | স্পোর্টস বেটিং বাংলাদেশ", description: "Sports betting at TekkaBuzz. Cricket, football, tennis, basketball.", heading: "Sports Betting at TekkaBuzz", ctaText: "Start Betting", content: "<p>Comprehensive sports betting covering cricket, football, tennis, basketball, 30+ sports. Live in-play and pre-match markets for thousands of events daily.</p>" },
    bn: { title: "TekkaBuzz স্পোর্টস বেটিং | স্পোর্টস বেটিং বাংলাদেশ", description: "TekkaBuzz-এ স্পোর্টস বেটিং। ক্রিকেট, ফুটবল, টেনিস, বাস্কেটবল।", heading: "TekkaBuzz-এ স্পোর্টস বেটিং", ctaText: "বেটিং শুরু করুন", content: "<p>ক্রিকেট, ফুটবল, টেনিস, বাস্কেটবল, ৩০+ খেলায় ব্যাপক স্পোর্টস বেটিং। প্রতিদিন হাজারো ইভেন্টে লাইভ ইন-প্লে ও প্রি-ম্যাচ মার্কেট।</p>" },
    ur: { title: "TekkaBuzz سپورٹس بیٹنگ | بنگلہ دیش", description: "TekkaBuzz پر سپورٹس بیٹنگ۔ کرکٹ، فٹ بال، ٹینس۔", heading: "TekkaBuzz پر سپورٹس بیٹنگ", ctaText: "بیٹنگ شروع کریں", content: "<p>کرکٹ، فٹ بال، ٹینس، باسکٹ بال، 30+ کھیلوں پر جامع سپورٹس بیٹنگ۔ روزانہ ہزاروں ایونٹس پر لائیو اور پری میچ مارکیٹس۔</p>" },
  },
};

// Bonus page translations
export const BONUS_PAGES: Record<string, Record<Locale, { title: string; description: string; heading: string; content: string[] }>> = {
  welcome: {
    en: { title: "TekkaBuzz Welcome Bonus — Up to 20,000 Taka", description: "Get up to 20,000 Taka welcome bonus at TekkaBuzz.", heading: "Welcome Bonus — Up to 20,000 Taka", content: ["New to TekkaBuzz? Get a massive welcome bonus of up to 20,000 Taka on your first deposit. This 100% match bonus applies to all games.", "Simply sign up, make your first deposit via bKash, Nagad, or any supported method, and your bonus will be credited instantly."] },
    bn: { title: "TekkaBuzz ওয়েলকাম বোনাস — ২০,০০০ টাকা পর্যন্ত", description: "TekkaBuzz-এ ২০,০০০ টাকা পর্যন্ত ওয়েলকাম বোনাস পান।", heading: "ওয়েলকাম বোনাস — ২০,০০০ টাকা পর্যন্ত", content: ["TekkaBuzz-এ নতুন? আপনার প্রথম ডিপোজিটে ২০,০০০ টাকা পর্যন্ত বিশাল ওয়েলকাম বোনাস পান। এই ১০০% ম্যাচ বোনাস সব গেমে প্রযোজ্য।", "সাইন আপ করুন, বিকাশ, নগদ বা যেকোনো সাপোর্টেড মেথডে প্রথম ডিপোজিট করুন, এবং আপনার বোনাস তাৎক্ষণিকভাবে জমা হবে।"] },
    ur: { title: "TekkaBuzz ویلکم بونس — 20,000 ٹکا تک", description: "TekkaBuzz پر 20,000 ٹکا تک ویلکم بونس حاصل کریں۔", heading: "ویلکم بونس — 20,000 ٹکا تک", content: ["TekkaBuzz میں نئے ہیں؟ اپنے پہلے ڈپازٹ پر 20,000 ٹکا تک بونس حاصل کریں۔ یہ 100% میچ بونس تمام گیمز پر لاگو ہوتا ہے۔", "سائن اپ کریں، بی کیش، نگد سے پہلا ڈپازٹ کریں، اور آپ کا بونس فوری جمع ہو جائے گا۔"] },
  },
  cashback: {
    en: { title: "TekkaBuzz Cashback — Unlimited Weekly Cashback", description: "Get unlimited cashback on all games at TekkaBuzz.", heading: "Weekly Cashback — Unlimited Cashback on All Games", content: ["TekkaBuzz offers unlimited weekly cashback on all games. A percentage of losses returned every Monday.", "VIP players enjoy higher cashback percentages. Cashback withdrawable immediately with no wagering requirements."] },
    bn: { title: "TekkaBuzz ক্যাশব্যাক — সীমাহীন সাপ্তাহিক ক্যাশব্যাক", description: "TekkaBuzz-এ সব গেমে সীমাহীন ক্যাশব্যাক পান।", heading: "সাপ্তাহিক ক্যাশব্যাক — সব গেমে সীমাহীন ক্যাশব্যাক", content: ["TekkaBuzz সব গেমে সীমাহীন সাপ্তাহিক ক্যাশব্যাক অফার করে। প্রতি সোমবার লোকসানের একটি শতাংশ ফেরত দেওয়া হয়।", "VIP খেলোয়াড়রা উচ্চতর ক্যাশব্যাক শতাংশ পান। ক্যাশব্যাক কোনো ওয়েজারিং রিকোয়ারমেন্ট ছাড়াই তাৎক্ষণিকভাবে উত্তোলনযোগ্য।"] },
    ur: { title: "TekkaBuzz کیش بیک — لامحدود ہفتہ وار کیش بیک", description: "TekkaBuzz پر تمام گیمز پر لامحدود کیش بیک۔", heading: "ہفتہ وار کیش بیک — تمام گیمز پر لامحدود", content: ["TekkaBuzz تمام گیمز پر لامحدود ہفتہ وار کیش بیک پیش کرتا ہے۔ ہر پیر کو نقصان کا فیصد واپس۔", "VIP کھلاڑیوں کو زیادہ کیش بیک۔ بغیر شرط کے فوری نکلوائی۔"] },
  },
  "referral-bonus": {
    en: { title: "TekkaBuzz Referral Bonus — 300 Taka Per Friend", description: "Earn 300 Taka for every friend you refer to TekkaBuzz.", heading: "Referral Bonus — Earn 300 Taka Per Friend", content: ["Share TekkaBuzz with friends and earn 300 Taka for each successful referral. No limit on referrals.", "Your friend also receives a bonus. Referral bonuses paid directly to bKash or Nagad."] },
    bn: { title: "TekkaBuzz রেফারেল বোনাস — প্রতি বন্ধুতে ৩০০ টাকা", description: "TekkaBuzz-এ প্রতিটি রেফারেলে ৩০০ টাকা আয় করুন।", heading: "রেফারেল বোনাস — প্রতি বন্ধুতে ৩০০ টাকা আয় করুন", content: ["বন্ধুদের সাথে TekkaBuzz শেয়ার করুন এবং প্রতিটি সফল রেফারেলে ৩০০ টাকা আয় করুন। রেফারেলে কোনো সীমা নেই।", "আপনার বন্ধুও বোনাস পাবেন। রেফারেল বোনাস সরাসরি বিকাশ বা নগদে দেওয়া হয়।"] },
    ur: { title: "TekkaBuzz ریفرل بونس — فی دوست 300 ٹکا", description: "TekkaBuzz پر ہر ریفرل پر 300 ٹکا کمائیں۔", heading: "ریفرل بونس — فی دوست 300 ٹکا", content: ["دوستوں کو TekkaBuzz شیئر کریں اور ہر کامیاب ریفرل پر 300 ٹکا کمائیں۔ ریفرل کی کوئی حد نہیں۔", "آپ کے دوست کو بھی بونس ملتا ہے۔ بی کیش یا نگد میں فوری ادائیگی۔"] },
  },
  task: {
    en: { title: "TekkaBuzz Task Bonus — Daily Rewards", description: "Complete daily tasks at TekkaBuzz and earn bonus rewards.", heading: "Task Bonus — Daily Rewards for Completing Tasks", content: ["Earn daily bonuses by completing simple tasks. Tasks include logging in, playing games, making deposits.", "Task bonuses boost your bankroll. Check promotions section daily for new tasks."] },
    bn: { title: "TekkaBuzz টাস্ক বোনাস — দৈনিক পুরস্কার", description: "TekkaBuzz-এ দৈনিক টাস্ক সম্পন্ন করে বোনাস পুরস্কার আয় করুন।", heading: "টাস্ক বোনাস — টাস্ক সম্পন্ন করে দৈনিক পুরস্কার", content: ["সহজ টাস্ক সম্পন্ন করে দৈনিক বোনাস আয় করুন। টাস্কের মধ্যে রয়েছে লগইন, গেম খেলা, ডিপোজিট করা।", "টাস্ক বোনাস আপনার ব্যাংকরোল বাড়ায়। নতুন টাস্কের জন্য প্রতিদিন প্রমোশন সেকশন চেক করুন।"] },
    ur: { title: "TekkaBuzz ٹاسک بونس — روزانہ انعامات", description: "TekkaBuzz پر روزانہ ٹاسک مکمل کرکے بونس انعامات حاصل کریں۔", heading: "ٹاسک بونس — ٹاسک مکمل کرکے روزانہ انعامات", content: ["آسان ٹاسک مکمل کرکے روزانہ بونس کمائیں۔ ٹاسک میں لاگ ان، گیمز کھیلنا، ڈپازٹ شامل ہیں۔", "ٹاسک بونس آپ کا بینک رول بڑھاتے ہیں۔ نئے ٹاسک کے لیے روزانہ پروموشنز چیک کریں۔"] },
  },
  affiliate: {
    en: { title: "TekkaBuzz Affiliate | Tekka Buzz Affiliate Program Bangladesh", description: "Join tekka buzz affiliate. Earn 300 Taka per referral.", heading: "TekkaBuzz Affiliate Program — Earn 300 Taka Per Referral", content: ["The tekka buzz affiliate program is one of the most rewarding in Bangladesh. Earn 300 Taka for every friend who signs up and deposits through your unique referral link.", "No limit on referrals. Commissions paid to bKash or Nagad within 24 hours. Marketing materials, tracking dashboards, and dedicated support provided."] },
    bn: { title: "TekkaBuzz অ্যাফিলিয়েট | টেক্কাবাজ অ্যাফিলিয়েট প্রোগ্রাম বাংলাদেশ", description: "টেক্কাবাজ অ্যাফিলিয়েটে যোগ দিন। প্রতি রেফারেলে ৩০০ টাকা আয় করুন।", heading: "TekkaBuzz অ্যাফিলিয়েট প্রোগ্রাম — প্রতি রেফারেলে ৩০০ টাকা আয় করুন", content: ["টেক্কাবাজ অ্যাফিলিয়েট প্রোগ্রাম বাংলাদেশের সবচেয়ে লাভজনক অ্যাফিলিয়েট প্রোগ্রামগুলোর একটি। আপনার ইউনিক রেফারেল লিংকের মাধ্যমে সাইন আপ ও ডিপোজিট করা প্রতিটি বন্ধুর জন্য ৩০০ টাকা আয় করুন।", "রেফারেলে কোনো সীমা নেই। ২৪ ঘন্টার মধ্যে বিকাশ বা নগদে কমিশন প্রদান। মার্কেটিং ম্যাটেরিয়াল, ট্র্যাকিং ড্যাশবোর্ড এবং ডেডিকেটেড সাপোর্ট প্রদান করা হয়।"] },
    ur: { title: "TekkaBuzz ایفیلیٹ | بنگلہ دیش ایفیلیٹ پروگرام", description: "TekkaBuzz ایفیلیٹ میں شامل ہوں۔ فی ریفرل 300 ٹکا کمائیں۔", heading: "TekkaBuzz ایفیلیٹ پروگرام — فی ریفرل 300 ٹکا", content: ["TekkaBuzz ایفیلیٹ پروگرام بنگلہ دیش میں سب سے فائدہ مند ہے۔ اپنے منفرد ریفرل لنک سے سائن اپ اور ڈپازٹ کرنے والے ہر دوست کے لیے 300 ٹکا کمائیں۔", "ریفرل کی کوئی حد نہیں۔ 24 گھنٹے میں بی کیش یا نگد میں کمیشن۔ مارکیٹنگ مواد اور ٹریکنگ ڈیش بورڈ فراہم۔"] },
  },
};

export interface PromotionItem { title: string; desc: string; }
export const PROMOTION_PAGE: Record<Locale, { title: string; heading: string; description: string; items: PromotionItem[] }> = {
  en: { title: "TekkaBuzz Promotions | Bonuses and Offers Bangladesh", heading: "TekkaBuzz Promotions and Bonuses", description: "TekkaBuzz promotions — 20,000 Taka welcome bonus, cashback, referral rewards.", items: [{ title: "Welcome Bonus", desc: "Up to 20,000 Taka on first deposit" }, { title: "Weekly Cashback", desc: "Unlimited cashback on all games" }, { title: "Referral Bonus", desc: "300 Taka per friend" }, { title: "Task Bonus", desc: "Daily rewards for completing tasks" }] },
  bn: { title: "TekkaBuzz প্রমোশনস | বোনাস ও অফার বাংলাদেশ", heading: "TekkaBuzz প্রমোশনস এবং বোনাস", description: "TekkaBuzz প্রমোশনস — ২০,০০০ টাকা ওয়েলকাম বোনাস, ক্যাশব্যাক, রেফারেল পুরস্কার।", items: [{ title: "ওয়েলকাম বোনাস", desc: "প্রথম ডিপোজিটে ২০,০০০ টাকা পর্যন্ত" }, { title: "সাপ্তাহিক ক্যাশব্যাক", desc: "সব গেমে সীমাহীন ক্যাশব্যাক" }, { title: "রেফারেল বোনাস", desc: "প্রতি বন্ধুতে ৩০০ টাকা" }, { title: "টাস্ক বোনাস", desc: "টাস্ক সম্পন্ন করে দৈনিক পুরস্কার" }] },
  ur: { title: "TekkaBuzz پروموشنز | بونس اور آفرز بنگلہ دیش", heading: "TekkaBuzz پروموشنز اور بونس", description: "TekkaBuzz پروموشنز — 20,000 ٹکا ویلکم بونس، کیش بیک، ریفرل انعامات۔", items: [{ title: "ویلکم بونس", desc: "پہلے ڈپازٹ پر 20,000 ٹکا تک" }, { title: "ہفتہ وار کیش بیک", desc: "تمام گیمز پر لامحدود کیش بیک" }, { title: "ریفرل بونس", desc: "فی دوست 300 ٹکا" }, { title: "ٹاسک بونس", desc: "ٹاسک مکمل کرکے روزانہ انعامات" }] },
};
