import Image from "next/image";
import { ShieldCheckIcon, BoltIcon } from "@/components/icons/Icons";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

const METHODS = [
  { src: "/brands/yape.png", alt: "Yape" },
  { src: "/brands/plin.png", alt: "Plin" },
  { src: "/brands/izipay.png", alt: "Izipay" },
];

const TRUST_ICONS = [BoltIcon, ShieldCheckIcon, WhatsAppIcon];

export function PaymentMethods({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="metodos-de-pago" className="border-y border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-text-secondary">
            {t.paymentMethods.sectionLabel}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {METHODS.map((m) => (
              <Image key={m.alt} src={m.src} alt={m.alt} width={56} height={56} />
            ))}
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 border-t border-border pt-8 sm:grid-cols-3">
          {t.paymentMethods.trustItems.map((text, i) => {
            const Icon = TRUST_ICONS[i];
            return (
              <ScrollReveal key={text} delay={i * 80}>
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-brand-cyan" />
                  <span className="text-sm text-text-secondary">{text}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
