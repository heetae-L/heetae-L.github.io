export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";
export const portfolioDownloadPath = "/downloads/heetae-lee-portfolio.pdf";

export const localeLabels: Record<Locale, string> = {
  ko: "KO",
  en: "EN"
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  const parts = pathname.split("?")[0].split("/").filter(Boolean);

  if (isLocale(parts[0])) {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }

  return `/${parts.join("/")}`;
}
