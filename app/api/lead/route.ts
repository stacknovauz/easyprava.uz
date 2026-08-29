import { NextResponse } from "next/server";

/**
 * Ariza qabul qilish endpoint'i.
 *
 * Telegram'ga yuborish uchun .env.local faylga quyidagilarni qo'shing:
 *   TELEGRAM_BOT_TOKEN=...   (@BotFather'dan olinadi)
 *   TELEGRAM_CHAT_ID=...     (arizalar tushadigan chat/kanal id)
 * Env o'zgaruvchilari bo'lmasa, ariza faqat server logiga yoziladi.
 */

type Lead = {
  name?: string;
  phone?: string;
  course?: string;
  branch?: string;
  comment?: string;
};

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";

  if (name.length < 2 || phone.replace(/\D/g, "").length < 9) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  const text = [
    "🚗 Yangi ariza — easyprava.uz",
    `👤 Ism: ${name}`,
    `📞 Telefon: ${phone}`,
    body.course ? `🎓 Toifa: ${body.course}` : null,
    body.branch ? `📍 Filial: ${body.branch}` : null,
    body.comment ? `💬 Izoh: ${body.comment}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      if (!res.ok) {
        console.error("[lead] telegram error", res.status, await res.text());
        return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
      }
    } catch (error) {
      console.error("[lead] telegram request failed", error);
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
  } else {
    // Env sozlanmagan — arizani yo'qotmaslik uchun logga yozamiz.
    console.warn("[lead] TELEGRAM_* env yo'q, ariza faqat logga yozildi:\n" + text);
  }

  return NextResponse.json({ ok: true });
}
