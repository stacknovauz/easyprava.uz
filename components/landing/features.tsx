import {
  BarChart3,
  BookOpen,
  ClipboardList,
  RefreshCw,
  Smartphone,
  Timer,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Imtihon biletlari",
    text: "20 ta rasmiy formatdagi bilet — har birida 20 ta savol. Xuddi haqiqiy imtihondagidek tartib va qiyinlik darajasi.",
  },
  {
    icon: Timer,
    title: "Real imtihon rejimi",
    text: "25 daqiqalik vaqt hisoblagichi bilan haqiqiy imtihon muhitida mashq qiling — stressga oldindan tayyorlaning.",
  },
  {
    icon: BookOpen,
    title: "Nazariy darslar",
    text: "Yo'l harakati qoidalari bo'yicha 20 ta mavzu — sodda tilda, hayotiy misollar va belgilar bilan tushuntirilgan.",
  },
  {
    icon: BarChart3,
    title: "Shaxsiy statistika",
    text: "Yechilgan testlar, to'g'ri javoblar foizi va darslar bo'yicha progress — o'sishingizni har kuni kuzatib boring.",
  },
  {
    icon: RefreshCw,
    title: "Xatolar ustida ishlash",
    text: "Noto'g'ri javob bergan savollaringizga qaytib, zaif mavzularingizni alohida mustahkamlang.",
  },
  {
    icon: Smartphone,
    title: "Zamonaviy interfeys",
    text: "iOS va Android uchun \"Liquid Glass\" dizayn — tez, yengil va har bir detali qulaylik uchun o'ylangan.",
  },
];

export function Features() {
  return (
    <section id="imkoniyatlar" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Imkoniyatlar</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Imtihonga tayyorlanish uchun{" "}
            <span className="text-gradient">hamma narsa</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nazariyadan amaliy testlargacha — EasyPrava sizni imtihonning har
            bir bosqichiga tayyorlaydi.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.12}>
              <TiltCard className="glass-card group h-full rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="size-5" />
                  </span>
                  <span className="font-heading text-sm font-bold text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading mt-4 text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.text}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
