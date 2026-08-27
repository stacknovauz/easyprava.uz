import { BookOpen, ClipboardList, Download, Trophy } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

const STEPS = [
  {
    icon: Download,
    title: "Yuklab oling",
    text: "Ilovani o'rnating va bepul rejada darhol boshlang — ro'yxatdan o'tish bir daqiqa.",
  },
  {
    icon: BookOpen,
    title: "Nazariyani o'rganing",
    text: "20 ta mavzuni ketma-ket o'zlashtiring — har bir dars sodda tilda yozilgan.",
  },
  {
    icon: ClipboardList,
    title: "Testlarni yeching",
    text: "Biletlarni real imtihon rejimida yechib, xatolaringizni tahlil qiling.",
  },
  {
    icon: Trophy,
    title: "Imtihondan o'ting",
    text: "Statistikangiz barqaror 90%+ bo'lganda — haqiqiy imtihonga ishonch bilan boring.",
  },
];

export function HowItWorks() {
  return (
    <section id="qanday" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Jarayon</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Pravagacha — <span className="text-gradient">4 qadam</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Minglab o&apos;quvchilar sinab ko&apos;rgan oddiy va samarali yo&apos;l.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />

          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.15} className="relative">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-primary/25 bg-background shadow-lg shadow-primary/10">
                  <step.icon className="size-6 text-primary" />
                  <span className="font-heading absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading mt-5 text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
