import { Car, GraduationCap, Percent, Users } from "lucide-react";
import { CountUp } from "@/components/landing/count-up";
import { Reveal } from "@/components/landing/reveal";

/* Raqamlar — ishga tushirishdan oldin haqiqiy ko'rsatkichlar bilan almashtiring */
const STATS = [
  { icon: GraduationCap, value: 1200, suffix: "+", label: "Guvohnoma olgan bitiruvchi" },
  { icon: Percent, value: 92, suffix: "%", label: "Birinchi urinishda o'tish" },
  { icon: Users, value: 18, suffix: "", label: "Tajribali instruktor" },
  { icon: Car, value: 24, suffix: "", label: "O'quv avtomobili" },
];

export function Stats() {
  return (
    <section className="relative border-y border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            className={
              "flex flex-col items-center gap-2 border-border px-4 py-10 text-center " +
              (i % 2 === 0 ? "max-lg:border-r " : "") +
              (i < 3 ? "lg:border-r " : "") +
              (i >= 2 ? "max-lg:border-t" : "")
            }
          >
            <stat.icon className="size-5 text-primary" />
            <p className="font-heading text-4xl font-extrabold sm:text-5xl">
              <span className="text-gradient">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </span>
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
