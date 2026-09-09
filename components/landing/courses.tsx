import { ArrowRight, Bike, Bus, Car, Check, Clock, Truck, Users } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";
import { COURSES } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";
import { cn, formatSom } from "@/lib/utils";

const ICONS: Record<string, typeof Car> = {
  A1: Bike,
  A: Bike,
  B: Car,
  BC: Truck,
  C: Truck,
  D: Bus,
};

const EXTRA_KEYS = ["medical", "theoryExam", "practicalExam", "stateFee"] as const;

export function Courses({ dict }: { dict: Dictionary }) {
  return (
    <section id="kurslar" className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden">
      <div className="glow-blob left-1/2 top-20 size-[560px] -translate-x-1/2 bg-primary/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.courses.eyebrow}</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            {dict.courses.title}{" "}
            <span className="text-gradient">{dict.courses.titleAccent}</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dict.courses.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => {
            const Icon = ICONS[course.code] ?? Car;
            const copy = dict.courses.items[course.code];
            return (
              <Reveal key={course.code} delay={(i % 3) * 0.1}>
                <TiltCard
                  className={cn(
                    "group flex h-full flex-col rounded-3xl p-7",
                    course.featured
                      ? "conic-border border border-primary/50 bg-card/70 shadow-2xl shadow-primary/15 ring-1 ring-primary/25 backdrop-blur"
                      : "glass-card"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                        course.featured
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/12 text-primary"
                      )}
                    >
                      <Icon className="size-6" />
                    </span>
                    {copy.badge && (
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-[11px] font-semibold",
                          course.featured
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {copy.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-heading text-3xl font-extrabold tracking-tight">
                      {course.code}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {dict.courses.categoryWord}
                    </span>
                  </div>
                  <h3 className="font-heading mt-1 text-lg font-bold">{copy.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{copy.vehicle}</p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary" />
                      {copy.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Car className="size-3.5 text-primary" />
                      {course.practiceHours} {dict.common.hoursOfPractice}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="size-3.5 text-primary" />
                      {copy.age}
                    </span>
                  </div>

                  {copy.note && (
                    <p className="mt-4 rounded-xl border border-border bg-muted/50 p-3 text-[11px] leading-relaxed text-muted-foreground">
                      {copy.note}
                    </p>
                  )}

                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {copy.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="size-3" />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <p className="flex items-baseline gap-1.5">
                      <span
                        className={cn(
                          "font-heading text-3xl font-extrabold tracking-tight",
                          course.featured && "text-gradient"
                        )}
                      >
                        {formatSom(course.price)}
                      </span>
                      <span className="text-sm text-muted-foreground">{dict.common.som}</span>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {dict.common.installment}
                    </p>
                    <a
                      href="#ariza"
                      className={cn(
                        "mt-5 w-full px-6 py-3 text-sm",
                        course.featured ? "btn-primary btn-sheen" : "btn-ghost"
                      )}
                    >
                      {dict.courses.cta}
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* honest extra costs */}
        <Reveal delay={0.15} className="mt-14">
          <div className="glass-card rounded-3xl p-7 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold">
                  {dict.courses.extrasTitle}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {dict.courses.extrasText}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EXTRA_KEYS.map((key) => {
                const cost = dict.courses.extras[key];
                return (
                  <div
                    key={key}
                    className="rounded-2xl border border-border bg-card/50 p-4"
                  >
                    <p className="text-xs text-muted-foreground">{cost.label}</p>
                    <p className="font-heading mt-1.5 text-base font-bold">{cost.value}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{cost.note}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
