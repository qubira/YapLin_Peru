"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/translations";
import type { Locale } from "@/translations/locales";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-text">{q}</span>
        <ChevronDownIcon
          className={cn(
            "h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm text-text-secondary">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section id="preguntas" className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              {t.faq.title}
            </h2>
            <p className="mt-4 text-lg text-text-secondary">{t.faq.description}</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 space-y-3">
          {t.faq.items.map((item, i) => (
            <ScrollReveal key={item.q} delay={i * 60}>
              <FAQItem q={item.q} a={item.a} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
