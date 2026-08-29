/**
 * EasyPrava — o'quv markaz kontenti.
 * Narx, manzil va aloqa ma'lumotlarini shu fayldan o'zgartiring.
 *
 * Bozor ma'lumotlari (2026): Toshkentda B toifa 2.8–4 mln so'm, A 1.5–2 mln,
 * BC 3.5–5 mln, C 1.8–2.5 mln, D 3–4.5 mln.
 * 2026-yil 1-fevraldan A va B toifalar uchun nazariy darslar IXTIYORIY —
 * nazariyani mustaqil o'rganish mumkin, amaliyot esa avtomaktabda majburiy.
 */

export const CONTACT = {
  phone: "+998 90 123 45 67",
  phoneHref: "tel:+998901234567",
  telegram: "https://t.me/easyprava_uz",
  telegramHandle: "@easyprava_uz",
  instagram: "https://instagram.com/easyprava.uz",
  email: "info@easyprava.uz",
  workHours: "Dush–Shan, 09:00 – 19:00",
};

export const BRANCHES = [
  {
    name: "Chilonzor filiali",
    address: "Toshkent, Chilonzor tumani, Bunyodkor shoh ko'chasi 12",
    landmark: "Chilonzor metro bekatidan 5 daqiqa",
    hours: "09:00 – 19:00",
  },
  {
    name: "Yunusobod filiali",
    address: "Toshkent, Yunusobod tumani, Amir Temur ko'chasi 108",
    landmark: "Shahriston metro bekati yonida",
    hours: "09:00 – 19:00",
  },
  {
    name: "Sergeli avtodromi",
    address: "Toshkent, Sergeli tumani, Yangi Sergeli 4-mavze",
    landmark: "Amaliy imtihon mashqlari shu yerda",
    hours: "08:00 – 20:00",
  },
];

/** Kurs toifalari — narxlar so'mda */
export const COURSES = [
  {
    code: "A1",
    title: "Moped va skuter",
    vehicle: "50 sm³ gacha moped, skuter",
    age: "16 yoshdan",
    duration: "3 hafta",
    practiceHours: 12,
    price: 1_200_000,
    featured: false,
    badge: "Ixtiyoriy kurs",
    note: "A1 uchun avtomaktabda o'qish shart emas — imtihonni to'g'ridan-to'g'ri topshirsangiz ham bo'ladi. Bu kurs ishonch bilan haydashni o'rganmoqchilar uchun.",
    perks: [
      "Nazariya ilovada — bepul",
      "12 soat amaliy mashg'ulot",
      "Imtihonda 20 tadan 16 ta to'g'ri javob yetarli",
    ],
  },
  {
    code: "A",
    title: "Motosikl",
    vehicle: "Barcha turdagi motosikllar",
    age: "18 yoshdan",
    duration: "1 – 1.5 oy",
    practiceHours: 20,
    price: 1_700_000,
    featured: false,
    badge: null,
    note: null,
    perks: ["Nazariya ilovada", "20 soat amaliyot", "Maxsus himoya vositalari"],
  },
  {
    code: "B",
    title: "Yengil avtomobil",
    vehicle: "3 500 kg gacha, 8 o'rindiqqacha",
    age: "18 yoshdan (17 da boshlash mumkin)",
    duration: "2.5 – 3 oy",
    practiceHours: 50,
    price: 3_400_000,
    featured: true,
    badge: "Eng ko'p tanlanadi",
    note: null,
    perks: [
      "50 soat amaliy haydash",
      "Mexanika yoki avtomat",
      "Avtodrom + shahar bo'ylab",
      "Ichki imtihon + 1 ta bepul qayta topshirish",
    ],
  },
  {
    code: "BC",
    title: "Yengil + yuk avtomobili",
    vehicle: "Yengil va yuk avtomobillari",
    age: "18 yoshdan",
    duration: "3.5 – 4 oy",
    practiceHours: 70,
    price: 4_500_000,
    featured: false,
    badge: "Ikki toifa birga",
    note: null,
    perks: ["70 soat amaliyot", "Ikkala toifa uchun tayyorgarlik", "Tejamkor paket"],
  },
  {
    code: "C",
    title: "Yuk avtomobili",
    vehicle: "3 500 kg dan ortiq yuk avtomobillari",
    age: "18 yoshdan",
    duration: "1.5 – 2 oy",
    practiceHours: 40,
    price: 2_200_000,
    featured: false,
    badge: null,
    note: null,
    perks: ["40 soat amaliyot", "B toifasi bo'lganlar uchun", "Yuk mashinasi bilan mashq"],
  },
  {
    code: "D",
    title: "Avtobus",
    vehicle: "8 dan ortiq yo'lovchi o'rindig'i",
    age: "21 yoshdan",
    duration: "2 – 2.5 oy",
    practiceHours: 60,
    price: 3_800_000,
    featured: false,
    badge: null,
    note: null,
    perks: ["60 soat amaliyot", "Yo'lovchi tashish xavfsizligi", "Ish bilan ta'minlashda ko'mak"],
  },
];

