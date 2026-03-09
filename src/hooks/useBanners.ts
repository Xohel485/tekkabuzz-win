import { useState, useEffect } from "react";
import { BANNERS } from "@/lib/images";

interface Banner {
  url: string;
  active: boolean;
  order: number;
}

export function useBanners() {
  const [banners, setBanners] = useState<string[]>(BANNERS);

  useEffect(() => {
    let unsub: (() => void) | undefined;

    (async () => {
      try {
        const [{ ref, onValue }, { db }] = await Promise.all([
          import("firebase/database"),
          import("@/lib/firebase"),
        ]);
        const bannersRef = ref(db, "banners");
        unsub = onValue(bannersRef, (snap) => {
          if (snap.exists()) {
            const data = snap.val();
            const items: Banner[] = Object.values(data);
            const active = items
              .filter((b) => b.active)
              .sort((a, b) => a.order - b.order)
              .map((b) => b.url);
            if (active.length > 0) setBanners(active);
          }
        }, () => {
          // fallback to defaults
        });
      } catch {
        // fallback to defaults
      }
    })();

    return () => unsub?.();
  }, []);

  return banners;
}
