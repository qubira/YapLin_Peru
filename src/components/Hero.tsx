import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

const NOTIFICATION_STYLES = [
  { method: "Yape", logo: "/brands/yape.png", color: "#6c1fc6" },
  { method: "Plin", logo: "/brands/plin.png", color: "#00a86b" },
  { method: "Izipay", logo: "/brands/izipay.png", color: "#e8000d" },
];

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-brand-purple/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            {t.hero.badge}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]">
            {t.hero.titleBefore}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
            {t.hero.titleAfter}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-text-secondary">{t.hero.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href={whatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t.hero.ctaWhatsapp}
            </ButtonLink>
            <a
              href="#beneficios"
              className="text-sm font-semibold text-text-secondary transition-colors hover:text-text"
            >
              {t.hero.ctaBenefits}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-success" /> {t.hero.trustInstant}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" /> {t.hero.trustMultiStore}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="relative">
          <div className="gradient-full relative mx-auto max-w-sm overflow-hidden rounded-[2rem] p-1.5 shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-black/10" />
            <div className="relative rounded-[1.6rem] bg-bg/95 p-5">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <Image
                    src="/brands/logoyaplin.png"
                    alt="YapLin"
                    width={26}
                    height={26}
                    className="rounded-lg"
                  />
                  <span className="text-sm font-bold text-text">YapLin</span>
                </div>
                <span className="rounded-full bg-brand-success/15 px-2.5 py-1 text-[11px] font-semibold text-brand-success">
                  {t.hero.mockupLive}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {NOTIFICATION_STYLES.map((style, i) => {
                  const n = t.hero.notifications[i];
                  return (
                    <div
                      key={style.method}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-3"
                      style={i === 0 ? { boxShadow: `0 0 0 1px ${style.color}33` } : undefined}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${style.color}22` }}
                      >
                        <Image src={style.logo} alt={style.method} width={22} height={22} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-text">
                          {t.hero.paymentReceivedBy(style.method)}
                        </p>
                        <p className="truncate text-xs text-text-secondary">{n.from}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-sm font-bold text-brand-success">{n.amount}</p>
                        <p className="text-[11px] text-text-secondary">{n.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
