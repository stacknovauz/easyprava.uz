import { ArrowRight, PlayCircle } from "lucide-react";
import { PhoneMockup } from "@/components/landing/phone-mockup";
import { cn } from "@/lib/utils";

const HEADLINE: { word: string; gradient?: boolean }[] = [
  { word: "Prava" },
  { word: "imtihonidan" },
  { word: "birinchi", gradient: true },
  { word: "urinishda", gradient: true },
  { word: "o'ting" },
];

const PARTICLES = [
  { left: "8%", top: "18%", size: 4, duration: "7s", delay: "0s" },
  { left: "16%", top: "68%", size: 3, duration: "8s", delay: "1.4s" },
  { left: "30%", top: "34%", size: 5, duration: "6s", delay: "0.8s" },
  { left: "46%", top: "80%", size: 3, duration: "9s", delay: "2s" },
  { left: "60%", top: "14%", size: 4, duration: "7.5s", delay: "0.4s" },
  { left: "74%", top: "60%", size: 3, duration: "6.5s", delay: "1.8s" },
  { left: "88%", top: "30%", size: 5, duration: "8.5s", delay: "1s" },
  { left: "92%", top: "76%", size: 3, duration: "7s", delay: "2.6s" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* background: blobs + grid + particles */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div className="absolute -left-32 top-10 size-[480px] rounded-full bg-primary/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 size-[520px] rounded-full bg-blue-600/15 blur-[130px]" />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="animate-float absolute rounded-full bg-primary/35"
            style={
              {
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                "--float-duration": p.duration,
                "--float-delay": p.delay,
              } as React.CSSProperties
            }
          />
        ))}
        {/* floating decorative ring + square */}
        <span
          className="animate-float absolute right-[12%] top-[20%] hidden size-10 rounded-full border-2 border-primary/25 lg:block"
          style={{ "--float-duration": "9s" } as React.CSSProperties}
        />
        <span
          className="animate-float absolute left-[10%] bottom-[18%] hidden size-8 rotate-45 rounded-lg border-2 border-primary/20 lg:block"
          style={
            { "--float-duration": "8s", "--float-delay": "1s" } as React.CSSProperties
          }
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        {/* left column */}
        <div className="text-center lg:text-left">
          <span
            className="rise-in inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-medium text-primary"
            style={{ "--d": "0.8s" } as React.CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Rasmiy imtihon formatiga to&apos;liq mos
          </span>

          <h1 className="font-heading mt-6 text-balance text-[2.5rem] font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            {HEADLINE.map((item, i) => (
              <span key={i} className="word-mask mr-[0.28em] last:mr-0">
                <span
                  className={cn(
                    "word-rise",
                    item.gradient && "text-gradient-animated"
                  )}
                  style={{ "--d": `${0.95 + i * 0.08}s` } as React.CSSProperties}
                >
                  {item.word}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="rise-in mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            style={{ "--d": "1.5s" } as React.CSSProperties}
          >
            EasyPrava — haydovchilik guvohnomasiga tayyorlanish uchun zamonaviy
            ilova. Rasmiy formatdagi imtihon biletlari, tushunarli nazariy
            darslar va shaxsiy statistika — hammasi bitta ilovada.
          </p>

          <div
            className="rise-in mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center"
            style={{ "--d": "1.65s" } as React.CSSProperties}
          >
            <a
              href="#yuklab"
              className="btn-sheen inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 sm:w-auto"
            >
              Bepul boshlash
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#sinov"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:w-auto"
            >
              <PlayCircle className="size-4 text-primary" />
              O&apos;zingizni sinab ko&apos;ring
            </a>
          </div>

          <p
            className="rise-in mt-8 text-sm text-muted-foreground"
            style={{ "--d": "1.8s" } as React.CSSProperties}
          >
            20 ta imtihon bileti&ensp;·&ensp;400 ta test savoli&ensp;·&ensp;20 ta
            nazariy mavzu
          </p>
        </div>

        {/* right column: phone */}
        <div
          className="scale-in relative mx-auto"
          style={{ "--d": "1.2s" } as React.CSSProperties}
          role="img"
          aria-label="EasyPrava ilovasining bosh ekrani"
        >
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