/** B toifa uchun paketlar */
export const PACKAGES = [
  {
    name: "Standart",
    price: 3_400_000,
    tagline: "Guruh jadvali bo'yicha",
    features: [
      "50 soat amaliy haydash",
      "Guruh jadvali (haftada 3 kun)",
      "Avtodrom va shahar bo'ylab",
      "EasyPrava ilovasi — bepul",
      "Ichki imtihon",
    ],
    featured: false,
  },
  {
    name: "Intensiv",
    price: 4_200_000,
    tagline: "1 oyda tayyorlanish",
    features: [
      "50 soat amaliyot — jadal jadval",
      "Haftada 5 kun mashg'ulot",
      "Imtihonga navbat olishda ko'mak",
      "EasyPrava Premium — bepul",
      "2 ta bepul qayta topshirish",
      "Shaxsiy kurator",
    ],
    featured: true,
  },
  {
    name: "VIP individual",
    price: 5_800_000,
    tagline: "Shaxsiy instruktor bilan",
    features: [
      "60 soat individual mashg'ulot",
      "O'zingizga qulay vaqtda",
      "Uyingizdan olib ketish",
      "Avtomat korobkali avtomobil",
      "Imtihongacha to'liq hamrohlik",
      "Cheksiz qayta topshirish yordami",
    ],
    featured: false,
  },
];

/** Guvohnoma olish jarayoni */
export const PROCESS = [
  {
    step: "01",
    title: "Ariza qoldirasiz",
    text: "Saytdan ariza qoldirasiz — 15 daqiqa ichida qo'ng'iroq qilib, toifa va jadvalni birga tanlaymiz.",
    meta: "15 daqiqa",
  },
  {
    step: "02",
    title: "Hujjatlarni topshirasiz",
    text: "Pasport yoki ID-karta va 083/h tibbiy ma'lumotnoma. Tibbiy ko'rikda ham yo'l-yo'riq ko'rsatamiz.",
    meta: "1 kun",
  },
  {
    step: "03",
    title: "Nazariyani ilovada o'rganasiz",
    text: "2026-yildan nazariy darslar ixtiyoriy. EasyPrava ilovasida 20 ta mavzu va 400 ta test — bepul.",
    meta: "O'zingizga qulay vaqtda",
  },
  {
    step: "04",
    title: "Amaliy haydashni o'tasiz",
    text: "Avtodromda mashq, so'ng shahar bo'ylab haydash. Har bir soat elektron sertifikatga yoziladi.",
    meta: "50 soat",
  },
  {
    step: "05",
    title: "Ichki imtihonni topshirasiz",
    text: "Davlat imtihoniga o'xshash sharoitda sinov. O'tmaguningizcha qo'shimcha mashq beramiz.",
    meta: "1 kun",
  },
  {
    step: "06",
    title: "Davlat imtihoni va guvohnoma",
    text: "Nazariy test (20 savol, 25 daqiqa, 18 ta to'g'ri javob; A1 uchun 16 ta) va avtodromdagi amaliy imtihon. So'ng my.gov.uz orqali guvohnoma.",
    meta: "10 yilga amal qiladi",
  },
];

