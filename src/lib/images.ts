export const IMAGES = {
  LOGO_HEADER: "/images/tekkabuzz-logo-cropped.png",
  LOGO_FOOTER: "/images/tekkabuzz-win-logo.png",
  HERO_MAIN: "/images/tekka-buzz-hero.png",
  HERO_FEATURED: "/images/hero-featured.png",
  FAVICON: "/images/tekkabuzz-favicon.jpg",
};

export const BANNERS = [
  "/images/banners/banner-1.png",
  "/images/banners/banner-2.png",
  "/images/banners/banner-3.png",
  "/images/banners/banner-4.png",
  "/images/banners/banner-5.png",
  "/images/banners/banner-6.png",
  "/images/banners/banner-7.png",
  "/images/banners/banner-8.png",
  "/images/banners/banner-9.png",
];

export const GAME_ICONS = {
  CASINO: "/images/games/casino.png",
  SPORT: "/images/games/sport.png",
  SLOT: "/images/games/slot.png",
  CRASH: "/images/games/crash.png",
  FISHING: "/images/games/fishing.png",
  LOTTERY: "/images/games/lottery.png",
  ARCADE: "/images/games/arcade.png",
  TABLE: "/images/games/table.png",
};

export const PAYMENT_ICONS = [
  { name: "bKash", url: "/images/payments/bkash.webp" },
  { name: "Nagad", url: "/images/payments/nagad.webp" },
  { name: "Rocket", url: "/images/payments/rocket.webp" },
  { name: "Upay", url: "/images/payments/upay.webp" },
  { name: "TAP", url: "/images/payments/tap.webp" },
  { name: "SureCash", url: "/images/payments/surecash.webp" },
  { name: "iPay", url: "/images/payments/ipay.webp" },
  { name: "OkWallet", url: "/images/payments/okwallet.webp" },
];

export const TRUST_ICONS = {
  LICENSE_CURACAO: "/images/trust/gaming-curacao.webp",
  LICENSE_3: "/images/trust/license3.png",
  GAMCARE: "/images/trust/gamcare.webp",
  AGE_18: "/images/trust/age-18.webp",
  RESP_GAMBLING: "/images/trust/responsible-gambling.webp",
  CAZVIP: "/images/trust/cazvip.png",
  SUPPORT_24H: "/images/trust/24h-support.png",
};

export const PROVIDER_LOGOS = Array.from({ length: 48 }, (_, i) => `/images/providers/p-${String(i + 1).padStart(2, "0")}.png`);
