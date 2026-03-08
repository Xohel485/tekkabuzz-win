import { Check, Star, Trophy, ArrowRight } from "lucide-react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const competitors = [
  { name: "TekkaBuzz", isHighlighted: true, welcomeBonus: "20,000৳", affiliateCommission: "40%", paymentMethods: "bKash, Nagad, Rocket, Upay, Crypto", withdrawalSpeed: "Instant", mobileApp: "PWA (Instant)", languages: "EN, BN, UR", support: "24/7 Live Chat", rating: 4.9 },
  { name: "JeetBuzz", isHighlighted: false, welcomeBonus: "10,000৳", affiliateCommission: "25%", paymentMethods: "bKash, Nagad", withdrawalSpeed: "1-24 Hours", mobileApp: "APK Only", languages: "EN, BN", support: "Limited Hours", rating: 4.2 },
  { name: "Baji", isHighlighted: false, welcomeBonus: "10,000৳", affiliateCommission: "30%", paymentMethods: "bKash, Nagad", withdrawalSpeed: "1-24 Hours", mobileApp: "APK Only", languages: "EN, BN", support: "Email Only", rating: 4.0 },
  { name: "MCW Casino", isHighlighted: false, welcomeBonus: "15,000৳", affiliateCommission: "25%", paymentMethods: "Limited Options", withdrawalSpeed: "24-48 Hours", mobileApp: "APK Only", languages: "EN", support: "Limited Hours", rating: 3.8 },
  { name: "Mostplay", isHighlighted: false, welcomeBonus: "15,000৳", affiliateCommission: "25%", paymentMethods: "bKash, Nagad", withdrawalSpeed: "1-24 Hours", mobileApp: "APK Only", languages: "EN", support: "Limited", rating: 3.9 },
];

const featureComparison = [
  { feature: "Instant Withdrawals", tekkabuzz: true, others: false },
  { feature: "Crypto Payments", tekkabuzz: true, others: false },
  { feature: "Progressive Web App", tekkabuzz: true, others: false },
  { feature: "Urdu Language", tekkabuzz: true, others: false },
  { feature: "40% Affiliate Commission", tekkabuzz: true, others: false },
];

const fields = ["welcomeBonus", "affiliateCommission", "paymentMethods", "withdrawalSpeed", "mobileApp", "languages", "support", "rating"] as const;
const fieldLabels: Record<typeof fields[number], string> = {
  welcomeBonus: "Welcome Bonus", affiliateCommission: "Affiliate Commission", paymentMethods: "Payment Methods",
  withdrawalSpeed: "Withdrawal Speed", mobileApp: "Mobile App", languages: "Languages", support: "Customer Support", rating: "User Rating",
};

export function CompetitorComparison() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-background to-card" aria-labelledby="comparison-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 md:mb-12">
          <h2 id="comparison-heading" className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            TekkaBuzz vs JeetBuzz vs Baji
            <span className="block text-lg md:text-xl mt-2 text-muted-foreground font-normal">Best Online Casino Comparison in Bangladesh</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Looking for the <strong>best JeetBuzz alternative</strong> or <strong>better than Baji</strong>?
            Compare TekkaBuzz with top casinos. See why players choose TekkaBuzz.
          </p>
        </header>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto mb-10">
          <Table>
            <TableHeader>
              <TableRow className="bg-card">
                <TableHead className="font-heading font-bold">Feature</TableHead>
                {competitors.map((comp) => (
                  <TableHead key={comp.name} className={`font-heading font-bold text-center ${comp.isHighlighted ? "bg-primary/10 text-primary" : ""}`}>
                    {comp.isHighlighted && <Trophy className="w-4 h-4 mx-auto mb-1" />}
                    {comp.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field) => (
                <TableRow key={field}>
                  <TableCell className="font-medium">{fieldLabels[field]}</TableCell>
                  {competitors.map((comp) => (
                    <TableCell key={comp.name} className={`text-center ${comp.isHighlighted ? "bg-primary/5 font-bold" : ""} ${field === "withdrawalSpeed" && comp.withdrawalSpeed === "Instant" ? "text-green-500" : ""}`}>
                      {field === "rating" ? (
                        <span className="flex items-center justify-center gap-1">
                          <Star className={`w-4 h-4 ${comp.rating >= 4.5 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
                          {comp[field]}/5
                        </span>
                      ) : comp[field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4 mb-10">
          {competitors.slice(0, 3).map((comp) => (
            <article key={comp.name} className={`bg-card border border-border rounded-xl p-4 ${comp.isHighlighted ? "border-primary/50 bg-primary/5" : ""}`}>
              <header className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-lg flex items-center gap-2">
                  {comp.isHighlighted && <Trophy className="w-5 h-5 text-primary" />}
                  {comp.name}
                </h3>
                <span className="flex items-center gap-1 text-sm">
                  <Star className={`w-4 h-4 ${comp.rating >= 4.5 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
                  {comp.rating}/5
                </span>
              </header>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <div><dt className="text-muted-foreground">Bonus</dt><dd className="font-semibold">{comp.welcomeBonus}</dd></div>
                <div><dt className="text-muted-foreground">Commission</dt><dd className="font-semibold">{comp.affiliateCommission}</dd></div>
                <div><dt className="text-muted-foreground">Withdrawal</dt><dd className={`font-semibold ${comp.withdrawalSpeed === "Instant" ? "text-green-500" : ""}`}>{comp.withdrawalSpeed}</dd></div>
                <div><dt className="text-muted-foreground">Languages</dt><dd className="font-semibold">{comp.languages}</dd></div>
              </dl>
            </article>
          ))}
        </div>

        {/* Unique Features */}
        <div className="mb-10">
          <h3 className="text-lg md:text-xl font-heading font-bold text-center mb-6">Why TekkaBuzz is Better</h3>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {featureComparison.map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-card p-3 md:p-4 rounded-lg border border-border">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{item.feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-8">
          <a href="/signup" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors">
            <span>Join TekkaBuzz Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-muted-foreground mt-3">Join 50,000+ players who switched from Baji & JeetBuzz</p>
        </div>
      </div>
    </section>
  );
}
