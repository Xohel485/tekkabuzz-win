import { Link, useLocation } from "react-router-dom";
import { Home, Gamepad2, Gift, HeadphonesIcon } from "lucide-react";
import { getLocaleFromPath } from "@/hooks/useLocale";
import { UI } from "@/lib/translations";

export default function MobileBottomNav() {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const t = UI[locale];

  const TABS = [
    { label: t.home, icon: Home, to: "/" },
    { label: t.games, icon: Gamepad2, to: "/casino" },
    { label: t.promos, icon: Gift, to: "/promotion" },
    { label: t.support, icon: HeadphonesIcon, to: "/contact" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border lg:hidden" style={{ backgroundColor: "#111827" }} role="navigation" aria-label="Mobile navigation">
      <div className="flex items-center justify-around h-14">
        {TABS.map((tab) => {
          const isActive = pathname === tab.to;
          return (
            <Link key={tab.to} to={tab.to} className={`flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} aria-current={isActive ? "page" : undefined}>
              <tab.icon className="w-5 h-5" aria-hidden="true" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
