export const LOCALES = ["en", "uz", "ru"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Native names, shown in the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  uz: "O'zbekcha",
  ru: "Русский",
};

/** Short labels for the compact switcher. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  uz: "UZ",
  ru: "RU",
};

/** BCP-47 tags for <html lang> and hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: "en",
  uz: "uz-UZ",
  ru: "ru-UZ",
};

/** Open Graph locale identifiers. */
export const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  uz: "uz_UZ",
  ru: "ru_RU",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
