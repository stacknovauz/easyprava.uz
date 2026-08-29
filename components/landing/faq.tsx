"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { FAQ_ITEMS } from "@/lib/content";
import { cn } from "@/lib/utils";



export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Savol-javob</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Ko&apos;p so&apos;raladigan{" "}
            <span className="text-gradient">savollar</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 0.06}>
                <div
                  className={cn(
                    "rounded-2xl border bg-card/40 backdrop-blur transition-colors",
                    isOpen ? "border-primary/40" : "border-border"
                  )}
                >
                  <button
                    type="button"
                    id={`faq-question-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-bold">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180 text-primary"
                      )}
                    />
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "visible grid-rows-[1fr] opacity-100"
                        : "invisible grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
