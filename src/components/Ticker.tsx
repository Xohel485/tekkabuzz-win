import { useAnnouncement } from "@/hooks/useAnnouncement";

export default function Ticker() {
  const ticker = useAnnouncement();

  return (
    <div className="w-full bg-primary overflow-hidden py-2">
      <div className="ticker-scroll whitespace-nowrap font-body font-bold text-sm text-primary-foreground">
        {ticker} &nbsp;&nbsp;&nbsp; {ticker}
      </div>
    </div>
  );
}
