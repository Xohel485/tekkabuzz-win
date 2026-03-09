import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/lib/firebase";

const DEFAULT_TICKER = "Welcome to TekkaBuzz -- Bangladesh's #1 Online Casino -- Get 20,000 Taka Welcome Bonus -- Instant bKash Nagad Withdrawal -- taka buzz tekka buzz tkkabuzz";

export function useAnnouncement() {
  const [ticker, setTicker] = useState(DEFAULT_TICKER);

  useEffect(() => {
    try {
      const tickerRef = ref(db, "announcements/ticker");
      const unsub = onValue(tickerRef, (snap) => {
        if (snap.exists()) setTicker(snap.val());
      }, () => {
        setTicker(DEFAULT_TICKER);
      });
      return () => unsub();
    } catch {
      return;
    }
  }, []);

  return ticker;
}
