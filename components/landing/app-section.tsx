import {
  BarChart3,
  BookOpen,
  ClipboardList,
  RefreshCw,
  Smartphone,
  Timer,
} from "lucide-react";
import { PhoneMockup } from "@/components/landing/phone-mockup";
import { Reveal } from "@/components/landing/reveal";

const APP_FEATURES = [
  {
    icon: ClipboardList,
    title: "20 ta imtihon bileti",
    text: "Rasmiy formatda: har bilet 20 savol, 25 daqiqa — 400 ta test savoli.",
  },
  {
    icon: BookOpen,
    title: "20 ta nazariy mavzu",
    text: "Yo'l harakati qoidalari sodda tilda, belgilar va misollar bilan.",
  },
  {
    icon: Timer,
    title: "Real imtihon rejimi",
    text: "18 ta to'g'ri javob kerak — xuddi davlat imtihonidagidek sinov.",
  },
  {
    icon: RefreshCw,
    title: "Xatolar ustida ishlash",
    text: "Noto'g'ri javoblaringiz alohida to'planadi va qayta beriladi.",
  },
  {
    icon: BarChart3,
    title: "Instruktoringiz ko'radi",
    text: "Progressingiz instruktorga uzatiladi — zaif mavzuni darsda mustahkamlaydi.",
  },
  {
    icon: Smartphone,
    title: "iOS va Android",
    text: "Kursga yozilganingizdan keyin Premium kirish bepul ochiladi.",
  },
];

export function AppSection() {
  return (
    <section id="ilova" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="glow-blob right-0 top-1/4 size-[520px] bg-primary/12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* left: copy + features */}
          <div>
            <Reveal>
              <span className="eyebrow">O&apos;quvchilarga bepul</span>
              <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
                Nazariyani <span className="text-gradient">o&apos;z ilovamizda</span>{" "}
                o&apos;rganasiz
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sinfda o&apos;tirish shart emas. Kursga yozilganingizdan keyin
                EasyPrava ilovasining to&apos;liq versiyasi sizga bepul ochiladi —
                metroda ham, uyda ham tayyorlanasiz.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {APP_FEATURES.map((feature, i) => (
                <Reveal key={feature.title} delay={(i % 2) * 0.1}>
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
          </div>

          {/* right: phone */}
          <Reveal delay={0.15}>
            <div
              className="relative mx-auto"
              role="img"
              aria-label="EasyPrava ilovasining bosh ekrani"
            >
              <PhoneMockup />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
