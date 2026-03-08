import { PROVIDER_LOGOS } from "@/lib/images";

export default function ProviderMarquee() {
  const row1 = PROVIDER_LOGOS.slice(0, 24);
  const row2 = PROVIDER_LOGOS.slice(24);

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
          Our <span className="text-primary">Game Providers</span>
        </h2>

        {/* Row 1 - left scroll */}
        <div className="overflow-hidden mb-4 md:mb-6">
          <div className="marquee flex gap-6 md:gap-8 items-center">
            {[...row1, ...row1].map((logo, i) => (
              <img key={i} src={logo} alt="Game provider" className="h-8 md:h-10 w-auto object-contain flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity" loading="lazy" decoding="async" width={80} height={40} />
            ))}
          </div>
        </div>

        {/* Row 2 - right scroll */}
        <div className="overflow-hidden">
          <div className="marquee-reverse flex gap-6 md:gap-8 items-center">
            {[...row2, ...row2].map((logo, i) => (
              <img key={i} src={logo} alt="Game provider" className="h-8 md:h-10 w-auto object-contain flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity" loading="lazy" decoding="async" width={80} height={40} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
