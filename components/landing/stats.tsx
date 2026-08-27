import { BookOpen, ClipboardList, FileQuestion, Timer } from "lucide-react";
import { CountUp } from "@/components/landing/count-up";
import { Reveal } from "@/components/landing/reveal";

const STATS = [
  {
    icon: ClipboardList,
    value: 20,
    suffix: "",
    label: "Imtihon bileti",
  },
  {
    icon: FileQuestion,
    value: 400,
    suffix: "",
    label: "Test savoli",
  },
  {
    icon: BookOpen,
    value: 20,
    suffix: "",
    label: "Nazariy mavzu",
  },
  {
    icon: Timer,
    value: 25,
    suffix: "",
    label: "Daqiqa — real imtihon rejimi",
  },
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
