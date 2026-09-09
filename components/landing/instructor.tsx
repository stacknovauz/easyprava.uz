import {
  ArrowRight,
  CalendarCheck,
  Car,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";
import { SCHEDULE } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

const FEATURE_ICONS = [Users, CalendarCheck, UserCheck, ShieldCheck];

export function Instructor({ dict }: { dict: Dictionary }) {
  return (
    <section id="instruktor" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* left: copy */}
          <div>
            <Reveal>
              <span className="eyebrow">{dict.instructorApp.eyebrow}</span>
              <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
                {dict.instructorApp.title}{" "}
                <span className="text-gradient">{dict.instructorApp.titleAccent}</span>{" "}
                {dict.instructorApp.titleTail}
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {dict.instructorApp.lead}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {dict.instructorApp.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i] ?? Users;
                return (
                <Reveal key={feature.title} delay={i * 0.1}>
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

            <Reveal delay={0.3} className="mt-10">
              <a
                href="#ariza"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/8 px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/15"
              >
                {dict.instructorApp.cta}
                <ArrowRight className="size-4" />
              </a>
            </Reveal>
          </div>

          {/* right: schedule mockup */}
          <Reveal delay={0.2}>
            <TiltCard className="glass-card mx-auto max-w-md rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Car className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold">
                      {dict.instructorApp.scheduleTitle}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {dict.instructorApp.scheduleSub}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-success/12 px-3 py-1 text-xs font-semibold text-success">
                  {dict.instructorApp.active}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {SCHEDULE.map((lesson) => (
                  <div
                    key={lesson.time}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4"
                  >
                    <span className="font-heading text-sm font-bold text-primary">
                      {lesson.time}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {lesson.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {dict.instructorApp.lessonMeta}
                      </p>
                    </div>
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/12 text-xs font-bold text-primary">
                      {lesson.category}
                    </span>
                    <span
                      className={
                        "hidden rounded-full px-2.5 py-1 text-[11px] font-medium sm:block " +
                        (lesson.done
                          ? "bg-success/12 text-success"
                          : "bg-muted text-muted-foreground")
                      }
                    >
                      {lesson.done
                        ? dict.instructorApp.statusDone
                        : dict.instructorApp.statusPending}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
                {[
                  { value: "24", label: dict.instructorApp.statStudents },
                  { value: "142", label: dict.instructorApp.statLessons },
                  { value: "18", label: dict.instructorApp.statWeek },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-xl font-extrabold text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
