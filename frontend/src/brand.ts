export type BrandConfig = {
  brandName: string;
  tagline: string;
  logoUrl: string;
  email: string;
  phonePrimary: string;
  phoneSecondary?: string;
  addressLines: string[];
};

const CONFIGS: Record<string, BrandConfig> = {
  "wmrealestate.online": {
    brandName: "WM Real Estate",
    tagline: "Dubai Premium Properties",
    logoUrl: "https://mocha-cdn.com/01999a3b-70af-7067-b844-df0195d9ae07/465889928_426530636946501_7422564998101757670_n_1.jpg",
    email: "support@wmrealestate.online",
    phonePrimary: "+970 595 390 378",
    phoneSecondary: "+970 595 390 378",
    addressLines: ["Al Masyoon, Ramallah, Palestine, 4000477"],
  },
  "mwrealestate.online": {
    brandName: "MW Real Estate",
    tagline: "Dubai Premium Properties",
    logoUrl: "https://mocha-cdn.com/01999a3b-70af-7067-b844-df0195d9ae07/465889928_426530636946501_7422564998101757670_n_1.jpg",
    email: "support@mwrealestate.online",
    phonePrimary: "+971 55 XXX XXXX",
    phoneSecondary: "+971 50 XXX XXXX",
    addressLines: ["Al Beireh, Ramallah, Palestine, 4000477"],
  },
};

function normalizeHost(host?: string): string | undefined {
  if (!host) return undefined;
  let h = host.toLowerCase();
  if (h.startsWith("http")) {
    try {
      h = new URL(h).host.toLowerCase();
    } catch {
      // ignore
    }
  }
  if (h.startsWith("www.")) h = h.substring(4);
  return h;
}

export function getBrandConfig(): BrandConfig {
  const host = normalizeHost(typeof window !== "undefined" ? window.location.host : undefined);
  if (host && CONFIGS[host]) return CONFIGS[host];
  // fallback to WM config
  return CONFIGS["wmrealestate.online"];
}

