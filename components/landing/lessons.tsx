import { BookOpen, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

/** The real 20-topic PDD curriculum from the EasyPrava app */
const TOPICS = [
  "Umumiy qoidalar",
  "Haydovchilarning umumiy majburiyatlari",
  "Piyodalarning majburiyatlari",
  "Yo'lovchilarning majburiyatlari",
  "Svetofor va tartibga soluvchining ishoralari",
  "Ogohlantiruvchi belgilar",
  "Ustunlik belgilari",
  "Taqiqlovchi belgilar",
  "Buyuruvchi belgilar",
  "Axborot-ko'rsatkich belgilari",
  "Yo'l chiziqlari",
  "Harakatni boshlash va manevr qilish",
  "Harakat tezligi",
  "Quvib o'tish",
  "To'xtash va to'xtab turish",
  "Chorrahalardan o'tish",
  "Piyodalar o'tish joylari",
  "Temir yo'l kesishmalari",
  "Avtomagistrallarda harakatlanish",
  "Yorug'lik asboblaridan foydalanish",
];

function TopicPills({ topics }: { topics: string[] }) {
  return (
    <div className="flex shrink-0 gap-3 pr-3">
      {topics.map((topic, i) => (
        <span
          key={topic}
          className="glass-card flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium"
        >
          <span className="font-heading text-xs font-bold text-primary">
            {String(TOPICS.indexOf(topic) + 1).padStart(2, "0")}
          </span>
          {topic}
          {i % 3 === 0 && <CheckCircle2 className="size-3.5 text-success" />}
        </span>
      ))}
    </div>
  );
}

export function Lessons() {
  const firstRow = TOPICS.slice(0, 10);
  const secondRow = TOPICS.slice(10);

  return (
    <section id="darslar" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="absolute right-0 top-1/3 -z-10 size-[440px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O&apos;quv dasturi</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            20 ta mavzu — <span className="text-gradient">to&apos;liq nazariya</span>{" "}
            kursi
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Yo&apos;l harakati qoidalarining barcha bo&apos;limlari — umumiy
            qoidalardan avtomagistrallargacha. Har bir mavzu imtihon savollari
            bilan mustahkamlanadi.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12 space-y-4">
        <div className="marquee">
          <div
            className="marquee-track"
            style={{ "--marquee-duration": "45s" } as React.CSSProperties}
          >
            <TopicPills topics={firstRow} />
            <TopicPills topics={firstRow} />
          </div>
        </div>
        <div className="marquee marquee-reverse">
          <div
            className="marquee-track"
            style={{ "--marquee-duration": "50s" } as React.CSSProperties}
          >
            <TopicPills topics={secondRow} />
            <TopicPills topics={secondRow} />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-12 text-center">
        <a
          href="#yuklab"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40"
        >
          <BookOpen className="size-4 text-primary" />
          Barcha darslarni ilovada o&apos;qing
        </a>
      </Reveal>
    </section>
  );
}
