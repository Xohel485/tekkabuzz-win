import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/lib/firebase";
import { BANNERS } from "@/lib/images";

interface Banner {
  url: string;
  active: boolean;
  order: number;
}

export function useBanners() {
  const [banners, setBanners] = useState<string[]>(BANNERS);

  useEffect(() => {
    try {
      const bannersRef = ref(db, "banners");
      const unsub = onValue(bannersRef, (snap) => {
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
      return () => unsub();
    } catch {
      return;
    }
  }, []);

  return banners;
}
