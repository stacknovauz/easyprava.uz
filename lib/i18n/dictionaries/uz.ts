import type { Dictionary } from "@/lib/i18n/types";

/** O'zbek (lotin) — asosiy til. Boshqa lokalizatsiyalar shundan tarjima qilinadi. */
const dict: Dictionary = {
  meta: {
    title: "EasyPrava — Toshkentdagi haydovchilik o'quv markazi",
    titleTemplate: "%s | EasyPrava",
    description:
      "EasyPrava — Toshkentdagi litsenziyalangan haydovchilik o'quv markazi. A, B, BC, C va D toifalari bo'yicha tayyorlaymiz: amaliy haydash o'z avtodromimizda, nazariya esa o'z ilovamizda bepul. Narxlar 1 200 000 so'mdan, 3 oyga bo'lib to'lash mumkin.",
    keywords: [
      "avtomaktab",
      "avtomaktab Toshkent",
      "haydovchilik kurslari",
      "B toifa narxi",
      "haydovchilik guvohnomasi",
      "prava olish",
      "amaliy haydash",
      "avtodrom",
      "EasyPrava",
    ],
    ogTitle: "EasyPrava — Toshkentdagi haydovchilik o'quv markazi",
    ogDescription:
      "A, B, BC, C va D toifalari bo'yicha to'liq tayyorlov. Amaliyot o'z avtodromimizda, nazariya ilovada bepul. 3 oyga bo'lib to'lash.",
    twitterTitle: "EasyPrava — Toshkentdagi haydovchilik o'quv markazi",
    twitterDescription:
      "A, B, BC, C va D toifalari bo'yicha to'liq tayyorlov — narxlar ochiq, bo'lib to'lash mumkin.",
  },

  common: {
    som: "so'm",
    perMonth: "so'm/oy",
    months3: "3 oy",
    hoursOfPractice: "soat amaliyot",
    fromAge: "yoshdan",
    installment: "3 oyga ustamasiz bo'lib to'lash mumkin",
    languageLabel: "Tilni tanlash",
    themeToDark: "Tungi rejimga o'tish",
    themeToLight: "Kunduzgi rejimga o'tish",
  },

  nav: {
    courses: "Kurslar",
    packages: "Paketlar",
    process: "Jarayon",
    app: "Ilova",
    fleet: "Avtopark",
    faq: "Savollar",
    enrollCta: "Ariza qoldirish",
    homeAria: "EasyPrava — bosh sahifa",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
  },

  hero: {
    badge: "Toshkentdagi zamonaviy avtomaktab",
    headline: [
      "Haydovchilik",
      "guvohnomangizni",
      "3",
      "oyda",
      "qo'lga",
      "kiriting",
    ],
    headlineAccent: [2, 3],
    lead: "EasyPrava — A, B, BC, C va D toifalari bo'yicha to'liq tayyorlaydigan o'quv markaz. Amaliy haydashni biz bilan o'tasiz, nazariyani esa o'z ilovamizda bepul o'rganasiz.",
    ctaCourses: "Kurslar va narxlar",
    trust: [
      "Litsenziyalangan o'quv markaz",
      "O'z avtodromimiz",
      "Nazariya ilovada — bepul",
    ],
  },

  leadForm: {
    titleCompact: "Bepul konsultatsiya",
    titleFull: "Kursga yozilish",
    subtitle: "15 daqiqa ichida bog'lanamiz",
    callShort: "Qo'ng'iroq",
    name: "Ismingiz",
    phone: "Telefon raqamingiz",
    course: "Qaysi toifa",
    courseUnsure: "Hali tanlamadim — maslahat kerak",
    branch: "Filial",
    comment: "Izoh — masalan: kechqurun qulay, ayol instruktor kerak",
    submit: "Ariza qoldirish",
    sending: "Yuborilmoqda...",
    privacy: "Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi",
    successTitle: "Arizangiz qabul qilindi!",
    successText:
      "15 daqiqa ichida qo'ng'iroq qilamiz va sizga mos toifa hamda jadvalni birga tanlaymiz.",
    successTelegram: "Telegram'da yozish",
    successAgain: "Yana ariza qoldirish",
    errorName: "Ismingizni to'liq yozing",
    errorPhone: "Telefon raqamini to'liq kiriting",
    errorSend: "Yuborishda xatolik. Iltimos, telefon orqali bog'laning.",
    courseOption: "{code} toifa — {title}",
  },

  stats: {
    graduates: "Guvohnoma olgan bitiruvchi",
    passRate: "Birinchi urinishda o'tish",
    instructors: "Tajribali instruktor",
    cars: "O'quv avtomobili",
  },

  reform: {
    badge: "2026-yil 1-fevraldan kuchga kirdi",
    title: "Endi nazariy darslarga qatnashish",
    titleAccent: "shart emas",
    text: "A va B toifalari uchun qonun o'zgardi: yo'l harakati qoidalarini mustaqil o'rganish mumkin. Amaliy haydash esa majburiy bo'lib qoldi va uni litsenziyalangan o'quv markazida o'tish kerak. EasyPrava aynan shu ikkalasini birlashtiradi.",
    theoryTitle: "Nazariya — ilovada",
    theoryText: "O'quvchilarimizga bepul, istalgan vaqtda",
    practiceTitle: "Amaliyot — o'quv markazda",
    practiceText: "Elektron sertifikat bilan rasmiylashtiriladi",
  },

  courses: {
    eyebrow: "Kurslar va narxlar",
    title: "Qaysi toifa kerak bo'lsa —",
    titleAccent: "bizda bor",
    lead: "Narxlar ochiq va yakuniy. Har bir kursga amaliy haydash soatlari, avtodrom mashqlari va EasyPrava ilovasi kiradi.",
    categoryWord: "toifa",
    cta: "Kursga yozilish",
    extrasTitle: "Kursdan tashqari davlat to'lovlari",
    extrasText:
      "Bu to'lovlar o'quv markazga emas, davlat va imtihon markaziga to'lanadi. Sizni ogohlantirib qo'yamiz — keyin kutilmagan xarajat chiqmasin.",
    extras: {
      medical: {
        label: "Tibbiy ma'lumotnoma (083/h)",
        value: "200 000 – 400 000 so'm",
        note: "Poliklinika",
      },
      theoryExam: {
        label: "Nazariy imtihon",
        value: "1 500 000 so'm",
        note: "Imtihon markazi",
      },
      practicalExam: {
        label: "Amaliy imtihon (avtodrom)",
        value: "1 500 000 so'm",
        note: "Imtihon markazi",
      },
      stateFee: {
        label: "Davlat boji (guvohnoma)",
        value: "618 000 so'm",
        note: "Davlat budjeti",
      },
    },
    items: {
      A1: {
        title: "Moped va skuter",
        vehicle: "50 sm³ gacha moped, skuter",
        age: "16 yoshdan",
        duration: "3 hafta",
        badge: "Ixtiyoriy kurs",
        note: "A1 uchun avtomaktabda o'qish shart emas — imtihonni to'g'ridan-to'g'ri topshirsangiz ham bo'ladi. Bu kurs ishonch bilan haydashni o'rganmoqchilar uchun.",
        perks: [
          "Nazariya ilovada — bepul",
          "12 soat amaliy mashg'ulot",
          "Imtihonda 20 tadan 16 ta to'g'ri javob yetarli",
        ],
      },
      A: {
        title: "Motosikl",
        vehicle: "Barcha turdagi motosikllar",
        age: "18 yoshdan",
        duration: "1 – 1.5 oy",
        badge: null,
        note: null,
        perks: [
          "Nazariya ilovada",
          "20 soat amaliyot",
          "Maxsus himoya vositalari",
        ],
      },
      B: {
        title: "Yengil avtomobil",
        vehicle: "3 500 kg gacha, 8 o'rindiqqacha",
        age: "18 yoshdan (17 da boshlash mumkin)",
        duration: "2.5 – 3 oy",
        badge: "Eng ko'p tanlanadi",
        note: null,
        perks: [
          "50 soat amaliy haydash",
          "Mexanika yoki avtomat",
          "Avtodrom + shahar bo'ylab",
          "Ichki imtihon + 1 ta bepul qayta topshirish",
        ],
      },
      BC: {
        title: "Yengil + yuk avtomobili",
        vehicle: "Yengil va yuk avtomobillari",
        age: "18 yoshdan",
        duration: "3.5 – 4 oy",
        badge: "Ikki toifa birga",
        note: null,
        perks: [
          "70 soat amaliyot",
          "Ikkala toifa uchun tayyorgarlik",
          "Tejamkor paket",
        ],
      },
      C: {
        title: "Yuk avtomobili",
        vehicle: "3 500 kg dan ortiq yuk avtomobillari",
        age: "18 yoshdan",
        duration: "1.5 – 2 oy",
        badge: null,
        note: null,
        perks: [
          "40 soat amaliyot",
          "B toifasi bo'lganlar uchun",
          "Yuk mashinasi bilan mashq",
        ],
      },
      D: {
        title: "Avtobus",
        vehicle: "8 dan ortiq yo'lovchi o'rindig'i",
        age: "21 yoshdan",
        duration: "2 – 2.5 oy",
        badge: null,
        note: null,
        perks: [
          "60 soat amaliyot",
          "Yo'lovchi tashish xavfsizligi",
          "Ish bilan ta'minlashda ko'mak",
        ],
      },
    },
  },

  packages: {
    eyebrow: "B toifa paketlari",
    title: "Sizga qanday",
    titleAccent: "tezlik qulay?",
    lead: "Eng ko'p tanlanadigan B toifasi uchun uchta format — guruhda xotirjam, jadal yoki butunlay individual.",
    popular: "Eng mashhur",
    orSplit: "yoki 3 oyga bo'lib —",
    cta: "Shu paketni tanlash",
    items: {
      standart: {
        name: "Standart",
        tagline: "Guruh jadvali bo'yicha",
        features: [
          "50 soat amaliy haydash",
          "Guruh jadvali (haftada 3 kun)",
          "Avtodrom va shahar bo'ylab",
          "EasyPrava ilovasi — bepul",
          "Ichki imtihon",
        ],
      },
      intensiv: {
        name: "Intensiv",
        tagline: "1 oyda tayyorlanish",
        features: [
          "50 soat amaliyot — jadal jadval",
          "Haftada 5 kun mashg'ulot",
          "Imtihonga navbat olishda ko'mak",
          "EasyPrava Premium — bepul",
          "2 ta bepul qayta topshirish",
          "Shaxsiy kurator",
        ],
      },
      vip: {
        name: "VIP individual",
        tagline: "Shaxsiy instruktor bilan",
        features: [
          "60 soat individual mashg'ulot",
          "O'zingizga qulay vaqtda",
          "Uyingizdan olib ketish",
          "Avtomat korobkali avtomobil",
          "Imtihongacha to'liq hamrohlik",
          "Cheksiz qayta topshirish yordami",
        ],
      },
    },
  },

  process: {
    eyebrow: "Jarayon",
    title: "Arizadan guvohnomagacha —",
    titleAccent: "6 qadam",
    lead: "Har bir bosqichda nima qilish kerakligini biz aytamiz. Siz faqat o'rganishga e'tibor qaratasiz.",
    steps: [
      {
        title: "Ariza qoldirasiz",
        text: "Saytdan ariza qoldirasiz — 15 daqiqa ichida qo'ng'iroq qilib, toifa va jadvalni birga tanlaymiz.",
        meta: "15 daqiqa",
      },
      {
        title: "Hujjatlarni topshirasiz",
        text: "Pasport yoki ID-karta va 083/h tibbiy ma'lumotnoma. Tibbiy ko'rikda ham yo'l-yo'riq ko'rsatamiz.",
        meta: "1 kun",
      },
      {
        title: "Nazariyani ilovada o'rganasiz",
        text: "2026-yildan nazariy darslar ixtiyoriy. EasyPrava ilovasida 20 ta mavzu va 400 ta test — bepul.",
        meta: "O'zingizga qulay vaqtda",
      },
      {
        title: "Amaliy haydashni o'tasiz",
        text: "Avtodromda mashq, so'ng shahar bo'ylab haydash. Har bir soat elektron sertifikatga yoziladi.",
        meta: "50 soat",
      },
      {
        title: "Ichki imtihonni topshirasiz",
        text: "Davlat imtihoniga o'xshash sharoitda sinov. O'tmaguningizcha qo'shimcha mashq beramiz.",
        meta: "1 kun",
      },
      {
        title: "Davlat imtihoni va guvohnoma",
        text: "Nazariy test (20 savol, 25 daqiqa, 18 ta to'g'ri javob; A1 uchun 16 ta) va avtodromdagi amaliy imtihon. So'ng my.gov.uz orqali guvohnoma.",
        meta: "10 yilga amal qiladi",
      },
    ],
  },

  whyUs: {
    eyebrow: "Nega EasyPrava",
    title: "Oddiy avtomaktabdan",
    titleAccent: "farqimiz",
    lead: "Boshqa avtomaktablarda yo'q narsa: nazariya uchun o'z ilovamiz, instruktorlar uchun esa alohida boshqaruv tizimi.",
    includedTitle: "Kurs narxiga nimalar kiradi",
    includedText:
      "Yashirin to'lov yo'q — yoqilg'i ham, avtodrom ham narxga kiritilgan.",
    included: [
      "Litsenziyalangan o'quv markaz sertifikati",
      "Tajribali instruktor bilan amaliy haydash",
      "Yoqilg'i va o'quv avtomobili xarajatlari",
      "Avtodromda parallel parkovka va estakada mashqlari",
      "Shahar ko'chalarida real sharoitda haydash",
      "EasyPrava ilovasi — nazariya va testlar bepul",
      "Ichki imtihon va xatolar tahlili",
      "Davlat imtihoniga navbat olishda yordam",
    ],
    passTitle: "Birinchi urinishda o'tish",
    passText:
      "Ichki imtihonimiz davlat imtihoni bilan bir xil formatda — shuning uchun o'quvchilarimiz kamdan-kam qayta topshiradi.",
    cards: [
      {
        title: "Bo'lib to'lash",
        text: "3 oygacha ustamasiz. Birinchi to'lovdan keyin darhol boshlaysiz.",
      },
      {
        title: "Moslashuvchan jadval",
        text: "Ertalab, kunduzi yoki kechqurun — ishingizga qarab tanlaysiz.",
      },
      {
        title: "Ayol instruktorlar",
        text: "So'rasangiz, sizga mos instruktorni biriktiramiz.",
      },
      {
        title: "Metro yonida",
        text: "Ikkala filial ham metro bekatidan 5 daqiqalik masofada.",
      },
      {
        title: "Sug'urtalangan avtopark",
        text: "Ikki tomonlama boshqaruvli, texnik ko'rikdan o'tgan avtomobillar.",
      },
      {
        title: "Rasmiy litsenziya",
        text: "Elektron sertifikat imtihonga avtomatik yo'llanadi.",
      },
    ],
  },

  app: {
    eyebrow: "O'quvchilarga bepul",
    title: "Nazariyani",
    titleAccent: "o'z ilovamizda o'rganasiz",
    lead: "Sinfda o'tirish shart emas. Kursga yozilganingizdan keyin EasyPrava ilovasining to'liq versiyasi sizga bepul ochiladi — metroda ham, uyda ham tayyorlanasiz.",
    features: [
      {
        title: "20 ta imtihon bileti",
        text: "Rasmiy formatda: har bilet 20 savol, 25 daqiqa — 400 ta test savoli.",
      },
      {
        title: "20 ta nazariy mavzu",
        text: "Yo'l harakati qoidalari sodda tilda, belgilar va misollar bilan.",
      },
      {
        title: "Real imtihon rejimi",
        text: "18 ta to'g'ri javob kerak — xuddi davlat imtihonidagidek sinov.",
      },
      {
        title: "Xatolar ustida ishlash",
        text: "Noto'g'ri javoblaringiz alohida to'planadi va qayta beriladi.",
      },
      {
        title: "Instruktoringiz ko'radi",
        text: "Progressingiz instruktorga uzatiladi — zaif mavzuni darsda mustahkamlaydi.",
      },
      {
        title: "iOS va Android",
        text: "Kursga yozilganingizdan keyin Premium kirish bepul ochiladi.",
      },
    ],
    mockup: {
      greeting: "Xush kelibsiz 👋",
      tagline:
        "Haydovchilik guvohnomasiga tayyorlanish — testlar va darslar bir joyda",
      quickAccess: "Tez o'tish",
      testsTitle: "Testlar",
      testsText: "Imtihon biletlarini yeching",
      lessonsTitle: "Darslar",
      lessonsText: "Yo'l harakati qoidalari",
      statsTitle: "Statistika",
      statSolved: "Yechilgan",
      statCorrect: "To'g'ri",
      statLessons: "Darslar",
      tabHome: "Bosh sahifa",
      tabTests: "Testlar",
      tabLessons: "Darslar",
      tabProfile: "Profil",
      chipTicket: "7-bilet — 18/20",
      chipTicketSub: "Imtihondan o'tdingiz!",
      chipAccuracy: "94% to'g'ri javob",
      chipAccuracySub: "So'nggi 7 kun",
      chipStreak: "12 kunlik seriya",
      chipStreakSub: "Har kuni mashq",
      imageAlt: "EasyPrava ilovasining bosh ekrani",
    },
  },

  lessons: {
    eyebrow: "O'quv dasturi",
    title: "20 ta mavzu —",
    titleAccent: "to'liq nazariya kursi",
    lead: "Yo'l harakati qoidalarining barcha bo'limlari — umumiy qoidalardan avtomagistrallargacha. Har bir mavzu imtihon savollari bilan mustahkamlanadi.",
    cta: "Barcha darslarni ilovada o'qing",
    topics: [
      "Umumiy qoidalar",
      "Haydovchilarning umumiy majburiyatlari",
      "Piyodalarning majburiyatlari",
      "Yo'lovchilarning majburiyatlari",
      "Svetofor va tartibga soluvchining ishoralari",
      "Ogohlantiruvchi belgilar",
      "Ustunlik belgilari",
      "Taqiqlovchi belgilar",
      "Buyuruvchi belgilar",
      "Axborot-ko'rsatkich belgilari",
      "Yo'l chiziqlari",
      "Harakatni boshlash va manevr qilish",
      "Harakat tezligi",
      "Quvib o'tish",
      "To'xtash va to'xtab turish",
      "Chorrahalardan o'tish",
      "Piyodalar o'tish joylari",
      "Temir yo'l kesishmalari",
      "Avtomagistrallarda harakatlanish",
      "Yorug'lik asboblaridan foydalanish",
    ],
  },

  quiz: {
    eyebrow: "Mini imtihon",
    title: "O'zingizni hoziroq",
    titleAccent: "sinab ko'ring",
    lead: "Davlat imtihoni savollaridan 3 tasi. Nazariyangiz qay darajada?",
    questionOf: "Savol {current}/{total}",
    questions: [
      {
        question: "Svetoforning sariq chirog'i nimani bildiradi?",
        options: [
          "Harakatlanishga ruxsat beriladi",
          "Harakatlanishni taqiqlaydi va signallarning almashinuvidan ogohlantiradi",
          "Tezlikni oshirib, chorrahadan o'tib ketish kerak",
        ],
      },
      {
        question:
          "Tartibga solinmagan piyodalar o'tish joyiga yaqinlashganda haydovchi nima qilishi shart?",
        options: [
          "Ovozli signal berib, to'xtamasdan o'tishi",
          "Faqat keksa piyodalarga yo'l berishi",
          "Tezlikni kamaytirib, piyodalarga yo'l berishi",
        ],
      },
      {
        question:
          "Aholi punktlarida yengil avtomobillar uchun ruxsat etilgan eng katta tezlik qancha?",
        options: ["60 km/soat", "70 km/soat", "90 km/soat"],
      },
    ],
    results: [
      {
        title: "Boshlash uchun ajoyib sabab!",
        text: "Hozircha nazariya oqsayapti — lekin xavotir olmang, EasyPrava'dagi 20 ta mavzu aynan siz uchun.",
      },
      {
        title: "Yaxshi boshlanish!",
        text: "Asosiy tushunchalar bor, ammo imtihonda 90%+ kerak bo'ladi. Darslar bilan bilimni mustahkamlang.",
      },
      {
        title: "Zo'r natija!",
        text: "Imtihonga yaqinsiz! Biletlarni yechib, qolgan zaif joylarni ham yopib chiqing.",
      },
      {
        title: "Siz tayyorsiz!",
        text: "Ajoyib! Endi 20 ta biletni real imtihon rejimida yechib, natijani mustahkamlang.",
      },
    ],
    ctaEnroll: "Kursga yozilish",
    retry: "Qayta urinish",
    announceCorrect: "To'g'ri javob!",
    announceWrong: "Noto'g'ri javob.",
    announceFinished: "Test yakunlandi.",
    announceQuestion: "Savol {current}/{total}",
  },

  fleet: {
    eyebrow: "Avtopark",
    title: "ta o'quv",
    titleAccent: "avtomobili",
    lead: "Barchasi ikki tomonlama boshqaruvli va sug'urtalangan. Mexanika ham, avtomat korobka ham bor.",
    fuelNote: "Yoqilg'i xarajati kurs narxiga kiritilgan",
    carsWord: "ta o'quv",
    manual: "Mexanika",
    automatic: "Avtomat",
    categoryLabel: {
      A: "A toifa",
      B: "B toifa",
      C: "C toifa",
      D: "D toifa",
    },
    models: {
      cobalt: "Chevrolet Cobalt",
      lacetti: "Chevrolet Lacetti",
      onix: "Chevrolet Onix",
      isuzu: "Isuzu NQR",
      yutong: "Yutong avtobus",
      moto: "Motosikl (250 sm³)",
    },
    instructorsEyebrow: "Instruktorlar",
    instructorsTitle: "Sizni",
    instructorsTitleAccent: "tajribali usta o'rgatadi",
    instructorsLead:
      "Har bir instruktorimiz rasmiy guvohnomaga ega va o'z o'quvchilarining natijasi uchun javob beradi.",
    yearsExperience: "yil tajriba",
    instructors: {
      rustam: {
        name: "Rustam Qodirov",
        categories: "B, BC toifa",
        note: "Mexanika · Avtomat",
      },
      dilnoza: {
        name: "Dilnoza Karimova",
        categories: "B toifa",
        note: "Ayol instruktor",
      },
      aziz: {
        name: "Aziz Toshmatov",
        categories: "C, D toifa",
        note: "Yuk va avtobus",
      },
      sherzod: {
        name: "Sherzod Ismoilov",
        categories: "A, A1 toifa",
        note: "Motosikl va moped",
      },
    },
  },

  instructorApp: {
    eyebrow: "Ichki tizimimiz",
    title: "Instruktorlarimiz",
    titleAccent: "EasyPrava Instruktor'da",
    titleTail: "ishlaydi",
    lead: "Har bir instruktorimizda maxsus ilova bor: darslar jadvali, o'quvchi progressi va bajarilgan soatlar. Bironta ham darsingiz e'tibordan chetda qolmaydi.",
    features: [
      {
        title: "O'quvchilar ro'yxati",
        text: "Har bir o'quvchining toifasi va o'quv jarayoni instruktorda bir ekranda.",
      },
      {
        title: "Haftalik jadval",
        text: "Darslar kunlar bo'yicha guruhlangan — bugungi rejangiz doim ko'z oldingizda.",
      },
      {
        title: "Dars boshqaruvi",
        text: "Mavzu, davomiylik va yakunlash — har bir darsni bir tugma bilan boshqaring.",
      },
      {
        title: "Elektron sertifikat",
        text: "Bajarilgan har bir amaliy soat tizimga yoziladi va imtihonga yo'llanadi.",
      },
    ],
    cta: "Instruktor bo'lib ishlash",
    scheduleTitle: "Bugungi jadval",
    scheduleSub: "Chorshanba, 3 ta dars",
    active: "Faol",
    lessonMeta: "Amaliy dars · 90 daqiqa",
    statusPending: "Kutilmoqda",
    statusDone: "O'tildi",
    statStudents: "O'quvchi",
    statLessons: "Dars o'tildi",
    statWeek: "Shu hafta",
  },

  testimonials: {
    eyebrow: "Fikrlar",
    title: "Bitiruvchilarimiz",
    titleAccent: "nima deydi?",
    regionAria: "O'quvchilar fikrlari",
    items: [
      {
        name: "Jasurbek",
        meta: "B toifa · Chilonzor filiali",
        text: "Instruktorim juda sabrli edi — birinchi kundan shahar ko'chasiga chiqishga qo'rqmadim. Nazariyani ilovada o'rgandim, imtihonda 19/20 natija bilan birinchi urinishda o'tdim.",
      },
      {
        name: "Madina",
        meta: "B toifa · Yunusobod filiali",
        text: "Ayol instruktor so'ragandim — biriktirishdi. Jadval ishimga moslashtirildi, kechqurun mashq qildim. 2.5 oyda guvohnomani oldim.",
      },
      {
        name: "Sardor",
        meta: "BC toifa · Sergeli avtodromi",
        text: "Ikki toifani birga oldim — alohida o'qiganimdan ancha arzon tushdi. Avtodromdagi mashq imtihon bilan bir xil formatda bo'lgani juda yordam berdi.",
      },
      {
        name: "Nilufar",
        meta: "B toifa · Chilonzor filiali",
        text: "Bo'lib to'lash imkoniyati bo'lgani uchun tanladim. Ilovadagi statistika har kuni motivatsiya berdi — mavzularni 2 haftada tugatdim.",
      },
      {
        name: "Bekzod",
        meta: "A toifa · Yunusobod filiali",
        text: "Motosikl uchun keldim, 1 oyda tugatdim. Himoya vositalari markazdan berildi, qo'shimcha xarajat bo'lmadi.",
      },
    ],
  },

  enroll: {
    eyebrow: "Ariza qoldirish",
    title: "Keling,",
    titleAccent: "boshlaymiz",
    lead: "Formani to'ldiring — 15 daqiqa ichida qo'ng'iroq qilib, sizga mos toifa, filial va jadvalni birga tanlaymiz.",
    quickTitle: "Tezkor aloqa",
    workHours: "Dush–Shan, 09:00 – 19:00",
    telegramSub: "Telegram orqali yozing",
    branchesTitle: "Filiallarimiz",
    branches: {
      chilonzor: {
        name: "Chilonzor filiali",
        address: "Toshkent, Chilonzor tumani, Bunyodkor shoh ko'chasi 12",
        landmark: "Chilonzor metro bekatidan 5 daqiqa",
      },
      yunusobod: {
        name: "Yunusobod filiali",
        address: "Toshkent, Yunusobod tumani, Amir Temur ko'chasi 108",
        landmark: "Shahriston metro bekati yonida",
      },
      sergeli: {
        name: "Sergeli avtodromi",
        address: "Toshkent, Sergeli tumani, Yangi Sergeli 4-mavze",
        landmark: "Amaliy imtihon mashqlari shu yerda",
      },
    },
  },

  faq: {
    eyebrow: "Savol-javob",
    title: "Ko'p so'raladigan",
    titleAccent: "savollar",
    items: [
      {
        question: "Nazariy darslarga qatnashish shartmi?",
        answer:
          "Yo'q. 2026-yil 1-fevraldan A va B toifalar uchun nazariy darslar ixtiyoriy — qoidalarni mustaqil o'rganishingiz mumkin. Biz buning uchun EasyPrava ilovasini bepul beramiz: 20 ta mavzu, 400 ta test va imtihon rejimi. Amaliy haydash esa majburiy va uni litsenziyalangan o'quv markazida o'tish kerak.",
      },
      {
        question: "A1 (moped) uchun ham kurs kerakmi?",
        answer:
          "Yo'q. 2026-yil 1-yanvardan joriy etilgan A1 toifasi uchun avtomaktabda o'qish majburiy emas — imtihonni to'g'ridan-to'g'ri topshirishingiz mumkin (20 ta testdan 16 tasi to'g'ri bo'lsa yetarli). Biz A1 kursini faqat ishonch bilan haydashni o'rganmoqchilar uchun ixtiyoriy tayyorgarlik sifatida taklif qilamiz.",
      },
      {
        question: "Kursga qanday yozilaman?",
        answer:
          "Saytdagi ariza formasini to'ldiring yoki telefon qiling. 15 daqiqa ichida bog'lanamiz, sizga mos toifa va jadvalni tanlaymiz. Hujjatlarni filialga olib kelasiz va shu kuni shartnoma tuziladi.",
      },
      {
        question: "Qanday hujjatlar kerak?",
        answer:
          "Pasport yoki ID-karta (asl nusxa) va 083/h shaklidagi tibbiy ma'lumotnoma. Tibbiy ma'lumotnoma 1 yil amal qiladi — qayerdan olishni ko'rsatib beramiz. B toifa uchun guvohnoma 18 yoshda beriladi, o'qishni esa 17 yoshdan boshlash mumkin.",
      },
      {
        question: "To'lovni bo'lib to'lash mumkinmi?",
        answer:
          "Ha. Kurs to'lovini 3 oygacha ustamasiz bo'lib to'lashingiz mumkin — birinchi to'lovdan keyin darhol mashg'ulotlar boshlanadi. Payme, Click va bank kartalari qabul qilinadi.",
      },
      {
        question: "Imtihondan o'ta olmasam nima bo'ladi?",
        answer:
          "Intensiv va VIP paketlarda qayta topshirishga tayyorgarlik bepul: zaif mavzular bo'yicha qo'shimcha mashq beramiz. Standart paketda ham 1 ta bepul qo'shimcha amaliy dars bor. Davlat imtihonini qayta topshirish to'lovi (1.5 mln so'm) imtihon markaziga to'lanadi.",
      },
      {
        question: "Avtomat korobkali avtomobilda o'rgansam bo'ladimi?",
        answer:
          "Ha, avtoparkimizda mexanika ham, avtomat korobkali avtomobillar ham bor. Avtomatda o'rganish VIP paketga kiradi, Standart va Intensivda esa qo'shimcha to'lov bilan tanlanadi.",
      },
      {
        question: "Ayol instruktor bormi?",
        answer:
          "Ha, jamoamizda ayol instruktorlar ishlaydi. Ariza qoldirayotganda izohda yozib qoldiring — sizga mos instruktorni biriktiramiz.",
      },
      {
        question: "Amaliy imtihon qanday o'tadi?",
        answer:
          "Avtodromda, sun'iy intellekt nazorati ostida: avtomobilga o'rnatilgan kamera va datchiklar parallel parkovka, estakada va boshqa elementlarni avtomatik baholaydi. Biz mashqlarni aynan shu formatda o'tkazamiz.",
      },
    ],
  },

  footer: {
    about:
      "EasyPrava — Toshkentdagi litsenziyalangan haydovchilik o'quv markazi. A, B, BC, C va D toifalari bo'yicha tayyorlaymiz — nazariya o'z ilovamizda, amaliyot o'z avtodromimizda.",
    pagesTitle: "Sahifalar",
    categoriesTitle: "Toifalar",
    contactTitle: "Aloqa",
    pageLinks: [
      "Kurslar va narxlar",
      "B toifa paketlari",
      "Jarayon",
      "EasyPrava ilovasi",
      "Avtopark",
      "Savol-javob",
    ],
    categoryLinks: ["A va A1 toifa", "B toifa", "BC va C toifa", "D toifa"],
    rights: "© 2026 EasyPrava. Barcha huquqlar himoyalangan.",
    builtBy: "StackNova tomonidan ishlab chiqilgan",
    toTop: "Tepaga",
  },

  marquee: [
    "A TOIFA",
    "B TOIFA",
    "BC TOIFA",
    "C TOIFA",
    "D TOIFA",
    "AVTODROM",
    "AMALIYOT",
  ],
};

export default dict;
