import { useEffect } from "react";

export function PerformanceOptimizer() {
  useEffect(() => {
    // Font loading optimization
    const optimizeFonts = () => {
      if ("fonts" in document) {
        Promise.all([
          (document as any).fonts.load("400 1em Cinzel"),
          (document as any).fonts.load("700 1em DM Sans"),
        ]).then(() => {
          document.documentElement.classList.add("fonts-loaded");
        }).catch(() => {
          document.documentElement.classList.add("fonts-loaded");
        });
      }
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(optimizeFonts, { timeout: 2000 });
    } else {
      setTimeout(optimizeFonts, 500);
    }

    // Enable animation classes after LCP paint
    setTimeout(() => {
      document.documentElement.classList.add("enable-animation");
    }, 2000);
  }, []);

  return null;
}
