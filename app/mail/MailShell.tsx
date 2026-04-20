"use client";

import { useState } from "react";
import { LoginForm } from "@/components/mail/LoginForm";
import { Inbox } from "@/components/mail/Inbox";

export function MailShell({ initialEmail }: { initialEmail: string | null }) {
  const [email, setEmail] = useState<string | null>(initialEmail);

  if (!email) {
    return (
      <LoginForm
        onSuccess={() => {
          // Reload so the server-rendered MailPage picks up the new session.
          window.location.reload();
        }}
      />
    );
  }
  return <Inbox email={email} />;
}
