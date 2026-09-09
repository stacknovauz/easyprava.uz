"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Trophy,
  XCircle,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { QUIZ_ANSWERS } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const fill = (template: string, current: number, total: number) =>
  template
    .replace("{current}", String(current))
    .replace("{total}", String(total));

export function ExamQuiz({ dict }: { dict: Dictionary["quiz"] }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const questionRef = useRef<HTMLHeadingElement>(null);

  const questions = dict.questions;
  const question = questions[step];
  const correctIndex = QUIZ_ANSWERS[step];

  const pick = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    const isCorrect = index === correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    setAnnouncement(isCorrect ? dict.announceCorrect : dict.announceWrong);
    setTimeout(() => {
      if (step + 1 < questions.length) {
        setStep((s) => s + 1);
        setSelected(null);
        setAnnouncement(fill(dict.announceQuestion, step + 2, questions.length));
        questionRef.current?.focus();
      } else {
        setFinished(true);
        setAnnouncement(dict.announceFinished);
      }
    }, 900);
  };

  const restart = () => {
    setStep(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnnouncement("");
  };

  return (
    <section id="sinov" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="absolute left-0 top-1/4 -z-10 size-[440px] rounded-full bg-primary/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-[2.75rem]">
            {dict.title}{" "}
            <span className="text-gradient">{dict.titleAccent}</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dict.lead}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-12 max-w-2xl">
          <div className="sr-only" role="status" aria-live="polite">
            {announcement}
          </div>
          <div className="glass-card conic-border rounded-3xl p-6 sm:p-10">
            {!finished ? (
              <>
                {/* progress */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {fill(dict.questionOf, step + 1, questions.length)}
                  </span>
                  <div className="flex gap-1.5">
                    {questions.map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-1.5 w-8 rounded-full transition-colors",
                          i < step
                            ? "bg-success"
                            : i === step
                              ? "bg-primary"
                              : "bg-muted"
                        )}
                      />
                    ))}
                  </div>
                </div>

                <h3
                  ref={questionRef}
                  tabIndex={-1}
                  className="font-heading mt-6 text-lg font-bold leading-snug outline-none sm:text-xl"
                >
                  {question.question}
                </h3>

                <div className="mt-6 space-y-3">
                  {question.options.map((option, i) => {
                    const isPicked = selected === i;
                    const isCorrect = i === correctIndex;
                    const showState = selected !== null;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => pick(i)}
                        aria-disabled={selected !== null}
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-all",
                          !showState &&
                            "border-border bg-card/60 hover:-translate-y-0.5 hover:border-primary/50",
                          showState && isCorrect &&
                            "border-success/60 bg-success/10 text-success",
                          showState && isPicked && !isCorrect &&
                            "border-destructive/60 bg-destructive/10 text-destructive",
                          showState && !isPicked && !isCorrect && "border-border opacity-50"
                        )}
                      >
                        <span>{option}</span>
                        {showState && isCorrect && (
                          <CheckCircle2 className="size-5 shrink-0" />
                        )}
                        {showState && isPicked && !isCorrect && (
                          <XCircle className="size-5 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center py-4 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Trophy className="size-8" />
                </span>
                <p className="font-heading mt-5 text-4xl font-extrabold">
                  <span className="text-gradient">
                    {score}/{questions.length}
                  </span>
                </p>
                <h3 className="font-heading mt-3 text-xl font-bold">
                  {dict.results[score].title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {dict.results[score].text}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#kurslar"
                    className="btn-sheen inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
                  >
                    {dict.ctaEnroll}
                    <ArrowRight className="size-4" />
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold transition-all hover:border-primary/40"
                  >
                    <RefreshCw className="size-4" />
                    {dict.retry}
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
