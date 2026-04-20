"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CrescentMoon } from "@/components/Ornaments";

interface InboxItem {
  uid: number;
  from: string;
  fromAddress: string;
  subject: string;
  date: string;
  seen: boolean;
  flagged: boolean;
}

export function Inbox({ email }: { email: string }) {
  const [items, setItems] = useState<InboxItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = async () => {
    setRefreshing(true);
    setError(null);
    try {
      const res = await fetch("/api/mail/messages");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Error ${res.status}`);
      }
      const data = await res.json();
      setItems(data.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load inbox");
      setItems([]);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const logout = async () => {
    await fetch("/api/mail/logout", { method: "POST" });
    window.location.reload();
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b pb-6" style={{ borderColor: "rgba(200,151,122,0.25)" }}>
        <div>
          <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
            ☾ Signed in as ☾
          </p>
          <p className="mt-1 font-display text-xl" style={{ color: "#ebdcc4" }}>
            {email}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={load}
            disabled={refreshing}
            className="rounded-full border px-5 py-2 font-caps text-[10px] uppercase tracking-[0.35em] transition disabled:opacity-50"
            style={{
              borderColor: "rgba(200,151,122,0.5)",
              color: "#c8977a",
              background: "rgba(114,31,53,0.15)",
            }}
          >
            {refreshing ? "Listening…" : "↻ Refresh"}
          </button>
          <button
            type="button"
            onClick={logout}
            className="rounded-full border px-5 py-2 font-caps text-[10px] uppercase tracking-[0.35em] transition"
            style={{
              borderColor: "rgba(200,151,122,0.3)",
              color: "#ebdcc4",
            }}
          >
            Close Door
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-md border border-red-900/60 bg-red-950/30 p-4 font-serif text-sm text-red-200">
          {error}
        </div>
      )}

      {items === null && !error && (
        <p className="py-10 text-center font-serif italic text-[#ebdcc4]/60">Listening at the door…</p>
      )}

      {items !== null && items.length === 0 && !error && (
        <p className="py-10 text-center font-serif italic text-[#ebdcc4]/60">The inbox is empty. No word has arrived yet.</p>
      )}

      <ul className="flex flex-col gap-2">
        {items?.map((m, i) => (
          <motion.li
            key={m.uid}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.02 }}
          >
            <Link
              href={`/mail/${m.uid}`}
              className={`group grid grid-cols-[auto_1fr_auto] items-start gap-4 rounded-lg border px-4 py-3 transition hover:border-[#c8977a]/60 ${
                m.seen ? "opacity-75" : ""
              }`}
              style={{
                borderColor: m.seen ? "rgba(200,151,122,0.15)" : "rgba(200,151,122,0.35)",
                background: m.seen ? "rgba(13,7,9,0.6)" : "rgba(74,16,32,0.12)",
              }}
            >
              <span className="mt-1">
                <CrescentMoon size={16} className={m.seen ? "opacity-30" : "opacity-90"} />
              </span>
              <div className="min-w-0">
                <p
                  className="font-display text-base font-semibold"
                  style={{ color: m.seen ? "#c9b89a" : "#ebdcc4" }}
                >
                  {m.from}
                </p>
                <p className="mt-0.5 truncate font-serif text-sm" style={{ color: "#ebdcc4" }}>
                  {m.subject}
                </p>
                {m.fromAddress && (
                  <p className="mt-0.5 truncate font-mono text-[10px] text-[#ebdcc4]/40">
                    {m.fromAddress}
                  </p>
                )}
              </div>
              <time
                dateTime={m.date}
                className="whitespace-nowrap font-caps text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "#a8a09b" }}
              >
                {formatDate(m.date)}
              </time>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  if (sameDay) {
    return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }
  const sameYear = d.getFullYear() === now.getFullYear();
  return d.toLocaleDateString([], sameYear ? { month: "short", day: "numeric" } : { year: "numeric", month: "short", day: "numeric" });
}
