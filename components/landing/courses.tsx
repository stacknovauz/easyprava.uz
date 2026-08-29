import { ArrowRight, Bike, Bus, Car, Check, Clock, Truck, Users } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";
import { COURSES, EXTRA_COSTS } from "@/lib/content";
import { cn, formatSom } from "@/lib/utils";

const ICONS: Record<string, typeof Car> = {
  A1: Bike,
  A: Bike,
  B: Car,
  BC: Truck,
  C: Truck,
  D: Bus,
};

export function Courses() {
  return (
    <section id="kurslar" className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden">
      <div className="glow-blob left-1/2 top-20 size-[560px] -translate-x-1/2 bg-primary/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Kurslar va narxlar</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Qaysi toifa kerak bo&apos;lsa — <span className="text-gradient">bizda bor</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Narxlar ochiq va yakuniy. Har bir kursga amaliy haydash soatlari,
            avtodrom mashqlari va EasyPrava ilovasi kiradi.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => {
            const Icon = ICONS[course.code] ?? Car;
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
                    {course.badge && (
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-[11px] font-semibold",
                          course.featured
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-heading text-3xl font-extrabold tracking-tight">
                      {course.code}
                    </span>
                    <span className="text-sm text-muted-foreground">toifa</span>
                  </div>
                  <h3 className="font-heading mt-1 text-lg font-bold">{course.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{course.vehicle}</p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Car className="size-3.5 text-primary" />
                      {course.practiceHours} soat amaliyot
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="size-3.5 text-primary" />
                      {course.age}
                    </span>
                  </div>

                  {course.note && (
                    <p className="mt-4 rounded-xl border border-border bg-muted/50 p-3 text-[11px] leading-relaxed text-muted-foreground">
                      {course.note}
                    </p>
                  )}

                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {course.perks.map((perk) => (
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
                      <span className="text-sm text-muted-foreground">so&apos;m</span>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      3 oyga ustamasiz bo&apos;lib to&apos;lash mumkin
                    </p>
                    <a
                      href="#ariza"
                      className={cn(
                        "mt-5 w-full px-6 py-3 text-sm",
                        course.featured ? "btn-primary btn-sheen" : "btn-ghost"
                      )}
                    >
                      Kursga yozilish
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
                  Kursdan tashqari davlat to&apos;lovlari
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Bu to&apos;lovlar o&apos;quv markazga emas, davlat va imtihon
                  markaziga to&apos;lanadi. Sizni ogohlantirib qo&apos;yamiz —
                  keyin kutilmagan xarajat chiqmasin.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EXTRA_COSTS.map((cost) => (
                <div
                  key={cost.label}
                  className="rounded-2xl border border-border bg-card/50 p-4"
                >
                  <p className="text-xs text-muted-foreground">{cost.label}</p>
                  <p className="font-heading mt-1.5 text-base font-bold">{cost.value}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{cost.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
