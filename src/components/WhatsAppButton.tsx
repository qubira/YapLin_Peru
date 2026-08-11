import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <a
      href={whatsappLink(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.floatingButtonAriaLabel}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#25d366]/30 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366] opacity-75" />
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
