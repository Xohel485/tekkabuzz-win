import { useNavigate, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { getLocaleFromPath, type Locale } from "@/hooks/useLocale";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "bn", label: "বাংলা", flag: "🇧🇩" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
];

const PREFIX_MAP: Record<Locale, string> = {
  en: "",
  bn: "/bd/bn",
  ur: "/pk/ur",
};

function stripLocalePrefix(path: string): string {
  if (path.startsWith("/bd/bn")) return path.slice(6) || "/";
  if (path.startsWith("/pk/ur")) return path.slice(6) || "/";
  return path;
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const current = getLocaleFromPath(pathname);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchTo = (locale: Locale) => {
    const base = stripLocalePrefix(pathname);
    const newPath = PREFIX_MAP[locale] + base;
    navigate(newPath);
    setOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === current)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary rounded-lg transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-[140px]">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchTo(lang.code)}
              className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-accent transition-colors ${
                current === lang.code ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
