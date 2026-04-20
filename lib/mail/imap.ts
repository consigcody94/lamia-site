import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";
import type { MailSession } from "./session";

export interface InboxItem {
  uid: number;
  seq: number;
  from: string;
  fromAddress: string;
  subject: string;
  date: string;
  preview: string;
  seen: boolean;
  flagged: boolean;
}

export interface MailMessage {
  uid: number;
  from: string;
  fromAddress: string;
  to: string;
  subject: string;
  date: string;
  html: string;
  text: string;
}

function clientFor(session: MailSession): ImapFlow {
  return new ImapFlow({
    host: session.imapHost!,
    port: session.imapPort!,
    secure: true,
    auth: {
      user: session.email!,
      pass: session.password!,
    },
    logger: false,
    socketTimeout: 15000,
  });
}

/**
 * Verify IMAP credentials by opening a connection.
 * Returns true if the server accepts auth, throws otherwise.
 */
export async function verifyCredentials(session: MailSession): Promise<boolean> {
  const client = clientFor(session);
  try {
    await client.connect();
    return true;
  } finally {
    try {
      await client.logout();
    } catch {}
  }
}

/**
 * List the most recent N messages from INBOX, newest first.
 */
export async function listInbox(session: MailSession, limit = 30): Promise<InboxItem[]> {
  const client = clientFor(session);
  await client.connect();
  const items: InboxItem[] = [];
  try {
    const lock = await client.getMailboxLock("INBOX");
    try {
      const mailbox = client.mailbox;
      if (typeof mailbox === "boolean" || !mailbox) return items;
      const total = mailbox.exists;
      if (total === 0) return items;
      const start = Math.max(1, total - limit + 1);
      const range = `${start}:${total}`;
      for await (const msg of client.fetch(range, {
        uid: true,
        envelope: true,
        flags: true,
        bodyStructure: false,
        source: false,
        headers: ["from", "subject", "date"],
      })) {
        const envelope = msg.envelope;
        const fromEntry = envelope?.from?.[0];
        const fromName = fromEntry?.name ?? fromEntry?.address ?? "(unknown)";
        const fromAddress = fromEntry?.address ?? "";
        const subject = envelope?.subject ?? "(no subject)";
        const date = envelope?.date ? new Date(envelope.date).toISOString() : "";
        const flags = msg.flags ?? new Set<string>();
        items.push({
          uid: Number(msg.uid),
          seq: msg.seq,
          from: fromName,
          fromAddress,
          subject,
          date,
          preview: "",
          seen: flags.has("\\Seen"),
          flagged: flags.has("\\Flagged"),
        });
      }
    } finally {
      lock.release();
    }
  } finally {
    try {
      await client.logout();
    } catch {}
  }
  return items.sort((a, b) => b.uid - a.uid);
}

/**
 * Fetch + parse a single message by UID.
 */
export async function fetchMessage(
  session: MailSession,
  uid: number
): Promise<MailMessage | null> {
  const client = clientFor(session);
  await client.connect();
  try {
    const lock = await client.getMailboxLock("INBOX");
    try {
      const result = await client.fetchOne(String(uid), { uid: true, source: true }, { uid: true });
      if (!result || !result.source) return null;
      const parsed = await simpleParser(result.source);
      const fromAddr = parsed.from?.value?.[0];
      const toList = Array.isArray(parsed.to) ? parsed.to : parsed.to ? [parsed.to] : [];
      const toStr = toList
        .map((a) => a.value?.map((v) => v.address).filter(Boolean).join(", "))
        .filter(Boolean)
        .join(", ");
      await client.messageFlagsAdd({ uid: String(uid) }, ["\\Seen"], { uid: true });
      return {
        uid,
        from: fromAddr?.name ?? fromAddr?.address ?? "(unknown)",
        fromAddress: fromAddr?.address ?? "",
        to: toStr,
        subject: parsed.subject ?? "(no subject)",
        date: parsed.date?.toISOString() ?? "",
        html: parsed.html || "",
        text: parsed.text || "",
      };
    } finally {
      lock.release();
    }
  } finally {
    try {
      await client.logout();
    } catch {}
  }
}
