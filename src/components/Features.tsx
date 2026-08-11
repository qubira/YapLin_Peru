import { BoltIcon, StoreIcon, LockIcon, BellIcon, ChartIcon, DocumentIcon } from "@/components/icons/Icons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

const ICONS = [BoltIcon, StoreIcon, LockIcon, BellIcon, ChartIcon, DocumentIcon];

export function Features({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            {t.features.badge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">{t.features.description}</p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((f, i) => {
          const Icon = ICONS[i];
          return (
            <ScrollReveal key={f.title} delay={(i % 3) * 100}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-xl hover:shadow-brand-purple/5">
                <span className="gradient-main flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-200 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold text-text">{f.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{f.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
