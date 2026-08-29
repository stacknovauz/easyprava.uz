import { ArrowRight, BadgeCheck, Car, Phone, Sparkles } from "lucide-react";
import { LeadForm } from "@/components/landing/lead-form";
import { CONTACT } from "@/lib/content";
import { cn } from "@/lib/utils";

const HEADLINE: { word: string; gradient?: boolean }[] = [
  { word: "Haydovchilik" },
  { word: "guvohnomangizni" },
  { word: "3", gradient: true },
  { word: "oyda", gradient: true },
  { word: "qo'lga" },
  { word: "kiriting" },
];

const TRUST = [
  { icon: BadgeCheck, label: "Litsenziyalangan o'quv markaz" },
  { icon: Car, label: "O'z avtodromimiz" },
  { icon: Sparkles, label: "Nazariya ilovada — bepul" },
];

const PARTICLES = [
  { left: "6%", top: "22%", size: 4, duration: "7s", delay: "0s" },
  { left: "14%", top: "70%", size: 3, duration: "8s", delay: "1.4s" },
  { left: "28%", top: "36%", size: 5, duration: "6s", delay: "0.8s" },
  { left: "44%", top: "82%", size: 3, duration: "9s", delay: "2s" },
  { left: "58%", top: "16%", size: 4, duration: "7.5s", delay: "0.4s" },
  { left: "88%", top: "34%", size: 5, duration: "8.5s", delay: "1s" },
  { left: "94%", top: "72%", size: 3, duration: "7s", delay: "2.6s" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div className="glow-blob -left-32 top-0 size-[520px] bg-primary/20" />
        <div className="glow-blob -right-40 bottom-0 size-[560px] bg-blue-600/15" />
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
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* left: pitch */}
        <div className="text-center lg:text-left">
          <span
            className="rise-in chip"
            style={{ "--d": "0.8s" } as React.CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Toshkentdagi zamonaviy avtomaktab
          </span>

          <h1 className="font-heading mt-6 text-balance text-[2.4rem] font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {HEADLINE.map((item, i) => (
              <span key={i} className="word-mask mr-[0.26em] last:mr-0">
                <span
                  className={cn("word-rise", item.gradient && "text-gradient-animated")}
                  style={{ "--d": `${0.95 + i * 0.07}s` } as React.CSSProperties}
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
            EasyPrava — A, B, BC, C va D toifalari bo&apos;yicha to&apos;liq
            tayyorlaydigan o&apos;quv markaz. Amaliy haydashni biz bilan o&apos;tasiz,
            nazariyani esa o&apos;z ilovamizda bepul o&apos;rganasiz.
          </p>

          <div
            className="rise-in mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            style={{ "--d": "1.65s" } as React.CSSProperties}
          >
            <a href="#kurslar" className="btn-primary btn-sheen w-full px-7 py-3.5 text-sm sm:w-auto">
              Kurslar va narxlar
              <ArrowRight className="size-4" />
            </a>
            <a href={CONTACT.phoneHref} className="btn-ghost w-full px-7 py-3.5 text-sm sm:w-auto">
              <Phone className="size-4 text-primary" />
              {CONTACT.phone}
            </a>
          </div>

          <ul
            className="rise-in mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
            style={{ "--d": "1.8s" } as React.CSSProperties}
          >
            {TRUST.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="size-4 shrink-0 text-primary" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* right: lead form */}
        <div
          className="scale-in relative mx-auto w-full max-w-md"
          style={{ "--d": "1.15s" } as React.CSSProperties}
        >
          <div className="animate-pulse-glow absolute -inset-6 -z-10 rounded-[3rem] bg-primary/12 blur-3xl" />
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
