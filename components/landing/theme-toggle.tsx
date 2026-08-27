"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getIsDark() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  // SSR renders the dark icon state (the default theme)
  const dark = useSyncExternalStore(subscribe, getIsDark, () => true);

  const toggle = () => {
    const next = !getIsDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish"}
      aria-pressed={dark}
      className="relative flex size-9 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
    >
      <Sun
        className={`absolute size-4 transition-all duration-300 ${
          dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`absolute size-4 transition-all duration-300 ${
          dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}
