import { PAYMENT_ICONS } from "@/lib/images";
import { useLocale, type Locale } from "@/hooks/useLocale";

const HEADINGS: Record<Locale, string> = {
  en: 'Fast and Secure <span class="text-primary">Payment Methods</span>',
  bn: 'দ্রুত এবং সুরক্ষিত <span class="text-primary">পেমেন্ট পদ্ধতি</span>',
  ur: 'تیز اور محفوظ <span class="text-primary">ادائیگی کے طریقے</span>',
};

export default function PaymentMethods() {
  const locale = useLocale();

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-lg md:text-3xl font-bold text-foreground mb-6 md:mb-12" dangerouslySetInnerHTML={{ __html: HEADINGS[locale] }} />
        <div className="grid grid-cols-5 md:flex md:flex-wrap gap-3 md:gap-8 justify-center items-center">
          {PAYMENT_ICONS.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-1">
              <img src={p.url} alt={`${p.name} payment on TekkaBuzz.win`} className="h-8 md:h-12 w-auto object-contain" loading="lazy" />
              <span className="text-[9px] md:text-xs text-muted-foreground">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
