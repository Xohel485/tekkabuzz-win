export const D1 = "https://tb08p27aff2025.com";
export const D2 = "https://tekkabuzz.com";
export const D3 = "https://tekkabuzz.shop";
export const D4 = "https://tekkabuzz.cc";

export const AFF_PATH = {
  LOGIN: "/af/9oI2NL83/tekkabuzz%20login",
  SIGNUP: "/af/9oI2NL83/Signup",
  APP: "/af/9oI2NL83/App",
  PROMOTION: "/af/9oI2NL83/tekkabuzz%20promotion",
  CASINO: "/af/9oI2NL83/tekkabuzz%20casino",
  SPORTS: "/af/9oI2NL83/tekkabuzz%20sports",
  SLOTS: "/af/9oI2NL83/tekkabuzz%20slots",
  CRASH: "/af/9oI2NL83/tekkabuzz%20crash",
  FISHING: "/af/9oI2NL83/tekkabuzz%20fishing",
  LOTTERY: "/af/9oI2NL83/tekkabuzz%20lottery",
  ARCADE: "/af/9oI2NL83/tekkabuzz%20arcade",
  VIP: "/af/9oI2NL83/tekkabuzz%20vip",
  REFERCODE: "/af/9oI2NL83/tekkabuzz%20refercode",
  TABLE: "/af/9oI2NL83/tekkabuzz%20table",
  IN: "/af/9oI2NL83/tekkabuzz%20in",
};

export const COMMUNITY = {
  FACEBOOK: "https://cutt.ly/er1sz2t5",
  TWITTER: "https://cutt.ly/Cr45pnIf",
  INSTAGRAM: "https://cutt.ly/mr8yXZNI",
  TELEGRAM: "https://cutt.ly/Ar8yXi2i",
};

export async function redirectWithFailover(
  path: string,
  primaryDomain: string = D1
): Promise<void> {
  const allDomains = [D1, D2, D3, D4];
  // Put primary first, then others in order
  const order = [
    primaryDomain,
    ...allDomains.filter(d => d !== primaryDomain),
  ];

  for (const domain of order) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 2500);
      await fetch(`${domain}${path}`, { method: "HEAD", mode: "no-cors", signal: ctrl.signal });
      clearTimeout(t);
      window.location.href = `${domain}${path}`;
      return;
    } catch {
      continue;
    }
  }
  window.location.href = `${D1}${path}`;
}
