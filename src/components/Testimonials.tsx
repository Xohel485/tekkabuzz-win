import { Helmet } from "react-helmet-async";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { id: "1", name: "Rafiq H.", location: "Dhaka, BD", rating: 5, text: "Best gaming platform in Bangladesh! Instant withdrawals via bKash and amazing bonuses. Won 50,000 Taka last week!", avatar: "RH" },
  { id: "2", name: "Kamal A.", location: "Chittagong, BD", rating: 5, text: "I've tried many platforms but TekkaBuzz is the best. The live casino is fantastic and customer support is always helpful.", avatar: "KA" },
  { id: "3", name: "Ali R.", location: "Karachi, PK", rating: 5, text: "JazzCash withdrawals are super fast! The cricket betting odds are the best I've found. Highly recommended!", avatar: "AR" },
  { id: "4", name: "Fatima K.", location: "Lahore, PK", rating: 4, text: "Love the slot games! The welcome bonus was easy to claim and the cashback is a great bonus. Very satisfied customer.", avatar: "FK" },
  { id: "5", name: "Imran S.", location: "Sylhet, BD", rating: 5, text: "Playing on TekkaBuzz for 6 months now. Never had any issues with payouts. The app works perfectly on my phone!", avatar: "IS" },
  { id: "6", name: "Zubair M.", location: "Islamabad, PK", rating: 5, text: "The 24/7 support team is amazing! They helped me claim my bonus within minutes. Best experience ever!", avatar: "ZM" },
];

export function Testimonials() {
  const avgRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "TekkaBuzz Online Gaming Platform",
    "brand": { "@type": "Brand", "name": "TekkaBuzz" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": String(testimonials.length),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": { "@type": "Rating", "ratingValue": String(t.rating), "bestRating": "5" },
      "reviewBody": t.text
    }))
  };

  return (
    <section className="py-12 md:py-16 bg-background" aria-labelledby="testimonials-heading">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
            What Our Players Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Real reviews from real TekkaBuzz players</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">{avgRating}</span>
            <span className="text-muted-foreground">({testimonials.length} reviews)</span>
          </div>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list">
          {testimonials.map((t) => (
            <li key={t.id} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <article>
                <Quote className="w-8 h-8 text-primary/30 mb-4" aria-hidden="true" />
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-4 h-4 ${star <= t.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</blockquote>
                <footer className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">{t.avatar}</div>
                  <div>
                    <cite className="font-medium text-foreground text-sm not-italic">{t.name}</cite>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </footer>
              </article>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div key={t.id} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary" style={{ zIndex: 4 - i }}>{t.avatar}</div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-foreground">50,000+</span>
              <span className="text-muted-foreground"> happy players</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
