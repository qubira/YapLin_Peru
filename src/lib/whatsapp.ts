import type { Locale } from "@/translations/locales";

const WHATSAPP_NUMBER = "51924687363";

const DEFAULT_MESSAGE: Record<"es" | "en", string> = {
  es: "Hola, quiero información sobre YapLin para mi negocio.",
  en: "Hi, I'd like information about YapLin for my business.",
};

export function whatsappLink(locale: Locale = "es", message?: string): string {
  const text = message ?? DEFAULT_MESSAGE[locale === "en" ? "en" : "es"];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
