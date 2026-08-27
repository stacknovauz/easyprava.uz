import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

/* Placeholder prices — adjust before launch */
const PLANS = [
  {
    name: "Bepul",
    price: "0",
    period: "so'm",
    description: "Ilova bilan tanishish uchun",
    features: [
      "3 ta imtihon bileti",
      "5 ta nazariy dars",
      "Asosiy statistika",
      "Bitta qurilma",
    ],
    cta: "Bepul boshlash",
    featured: false,
  },
  {
    name: "Premium",
    price: "49 000",
    period: "so'm / oy",
    description: "Imtihonga jiddiy tayyorlanish uchun",
    features: [
      "Barcha 20 ta bilet — 400 ta savol",
      "Barcha 20 ta nazariy mavzu",
      "Real imtihon rejimi (25 daqiqa)",
      "Xatolar ustida ishlash",
      "To'liq statistika va progress",
      "Cheksiz urinishlar",
    ],
    cta: "Premium'ni boshlash",
    featured: true,
  },
  {
    name: "Premium 3 oy",
    price: "119 000",
    period: "so'm / 3 oy",
    description: "20% tejaysiz — imtihongacha yetarli",
    features: [
      "Premium'dagi barcha imkoniyatlar",
      "3 oy davomida to'liq foydalanish",
      "Barcha qurilmalarda sinxronlash",
      "Ustuvor qo'llab-quvvatlash",
    ],
    cta: "3 oylikni tanlash",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="narxlar" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/3 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Narxlar</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Bir piyola kofe narxida —{" "}
            <span className="text-gradient">butun kurs</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Avtomaktabdagi qo&apos;shimcha darslardan bir necha barobar arzon.
            Xohlagan payt bekor qilishingiz mumkin.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.12}>
              <div
                className={cn(
                  "relative rounded-3xl p-7 sm:p-8",
                  plan.featured
                    ? "conic-border border border-primary/50 bg-card/70 shadow-2xl shadow-primary/15 ring-1 ring-primary/30 backdrop-blur lg:-translate-y-3"
                    : "glass-card"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#1e6fe8] to-[#1d4ed8] px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-primary/30">
                    Tavsiya etiladi
                  </span>
                )}

                <h3 className="font-heading text-lg font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <p className="mt-5 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-heading text-4xl font-extrabold tracking-tight",
                      plan.featured && "text-gradient"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </p>

                <ul className="mt-6 space-y-3">
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
                  href="#yuklab"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5",
                    plan.featured
                      ? "btn-sheen bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
                      : "border border-border bg-card/50 hover:border-primary/40"
                  )}
                >
                  {plan.cta}
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
