import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Flame,
  Home,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * CSS-built iPhone frame showing a recreation of the actual EasyPrava app
 * home screen (hero card, quick access, stats, liquid-glass tab bar).
 */
export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-fit mx-auto", className)} aria-hidden="true">
      {/* ambient glow behind the phone */}
      <div className="animate-pulse-glow absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[110px]" />

      {/* floating result chips */}
      <div
        className="animate-float absolute -left-36 top-12 z-10 hidden items-center gap-2 rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-xl shadow-primary/10 backdrop-blur-xl md:flex"
        style={{ "--float-duration": "7s" } as React.CSSProperties}
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-4" />
        </span>
        <div className="text-left">
          <p className="text-xs font-semibold">7-bilet — 18/20</p>
          <p className="text-[11px] text-muted-foreground">Imtihondan o&apos;tdingiz!</p>
        </div>
      </div>

      <div
        className="animate-float absolute -right-40 top-48 z-10 hidden items-center gap-2 rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-xl shadow-primary/10 backdrop-blur-xl md:flex"
        style={
          { "--float-duration": "8s", "--float-delay": "1.2s" } as React.CSSProperties
        }
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
          <BarChart3 className="size-4" />
        </span>
        <div className="text-left">
          <p className="text-xs font-semibold">94% to&apos;g&apos;ri javob</p>
          <p className="text-[11px] text-muted-foreground">So&apos;nggi 7 kun</p>
        </div>
      </div>

      <div
        className="animate-float absolute -left-36 bottom-36 z-10 hidden items-center gap-2 rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-xl shadow-primary/10 backdrop-blur-xl md:flex"
        style={
          { "--float-duration": "6.5s", "--float-delay": "0.6s" } as React.CSSProperties
        }
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
          <Flame className="size-4" />
        </span>
        <div className="text-left">
          <p className="text-xs font-semibold">12 kunlik seriya</p>
          <p className="text-[11px] text-muted-foreground">Har kuni mashq</p>
        </div>
      </div>

      {/* phone frame */}
      <div className="relative mx-auto w-[290px] max-w-[calc(100vw-2.5rem)] rounded-[3rem] border border-border bg-foreground/5 p-2 shadow-2xl shadow-primary/15 backdrop-blur">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="flex h-[590px] flex-col px-4 pb-4 pt-12">
            {/* app header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-muted-foreground">Xush kelibsiz 👋</p>
                <p className="font-heading text-sm font-bold">EasyPrava</p>
              </div>
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/12 text-primary">
                <User className="size-4" />
              </div>
            </div>

            {/* hero card */}
            <div className="mt-4 rounded-2xl bg-[#1e6fe8] p-4 text-white shadow-lg shadow-[#1e6fe8]/30">
              <p className="font-heading text-sm font-bold">EasyPrava</p>
              <p className="mt-1 text-[11px] leading-relaxed text-white/85">
                Haydovchilik guvohnomasiga tayyorlanish — testlar va darslar bir
                joyda
              </p>
            </div>

            {/* quick access */}
            <p className="mt-4 text-xs font-semibold">Tez o&apos;tish</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-2xl border border-border bg-card p-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <ClipboardList className="size-4" />
                </span>
                <p className="mt-2 text-xs font-semibold">Testlar</p>
                <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                  Imtihon biletlarini yeching
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-3">
                <span className="flex size-8 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <BookOpen className="size-4" />
                </span>
                <p className="mt-2 text-xs font-semibold">Darslar</p>
                <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                  Yo&apos;l harakati qoidalari
                </p>
              </div>
            </div>

            {/* stats */}
            <p className="mt-4 text-xs font-semibold">Statistika</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[
                { value: "128", label: "Yechilgan" },
                { value: "94%", label: "To'g'ri" },
                { value: "14/20", label: "Darslar" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-2.5 text-center"
                >
                  <p className="font-heading text-sm font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* liquid glass tab bar */}
            <div className="mt-auto flex items-center justify-between rounded-full border border-border bg-card/70 px-5 py-2.5 shadow-lg backdrop-blur">
              <span className="flex flex-col items-center gap-0.5 text-primary">
                <Home className="size-4" />
                <span className="text-[9px] font-medium">Bosh sahifa</span>
              </span>
              <span className="flex flex-col items-center gap-0.5 text-muted-foreground">
                <ClipboardList className="size-4" />
                <span className="text-[9px]">Testlar</span>
              </span>
              <span className="flex flex-col items-center gap-0.5 text-muted-foreground">
                <BookOpen className="size-4" />
                <span className="text-[9px]">Darslar</span>
              </span>
              <span className="flex flex-col items-center gap-0.5 text-muted-foreground">
                <User className="size-4" />
                <span className="text-[9px]">Profil</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
