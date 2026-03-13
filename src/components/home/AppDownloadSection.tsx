import { Link } from "react-router-dom";
import { Download, Smartphone } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

const t = {
  en: { title: "Download TekkaBuzz App", desc: "Install our app for the fastest gaming experience. Works on Android & iOS.", btn: "Download App" },
  bn: { title: "TekkaBuzz অ্যাপ ডাউনলোড করুন", desc: "দ্রুততম গেমিং অভিজ্ঞতার জন্য আমাদের অ্যাপ ইন্সটল করুন।", btn: "ডাউনলোড করুন" },
  ur: { title: "TekkaBuzz ایپ ڈاؤن لوڈ کریں", desc: "تیز ترین گیمنگ کے لیے ہماری ایپ انسٹال کریں۔", btn: "ڈاؤن لوڈ کریں" },
};

export default function AppDownloadSection() {
  const locale = useLocale();
  const c = t[locale];

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{c.title}</h2>
          </div>
          <p className="text-muted-foreground mb-6">{c.desc}</p>
          <Link to="/install" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold rounded-lg px-8 py-4 hover:bg-gold-hover transition-all gold-shimmer">
            <Download className="w-5 h-5" />
            {c.btn}
          </Link>
        </div>
        <div className="shrink-0">
          <img src="/images/tekkabuzz-win-logo.webp" alt="TekkaBuzz App" className="w-32 h-32 object-contain rounded-2xl shadow-lg border border-primary/20 bg-card p-2" loading="lazy" decoding="async" width={128} height={128} />
        </div>
      </div>
    </section>
  );
}
