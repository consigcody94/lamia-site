import { redirect } from "next/navigation";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { requireSession } from "@/lib/mail/session";
import { MessageView } from "@/components/mail/MessageView";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface Params {
  params: Promise<{ uid: string }>;
}

export default async function MailMessagePage({ params }: Params) {
  const session = await requireSession();
  if (!session) redirect("/mail");
  const { uid } = await params;
  const uidNum = Number(uid);
  if (!Number.isFinite(uidNum)) redirect("/mail");
  return (
    <>
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <MessageView uid={uidNum} />
      </main>
      <Footer />
    </>
  );
}
