import { ButtonLink } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

export function HowItWorks({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="como-funciona" className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text-secondary">
              {t.howItWorks.badge}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              {t.howItWorks.title}
            </h2>
            <p className="mt-4 text-lg text-text-secondary">{t.howItWorks.description}</p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-border sm:block" />
          {t.howItWorks.steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 120}>
              <div className="relative text-center sm:text-left">
                <span className="gradient-main relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full text-lg font-extrabold text-white shadow-lg shadow-brand-red/20">
                  {step.number}
                </span>
                <h3 className="mt-4 font-bold text-text">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-14 flex justify-center">
            <ButtonLink
              href={whatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="whatsapp"
            >
              {t.howItWorks.cta}
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
