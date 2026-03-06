import { PAYMENT_ICONS } from "@/lib/images";

export default function PaymentMethods() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12">
          Fast and Secure <span className="text-primary">Payment Methods</span>
        </h2>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {PAYMENT_ICONS.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2">
              <img src={p.url} alt={p.name} className="h-12 object-contain" loading="lazy" />
              <span className="text-xs text-muted-foreground">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
