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

const INSTRUCTOR_FEATURES = [
  {
    icon: Users,
    title: "O'quvchilar ro'yxati",
    text: "Har bir o'quvchining toifasi va o'quv jarayoni instruktorda bir ekranda.",
  },
  {
    icon: CalendarCheck,
    title: "Haftalik jadval",
    text: "Darslar kunlar bo'yicha guruhlangan — bugungi rejangiz doim ko'z oldingizda.",
  },
  {
    icon: UserCheck,
    title: "Dars boshqaruvi",
    text: "Mavzu, davomiylik va yakunlash — har bir darsni bir tugma bilan boshqaring.",
  },
  {
    icon: ShieldCheck,
    title: "Elektron sertifikat",
    text: "Bajarilgan har bir amaliy soat tizimga yoziladi va imtihonga yo'llanadi.",
  },
];

const SCHEDULE = [
  { time: "09:00", name: "Aziza N.", category: "B", status: "Kutilmoqda" },
  { time: "11:30", name: "Jasur T.", category: "B", status: "Kutilmoqda" },
  { time: "14:00", name: "Sardor K.", category: "C", status: "O'tildi" },
];

export function Instructor() {
  return (
    <section id="instruktor" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* left: copy */}
          <div>
            <Reveal>
              <span className="eyebrow">Ichki tizimimiz</span>
              <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
                Instruktorlarimiz{" "}
                <span className="text-gradient">EasyPrava Instruktor</span>da ishlaydi
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Har bir instruktorimizda maxsus ilova bor: darslar jadvali,
                o&apos;quvchi progressi va bajarilgan soatlar. Bironta ham
                darsingiz e&apos;tibordan chetda qolmaydi.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {INSTRUCTOR_FEATURES.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <feature.icon className="size-5" />
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
              ))}
            </div>

            <Reveal delay={0.3} className="mt-10">
              <a
                href="#ariza"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/8 px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/15"
              >
                Instruktor bo&apos;lib ishlash
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
                      Bugungi jadval
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Chorshanba, 3 ta dars
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-success/12 px-3 py-1 text-xs font-semibold text-success">
                  Faol
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
                        Amaliy dars · 90 daqiqa
                      </p>
                    </div>
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/12 text-xs font-bold text-primary">
                      {lesson.category}
                    </span>
                    <span
                      className={
                        "hidden rounded-full px-2.5 py-1 text-[11px] font-medium sm:block " +
                        (lesson.status === "O'tildi"
                          ? "bg-success/12 text-success"
                          : "bg-muted text-muted-foreground")
                      }
                    >
                      {lesson.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
                {[
                  { value: "24", label: "O'quvchi" },
                  { value: "142", label: "Dars o'tildi" },
                  { value: "18", label: "Shu hafta" },
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
