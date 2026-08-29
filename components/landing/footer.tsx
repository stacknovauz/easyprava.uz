import { ArrowUp, Mail, MapPin, Phone, Send } from "lucide-react";
import { Logo } from "@/components/logo";
import { BRANCHES, CONTACT } from "@/lib/content";

const PAGE_LINKS = [
  { href: "#kurslar", label: "Kurslar va narxlar" },
  { href: "#paketlar", label: "B toifa paketlari" },
  { href: "#jarayon", label: "Jarayon" },
  { href: "#ilova", label: "EasyPrava ilovasi" },
  { href: "#avtopark", label: "Avtopark" },
  { href: "#faq", label: "Savol-javob" },
];

const APP_LINKS = [
  { href: "#kurslar", label: "A va A1 toifa" },
  { href: "#kurslar", label: "B toifa" },
  { href: "#kurslar", label: "BC va C toifa" },
  { href: "#kurslar", label: "D toifa" },
];

export function Footer() {
  return (
    <footer id="aloqa" className="relative scroll-mt-20 overflow-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              EasyPrava — Toshkentdagi litsenziyalangan haydovchilik o&apos;quv
              markazi. A, B, BC, C va D toifalari bo&apos;yicha tayyorlaymiz —
              nazariya o&apos;z ilovamizda, amaliyot o&apos;z avtodromimizda.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Sahifalar
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Toifalar
            </h3>
            <ul className="mt-4 space-y-2.5">
              {APP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Aloqa
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
                  key={branch.name}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  {branch.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* giant watermark wordmark */}
        <div aria-hidden="true" className="select-none pb-2 text-center">
          <span className="text-gradient-animated font-heading block whitespace-nowrap text-[clamp(2.5rem,11.5vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
            EASYPRAVA
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 EasyPrava. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-5">
            <p className="text-xs text-muted-foreground">
              StackNova tomonidan ishlab chiqilgan
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Tepaga
              <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
