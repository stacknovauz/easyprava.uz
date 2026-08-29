import { Clock, MapPin, Phone, Send } from "lucide-react";
import { LeadForm } from "@/components/landing/lead-form";
import { Reveal } from "@/components/landing/reveal";
import { BRANCHES, CONTACT } from "@/lib/content";

export function Enroll() {
  return (
    <section id="ariza" className="relative scroll-mt-20 py-24 sm:py-32 overflow-hidden">
      <div className="glow-blob left-1/2 top-10 size-[560px] -translate-x-1/2 bg-primary/12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ariza qoldirish</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Keling, <span className="text-gradient">boshlaymiz</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Formani to&apos;ldiring — 15 daqiqa ichida qo&apos;ng&apos;iroq qilib,
            sizga mos toifa, filial va jadvalni birga tanlaymiz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* left: contact + branches */}
          <div className="space-y-4">
            <Reveal>
              <div className="glass-card rounded-3xl p-6 sm:p-7">
                <h3 className="font-heading text-lg font-bold">Tezkor aloqa</h3>
                <div className="mt-5 space-y-3">
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Phone className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{CONTACT.phone}</p>
                      <p className="text-xs text-muted-foreground">{CONTACT.workHours}</p>
                    </div>
                  </a>
                  <a
                    href={CONTACT.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Send className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{CONTACT.telegramHandle}</p>
                      <p className="text-xs text-muted-foreground">
                        Telegram orqali yozing
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card rounded-3xl p-6 sm:p-7">
                <h3 className="font-heading text-lg font-bold">Filiallarimiz</h3>
                <ul className="mt-5 space-y-4">
                  {BRANCHES.map((branch) => (
                    <li key={branch.name} className="flex gap-3">
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                        <MapPin className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{branch.name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {branch.address}
                        </p>
                        <p className="mt-1 flex items-center gap-3 text-[11px] text-muted-foreground">
                          <span className="text-primary">{branch.landmark}</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="size-3" />
                            {branch.hours}
                          </span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* right: form */}
          <Reveal delay={0.15}>
            <LeadForm variant="full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
