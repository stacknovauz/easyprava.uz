import { AppSection } from "@/components/landing/app-section";
import { Courses } from "@/components/landing/courses";
import { Enroll } from "@/components/landing/enroll";
import { ExamQuiz } from "@/components/landing/exam-quiz";
import { Faq } from "@/components/landing/faq";
import { Fleet } from "@/components/landing/fleet";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Instructor } from "@/components/landing/instructor";
import { Lessons } from "@/components/landing/lessons";
import { Packages } from "@/components/landing/packages";
import { Preloader } from "@/components/landing/preloader";
import { Process } from "@/components/landing/process";
import { ReformBanner } from "@/components/landing/reform-banner";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { WhyUs } from "@/components/landing/why-us";
import { WordMarquee } from "@/components/landing/word-marquee";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ReformBanner />
        <Courses />
        <WordMarquee />
        <Packages />
        <Process />
        <WhyUs />
        <AppSection />
        <Lessons />
        <ExamQuiz />
        <Fleet />
        <Instructor />
        <Testimonials />
        <Enroll />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
