import { NextResponse } from "next/server";
import { requireSession } from "@/lib/mail/session";
import { listInbox } from "@/lib/mail/imap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await requireSession();
  if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  try {
    const items = await listInbox(session, 40);
    return NextResponse.json({ items });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch inbox";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
