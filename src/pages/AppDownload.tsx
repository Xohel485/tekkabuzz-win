import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { usePwaInstall } from "@/hooks/usePwaInstall";
import { Download, Smartphone, Shield, Zap, CheckCircle, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/useLocale";

const t = {
  en: {
    title: "Download TekkaBuzz App",
    desc: "Download TekkaBuzz app for Android & iOS. Fast, secure, instant access to 6300+ games.",
    heading: "Download TekkaBuzz App",
    subtitle: "Get instant access to 6300+ games, live casino, sports betting — right from your home screen.",
    downloadBtn: "Download App",
    installedMsg: "✅ App Already Installed!",
    installedDesc: "TekkaBuzz is already on your device. Open it from your home screen.",
    iosTitle: "iOS Installation Guide",
    iosStep1: "Tap the Share button in Safari",
    iosStep2: 'Select "Add to Home Screen"',
    iosStep3: 'Tap "Add" to install',
    features: [
      { icon: Zap, title: "Lightning Fast", desc: "Instant load, no lag" },
      { icon: Shield, title: "100% Secure", desc: "Licensed & encrypted" },
      { icon: Smartphone, title: "Works Offline", desc: "Play anytime, anywhere" },
    ],
    whyTitle: "Why Download?",
    reasons: [
      "No app store needed — install directly",
      "Push notifications for bonuses & promotions",
      "Faster than browser — native-like experience",
      "Auto-updates — always latest version",
      "Works on Android & iOS",
    ],
  },
  bn: {
    title: "TekkaBuzz অ্যাপ ডাউনলোড",
    desc: "Android ও iOS এর জন্য TekkaBuzz অ্যাপ ডাউনলোড করুন।",
    heading: "TekkaBuzz অ্যাপ ডাউনলোড করুন",
    subtitle: "৬৩০০+ গেম, লাইভ ক্যাসিনো, স্পোর্টস বেটিং — সরাসরি আপনার হোম স্ক্রিন থেকে।",
    downloadBtn: "ডাউনলোড করুন",
    installedMsg: "✅ অ্যাপ ইতিমধ্যে ইন্সটল!",
    installedDesc: "TekkaBuzz আপনার ডিভাইসে আছে। হোম স্ক্রিন থেকে ওপেন করুন।",
    iosTitle: "iOS ইন্সটলেশন গাইড",
    iosStep1: "Safari-তে Share বাটনে ট্যাপ করুন",
    iosStep2: '"Add to Home Screen" সিলেক্ট করুন',
    iosStep3: '"Add" ট্যাপ করে ইন্সটল করুন',
    features: [
      { icon: Zap, title: "অতি দ্রুত", desc: "তাৎক্ষণিক লোড" },
      { icon: Shield, title: "১০০% নিরাপদ", desc: "লাইসেন্সড ও এনক্রিপ্টেড" },
      { icon: Smartphone, title: "অফলাইনে কাজ করে", desc: "যেকোনো সময় খেলুন" },
    ],
    whyTitle: "কেন ডাউনলোড করবেন?",
    reasons: [
      "অ্যাপ স্টোর লাগবে না — সরাসরি ইন্সটল",
      "বোনাস ও প্রমোশনের নোটিফিকেশন",
      "ব্রাউজারের চেয়ে দ্রুত",
      "অটো আপডেট",
      "Android ও iOS এ কাজ করে",
    ],
  },
  ur: {
    title: "TekkaBuzz ایپ ڈاؤن لوڈ",
    desc: "Android اور iOS کے لیے TekkaBuzz ایپ ڈاؤن لوڈ کریں۔",
    heading: "TekkaBuzz ایپ ڈاؤن لوڈ کریں",
    subtitle: "6300+ گیمز، لائیو کیسینو، اسپورٹس بیٹنگ — اپنی ہوم اسکرین سے۔",
    downloadBtn: "ڈاؤن لوڈ کریں",
    installedMsg: "✅ ایپ پہلے سے انسٹال ہے!",
    installedDesc: "TekkaBuzz آپ کے ڈیوائس پر ہے۔ ہوم اسکرین سے کھولیں۔",
    iosTitle: "iOS انسٹالیشن گائیڈ",
    iosStep1: "Safari میں Share بٹن پر ٹیپ کریں",
    iosStep2: '"Add to Home Screen" منتخب کریں',
    iosStep3: '"Add" ٹیپ کریں',
    features: [
      { icon: Zap, title: "تیز رفتار", desc: "فوری لوڈ" },
      { icon: Shield, title: "100% محفوظ", desc: "لائسنس یافتہ" },
      { icon: Smartphone, title: "آف لائن", desc: "کہیں بھی کھیلیں" },
    ],
    whyTitle: "کیوں ڈاؤن لوڈ کریں؟",
    reasons: [
      "ایپ اسٹور کی ضرورت نہیں",
      "بونس نوٹیفکیشنز",
      "براؤزر سے تیز",
      "آٹو اپ ڈیٹ",
      "Android اور iOS پر کام کرتا ہے",
    ],
  },
};

export default function AppDownload() {
  const locale = useLocale();
  const c = t[locale];
  const { canInstall, isInstalled, isIos, install } = usePwaInstall();

  return (
    <Layout>
      <Helmet>
        <title>{c.title} | TekkaBuzz</title>
        <meta name="description" content={c.desc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tekkabuzz.win/install" />
      </Helmet>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          {/* Hero */}
          <div className="mb-8">
            <img src="/images/tekkabuzz-logo-cropped.webp" alt="TekkaBuzz App" className="w-24 h-24 mx-auto rounded-2xl shadow-lg mb-6" loading="lazy" /> className="w-24 h-24 mx-auto rounded-2xl shadow-lg mb-6" loading="lazy" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{c.heading}</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{c.subtitle}</p>
          </div>

          {/* Install Button */}
          <div className="mb-12">
            {isInstalled ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <p className="text-green-400 font-bold text-lg">{c.installedMsg}</p>
                <p className="text-muted-foreground mt-2">{c.installedDesc}</p>
              </div>
            ) : isIos ? (
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <h3 className="font-bold text-foreground text-lg mb-4 text-center">{c.iosTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div className="flex items-center gap-2"><Share className="w-5 h-5 text-primary" /><span className="text-muted-foreground">{c.iosStep1}</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <span className="text-muted-foreground">{c.iosStep2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <span className="text-muted-foreground">{c.iosStep3}</span>
                  </div>
                </div>
              </div>
            ) : (
              <Button onClick={install} disabled={!canInstall} size="lg" className="text-lg px-10 py-6 gold-shimmer">
                <Download className="w-6 h-6 mr-2" />
                {c.downloadBtn}
              </Button>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {c.features.map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <f.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Download */}
          <div className="bg-card border border-border rounded-xl p-8 text-left">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">{c.whyTitle}</h2>
            <ul className="space-y-3">
              {c.reasons.map((r, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
