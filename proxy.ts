import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";

/**
 * Sends locale-less URLs to a locale. The visitor's Accept-Language header
 * picks the locale when we support it, otherwise the default is used.
 *
 * `middleware` was renamed to `proxy` in Next.js 16 and runs on the Node.js
 * runtime only — do not add a `runtime` export here, it throws.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  request.nextUrl.pathname = `/${pickLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

function pickLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    const match = LOCALES.find((locale) => locale === base);
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

export const config = {
  // Skip API routes, Next internals, and the metadata files that live at app/.
  matcher: [
    "/((?!api|_next/static|_next/image|icon\\.svg|icon\\.png|apple-icon\\.png|opengraph-image\\.png|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:jpg|jpeg|png|svg|gif|webp|ico|txt|xml|webmanifest)$).*)",
  ],
};
