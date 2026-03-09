import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBanners } from "@/hooks/useBanners";

export default function BannerSlider() {
  const banners = useBanners();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % banners.length), [banners.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + banners.length) % banners.length), [banners.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="py-8 px-4 md:px-8 lg:px-16 bg-secondary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="overflow-hidden rounded-xl">
          <Link to="/promotion">
            <img
              src={banners[current]}
              alt={`TekkaBuzz Promotion ${current + 1}`}
              className="w-full object-cover rounded-xl transition-opacity duration-500"
              style={{ aspectRatio: '3/1' }}
              loading={current === 0 ? "eager" : "lazy"}
              fetchPriority={current === 0 ? "high" : undefined}
              width={1200}
              height={400}
              decoding={current === 0 ? "sync" : "async"}
            />
          </Link>
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          aria-label="Previous banner"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 text-foreground p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          aria-label="Next banner"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`min-w-[44px] min-h-[44px] flex items-center justify-center`}
              aria-label={`Go to banner ${i + 1}`}
            >
              <span className={`block rounded-full transition-all ${i === current ? "bg-primary w-6 h-2.5" : "bg-border w-2.5 h-2.5"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
