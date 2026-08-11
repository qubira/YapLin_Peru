"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/whatsapp";
import { MenuIcon, CloseIcon } from "@/components/icons/Icons";
import { getDictionary } from "@/translations";
import { ENABLED_LOCALES, type Locale } from "@/translations/locales";
import { cn } from "@/lib/utils";

// Kept in sync with LOCALE_COOKIE in "@/lib/locale" (that module pulls in
// next/headers, which is unavailable to Client Components).
const LOCALE_COOKIE = "NEXT_LOCALE";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const t = getDictionary(locale);

  function selectLocale(code: Locale) {
    // Writing to `document.cookie` is a plain browser API call, not a
    // mutation of captured component state; the react-compiler lint rule
    // can't tell the difference, so it's suppressed for this one line.
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000`;
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/brands/logoyaplin.png"
            alt="YapLin"
            width={34}
            height={34}
            className="rounded-lg"
          />
          <span className="whitespace-nowrap text-lg font-extrabold tracking-tight text-text">YapLin</span>
        </div>

        <nav className="hidden items-center gap-6 whitespace-nowrap text-sm font-medium text-text-secondary lg:flex">
          {t.header.links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-text">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Only the two live languages show here — the rest ("coming soon")
              would need 4 more pills plus captions, which is what was
              crowding/overlapping the bar in the first place. Nothing lost:
              those locales aren't selectable yet anyway. */}
          <div
            className="hidden items-center gap-1 rounded-xl border border-border bg-surface p-1 sm:flex"
            aria-label={t.common.selectLanguage}
          >
            {ENABLED_LOCALES.map((code) => (
              <button
                key={code}
                type="button"
                disabled={code === locale}
                onClick={() => selectLocale(code)}
                aria-current={code === locale}
                className={cn(
                  "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
                  code === locale
                    ? "bg-surface-2 text-text"
                    : "text-text-secondary hover:text-text"
                )}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="hidden sm:block">
            <ButtonLink
              href={whatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              {t.header.requestDemo}
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-text-secondary">
            {t.header.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 transition-colors hover:bg-surface-2 hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div
            className="mt-3 flex items-center gap-1 rounded-xl border border-border bg-surface p-1 sm:hidden"
            aria-label={t.common.selectLanguage}
          >
            {ENABLED_LOCALES.map((code) => (
              <button
                key={code}
                type="button"
                disabled={code === locale}
                onClick={() => selectLocale(code)}
                aria-current={code === locale}
                className={cn(
                  "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
                  code === locale
                    ? "bg-surface-2 text-text"
                    : "text-text-secondary hover:text-text"
                )}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-3 sm:hidden">
            <ButtonLink
              href={whatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="w-full"
            >
              {t.header.requestDemo}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
