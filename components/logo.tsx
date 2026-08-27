import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-9", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ep-logo-bg" x1="4" y1="4" x2="44" y2="44">
          <stop offset="0" stopColor="#60a5fa" />
          <stop offset="0.55" stopColor="#1e6fe8" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#ep-logo-bg)" />
      <path
        d="M6 14c0-4 2-8 8-8h20c6 0 8 4 8 8"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
        fill="none"
      />
      {/* steering wheel */}
      <circle
        cx="24"
        cy="24"
        r="13.5"
        stroke="#fff"
        strokeWidth="3.2"
        fill="none"
      />
      <path
        d="M10.5 24h27M24 24v13.5"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4.5" fill="#fff" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-heading text-lg font-bold tracking-tight">
        Easy<span className="text-primary">Prava</span>
      </span>
    </span>
  );
}
