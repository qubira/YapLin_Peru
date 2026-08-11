import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-text-secondary sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/brands/logoyaplin.png"
            alt="YapLin"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="font-bold text-text">YapLin</span>
        </div>

        <p>{t.footer.copyright(new Date().getFullYear())}</p>

        <div className="flex items-center gap-4">
          <a href="/privacidad" className="font-medium text-text-secondary hover:text-text hover:underline">
            {t.footer.privacyLink}
          </a>
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-cyan hover:underline"
          >
            {t.footer.whatsappCta}
          </a>
        </div>
      </div>
    </footer>
  );
}
