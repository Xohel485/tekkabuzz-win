import { useLocation } from "react-router-dom";

export type Locale = "en" | "bn" | "ur";

export function useLocale(): Locale {
  const { pathname } = useLocation();
  if (pathname.startsWith("/bd/bn")) return "bn";
  if (pathname.startsWith("/pk/ur")) return "ur";
  return "en";
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/bd/bn")) return "bn";
  if (pathname.startsWith("/pk/ur")) return "ur";
  return "en";
}
