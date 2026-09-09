import { Car, GraduationCap, Percent, Users } from "lucide-react";
import { CountUp } from "@/components/landing/count-up";
import { Reveal } from "@/components/landing/reveal";
import { STATS } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

const ICONS: Record<(typeof STATS)[number]["id"], typeof Car> = {
  graduates: GraduationCap,
  passRate: Percent,
  instructors: Users,
  cars: Car,
};

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative border-y border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => {
          const Icon = ICONS[stat.id];
          return (
            <Reveal
              key={stat.id}
              delay={i * 0.1}
              className={
                "flex flex-col items-center gap-2 border-border px-4 py-10 text-center " +
                (i % 2 === 0 ? "max-lg:border-r " : "") +
                (i < 3 ? "lg:border-r " : "") +
                (i >= 2 ? "max-lg:border-t" : "")
              }
            >
              <Icon className="size-5 text-primary" />
              <p className="font-heading text-4xl font-extrabold sm:text-5xl">
                <span className="text-gradient">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </span>
              </p>
              <p className="text-sm text-muted-foreground">{dict.stats[stat.id]}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
