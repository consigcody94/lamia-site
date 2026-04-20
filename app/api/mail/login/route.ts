import { NextResponse } from "next/server";
import { readSession } from "@/lib/mail/session";
import { verifyCredentials } from "@/lib/mail/imap";
import { DEFAULT_IMAP, DEFAULT_SMTP } from "@/lib/mail/config";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: {
    email?: string;
    password?: string;
    imapHost?: string;
    imapPort?: number;
    smtpHost?: string;
    smtpPort?: number;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request" }, { status: 400 });
  }
  const email = body.email?.trim();
  const password = body.password;
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  const imapHost = body.imapHost?.trim() || DEFAULT_IMAP.host;
  const imapPort = body.imapPort ?? DEFAULT_IMAP.port;
  const smtpHost = body.smtpHost?.trim() || DEFAULT_SMTP.host;
  const smtpPort = body.smtpPort ?? DEFAULT_SMTP.port;

  const candidate = { email, password, imapHost, imapPort };
  try {
    await verifyCredentials(candidate);
  } catch (err) {
    const message = err instanceof Error ? err.message : "IMAP authentication failed";
    return NextResponse.json({ error: message }, { status: 401 });
  }

  const session = await readSession();
  session.email = email;
  session.password = password;
  session.imapHost = imapHost;
  session.imapPort = imapPort;
  session.smtpHost = smtpHost;
  session.smtpPort = smtpPort;
  session.loggedInAt = Date.now();
  await session.save();

  return NextResponse.json({ ok: true });
}
