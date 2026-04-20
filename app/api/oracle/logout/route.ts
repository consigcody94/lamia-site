import { NextResponse } from "next/server";
import { readSession } from "@/lib/mail/session";

export const runtime = "nodejs";

export async function POST() {
  const session = await readSession();
  session.destroy();
  return NextResponse.json({ ok: true });
}
