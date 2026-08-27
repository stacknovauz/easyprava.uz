import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

/* Placeholder testimonials — replace with real student reviews before launch */
const TESTIMONIALS = [
  {
    name: "Jasurbek",
    meta: "Toshkent · B toifa",
    text: "Bir oy davomida har kuni 2 tadan bilet yechdim. Imtihonda 19/20 — birinchi urinishda o'tdim! Xatolar tahlili eng foydali funksiya ekan.",
    initials: "JB",
  },
  {
    name: "Madina",
    meta: "Samarqand · B toifa",
    text: "Darslar juda sodda tilda yozilgan. Ayniqsa yo'l belgilari mavzulari rasmlar bilan tushunarli. Telefonda istalgan joyda o'qish qulay.",
    initials: "MA",
  },
  {
    name: "Sardor",
    meta: "Farg'ona · C toifa",
    text: "Real imtihon rejimi zo'r — vaqt hisoblagichi bilan mashq qilganim uchun imtihonda umuman hayajonlanmadim.",
    initials: "SA",
  },
  {
    name: "Nilufar",
    meta: "Toshkent · B toifa",
    text: "Statistika bo'limi motivatsiya beradi. Har kuni progressim o'sganini ko'rib, o'qishni tashlagim kelmadi. 2 haftada barcha mavzularni tugatdim.",
    initials: "NI",
  },
  {
    name: "Bekzod",
    meta: "Andijon · B toifa",
    text: "Avtomaktabdagi darslardan tashqari EasyPrava'da mashq qildim. Guruhimizda birinchilardan bo'lib imtihondan o'tdim.",
    initials: "BE",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Fikrlar</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            O&apos;quvchilarimiz <span className="text-gradient">nima deydi?</span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div
          tabIndex={0}
          role="region"
          aria-label="O'quvchilar fikrlari"
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:px-6 lg:px-[max(1rem,calc((100vw-80rem)/2+1.5rem))] [scrollbar-width:thin]"
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="glass-card relative w-[85vw] shrink-0 snap-start rounded-3xl p-7 sm:w-[380px]"
            >
              <Quote className="absolute right-5 top-5 size-20 text-primary/5" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="font-heading flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e6fe8] to-[#1d4ed8] text-sm font-bold text-white ring-2 ring-primary/25 ring-offset-2 ring-offset-background">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
