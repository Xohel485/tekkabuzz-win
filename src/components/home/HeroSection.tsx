import { Link } from "react-router-dom";
import { IMAGES } from "@/lib/images";

export default function HeroSection() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 md:mb-6">
            Taka Buzz | Tekka Buzz | <span className="text-primary">TekkaBuzz</span> -- Bangladesh's #1 Online Casino
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            The platform known as Taka Buzz, TkkaBuzz, TekkaBaz, TakkaBuzz -- one official site. Join 100,000+ players with 20,000 Taka welcome bonus and instant bKash Nagad withdrawals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4">
            <Link
              to="/signup"
              className="bg-primary text-primary-foreground font-bold rounded-lg px-6 py-3 md:px-8 md:py-4 text-base md:text-lg text-center hover:bg-gold-hover transition-all gold-shimmer"
            >
              Sign Up -- Get 20,000 Taka Bonus
            </Link>
            <Link
              to="/login"
              className="border-2 border-primary text-primary font-bold rounded-lg px-6 py-3 md:px-8 md:py-4 text-base md:text-lg text-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Login to TekkaBuzz
            </Link>
          </div>
          <Link
            to="/app/open"
            className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            Open Mobile App
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src={IMAGES.HERO_MAIN}
            alt="TekkaBuzz Casino Bangladesh -- Taka Buzz Tekka Buzz"
            className="w-full max-w-lg rounded-2xl"
            loading="eager"
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          { value: "100K+", label: "Active Players" },
          { value: "20,000", label: "Taka Bonus" },
          { value: "24/7", label: "Live Support" },
          { value: "Instant", label: "Withdrawal" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary font-heading">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
