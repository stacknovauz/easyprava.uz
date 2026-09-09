import "server-only";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/lib/i18n/dictionaries/en").then((m) => m.default),
  uz: () => import("@/lib/i18n/dictionaries/uz").then((m) => m.default),
  ru: () => import("@/lib/i18n/dictionaries/ru").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
