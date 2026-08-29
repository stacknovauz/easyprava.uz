import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { PACKAGES } from "@/lib/content";
import { cn, formatSom } from "@/lib/utils";

export function Packages() {
  return (
    <section id="paketlar" className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden">
      <div className="glow-blob right-0 top-1/4 size-[460px] bg-blue-600/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">B toifa paketlari</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Sizga qanday <span className="text-gradient">tezlik</span> qulay?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Eng ko&apos;p tanlanadigan B toifasi uchun uchta format — guruhda
            xotirjam, jadal yoki butunlay individual.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
          {PACKAGES.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.12}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7 sm:p-8",
                  plan.featured
                    ? "conic-border border border-primary/50 bg-card/70 shadow-2xl shadow-primary/15 ring-1 ring-primary/30 backdrop-blur lg:-translate-y-3"
                    : "glass-card"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#1e6fe8] to-[#1d4ed8] px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-primary/30">
                    Eng mashhur
                  </span>
                )}

                <h3 className="font-heading text-lg font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

                <p className="mt-5 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-heading text-4xl font-extrabold tracking-tight",
                      plan.featured && "text-gradient"
                    )}
                  >
                    {formatSom(plan.price)}
                  </span>
                  <span className="text-sm text-muted-foreground">so&apos;m</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  yoki 3 oyga bo&apos;lib —{" "}
                  <span className="font-semibold text-foreground">
                    {formatSom(Math.round(plan.price / 3 / 1000) * 1000)} so&apos;m/oy
                  </span>
                </p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#ariza"
                  className={cn(
                    "mt-8 w-full px-6 py-3 text-sm",
                    plan.featured ? "btn-primary btn-sheen" : "btn-ghost"
                  )}
                >
                  Shu paketni tanlash
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
