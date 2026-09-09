import {
  BarChart3,
  BookOpen,
  ClipboardList,
  RefreshCw,
  Smartphone,
  Timer,
} from "lucide-react";
import { PhoneMockup } from "@/components/landing/phone-mockup";
import { Reveal } from "@/components/landing/reveal";
import type { Dictionary } from "@/lib/i18n/types";

const FEATURE_ICONS = [
  ClipboardList,
  BookOpen,
  Timer,
  RefreshCw,
  BarChart3,
  Smartphone,
];

export function AppSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="ilova" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="glow-blob right-0 top-1/4 size-[520px] bg-primary/12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* left: copy + features */}
          <div>
            <Reveal>
              <span className="eyebrow">{dict.app.eyebrow}</span>
              <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
                {dict.app.title}{" "}
                <span className="text-gradient">{dict.app.titleAccent}</span>
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {dict.app.lead}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {dict.app.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <Reveal key={feature.title} delay={(i % 2) * 0.1}>
                    <div className="flex gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-bold">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* right: phone */}
          <Reveal delay={0.15}>
            <div
              className="relative mx-auto"
              role="img"
              aria-label={dict.app.mockup.imageAlt}
            >
              <PhoneMockup dict={dict.app.mockup} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
