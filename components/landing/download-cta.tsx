import { Bell, Send } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.05 20.28c-.98.95-2.05.86-3.08.38-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.38C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.61 1.81c-.35.37-.55.94-.55 1.68v17.02c0 .74.2 1.31.56 1.66l.09.08 9.53-9.53v-.21L3.7 1.73l-.09.08zm12.8 6.72L13.6 11.3l2.81 2.81 3.58-2.03c1.02-.58 1.02-1.53 0-2.12l-3.58-2.03v.6-.6zm-.66 6.34-2.9-2.87-9.57 9.53c.34.36.89.4 1.52.05l10.95-6.71zM4.8 2.53l10.95 6.7-2.9 2.9L4.8 2.53c-.01 0-.01 0 0 0z" />
    </svg>
  );
}

export function DownloadCta() {
  return (
    <section id="yuklab" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/25 bg-gradient-to-br from-[#1e6fe8] via-[#1b5fd0] to-[#1d4ed8] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            {/* decorative layers */}
            <div className="bg-grid absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
            <div className="animate-pulse-glow absolute -left-24 -top-24 size-72 rounded-full bg-white/15 blur-[90px]" />
            <div className="animate-pulse-glow absolute -bottom-32 -right-20 size-80 rounded-full bg-blue-300/20 blur-[100px]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                <Bell className="size-4" />
                Tez orada App Store va Google Play&apos;da
              </span>

              <h2 className="font-heading mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                Bugun boshlang — prava sizni kutmoqda
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
                Telegram kanalimizga obuna bo&apos;ling va ilova chiqishi bilan
                birinchilardan bo&apos;lib undan bepul foydalanish imkonini
                qo&apos;lga kiriting.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://t.me/easyprava_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sheen inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1d4ed8] shadow-xl transition-all hover:-translate-y-0.5 sm:w-auto"
                >
                  <Send className="size-4" />
                  Telegram&apos;da kuzatish
                </a>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <span className="inline-flex w-full cursor-default items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur sm:w-auto">
                    <AppleIcon className="size-5" />
                    <span className="text-left leading-tight">
                      <span className="block text-[10px] uppercase tracking-wide text-white/95">
                        Tez orada
                      </span>
                      <span className="block text-sm font-bold">App Store</span>
                    </span>
                  </span>
                  <span className="inline-flex w-full cursor-default items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur sm:w-auto">
                    <PlayIcon className="size-5" />
                    <span className="text-left leading-tight">
                      <span className="block text-[10px] uppercase tracking-wide text-white/95">
                        Tez orada
                      </span>
                      <span className="block text-sm font-bold">Google Play</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
