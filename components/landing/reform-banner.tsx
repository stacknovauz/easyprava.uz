import { BookOpen, Car, Sparkles } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

export function ReformBanner() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-card conic-border overflow-hidden rounded-3xl p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="chip">
                  <Sparkles className="size-4" />
                  2026-yil 1-fevraldan kuchga kirdi
                </span>
                <h2 className="font-heading mt-5 text-balance text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl">
                  Endi nazariy darslarga qatnashish{" "}
                  <span className="text-gradient">shart emas</span>
                </h2>
                <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  A va B toifalari uchun qonun o&apos;zgardi: yo&apos;l harakati
                  qoidalarini mustaqil o&apos;rganish mumkin. Amaliy haydash esa
                  majburiy bo&apos;lib qoldi va uni litsenziyalangan o&apos;quv
                  markazida o&apos;tish kerak. EasyPrava aynan shu ikkalasini
                  birlashtiradi.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4 sm:w-64">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <BookOpen className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Nazariya — ilovada</p>
                    <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                      O&apos;quvchilarimizga bepul, istalgan vaqtda
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4 sm:w-64">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Car className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Amaliyot — o&apos;quv markazda</p>
                    <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                      Elektron sertifikat bilan rasmiylashtiriladi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
