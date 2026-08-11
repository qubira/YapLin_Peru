import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappLink } from "@/lib/whatsapp";
import { getLocale } from "@/lib/locale";
import { getDictionary } from "@/translations";

const SUPPORT_EMAIL = "qubirasac@gmail.com";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);
  return {
    title: t.metadata.privacyTitle,
    description: t.metadata.privacyDescription,
  };
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-xl font-bold text-text">{title}</h2>
      <div className="space-y-3 text-text-secondary leading-relaxed">{children}</div>
    </section>
  );
}

/**
 * Renders a paragraph that may contain `**bold**` spans plus literal
 * mentions of the support email or the word "WhatsApp" — those two tokens
 * are turned into working links, identically across locales.
 */
function renderParagraph(text: string, waHref: string): ReactNode {
  const boldSplit = text.split(/\*\*(.+?)\*\*/g);

  function linkify(segment: string, keyPrefix: string): ReactNode {
    const tokens = segment.split(new RegExp(`(${SUPPORT_EMAIL}|WhatsApp)`, "g"));
    return tokens.map((token, i) => {
      if (token === SUPPORT_EMAIL) {
        return (
          <a
            key={`${keyPrefix}-${i}`}
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-brand-cyan hover:underline"
          >
            {token}
          </a>
        );
      }
      if (token === "WhatsApp") {
        return (
          <a
            key={`${keyPrefix}-${i}`}
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-cyan hover:underline"
          >
            {token}
          </a>
        );
      }
      return token;
    });
  }

  return boldSplit.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-text">
        {linkify(part, `b${i}`)}
      </strong>
    ) : (
      <span key={i}>{linkify(part, `s${i}`)}</span>
    )
  );
}

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const waHref = whatsappLink(locale);

  return (
    <div className="flex min-h-full flex-col">
      <Header locale={locale} />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            {t.privacy.title}
          </h1>
          <p className="mb-12 text-sm text-text-secondary">{t.privacy.lastUpdated}</p>

          {t.privacy.sections.map((section) => (
            <Section key={section.heading} title={section.heading}>
              {section.body.map((paragraph, i) => (
                <p key={i}>{renderParagraph(paragraph, waHref)}</p>
              ))}
            </Section>
          ))}
        </div>
      </main>
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
    </div>
  );
}
