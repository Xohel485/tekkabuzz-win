import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 100000, label: "Registered Players", suffix: "+" },
  { target: 1000, label: "Games Available", suffix: "+" },
  { target: 20000, label: "Taka Welcome Bonus", suffix: "" },
  { target: 5, label: "Minutes Fastest Withdrawal", prefix: "Under " },
];

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
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
      <div className="text-3xl md:text-4xl font-bold text-primary font-heading">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
