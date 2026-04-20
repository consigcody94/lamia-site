/**
 * Mail client configuration.
 * Defaults target Zoho Mail (free tier). Override via env vars when a
 * different provider is used. Host/port can also be set per-login from
 * the advanced login form.
 */

export interface ServerConfig {
  host: string;
  port: number;
  secure: boolean;
}

export const DEFAULT_IMAP: ServerConfig = {
  host: process.env.IMAP_HOST ?? "imap.zoho.com",
  port: Number(process.env.IMAP_PORT ?? 993),
  secure: true,
};

export const DEFAULT_SMTP: ServerConfig = {
  host: process.env.SMTP_HOST ?? "smtp.zoho.com",
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: true,
};

/** Presets the login form offers for quick selection. */
export const IMAP_PRESETS: { label: string; host: string; port: number }[] = [
  { label: "Zoho Mail",       host: "imap.zoho.com",    port: 993 },
  { label: "Fastmail",        host: "imap.fastmail.com", port: 993 },
  { label: "Google Workspace", host: "imap.gmail.com",   port: 993 },
  { label: "Proton Bridge",   host: "127.0.0.1",        port: 1143 },
  { label: "iCloud+",         host: "imap.mail.me.com", port: 993 },
  { label: "Custom",          host: "",                 port: 993 },
];
