import { useState, useEffect, useCallback, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { useBanners } from "@/hooks/useBanners";

function BannerSliderInner() {
  const banners = useBanners();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % banners.length), [banners.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + banners.length) % banners.length), [banners.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setPaused(false);
  };

  return (
    <section
      className="py-8 px-4 md:px-8 lg:px-16 bg-secondary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Link to="/promotion">
            <img
              src={banners[current]}
              alt={`TekkaBuzz Promotion ${current + 1}`}
              className="w-full object-cover rounded-xl transition-opacity duration-500"
              style={{ aspectRatio: '3/1' }}
              loading={current === 0 ? "eager" : "lazy"}
              fetchPriority={current === 0 ? "high" : "low"}
              width={1200}
              height={400}
              decoding={current === 0 ? "sync" : "async"}
            />
          </Link>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center"
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

const BannerSlider = memo(BannerSliderInner);
export default BannerSlider;
