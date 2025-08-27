import { NextResponse } from "next/server";
import { sendEmail } from "@/service/email";

export const runtime = "nodejs";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { from, subject, message } = await req.json();

    if (!from || !subject || !message || !emailRe.test(from)) {
      return NextResponse.json(
        { message: "입력값을 확인해 주세요." },
        { status: 400 }
      );
    }

    await sendEmail({ from, subject, message });
    return NextResponse.json({ message: "ok" });
  } catch (e) {
    console.error("[/api/contact] error:", e);
    // 프로덕션에선 상세 노출 지양
    return NextResponse.json({ message: "메일 전송 실패" }, { status: 500 });
  }
}
