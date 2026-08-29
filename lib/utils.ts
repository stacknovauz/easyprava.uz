import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** 3400000 -> "3 400 000" */
export function formatSom(value: number) {
  return value.toLocaleString("ru-RU").replace(/ /g, " ");
}
