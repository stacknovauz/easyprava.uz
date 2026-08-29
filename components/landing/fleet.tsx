import { Bike, Bus, Car, Fuel, GraduationCap, Settings2, Truck } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";
import { FLEET, INSTRUCTORS } from "@/lib/content";

const FLEET_ICONS: Record<string, typeof Car> = {
  "A toifa": Bike,
  "C toifa": Truck,
  "D toifa": Bus,
};

export function Fleet() {
  const totalCars = FLEET.reduce((sum, item) => sum + item.count, 0);

  return (
    <section id="avtopark" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          {/* fleet */}
          <div>
            <Reveal>
              <span className="eyebrow">Avtopark</span>
              <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                {totalCars} ta o&apos;quv{" "}
                <span className="text-gradient">avtomobili</span>
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
                Barchasi ikki tomonlama boshqaruvli va sug&apos;urtalangan.
                Mexanika ham, avtomat korobka ham bor.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {FLEET.map((car, i) => {
                const Icon = FLEET_ICONS[car.category] ?? Car;
                return (
                <Reveal key={car.model} delay={i * 0.07}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl p-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{car.model}</p>
                      <p className="text-xs text-muted-foreground">{car.category}</p>
                    </div>
                    <span className="hidden items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-muted-foreground sm:inline-flex">
                      <Settings2 className="size-3" />
                      {car.type}
                    </span>
                    <span className="font-heading text-sm font-bold text-primary">
                      ×{car.count}
                    </span>
                  </div>
                </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2} className="mt-6">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Fuel className="size-3.5 text-primary" />
                Yoqilg&apos;i xarajati kurs narxiga kiritilgan
              </p>
            </Reveal>
          </div>

          {/* instructors */}
          <div>
            <Reveal>
              <span className="eyebrow">Instruktorlar</span>
              <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                Sizni <span className="text-gradient">tajribali usta</span> o&apos;rgatadi
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
                Har bir instruktorimiz rasmiy guvohnomaga ega va o&apos;z
                o&apos;quvchilarining natijasi uchun javob beradi.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {INSTRUCTORS.map((person, i) => (
                <Reveal key={person.name} delay={(i % 2) * 0.1}>
                  <TiltCard className="glass-card h-full rounded-2xl p-5">
                    <div className="flex items-center gap-3">
                      <span className="font-heading flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e6fe8] to-[#1d4ed8] text-sm font-bold text-white">
                        {person.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{person.name}</p>
                        <p className="text-xs text-muted-foreground">{person.category}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <GraduationCap className="size-3.5 text-primary" />
                        {person.years} yil tajriba
                      </span>
                      <span className="text-[11px] font-medium text-primary">
                        {person.note}
                      </span>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
