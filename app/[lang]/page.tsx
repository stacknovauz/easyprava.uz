import { notFound } from "next/navigation";
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
import { getDictionary } from "./dictionaries";
import { isLocale } from "@/lib/i18n/config";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Preloader />
      <Header dict={dict} locale={lang} />
      <main className="flex-1">
        <Hero dict={dict} />
        <Stats dict={dict} />
        <ReformBanner dict={dict} />
        <Courses dict={dict} />
        <WordMarquee dict={dict} />
        <Packages dict={dict} />
        <Process dict={dict} />
        <WhyUs dict={dict} />
        <AppSection dict={dict} />
        <Lessons dict={dict} />
        <ExamQuiz dict={dict.quiz} />
        <Fleet dict={dict} />
        <Instructor dict={dict} />
        <Testimonials dict={dict} />
        <Enroll dict={dict} />
        <Faq dict={dict.faq} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
