"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  LOCALES,
  LOCALE_NAMES,
  LOCALE_SHORT,
  type Locale,
} from "@/lib/i18n/config";
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
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close on outside pointer or Escape — never on mouse-leave, which used to
  // shut the menu while the pointer crossed the gap below the button.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex h-9 items-center gap-1 rounded-full border border-border bg-card/50 pl-3 pr-2.5 text-sm font-semibold text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <Globe className="size-4" />
        {LOCALE_SHORT[locale]}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {/* pt-2 bridges the gap under the button so the pointer never leaves */}
      <div
        className={cn(
          "absolute right-0 top-full z-50 pt-2 transition-all duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        )}
      >
        <div
          role="menu"
          aria-label={label}
          className="w-44 overflow-hidden rounded-2xl border border-border bg-popover/95 p-1.5 shadow-xl backdrop-blur-xl"
        >
          {LOCALES.map((code) => (
            <Link
              key={code}
              href={pathForLocale(pathname, code)}
              hrefLang={code}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              aria-current={code === locale ? "true" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors",
                code === locale
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {LOCALE_NAMES[code]}
              {code === locale && <Check className="size-3.5 shrink-0" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
