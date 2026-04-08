import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { getLocaleFromPath, type Locale } from "@/hooks/useLocale";
import usFlag from "@/assets/flags/us.webp";
import bdFlag from "@/assets/flags/bd.webp";
import pkFlag from "@/assets/flags/pk.webp";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: usFlag },
  { code: "bn", label: "বাংলা", flag: bdFlag },
  { code: "ur", label: "اردو", flag: pkFlag },
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
        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-border hover:border-primary transition-colors active:scale-95"
        aria-label="Switch language"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.label}
          className="w-full h-full object-cover"
          width="24"
          height="24"
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1.5 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-[150px]">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchTo(lang.code)}
              className={`flex items-center gap-2.5 w-full px-3 py-2.5 text-sm hover:bg-accent transition-colors ${
                current === lang.code ? "text-primary font-semibold bg-accent/50" : "text-foreground"
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-5 h-5 rounded-full object-cover"
                width="20"
                height="20"
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
