"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Check, Globe } from "lucide-react";
import { LOCALES, LOCALE_NAMES, LOCALE_SHORT, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/** Swaps the locale segment of the current path, keeping the rest intact. */
function pathForLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || `/${locale}`;
}

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 text-sm font-semibold text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <Globe className="size-4" />
        {LOCALE_SHORT[locale]}
      </button>

      <div
        role="menu"
        className={cn(
          "absolute right-0 top-11 z-50 w-40 overflow-hidden rounded-2xl border border-border bg-popover/95 p-1.5 shadow-xl backdrop-blur-xl transition-all",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        )}
      >
        {LOCALES.map((code) => (
          <Link
            key={code}
            href={pathForLocale(pathname, code)}
            hrefLang={code}
            role="menuitem"
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm transition-colors",
              code === locale
                ? "bg-primary/10 font-semibold text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {LOCALE_NAMES[code]}
            {code === locale && <Check className="size-3.5" />}
          </Link>
        ))}
      </div>
    </div>
  );
}
