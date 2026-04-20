"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface MailMessage {
  uid: number;
  from: string;
  fromAddress: string;
  to: string;
  subject: string;
  date: string;
  html: string;
  text: string;
}

export function MessageView({ uid }: { uid: number }) {
  const [msg, setMsg] = useState<MailMessage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/oracle/message/${uid}`);
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `Error ${res.status}`);
        }
        const data = await res.json();
        setMsg(data.message);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not load message");
      }
    })();
  }, [uid]);

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/oracle"
        className="inline-flex items-center gap-2 font-caps text-[10px] uppercase tracking-[0.4em] transition hover:text-[#e4b89c]"
        style={{ color: "#c8977a" }}
      >
        ← Back to the Grove
      </Link>

      {error && (
        <div className="mt-8 rounded-md border border-red-900/60 bg-red-950/30 p-4 font-serif text-sm text-red-200">
          {error}
        </div>
      )}

      {!msg && !error && (
        <p className="py-16 text-center font-serif italic text-[#ebdcc4]/60">Unwinding the serpent&apos;s scroll…</p>
      )}

      {msg && (
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-xl border p-6 backdrop-blur md:p-10"
          style={{
            borderColor: "rgba(200,151,122,0.3)",
            background: "linear-gradient(160deg, rgba(13,7,9,0.9) 0%, rgba(74,16,32,0.2) 50%, rgba(13,7,9,0.9) 100%)",
          }}
        >
          <h1 className="font-display text-3xl font-semibold leading-tight md:text-4xl" style={{ color: "#ebdcc4" }}>
            {msg.subject}
          </h1>
          <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b pb-4" style={{ borderColor: "rgba(200,151,122,0.25)" }}>
            <span className="font-caps text-[10px] uppercase tracking-[0.35em]" style={{ color: "#c8977a" }}>
              From
            </span>
            <span className="font-serif text-base" style={{ color: "#ebdcc4" }}>
              {msg.from}{" "}
              {msg.fromAddress && (
                <span className="font-mono text-xs text-[#ebdcc4]/50">&lt;{msg.fromAddress}&gt;</span>
              )}
            </span>
          </div>
          {msg.to && (
            <div className="mt-2 flex flex-wrap items-baseline gap-x-6">
              <span className="font-caps text-[10px] uppercase tracking-[0.35em]" style={{ color: "#c8977a" }}>
                To
              </span>
              <span className="font-mono text-xs text-[#ebdcc4]/70">{msg.to}</span>
            </div>
          )}
          <div className="mt-2 flex flex-wrap items-baseline gap-x-6">
            <span className="font-caps text-[10px] uppercase tracking-[0.35em]" style={{ color: "#c8977a" }}>
              Received
            </span>
            <span className="font-mono text-xs text-[#ebdcc4]/70">{formatFull(msg.date)}</span>
          </div>

          <div className="mt-8">
            {msg.html ? (
              <div
                className="prose prose-invert max-w-none font-serif text-base leading-[1.8] text-[#ebdcc4]/90"
                style={{
                  // clamp all nested images so alpine-dotting newsletters don't blow out the layout
                }}
                dangerouslySetInnerHTML={{ __html: sanitize(msg.html) }}
              />
            ) : (
              <pre className="whitespace-pre-wrap font-serif text-base leading-[1.8] text-[#ebdcc4]/90">
                {msg.text}
              </pre>
            )}
          </div>
        </motion.article>
      )}
    </div>
  );
}

function formatFull(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleString([], {
    year: "numeric", month: "long", day: "numeric",
    hour: "numeric", minute: "2-digit",
  });
}

/**
 * Minimal-risk HTML sanitization: strip <script>, <style>, inline event handlers,
 * and javascript: URLs. Email HTML is unavoidably messy, but we at least cap XSS.
 * For production-grade sanitation a full library (DOMPurify) is preferable;
 * this is a pragmatic baseline for a single-user inbox.
 */
function sanitize(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
    .replace(/\son\w+\s*=\s*[^ >]+/gi, "")
    .replace(/javascript:/gi, "");
}
