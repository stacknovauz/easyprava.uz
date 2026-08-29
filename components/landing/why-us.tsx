import {
  BadgeCheck,
  CalendarClock,
  Check,
  CreditCard,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { CountUp } from "@/components/landing/count-up";
import { INCLUDED } from "@/lib/content";

export function WhyUs() {
  return (
    <section id="nega-biz" className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden">
      <div className="glow-blob left-0 top-1/3 size-[440px] bg-primary/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nega EasyPrava</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Oddiy avtomaktabdan{" "}
            <span className="text-gradient">farqimiz</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Boshqa avtomaktablarda yo&apos;q narsa: nazariya uchun o&apos;z
            ilovamiz, instruktorlar uchun esa alohida boshqaruv tizimi.
          </p>
        </Reveal>

        {/* bento grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* big card: what's included */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card h-full rounded-3xl p-7 sm:p-8">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <Check className="size-5" />
              </span>
              <h3 className="font-heading mt-4 text-xl font-bold">
                Kurs narxiga nimalar kiradi
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Yashirin to&apos;lov yo&apos;q — yoqilg&apos;i ham, avtodrom ham
                narxga kiritilgan.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* pass rate */}
          <Reveal delay={0.1}>
            <div className="glass-card flex h-full flex-col justify-between rounded-3xl p-7 sm:p-8">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <BadgeCheck className="size-5" />
                </span>
                <h3 className="font-heading mt-4 text-xl font-bold">
                  Birinchi urinishda o&apos;tish
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ichki imtihonimiz davlat imtihoni bilan bir xil formatda —
                  shuning uchun o&apos;quvchilarimiz kamdan-kam qayta topshiradi.
                </p>
              </div>
              <p className="font-heading mt-8 text-5xl font-extrabold">
                <span className="text-gradient">
                  <CountUp to={92} suffix="%" />
                </span>
              </p>
            </div>
          </Reveal>

          {/* small cards */}
          {[
            {
              icon: CreditCard,
              title: "Bo'lib to'lash",
              text: "3 oygacha ustamasiz. Birinchi to'lovdan keyin darhol boshlaysiz.",
            },
            {
              icon: CalendarClock,
              title: "Moslashuvchan jadval",
              text: "Ertalab, kunduzi yoki kechqurun — ishingizga qarab tanlaysiz.",
            },
            {
              icon: Users,
              title: "Ayol instruktorlar",
              text: "So'rasangiz, sizga mos instruktorni biriktiramiz.",
            },
            {
              icon: MapPin,
              title: "Metro yonida",
              text: "Ikkala filial ham metro bekatidan 5 daqiqalik masofada.",
            },
            {
              icon: ShieldCheck,
              title: "Sug'urtalangan avtopark",
              text: "Ikki tomonlama boshqaruvli, texnik ko'rikdan o'tgan avtomobillar.",
            },
            {
              icon: BadgeCheck,
              title: "Rasmiy litsenziya",
              text: "Elektron sertifikat imtihonga avtomatik yo'llanadi.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.1}>
              <div className="glass-card h-full rounded-3xl p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <item.icon className="size-5" />
                </span>
                <h3 className="font-heading mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
