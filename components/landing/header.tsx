"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/landing/theme-toggle";
import { CONTACT } from "@/lib/content";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#kurslar", label: "Kurslar" },
  { href: "#paketlar", label: "Paketlar" },
  { href: "#jarayon", label: "Jarayon" },
  { href: "#ilova", label: "Ilova" },
  { href: "#avtopark", label: "Avtopark" },
  { href: "#faq", label: "Savollar" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 120 && y > lastY);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        document
          .querySelector<HTMLButtonElement>("[aria-controls='mobile-menu']")
          ?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
        hidden && !menuOpen && "-translate-y-full"
      )}
    >
      <div
        className={cn(
          "transition-colors duration-300",
          (scrolled || menuOpen) &&
            "border-b border-border bg-background/70 backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="#top" aria-label="EasyPrava — bosh sahifa">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40 xl:inline-flex"
            >
              <Phone className="size-3.5 text-primary" />
              {CONTACT.phone}
            </a>
            <a
              href="#ariza"
              className="btn-primary btn-sheen hidden px-5 py-2.5 text-sm sm:inline-flex"
            >
              Ariza qoldirish
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur lg:hidden"
            >
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          menuOpen
            ? "visible max-h-[26rem] opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT.phoneHref}
            onClick={() => setMenuOpen(false)}
            className="btn-ghost mt-2 px-5 py-3 text-sm"
          >
            <Phone className="size-4 text-primary" />
            {CONTACT.phone}
          </a>
          <a
            href="#ariza"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-2 px-5 py-3 text-sm"
          >
            Ariza qoldirish
          </a>
        </nav>
      </div>
    </header>
  );
}
