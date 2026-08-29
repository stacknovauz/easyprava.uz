"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2, Phone, Send } from "lucide-react";
import { CONTACT, COURSES, BRANCHES } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "done" | "error";

type LeadFormProps = {
  /** compact = hero variant (3 fields), full = enrollment section */
  variant?: "compact" | "full";
  className?: string;
};

export function LeadForm({ variant = "compact", className }: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      course: String(data.get("course") ?? ""),
      branch: String(data.get("branch") ?? ""),
      comment: String(data.get("comment") ?? ""),
    };

    if (payload.name.trim().length < 2) {
      setError("Ismingizni to'liq yozing");
      setStatus("error");
      return;
    }
    if (payload.phone.replace(/\D/g, "").length < 9) {
      setError("Telefon raqamini to'liq kiriting");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
      setError("Yuborishda xatolik. Iltimos, telefon orqali bog'laning.");
    }
  };

  if (status === "done") {
    return (
      <div
        className={cn(
          "glass-card flex flex-col items-center rounded-3xl p-8 text-center",
          className
        )}
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-success/12 text-success">
          <Check className="size-7" />
        </span>
        <h3 className="font-heading mt-5 text-xl font-bold">Arizangiz qabul qilindi!</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
          15 daqiqa ichida qo&apos;ng&apos;iroq qilamiz va sizga mos toifa hamda
          jadvalni birga tanlaymiz.
        </p>
        <a
          href={CONTACT.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost mt-6 px-5 py-2.5 text-sm"
        >
          <Send className="size-4 text-primary" />
          Telegram&apos;da yozish
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-3 text-xs text-muted-foreground underline underline-offset-4"
        >
          Yana ariza qoldirish
        </button>
      </div>
    );
  }

  const isFull = variant === "full";

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "glass-card rounded-3xl p-6 sm:p-8",
        isFull && "conic-border",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-lg font-bold">
            {isFull ? "Kursga yozilish" : "Bepul konsultatsiya"}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            15 daqiqa ichida bog&apos;lanamiz
          </p>
        </div>
        <a
          href={CONTACT.phoneHref}
          className="hidden shrink-0 items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-semibold transition-colors hover:border-primary/40 sm:inline-flex"
        >
          <Phone className="size-3.5 text-primary" />
          Qo&apos;ng&apos;iroq
        </a>
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <label htmlFor={`name-${variant}`} className="sr-only">
            Ismingiz
          </label>
          <input
            id={`name-${variant}`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Ismingiz"
            className="field"
          />
        </div>

        <div>
          <label htmlFor={`phone-${variant}`} className="sr-only">
            Telefon raqamingiz
          </label>
          <input
            id={`phone-${variant}`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            defaultValue="+998 "
            placeholder="+998 90 123 45 67"
            className="field"
          />
        </div>

        <div>
          <label htmlFor={`course-${variant}`} className="sr-only">
            Qaysi toifa
          </label>
          <select id={`course-${variant}`} name="course" className="field" defaultValue="B">
            {COURSES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} toifa — {c.title}
              </option>
            ))}
            <option value="Bilmayman">Hali tanlamadim — maslahat kerak</option>
          </select>
        </div>

        {isFull && (
          <>
            <div>
              <label htmlFor="branch-full" className="sr-only">
                Filial
              </label>
              <select id="branch-full" name="branch" className="field" defaultValue={BRANCHES[0].name}>
                {BRANCHES.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="comment-full" className="sr-only">
                Izoh
              </label>
              <textarea
                id="comment-full"
                name="comment"
                rows={3}
                placeholder="Izoh — masalan: kechqurun qulay, ayol instruktor kerak"
                className="field resize-none"
              />
            </div>
          </>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary btn-sheen mt-5 w-full px-6 py-3.5 text-sm disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Yuborilmoqda...
          </>
        ) : (
          <>
            Ariza qoldirish
            <ArrowRight className="size-4" />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
        Ma&apos;lumotlaringiz faqat siz bilan bog&apos;lanish uchun ishlatiladi
      </p>
    </form>
  );
}