/** Kursga kiradigan narsalar */
export const INCLUDED = [
  "Litsenziyalangan o'quv markaz sertifikati",
  "Tajribali instruktor bilan amaliy haydash",
  "Yoqilg'i va o'quv avtomobili xarajatlari",
  "Avtodromda parallel parkovka va estakada mashqlari",
  "Shahar ko'chalarida real sharoitda haydash",
  "EasyPrava ilovasi — nazariya va testlar bepul",
  "Ichki imtihon va xatolar tahlili",
  "Davlat imtihoniga navbat olishda yordam",
];

/** Qo'shimcha xarajatlar — halol ko'rsatamiz */
export const EXTRA_COSTS = [
  { label: "Tibbiy ma'lumotnoma (083/h)", value: "200 000 – 400 000 so'm", note: "Poliklinika" },
  { label: "Nazariy imtihon", value: "1 500 000 so'm", note: "Imtihon markazi" },
  { label: "Amaliy imtihon (avtodrom)", value: "1 500 000 so'm", note: "Imtihon markazi" },
  { label: "Davlat boji (guvohnoma)", value: "618 000 so'm", note: "Davlat budjeti" },
];

export const FAQ_ITEMS = [
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
];

export const TESTIMONIALS = [
  {
    name: "Jasurbek",
    meta: "B toifa · Chilonzor filiali",
    initials: "JB",
    text: "Instruktorim juda sabrli edi — birinchi kundan shahar ko'chasiga chiqishga qo'rqmadim. Nazariyani ilovada o'rgandim, imtihonda 19/20 natija bilan birinchi urinishda o'tdim.",
  },
  {
    name: "Madina",
    meta: "B toifa · Yunusobod filiali",
    initials: "MA",
    text: "Ayol instruktor so'ragandim — biriktirishdi. Jadval ishimga moslashtirildi, kechqurun mashq qildim. 2.5 oyda guvohnomani oldim.",
  },
  {
    name: "Sardor",
    meta: "BC toifa · Sergeli avtodromi",
    initials: "SA",
    text: "Ikki toifani birga oldim — alohida o'qiganimdan ancha arzon tushdi. Avtodromdagi mashq imtihon bilan bir xil formatda bo'lgani juda yordam berdi.",
  },
  {
    name: "Nilufar",
    meta: "B toifa · Chilonzor filiali",
    initials: "NI",
    text: "Bo'lib to'lash imkoniyati bo'lgani uchun tanladim. Ilovadagi statistika har kuni motivatsiya berdi — mavzularni 2 haftada tugatdim.",
  },
  {
    name: "Bekzod",
    meta: "A toifa · Yunusobod filiali",
    initials: "BE",
    text: "Motosikl uchun keldim, 1 oyda tugatdim. Himoya vositalari markazdan berildi, qo'shimcha xarajat bo'lmadi.",
  },
];

export const FLEET = [
  { model: "Chevrolet Cobalt", type: "Mexanika", count: 8, category: "B toifa" },
  { model: "Chevrolet Lacetti", type: "Mexanika", count: 5, category: "B toifa" },
  { model: "Chevrolet Onix", type: "Avtomat", count: 4, category: "B toifa" },
  { model: "Isuzu NQR", type: "Mexanika", count: 2, category: "C toifa" },
  { model: "Yutong avtobus", type: "Mexanika", count: 2, category: "D toifa" },
  { model: "Motosikl (250 sm³)", type: "Mexanika", count: 3, category: "A toifa" },
];

export const INSTRUCTORS = [
  { name: "Rustam Qodirov", initials: "RQ", years: 12, category: "B, BC toifa", note: "Mexanika · Avtomat" },
  { name: "Dilnoza Karimova", initials: "DK", years: 7, category: "B toifa", note: "Ayol instruktor" },
  { name: "Aziz Toshmatov", initials: "AT", years: 15, category: "C, D toifa", note: "Yuk va avtobus" },
  { name: "Sherzod Ismoilov", initials: "SI", years: 9, category: "A, A1 toifa", note: "Motosikl va moped" },
];
