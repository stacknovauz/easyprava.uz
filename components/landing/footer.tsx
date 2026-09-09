import { ArrowUp, Mail, MapPin, Phone, Send } from "lucide-react";
import { Logo } from "@/components/logo";
import { BRANCHES, CONTACT } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

const PAGE_LINKS = [
  "#kurslar",
  "#paketlar",
  "#jarayon",
  "#ilova",
  "#avtopark",
  "#faq",
];

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer id="aloqa" className="relative scroll-mt-20 overflow-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-7 sm:h-8" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {dict.footer.about}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {dict.footer.pagesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PAGE_LINKS.map((href, i) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {dict.footer.pageLinks[i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {dict.footer.categoriesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {dict.footer.categoryLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#kurslar"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}

            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {dict.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-3.5 text-primary" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Send className="size-3.5 text-primary" />
                  {CONTACT.telegramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-3.5 text-primary" />
                  {CONTACT.email}
                </a>
              </li>
              {BRANCHES.slice(0, 2).map((branch) => (
                <li
                  key={branch.id}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  {dict.enroll.branches[branch.id].address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* giant watermark — the real lockup, not a look-alike typeface */}
        <div aria-hidden="true" className="select-none px-2 pb-6 pt-2 opacity-[0.09]">
          <Logo label={null} className="h-auto w-full sm:h-auto" />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {dict.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <p className="text-xs text-muted-foreground">
              {dict.footer.builtBy}
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {dict.footer.toTop}
              <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
