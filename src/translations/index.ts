import es from "./es";
import en from "./en";
import type { Locale } from "./locales";

const dictionaries = { es, en } as const;

export function getDictionary(locale: Locale) {
  return locale === "en" ? dictionaries.en : dictionaries.es;
}
