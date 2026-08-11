import { CheckCircleIcon, XCircleIcon } from "@/components/icons/Icons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

export function ProblemSolution({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            {t.problemSolution.title}
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <ScrollReveal>
          <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
              {t.problemSolution.withoutLabel}
            </p>
            <ul className="mt-5 space-y-4">
              {t.problemSolution.problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <XCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <span className="text-sm text-text-secondary">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="h-full rounded-2xl border border-brand-success/30 bg-brand-success/5 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-success">
              {t.problemSolution.withLabel}
            </p>
            <ul className="mt-5 space-y-4">
              {t.problemSolution.solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-success" />
                  <span className="text-sm text-text">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
