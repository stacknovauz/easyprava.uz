import type { Dictionary } from "@/lib/i18n/types";

const dict: Dictionary = {
  meta: {
    title: "EasyPrava — driving school in Tashkent",
    titleTemplate: "%s | EasyPrava",
    description:
      "EasyPrava is a licensed driving school in Tashkent. We prepare you for categories A, B, BC, C and D: behind-the-wheel training on our own training ground, theory free in our own app. Prices from 1 200 000 UZS, payable over 3 months.",
    keywords: [
      "driving school",
      "driving school Tashkent",
      "driving lessons",
      "category B price",
      "driving licence",
      "get a licence in Tashkent",
      "behind-the-wheel training",
      "autodrome",
      "EasyPrava",
    ],
    ogTitle: "EasyPrava — driving school in Tashkent",
    ogDescription:
      "Full preparation for categories A, B, BC, C and D. Practice on our own training ground, theory free in the app. Pay over 3 months.",
    twitterTitle: "EasyPrava — driving school in Tashkent",
    twitterDescription:
      "Full preparation for categories A, B, BC, C and D — transparent prices, instalments available.",
  },

  common: {
    som: "UZS",
    perMonth: "UZS/month",
    months3: "3 months",
    hoursOfPractice: "hours of practice",
    fromAge: "from age",
    installment: "Pay over 3 months, interest-free",
    languageLabel: "Language",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
  },

  nav: {
    courses: "Courses",
    packages: "Packages",
    process: "How it works",
    app: "App",
    fleet: "Fleet",
    faq: "FAQ",
    enrollCta: "Apply now",
    homeAria: "EasyPrava — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    badge: "Tashkent's modern driving school",
    headline: ["Get", "your", "driving", "licence", "in", "3", "months"],
    headlineAccent: [5, 6],
    lead: "EasyPrava is a driving school with full preparation for categories A, B, BC, C and D. You do the behind-the-wheel training with us and learn the theory free in our own app.",
    ctaCourses: "Courses and prices",
    trust: [
      "Licensed driving school",
      "Our own training ground",
      "Theory in the app — free",
    ],
  },

  leadForm: {
    titleCompact: "Free consultation",
    titleFull: "Enrol on a course",
    subtitle: "We call back within 15 minutes",
    callShort: "Call us",
    name: "Your name",
    phone: "Your phone number",
    course: "Which category",
    courseUnsure: "Not sure yet — I need advice",
    branch: "Branch",
    comment: "Comment — e.g. evenings work best, female instructor please",
    submit: "Request a call back",
    sending: "Sending...",
    privacy: "Your details are used only to get in touch with you",
    successTitle: "Your request has been received!",
    successText:
      "We will call you within 15 minutes and choose the right category and schedule together.",
    successTelegram: "Message us on Telegram",
    successAgain: "Send another request",
    errorName: "Please enter your full name",
    errorPhone: "Please enter a complete phone number",
    errorSend: "Something went wrong. Please call us instead.",
    courseOption: "Category {code} — {title}",
  },

  stats: {
    graduates: "Graduates with a licence",
    passRate: "Pass on the first attempt",
    instructors: "Experienced instructors",
    cars: "Training vehicles",
  },

  reform: {
    badge: "In force since 1 February 2026",
    title: "Theory classes are now",
    titleAccent: "optional",
    text: "The law has changed for categories A and B: you are free to learn the traffic rules on your own. Behind-the-wheel training stays mandatory and must be done at a licensed driving school. EasyPrava brings the two together.",
    theoryTitle: "Theory — in the app",
    theoryText: "Free for our students, whenever it suits them",
    practiceTitle: "Practice — at the school",
    practiceText: "Logged on your electronic certificate",
  },

  courses: {
    eyebrow: "Courses and prices",
    title: "Whatever category you need —",
    titleAccent: "we teach it",
    lead: "Prices are transparent and final. Every course includes your driving hours, training-ground practice and the EasyPrava app.",
    categoryWord: "category",
    cta: "Enrol now",
    extrasTitle: "State fees on top of the course",
    extrasText:
      "These are paid to the state and the examination centre, not to the school. We list them up front so nothing comes as a surprise later.",
    extras: {
      medical: {
        label: "Medical certificate (form 083/h)",
        value: "200 000 – 400 000 UZS",
        note: "Local clinic",
      },
      theoryExam: {
        label: "Theory exam",
        value: "1 500 000 UZS",
        note: "Examination centre",
      },
      practicalExam: {
        label: "Practical exam (training ground)",
        value: "1 500 000 UZS",
        note: "Examination centre",
      },
      stateFee: {
        label: "State fee (licence)",
        value: "618 000 UZS",
        note: "State budget",
      },
    },
    items: {
      A1: {
        title: "Moped and scooter",
        vehicle: "Mopeds and scooters up to 50 cm³",
        age: "From 16",
        duration: "3 weeks",
        badge: "Optional course",
        note: "No driving school is required for A1 — you may take the exam directly. This course is for riders who want to feel confident on the road.",
        perks: [
          "Theory in the app — free",
          "12 hours of riding practice",
          "16 correct answers out of 20 is enough to pass",
        ],
      },
      A: {
        title: "Motorcycle",
        vehicle: "Motorcycles of every class",
        age: "From 18",
        duration: "1 – 1.5 months",
        badge: null,
        note: null,
        perks: [
          "Theory in the app",
          "20 hours of practice",
          "Protective gear provided",
        ],
      },
      B: {
        title: "Car",
        vehicle: "Up to 3 500 kg, up to 8 seats",
        age: "From 18 (start at 17)",
        duration: "2.5 – 3 months",
        badge: "Most chosen",
        note: null,
        perks: [
          "50 hours behind the wheel",
          "Manual or automatic",
          "Training ground plus city driving",
          "Mock exam + one free retake",
        ],
      },
      BC: {
        title: "Car + truck",
        vehicle: "Cars and trucks",
        age: "From 18",
        duration: "3.5 – 4 months",
        badge: "Two categories in one",
        note: null,
        perks: [
          "70 hours of practice",
          "Preparation for both categories",
          "Cheaper than two courses",
        ],
      },
      C: {
        title: "Truck",
        vehicle: "Trucks over 3 500 kg",
        age: "From 18",
        duration: "1.5 – 2 months",
        badge: null,
        note: null,
        perks: [
          "40 hours of practice",
          "For drivers who already hold B",
          "Practice in a real truck",
        ],
      },
      D: {
        title: "Bus",
        vehicle: "More than 8 passenger seats",
        age: "From 21",
        duration: "2 – 2.5 months",
        badge: null,
        note: null,
        perks: [
          "60 hours of practice",
          "Passenger safety training",
          "Help finding work",
        ],
      },
    },
  },

  packages: {
    eyebrow: "Category B packages",
    title: "Choose your own",
    titleAccent: "pace",
    lead: "Three formats for our most popular category B — unhurried in a group, intensive, or entirely one-to-one.",
    popular: "Most popular",
    orSplit: "or over 3 months —",
    cta: "Choose this package",
    items: {
      standart: {
        name: "Standard",
        tagline: "On the group timetable",
        features: [
          "50 hours behind the wheel",
          "Group timetable (3 days a week)",
          "Training ground and city driving",
          "EasyPrava app — free",
          "Mock exam",
        ],
      },
      intensiv: {
        name: "Intensive",
        tagline: "Ready in one month",
        features: [
          "50 hours of practice — fast track",
          "Lessons 5 days a week",
          "Help booking your exam slot",
          "EasyPrava Premium — free",
          "2 free retakes",
          "A personal coordinator",
        ],
      },
      vip: {
        name: "VIP one-to-one",
        tagline: "With your own instructor",
        features: [
          "60 hours of one-to-one lessons",
          "Whenever it suits you",
          "Pick-up from your door",
          "Automatic-transmission car",
          "Full support right up to the exam",
          "Unlimited help with retakes",
        ],
      },
    },
  },

  process: {
    eyebrow: "How it works",
    title: "From application to licence —",
    titleAccent: "6 steps",
    lead: "We tell you what to do at every stage. All you have to think about is learning to drive.",
    steps: [
      {
        title: "You apply",
        text: "Leave a request on the site — we call back within 15 minutes and choose your category and schedule together.",
        meta: "15 minutes",
      },
      {
        title: "You hand in your documents",
        text: "Passport or ID card and a medical certificate (form 083/h). We will point you to the right clinic too.",
        meta: "1 day",
      },
      {
        title: "You learn the theory in the app",
        text: "Theory classes are optional from 2026. The EasyPrava app gives you 20 topics and 400 test questions — free.",
        meta: "At your own pace",
      },
      {
        title: "You take your driving lessons",
        text: "Practice on the training ground, then out into city traffic. Every hour is logged on your electronic certificate.",
        meta: "50 hours",
      },
      {
        title: "You sit our mock exam",
        text: "A full rehearsal under state-exam conditions. We keep adding practice until you pass it.",
        meta: "1 day",
      },
      {
        title: "State exam and licence",
        text: "The theory test (20 questions in 25 minutes, 18 correct answers; 16 for A1) and the practical exam at the autodrome. Then your licence via my.gov.uz.",
        meta: "Valid for 10 years",
      },
    ],
  },

  whyUs: {
    eyebrow: "Why EasyPrava",
    title: "Not your ordinary",
    titleAccent: "driving school",
    lead: "Two things other schools do not have: our own app for the theory, and a separate management system for our instructors.",
    includedTitle: "What the course price includes",
    includedText:
      "No hidden charges — fuel and training-ground time are both in the price.",
    included: [
      "Certificate from a licensed driving school",
      "Driving lessons with an experienced instructor",
      "Fuel and training-car costs",
      "Parallel parking and ramp practice on the training ground",
      "Real driving on city streets",
      "EasyPrava app — theory and tests free",
      "Mock exam and a review of your mistakes",
      "Help booking your state exam slot",
    ],
    passTitle: "Pass on the first attempt",
    passText:
      "Our mock exam runs in exactly the state-exam format — which is why our students rarely need a retake.",
    cards: [
      {
        title: "Pay in instalments",
        text: "Interest-free for up to 3 months. Lessons start as soon as the first payment lands.",
      },
      {
        title: "Flexible timetable",
        text: "Morning, afternoon or evening — pick whatever fits around your job.",
      },
      {
        title: "Female instructors",
        text: "Just ask and we will match you with the right instructor.",
      },
      {
        title: "Next to the metro",
        text: "Both branches are a 5-minute walk from a metro station.",
      },
      {
        title: "Insured fleet",
        text: "Dual-control cars, all serviced and technically inspected.",
      },
      {
        title: "Official licence",
        text: "Your electronic certificate goes to the exam centre automatically.",
      },
    ],
  },

  app: {
    eyebrow: "Free for our students",
    title: "Learn the theory in",
    titleAccent: "our own app",
    lead: "No sitting in a classroom. Once you enrol, the full version of the EasyPrava app is unlocked free — study on the metro or at home.",
    features: [
      {
        title: "20 exam tickets",
        text: "Official format: 20 questions in 25 minutes per ticket — 400 questions in all.",
      },
      {
        title: "20 theory topics",
        text: "The traffic rules in plain language, with signs and worked examples.",
      },
      {
        title: "Real exam mode",
        text: "18 correct answers to pass — the same test you face at the state exam.",
      },
      {
        title: "Work on your mistakes",
        text: "Wrong answers are collected separately and served back to you.",
      },
      {
        title: "Your instructor sees it",
        text: "Your progress reaches your instructor, who drills the weak topics in the lesson.",
      },
      {
        title: "iOS and Android",
        text: "Premium access opens free the moment you enrol on a course.",
      },
    ],
    mockup: {
      greeting: "Welcome 👋",
      tagline:
        "Prepare for your driving licence — tests and lessons in one place",
      quickAccess: "Quick access",
      testsTitle: "Tests",
      testsText: "Work through the exam tickets",
      lessonsTitle: "Lessons",
      lessonsText: "Traffic rules",
      statsTitle: "Statistics",
      statSolved: "Solved",
      statCorrect: "Correct",
      statLessons: "Lessons",
      tabHome: "Home",
      tabTests: "Tests",
      tabLessons: "Lessons",
      tabProfile: "Profile",
      chipTicket: "Ticket 7 — 18/20",
      chipTicketSub: "You passed!",
      chipAccuracy: "94% correct",
      chipAccuracySub: "Last 7 days",
      chipStreak: "12-day streak",
      chipStreakSub: "Practice every day",
      imageAlt: "The EasyPrava app home screen",
    },
  },

  lessons: {
    eyebrow: "Curriculum",
    title: "20 topics — the complete",
    titleAccent: "theory course",
    lead: "Every section of the traffic rules, from the general provisions to motorway driving. Each topic is reinforced with real exam questions.",
    cta: "Read every lesson in the app",
    topics: [
      "General provisions",
      "General duties of drivers",
      "Duties of pedestrians",
      "Duties of passengers",
      "Traffic lights and officers' signals",
      "Warning signs",
      "Priority signs",
      "Prohibitory signs",
      "Mandatory signs",
      "Information and direction signs",
      "Road markings",
      "Moving off and manoeuvring",
      "Speed limits",
      "Overtaking",
      "Stopping and parking",
      "Driving through junctions",
      "Pedestrian crossings",
      "Level crossings",
      "Motorway driving",
      "Using lights and signals",
    ],
  },

  quiz: {
    eyebrow: "Mini exam",
    title: "Test yourself right",
    titleAccent: "now",
    lead: "Three questions straight from the state exam. How solid is your theory?",
    questionOf: "Question {current} of {total}",
    questions: [
      {
        question: "What does a yellow traffic light mean?",
        options: [
          "Traffic may proceed",
          "Traffic must stop; it warns that the signals are changing",
          "Speed up and clear the junction",
        ],
      },
      {
        question:
          "Approaching an unregulated pedestrian crossing, what must a driver do?",
        options: [
          "Sound the horn and drive through without stopping",
          "Give way only to elderly pedestrians",
          "Slow down and give way to pedestrians",
        ],
      },
      {
        question: "What is the maximum speed for cars in built-up areas?",
        options: ["60 km/h", "70 km/h", "90 km/h"],
      },
    ],
    results: [
      {
        title: "A perfect reason to start!",
        text: "Your theory is shaky for now — but don't worry, the 20 topics in EasyPrava are made for exactly this.",
      },
      {
        title: "A good start!",
        text: "The basics are there, but the exam asks for 90%+. Firm the knowledge up with the lessons.",
      },
      {
        title: "Strong result!",
        text: "You are close to exam-ready. Work through the tickets and close the last few gaps.",
      },
      {
        title: "You are ready!",
        text: "Excellent. Now run all 20 tickets in real exam mode to lock the result in.",
      },
    ],
    ctaEnroll: "Enrol now",
    retry: "Try again",
    announceCorrect: "Correct answer!",
    announceWrong: "Wrong answer.",
    announceFinished: "Quiz finished.",
    announceQuestion: "Question {current} of {total}",
  },

  fleet: {
    eyebrow: "Fleet",
    title: "cars in our",
    titleAccent: "training fleet",
    lead: "Every one of them dual-control and insured. Manual and automatic gearboxes alike.",
    fuelNote: "Fuel is included in the course price",
    carsWord: "cars in our",
    manual: "Manual",
    automatic: "Automatic",
    categoryLabel: {
      A: "Category A",
      B: "Category B",
      C: "Category C",
      D: "Category D",
    },
    models: {
      cobalt: "Chevrolet Cobalt",
      lacetti: "Chevrolet Lacetti",
      onix: "Chevrolet Onix",
      isuzu: "Isuzu NQR",
      yutong: "Yutong bus",
      moto: "Motorcycle (250 cm³)",
    },
    instructorsEyebrow: "Instructors",
    instructorsTitle: "You will be taught by a",
    instructorsTitleAccent: "seasoned pro",
    instructorsLead:
      "Every instructor holds an official certificate and answers personally for their students' results.",
    yearsExperience: "years of experience",
    instructors: {
      rustam: {
        name: "Rustam Qodirov",
        categories: "Categories B, BC",
        note: "Manual · Automatic",
      },
      dilnoza: {
        name: "Dilnoza Karimova",
        categories: "Category B",
        note: "Female instructor",
      },
      aziz: {
        name: "Aziz Toshmatov",
        categories: "Categories C, D",
        note: "Trucks and buses",
      },
      sherzod: {
        name: "Sherzod Ismoilov",
        categories: "Categories A, A1",
        note: "Motorcycle and moped",
      },
    },
  },

  instructorApp: {
    eyebrow: "Our in-house system",
    title: "Our instructors work in",
    titleAccent: "EasyPrava Instruktor",
    titleTail: ", our own app",
    lead: "Every instructor has a dedicated app: lesson schedule, student progress and hours completed. Not one of your lessons slips through the cracks.",
    features: [
      {
        title: "Student list",
        text: "Every student's category and progress, all on one screen.",
      },
      {
        title: "Weekly schedule",
        text: "Lessons grouped by day — today's plan is always in view.",
      },
      {
        title: "Lesson controls",
        text: "Topic, duration and sign-off — run each lesson from a single button.",
      },
      {
        title: "Electronic certificate",
        text: "Every hour behind the wheel is logged and sent on to the exam centre.",
      },
    ],
    cta: "Work with us as an instructor",
    scheduleTitle: "Today's schedule",
    scheduleSub: "Wednesday, 3 lessons",
    active: "Active",
    lessonMeta: "Driving lesson · 90 minutes",
    statusPending: "Upcoming",
    statusDone: "Done",
    statStudents: "Students",
    statLessons: "Lessons taught",
    statWeek: "This week",
  },

  testimonials: {
    eyebrow: "Reviews",
    title: "What our graduates",
    titleAccent: "say",
    regionAria: "Student reviews",
    items: [
      {
        name: "Jasurbek",
        meta: "Category B · Chilonzor branch",
        text: "My instructor was remarkably patient — I was not afraid to drive into city traffic from the very first day. I learned the theory in the app and passed first time with 19/20.",
      },
      {
        name: "Madina",
        meta: "Category B · Yunusobod branch",
        text: "I asked for a female instructor and got one. The timetable was built around my job, so I practised in the evenings. I had my licence in 2.5 months.",
      },
      {
        name: "Sardor",
        meta: "Category BC · Sergeli training ground",
        text: "I took both categories together — far cheaper than doing them separately. Practising in the exact exam format on the autodrome helped enormously.",
      },
      {
        name: "Nilufar",
        meta: "Category B · Chilonzor branch",
        text: "I chose EasyPrava because I could pay in instalments. The stats in the app motivated me every single day — I finished the topics in two weeks.",
      },
      {
        name: "Bekzod",
        meta: "Category A · Yunusobod branch",
        text: "I came for the motorcycle category and finished in a month. The school provided the protective gear, so there were no extra costs.",
      },
    ],
  },

  enroll: {
    eyebrow: "Apply",
    title: "Let's get",
    titleAccent: "started",
    lead: "Fill in the form — we call back within 15 minutes and pick the right category, branch and schedule together.",
    quickTitle: "Quick contact",
    workHours: "Mon–Sat, 09:00 – 19:00",
    telegramSub: "Message us on Telegram",
    branchesTitle: "Our branches",
    branches: {
      chilonzor: {
        name: "Chilonzor branch",
        address: "12 Bunyodkor Avenue, Chilonzor district, Tashkent",
        landmark: "5 minutes from Chilonzor metro",
      },
      yunusobod: {
        name: "Yunusobod branch",
        address: "108 Amir Temur Street, Yunusobod district, Tashkent",
        landmark: "Next to Shahriston metro",
      },
      sergeli: {
        name: "Sergeli training ground",
        address: "Yangi Sergeli block 4, Sergeli district, Tashkent",
        landmark: "Practical exam drills happen here",
      },
    },
  },

  faq: {
    eyebrow: "Q&A",
    title: "Frequently asked",
    titleAccent: "questions",
    items: [
      {
        question: "Are theory classes compulsory?",
        answer:
          "No. Since 1 February 2026, theory classes have been optional for categories A and B — you are free to learn the rules on your own. We give you the EasyPrava app free for exactly that: 20 topics, 400 test questions and an exam mode. Behind-the-wheel training, though, is mandatory and must be done at a licensed driving school.",
      },
      {
        question: "Do I need a course for A1 (mopeds) as well?",
        answer:
          "No. Category A1, introduced on 1 January 2026, requires no driving school at all — you may take the exam directly (16 correct answers out of 20 is enough). We offer the A1 course purely as optional preparation for people who want to ride with real confidence.",
      },
      {
        question: "How do I enrol?",
        answer:
          "Fill in the form on this page or give us a call. We get back to you within 15 minutes and choose the category and schedule that suit you. Bring your documents to the branch and the contract is signed the same day.",
      },
      {
        question: "Which documents do I need?",
        answer:
          "Your passport or ID card (the original) and a medical certificate (form 083/h). The medical certificate is valid for one year — we will show you where to get it. For category B the licence is issued at 18, but you may start training at 17.",
      },
      {
        question: "Can I pay in instalments?",
        answer:
          "Yes. You can spread the course fee over up to 3 months interest-free — lessons start right after the first payment. Payme, Click and bank cards are all accepted.",
      },
      {
        question: "What happens if I fail the exam?",
        answer:
          "On the Intensive and VIP packages, retake preparation is free: we add extra practice on your weak topics. The Standard package also includes one free extra driving lesson. The fee for retaking the state exam (1.5 million UZS) is paid to the examination centre.",
      },
      {
        question: "Can I learn in an automatic?",
        answer:
          "Yes, our fleet has both manual and automatic cars. Learning in an automatic is included in the VIP package; on Standard and Intensive it can be added for an extra fee.",
      },
      {
        question: "Do you have female instructors?",
        answer:
          "Yes, there are female instructors on our team. Mention it in the comment field when you apply and we will assign the right instructor for you.",
      },
      {
        question: "How does the practical exam work?",
        answer:
          "At the training ground, under AI supervision: cameras and sensors fitted to the car grade parallel parking, the ramp and the other elements automatically. We run our practice sessions in precisely that format.",
      },
    ],
  },

  footer: {
    about:
      "EasyPrava is a licensed driving school in Tashkent. We prepare you for categories A, B, BC, C and D — theory in our own app, practice on our own training ground.",
    pagesTitle: "Pages",
    categoriesTitle: "Categories",
    contactTitle: "Contact",
    pageLinks: [
      "Courses and prices",
      "Category B packages",
      "How it works",
      "The EasyPrava app",
      "Fleet",
      "Q&A",
    ],
    categoryLinks: [
      "Categories A and A1",
      "Category B",
      "Categories BC and C",
      "Category D",
    ],
    rights: "© 2026 EasyPrava. All rights reserved.",
    builtBy: "Built by StackNova",
    toTop: "Back to top",
  },

  marquee: [
    "CATEGORY A",
    "CATEGORY B",
    "CATEGORY BC",
    "CATEGORY C",
    "CATEGORY D",
    "AUTODROME",
    "PRACTICE",
  ],
};

export default dict;
