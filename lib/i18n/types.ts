/**
 * The shape every locale file must satisfy. TypeScript enforces it, so a
 * missing or misspelled key fails the build instead of shipping an
 * untranslated string.
 *
 * Only text lives here. Prices, hours, counts, phone numbers, category codes
 * and car models stay in lib/content.ts — they are the same in every locale.
 */

export type CourseCode = "A1" | "A" | "B" | "BC" | "C" | "D";
export type PackageId = "standart" | "intensiv" | "vip";
export type BranchId = "chilonzor" | "yunusobod" | "sergeli";
export type InstructorId = "rustam" | "dilnoza" | "aziz" | "sherzod";
export type FleetId =
  | "cobalt"
  | "lacetti"
  | "onix"
  | "isuzu"
  | "yutong"
  | "moto";

export type Dictionary = {
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };

  common: {
    som: string;
    perMonth: string;
    months3: string;
    hoursOfPractice: string;
    fromAge: string;
    installment: string;
    languageLabel: string;
    themeToDark: string;
    themeToLight: string;
  };

  nav: {
    courses: string;
    packages: string;
    process: string;
    app: string;
    fleet: string;
    faq: string;
    enrollCta: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
  };

  hero: {
    badge: string;
    /** Rendered word by word; keep it short. */
    headline: string[];
    /** Indexes of `headline` that get the gradient treatment. */
    headlineAccent: number[];
    lead: string;
    ctaCourses: string;
    trust: [string, string, string];
  };

  leadForm: {
    titleCompact: string;
    titleFull: string;
    subtitle: string;
    callShort: string;
    name: string;
    phone: string;
    course: string;
    courseUnsure: string;
    branch: string;
    comment: string;
    submit: string;
    sending: string;
    privacy: string;
    successTitle: string;
    successText: string;
    successTelegram: string;
    successAgain: string;
    errorName: string;
    errorPhone: string;
    errorSend: string;
    courseOption: string;
  };

  stats: {
    graduates: string;
    passRate: string;
    instructors: string;
    cars: string;
  };

  reform: {
    badge: string;
    title: string;
    titleAccent: string;
    text: string;
    theoryTitle: string;
    theoryText: string;
    practiceTitle: string;
    practiceText: string;
  };

  courses: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    categoryWord: string;
    cta: string;
    extrasTitle: string;
    extrasText: string;
    extras: {
      medical: { label: string; value: string; note: string };
      theoryExam: { label: string; value: string; note: string };
      practicalExam: { label: string; value: string; note: string };
      stateFee: { label: string; value: string; note: string };
    };
    items: Record<
      CourseCode,
      {
        title: string;
        vehicle: string;
        age: string;
        duration: string;
        badge: string | null;
        note: string | null;
        perks: string[];
      }
    >;
  };

  packages: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    popular: string;
    orSplit: string;
    cta: string;
    items: Record<
      PackageId,
      { name: string; tagline: string; features: string[] }
    >;
  };

  process: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    steps: { title: string; text: string; meta: string }[];
  };

  whyUs: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    includedTitle: string;
    includedText: string;
    included: string[];
    passTitle: string;
    passText: string;
    cards: { title: string; text: string }[];
  };

  app: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    features: { title: string; text: string }[];
    mockup: {
      greeting: string;
      tagline: string;
      quickAccess: string;
      testsTitle: string;
      testsText: string;
      lessonsTitle: string;
      lessonsText: string;
      statsTitle: string;
      statSolved: string;
      statCorrect: string;
      statLessons: string;
      tabHome: string;
      tabTests: string;
      tabLessons: string;
      tabProfile: string;
      chipTicket: string;
      chipTicketSub: string;
      chipAccuracy: string;
      chipAccuracySub: string;
      chipStreak: string;
      chipStreakSub: string;
      imageAlt: string;
    };
  };

  lessons: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    cta: string;
    /** The 20 official traffic-rules topics, in order. */
    topics: string[];
  };

  quiz: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    questionOf: string;
    questions: { question: string; options: [string, string, string] }[];
    results: { title: string; text: string }[];
    ctaEnroll: string;
    retry: string;
    announceCorrect: string;
    announceWrong: string;
    announceFinished: string;
    announceQuestion: string;
  };

  fleet: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    fuelNote: string;
    carsWord: string;
    manual: string;
    automatic: string;
    categoryLabel: Record<"A" | "B" | "C" | "D", string>;
    models: Record<FleetId, string>;
    instructorsEyebrow: string;
    instructorsTitle: string;
    instructorsTitleAccent: string;
    instructorsLead: string;
    yearsExperience: string;
    instructors: Record<
      InstructorId,
      { name: string; categories: string; note: string }
    >;
  };

  instructorApp: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    titleTail: string;
    lead: string;
    features: { title: string; text: string }[];
    cta: string;
    scheduleTitle: string;
    scheduleSub: string;
    active: string;
    lessonMeta: string;
    statusPending: string;
    statusDone: string;
    statStudents: string;
    statLessons: string;
    statWeek: string;
  };

  testimonials: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    regionAria: string;
    items: { name: string; meta: string; text: string }[];
  };

  enroll: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    quickTitle: string;
    workHours: string;
    telegramSub: string;
    branchesTitle: string;
    branches: Record<
      BranchId,
      { name: string; address: string; landmark: string }
    >;
  };

  faq: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    items: { question: string; answer: string }[];
  };

  footer: {
    about: string;
    pagesTitle: string;
    categoriesTitle: string;
    contactTitle: string;
    pageLinks: string[];
    categoryLinks: string[];
    rights: string;
    builtBy: string;
    toTop: string;
  };

  /** Big scrolling word band. */
  marquee: string[];
};
