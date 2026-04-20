import { NextResponse } from "next/server";
import { requireSession } from "@/lib/mail/session";
import { fetchMessage } from "@/lib/mail/imap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ uid: string }> }
) {
  const session = await requireSession();
  if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  const { uid: uidStr } = await params;
  const uid = Number(uidStr);
  if (!Number.isFinite(uid)) {
    return NextResponse.json({ error: "Invalid uid" }, { status: 400 });
  }
  try {
    const msg = await fetchMessage(session, uid);
    if (!msg) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ message: msg });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch message";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
