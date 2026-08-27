import { DownloadCta } from "@/components/landing/download-cta";
import { ExamQuiz } from "@/components/landing/exam-quiz";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Instructor } from "@/components/landing/instructor";
import { Lessons } from "@/components/landing/lessons";
import { Preloader } from "@/components/landing/preloader";
import { Pricing } from "@/components/landing/pricing";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { WordMarquee } from "@/components/landing/word-marquee";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <WordMarquee />
        <Lessons />
        <HowItWorks />
        <ExamQuiz />
        <Instructor />
        <Testimonials />
        <Pricing />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
