import {
  BadgeCheck,
  CalendarClock,
  Check,
  CreditCard,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { CountUp } from "@/components/landing/count-up";
import { PASS_RATE } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

const CARD_ICONS = [
  CreditCard,
  CalendarClock,
  Users,
  MapPin,
  ShieldCheck,
  BadgeCheck,
];

export function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <section id="nega-biz" className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden">
      <div className="glow-blob left-0 top-1/3 size-[440px] bg-primary/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.whyUs.eyebrow}</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            {dict.whyUs.title}{" "}
            <span className="text-gradient">{dict.whyUs.titleAccent}</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dict.whyUs.lead}
          </p>
        </Reveal>

        {/* bento grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* big card: what's included */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card h-full rounded-3xl p-7 sm:p-8">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <Check className="size-5" />
              </span>
              <h3 className="font-heading mt-4 text-xl font-bold">
                {dict.whyUs.includedTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {dict.whyUs.includedText}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {dict.whyUs.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* pass rate */}
          <Reveal delay={0.1}>
            <div className="glass-card flex h-full flex-col justify-between rounded-3xl p-7 sm:p-8">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <BadgeCheck className="size-5" />
                </span>
                <h3 className="font-heading mt-4 text-xl font-bold">
                  {dict.whyUs.passTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {dict.whyUs.passText}
                </p>
              </div>
              <p className="font-heading mt-8 text-5xl font-extrabold">
                <span className="text-gradient">
                  <CountUp to={PASS_RATE} suffix="%" />
                </span>
              </p>
            </div>
          </Reveal>

          {/* small cards */}
          {dict.whyUs.cards.map((item, i) => {
            const Icon = CARD_ICONS[i];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <div className="glass-card h-full rounded-3xl p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-heading mt-4 text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
