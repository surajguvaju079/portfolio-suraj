import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InviteActions from "@/components/ghosttag/InviteActions";
import { ghosttagPlayUrl, validRoomInvite } from "@/lib/ghosttag";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "A GhostTag room invitation",
  description: "Open a temporary room invitation in GhostTag. For adults aged 18 and over.",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
  alternates: { canonical: "/ghosttag" },
  openGraph: { title: "You’re invited to GhostTag", description: "A temporary place to talk. Open the invitation in the app.", url: "/ghosttag", type: "website" },
};
export default async function RoomInvite({ params }: { params: Promise<{ code: string; inviteId: string }> }) {
  const { code, inviteId } = await params;
  if (!validRoomInvite(code, inviteId)) notFound();
  return <article className="bg-grid min-h-screen px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
    <div className="mx-auto max-w-xl">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">GhostTag · Room invitation · 18+</p>
      <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">A moment is waiting.</h1>
      <p className="mt-5 text-lg leading-8 text-gray-300">A friend shared a temporary room with you. Open it in GhostTag to check whether it’s still available and choose to join.</p>
      <div className="glass-card mt-8 space-y-7">
        <div><p className="text-sm text-gray-400">Room code</p><p className="mt-2 select-all font-mono text-3xl font-bold tracking-widest text-violet-200">{code}</p></div>
        <InviteActions code={code} inviteId={inviteId.toLowerCase()} playUrl={ghosttagPlayUrl()} />
      </div>
      <p className="mt-6 text-sm leading-7 text-gray-400">Opening this page does not join the room. Availability, age eligibility and room access are checked by the app. An expired invitation cannot open a different room if its short code is reused.</p>
      <nav aria-label="GhostTag information" className="mt-8 flex flex-wrap gap-5 text-sm text-violet-300"><Link href="/ghosttag">About GhostTag</Link><Link href="/ghosttag/privacy-policy">Privacy</Link><Link href="/ghosttag/child-safety-standards">Safety</Link></nav>
    </div>
  </article>;
}
