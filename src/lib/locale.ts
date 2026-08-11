import { cookies } from "next/headers";
import { DEFAULT_LOCALE, ENABLED_LOCALES, Locale } from "@/translations/locales";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  return raw && ENABLED_LOCALES.includes(raw as Locale) ? (raw as Locale) : DEFAULT_LOCALE;
}
