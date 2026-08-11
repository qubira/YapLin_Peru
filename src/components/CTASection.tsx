import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

export function CTASection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <ScrollReveal>
        <div className="gradient-full relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-black/10" />
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t.ctaSection.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              {t.ctaSection.description}
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink
                href={whatsappLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="white"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
                {t.ctaSection.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
