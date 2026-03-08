export const SITE_URL = "https://www.tekkabuzz.win";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TekkaBuzz",
  "alternateName": ["Taka Buzz", "Tekka Buzz", "TkkaBuzz", "TekkaBaz", "TakkaBuzz", "টেক্কাবাজ"],
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/tekkabuzz-logo-cropped.png`,
  "description": "Bangladesh's #1 Online Casino — Live Casino, Sports Betting, Slots, Crash Games. 29M+ registered players.",
  "foundingDate": "2023",
  "numberOfEmployees": "500+",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+88019000000",
    "contactType": "customer service",
    "availableLanguage": ["Bengali", "English", "Urdu"]
  },
  "sameAs": [
    "https://www.facebook.com/tekkabuzz",
    "https://t.me/tekkabuzz",
    "https://www.instagram.com/tekkabuzz",
    "https://twitter.com/tekkabuzz"
  ]
};

export const OG_IMAGE = `${SITE_URL}/images/tekka-buzz-hero.png`;

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TekkaBuzz",
  "alternateName": ["Taka Buzz", "Tekka Buzz", "TkkaBuzz", "টেক্কাবাজ"],
  "url": SITE_URL,
  "description": "Bangladesh's #1 Online Casino — 29M+ players, 6300+ games.",
  "inLanguage": ["en", "bn", "ur"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.name,
    "item": `${SITE_URL}${item.url}`,
  })),
});

export const hreflangTags = (path: string) => [
  { rel: "alternate", hreflang: "en", href: `${SITE_URL}${path}` },
  { rel: "alternate", hreflang: "bn", href: `${SITE_URL}/bd/bn${path}` },
  { rel: "alternate", hreflang: "ur", href: `${SITE_URL}/pk/ur${path}` },
  { rel: "alternate", hreflang: "x-default", href: `${SITE_URL}${path}` },
];
