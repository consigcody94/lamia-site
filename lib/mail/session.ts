import { cookies } from "next/headers";
import { getIronSession, type SessionOptions } from "iron-session";

export interface MailSession {
  email?: string;
  password?: string;
  imapHost?: string;
  imapPort?: number;
  smtpHost?: string;
  smtpPort?: number;
  loggedInAt?: number;
}

const rawSecret =
  process.env.SESSION_SECRET ??
  "dev-secret-change-in-production-minimum-32-chars-long-for-iron-session";

export const mailSessionOptions: SessionOptions = {
  password: rawSecret,
  cookieName: "lamia.mail",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  },
};

export async function readSession() {
  const store = await cookies();
  return getIronSession<MailSession>(store, mailSessionOptions);
}

export async function requireSession() {
  const session = await readSession();
  if (!session.email || !session.password) return null;
  return session;
}
