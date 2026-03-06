import { Zap, Shield, Headphones } from "lucide-react";

const FEATURES = [
  { icon: Zap, title: "Instant Withdrawals", desc: "bKash, Nagad, Rocket, Upay -- under 5 minutes guaranteed" },
  { icon: Shield, title: "100% Secure Platform", desc: "SSL encrypted, Gaming Curacao licensed, safe and trusted" },
  { icon: Headphones, title: "24/7 Live Support", desc: "Bengali and English support around the clock" },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Why Choose <span className="text-primary">TekkaBuzz</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-all duration-300">
              <f.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
