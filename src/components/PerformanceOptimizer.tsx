import { useEffect } from "react";

export function PerformanceOptimizer() {
  useEffect(() => {
    const t = setTimeout(() => {
      document.documentElement.classList.add("fonts-loaded");
      document.documentElement.classList.add("enable-animation");
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return null;
}
