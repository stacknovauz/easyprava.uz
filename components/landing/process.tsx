import { Reveal } from "@/components/landing/reveal";
import { PROCESS } from "@/lib/content";

export function Process() {
  return (
    <section id="jarayon" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Jarayon</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            Arizadan guvohnomagacha —{" "}
            <span className="text-gradient">6 qadam</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Har bir bosqichda nima qilish kerakligini biz aytamiz. Siz faqat
            o&apos;rganishga e&apos;tibor qaratasiz.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((item, i) => (
            <Reveal key={item.step} delay={(i % 3) * 0.12} as="li" className="relative">
              <div className="flex gap-5">
                <span className="step-ring font-heading flex size-12 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold text-primary">
                  {item.step}
                </span>
                <div className="pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                      {item.meta}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
