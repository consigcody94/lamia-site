"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IMAP_PRESETS } from "@/lib/mail/config";
import { HuluppuTree } from "@/components/HuluppuTree";
import { PRIEST_EMAIL } from "@/lib/data";

export function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState(PRIEST_EMAIL);
  const [password, setPassword] = useState("");
  const [advanced, setAdvanced] = useState(false);
  const [preset, setPreset] = useState(IMAP_PRESETS[0]);
  const [imapHost, setImapHost] = useState(preset.host);
  const [imapPort, setImapPort] = useState(preset.port);
  const [smtpHost, setSmtpHost] = useState("smtp.zoho.com");
  const [smtpPort, setSmtpPort] = useState(465);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePreset = (label: string) => {
    const p = IMAP_PRESETS.find((x) => x.label === label) ?? IMAP_PRESETS[0];
    setPreset(p);
    if (p.host) {
      setImapHost(p.host);
      setImapPort(p.port);
      if (p.label === "Zoho Mail") { setSmtpHost("smtp.zoho.com"); setSmtpPort(465); }
      else if (p.label === "Fastmail") { setSmtpHost("smtp.fastmail.com"); setSmtpPort(465); }
      else if (p.label === "Google Workspace") { setSmtpHost("smtp.gmail.com"); setSmtpPort(465); }
      else if (p.label === "iCloud+") { setSmtpHost("smtp.mail.me.com"); setSmtpPort(587); }
      else if (p.label === "Proton Bridge") { setSmtpHost("127.0.0.1"); setSmtpPort(1025); }
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/oracle/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, imapHost, imapPort, smtpHost, smtpPort }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Authentication failed");
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="mx-auto max-w-md"
    >
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <HuluppuTree size={140} className="moon-pulse" />
        </div>
        <p className="font-caps text-[10px] uppercase tracking-[0.5em]" style={{ color: "#c8977a" }}>
          ☾ The Grove ☾
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-wider md:text-5xl">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)",
            }}
          >
            Speak to the Oracle
          </span>
        </h1>
        <p className="mt-4 font-serif text-sm italic text-[#ebdcc4]/60">
          The Huluppu tree holds her house in the trunk. Name yourself at the roots and she will
          receive the words the tree has carried. Your credentials are verified against the server
          directly and stored only in an encrypted session cookie.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="mt-10 rounded-xl border p-6 backdrop-blur md:p-8"
        style={{
          borderColor: "rgba(200,151,122,0.3)",
          background:
            "linear-gradient(160deg, rgba(13,7,9,0.9) 0%, rgba(74,16,32,0.25) 50%, rgba(13,7,9,0.9) 100%)",
        }}
      >
        <div className="space-y-4">
          <Field label="Email">
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border bg-black/40 px-3 py-2.5 font-serif text-base text-[#ebdcc4] outline-none transition focus:border-[#c8977a]"
              style={{ borderColor: "rgba(200,151,122,0.35)" }}
            />
          </Field>
          <Field label="Password">
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border bg-black/40 px-3 py-2.5 font-serif text-base text-[#ebdcc4] outline-none transition focus:border-[#c8977a]"
              style={{ borderColor: "rgba(200,151,122,0.35)" }}
            />
          </Field>

          <button
            type="button"
            onClick={() => setAdvanced((a) => !a)}
            className="font-caps text-[9px] uppercase tracking-[0.35em] text-[#ebdcc4]/50 transition hover:text-[#c8977a]"
          >
            {advanced ? "▾" : "▸"} Server Settings
          </button>
          {advanced && (
            <div className="space-y-3 border-t pt-4" style={{ borderColor: "rgba(200,151,122,0.2)" }}>
              <Field label="Provider">
                <select
                  value={preset.label}
                  onChange={(e) => handlePreset(e.target.value)}
                  className="w-full rounded-md border bg-black/40 px-3 py-2 font-serif text-sm text-[#ebdcc4] outline-none"
                  style={{ borderColor: "rgba(200,151,122,0.35)" }}
                >
                  {IMAP_PRESETS.map((p) => (
                    <option key={p.label} value={p.label} className="bg-[#0d0709] text-[#ebdcc4]">
                      {p.label}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="grid grid-cols-[1fr_90px] gap-3">
                <Field label="IMAP Host">
                  <input
                    type="text"
                    value={imapHost}
                    onChange={(e) => setImapHost(e.target.value)}
                    className="w-full rounded-md border bg-black/40 px-3 py-2 font-mono text-xs text-[#ebdcc4] outline-none"
                    style={{ borderColor: "rgba(200,151,122,0.35)" }}
                  />
                </Field>
                <Field label="IMAP Port">
                  <input
                    type="number"
                    value={imapPort}
                    onChange={(e) => setImapPort(Number(e.target.value))}
                    className="w-full rounded-md border bg-black/40 px-3 py-2 font-mono text-xs text-[#ebdcc4] outline-none"
                    style={{ borderColor: "rgba(200,151,122,0.35)" }}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-[1fr_90px] gap-3">
                <Field label="SMTP Host">
                  <input
                    type="text"
                    value={smtpHost}
                    onChange={(e) => setSmtpHost(e.target.value)}
                    className="w-full rounded-md border bg-black/40 px-3 py-2 font-mono text-xs text-[#ebdcc4] outline-none"
                    style={{ borderColor: "rgba(200,151,122,0.35)" }}
                  />
                </Field>
                <Field label="SMTP Port">
                  <input
                    type="number"
                    value={smtpPort}
                    onChange={(e) => setSmtpPort(Number(e.target.value))}
                    className="w-full rounded-md border bg-black/40 px-3 py-2 font-mono text-xs text-[#ebdcc4] outline-none"
                    style={{ borderColor: "rgba(200,151,122,0.35)" }}
                  />
                </Field>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-md border border-red-900/60 bg-red-950/30 p-3 text-center font-serif text-sm text-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full border px-8 py-3.5 font-caps text-xs uppercase tracking-[0.35em] transition disabled:opacity-50"
            style={{
              borderColor: "rgba(200,151,122,0.8)",
              background: "linear-gradient(180deg, rgba(114,31,53,0.45), rgba(74,16,32,0.55))",
              color: "#ebdcc4",
              boxShadow: "0 0 40px -10px rgba(114,31,53,0.9)",
            }}
          >
            {submitting ? "Approaching the Tree…" : "☾ Enter the Grove"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-caps text-[10px] uppercase tracking-[0.35em] text-[#ebdcc4]/55">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
