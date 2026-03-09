import { useState, useEffect } from "react";

const DEFAULT_TICKER = "Welcome to TekkaBuzz -- Bangladesh's #1 Online Casino -- Get 20,000 Taka Welcome Bonus -- Instant bKash Nagad Withdrawal -- taka buzz tekka buzz tkkabuzz";

export function useAnnouncement() {
  const [ticker, setTicker] = useState(DEFAULT_TICKER);

  useEffect(() => {
    let unsub: (() => void) | undefined;

    (async () => {
      try {
        const [{ ref, onValue }, { db }] = await Promise.all([
          import("firebase/database"),
          import("@/lib/firebase"),
        ]);
        const tickerRef = ref(db, "announcements/ticker");
        unsub = onValue(tickerRef, (snap) => {
          if (snap.exists()) setTicker(snap.val());
        }, () => {
          setTicker(DEFAULT_TICKER);
        });
      } catch {
        // fallback
      }
    })();

    return () => unsub?.();
  }, []);

  return ticker;
}
