/**
 * Locale-invariant data for EasyPrava — prices, durations, counts and contact
 * details. Every translatable string lives in lib/i18n/dictionaries/<locale>.ts
 * and is joined to these records by `code` / `id`.
 *
 * Market reference (2026, Tashkent): category B 2.8–4M, A 1.5–2M, BC 3.5–5M,
 * C 1.8–2.5M, D 3–4.5M UZS.
 */

import type {
  BranchId,
  CourseCode,
  FleetId,
  InstructorId,
  PackageId,
} from "@/lib/i18n/types";

export const CONTACT = {
  phone: "+998 90 123 45 67",
  phoneHref: "tel:+998901234567",
  telegram: "https://t.me/easyprava_uz",
  telegramHandle: "@easyprava_uz",
  instagram: "https://instagram.com/easyprava.uz",
  email: "info@easyprava.uz",
};

export const BRANCHES: { id: BranchId; hours: string }[] = [
  { id: "chilonzor", hours: "09:00 – 19:00" },
  { id: "yunusobod", hours: "09:00 – 19:00" },
  { id: "sergeli", hours: "08:00 – 20:00" },
];

export const COURSES: {
  code: CourseCode;
  practiceHours: number;
  price: number;
  featured: boolean;
}[] = [
  { code: "A1", practiceHours: 12, price: 1_200_000, featured: false },
  { code: "A", practiceHours: 20, price: 1_700_000, featured: false },
  { code: "B", practiceHours: 50, price: 3_400_000, featured: true },
  { code: "BC", practiceHours: 70, price: 4_500_000, featured: false },
  { code: "C", practiceHours: 40, price: 2_200_000, featured: false },
  { code: "D", practiceHours: 60, price: 3_800_000, featured: false },
];

export const PACKAGES: { id: PackageId; price: number; featured: boolean }[] = [
  { id: "standart", price: 3_400_000, featured: false },
  { id: "intensiv", price: 4_200_000, featured: true },
  { id: "vip", price: 5_800_000, featured: false },
];

/** Headline figures. Replace with real numbers before launch. */
export const STATS = [
  { id: "graduates", value: 1200, suffix: "+" },
  { id: "passRate", value: 92, suffix: "%" },
  { id: "instructors", value: 18, suffix: "" },
  { id: "cars", value: 24, suffix: "" },
] as const;

export const PASS_RATE = 92;

export const FLEET: {
  id: FleetId;
  count: number;
  category: "A" | "B" | "C" | "D";
  transmission: "manual" | "automatic";
}[] = [
  { id: "cobalt", count: 8, category: "B", transmission: "manual" },
  { id: "lacetti", count: 5, category: "B", transmission: "manual" },
  { id: "onix", count: 4, category: "B", transmission: "automatic" },
  { id: "isuzu", count: 2, category: "C", transmission: "manual" },
  { id: "yutong", count: 2, category: "D", transmission: "manual" },
  { id: "moto", count: 3, category: "A", transmission: "manual" },
];

export const INSTRUCTORS: {
  id: InstructorId;
  initials: string;
  years: number;
}[] = [
  { id: "rustam", initials: "RQ", years: 12 },
  { id: "dilnoza", initials: "DK", years: 7 },
  { id: "aziz", initials: "AT", years: 15 },
  { id: "sherzod", initials: "SI", years: 9 },
];

/** Instructor-app schedule mock-up rows. */
export const SCHEDULE = [
  { time: "09:00", name: "Aziza N.", category: "B", done: false },
  { time: "11:30", name: "Jasur T.", category: "B", done: false },
  { time: "14:00", name: "Sardor K.", category: "C", done: true },
];

/** Correct-answer index for each of the three quiz questions. */
export const QUIZ_ANSWERS = [1, 2, 1] as const;
