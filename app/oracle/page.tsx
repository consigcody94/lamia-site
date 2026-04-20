import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { requireSession } from "@/lib/mail/session";
import { MailShell } from "./MailShell";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function MailPage() {
  const session = await requireSession();
  return (
    <>
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <MailShell initialEmail={session?.email ?? null} />
      </main>
      <Footer />
    </>
  );
}
