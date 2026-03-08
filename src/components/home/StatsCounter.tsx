import { useEffect, useRef, useState } from "react";
import { useLocale, type Locale } from "@/hooks/useLocale";

const T: Record<Locale, { label: string; prefix?: string; suffix?: string }[]> = {
  en: [
    { label: "Registered Players", suffix: "+" },
    { label: "Games Available", suffix: "+" },
    { label: "Taka Welcome Bonus" },
    { label: "Minutes Fastest Withdrawal", prefix: "Under " },
  ],
  bn: [
    { label: "নিবন্ধিত খেলোয়াড়", suffix: "+" },
    { label: "গেমস উপলব্ধ", suffix: "+" },
    { label: "টাকা ওয়েলকাম বোনাস" },
    { label: "মিনিটে দ্রুত উত্তোলন", prefix: "মাত্র " },
  ],
  ur: [
    { label: "رجسٹرڈ کھلاڑی", suffix: "+" },
    { label: "دستیاب گیمز", suffix: "+" },
    { label: "ٹاکا ویلکم بونس" },
    { label: "منٹ میں تیز ترین نکلوائی", prefix: "صرف " },
  ],
};

const TARGETS = [29000000, 6300, 20000, 5];

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, isVisible]);
  return count;
}

function StatItem({ target, label, suffix = "", prefix = "" }: { target: number; label: string; suffix?: string; prefix?: string }) {
  const ref2 = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(target, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref2.current) obs.observe(ref2.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref2} className="text-center">
      <div className="text-2xl md:text-4xl font-bold text-primary font-heading">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const locale = useLocale();
  const stats = T[locale];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <StatItem key={i} target={TARGETS[i]} label={s.label} suffix={s.suffix} prefix={s.prefix} />
        ))}
      </div>
    </section>
  );
}
