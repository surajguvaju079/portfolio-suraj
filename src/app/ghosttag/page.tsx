import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ghosttagPlayUrl } from "@/lib/ghosttag";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "GhostTag — Temporary conversations",
  description: "Meet someone. Talk freely. Make a moment. Then disappear. GhostTag is an Android-first temporary chat app for adults, currently in development.",
  alternates: { canonical: "/ghosttag" },
  openGraph: { title: "GhostTag — A little company, without the pressure", description: "Temporary conversations for adults. Android-first, currently in development.", url: "/ghosttag", images: ["/ghosttag/mascot.png"], type: "website" },
};
export default function GhostTag() {
  const playUrl = ghosttagPlayUrl();
  return <article className="bg-grid min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
    <div className="mx-auto max-w-5xl">
      <header className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div><p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">In development · Android first · 18+</p>
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl">A little company.<br /><span className="text-violet-300">Less pressure.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">Meet someone. Talk freely. Make a moment. Then disappear.</p>
          <p className="mt-4 max-w-xl leading-8 text-gray-400">GhostTag is a temporary chat app for adults. Share a room with friends, or find a relaxed conversation without building a public profile.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a className="rounded-2xl bg-violet-500 px-6 py-4 font-bold text-white hover:bg-violet-400" href="ghosttag:///">Open installed app</a>{playUrl && <a className="rounded-2xl border border-violet-400/40 px-6 py-4 font-bold text-violet-200" href={playUrl} rel="noreferrer">Get it on Google Play</a>}</div>
        </div>
        <Image src="/ghosttag/mascot.png" alt="GhostTag’s purple ghost mascot" width={420} height={420} className="mx-auto h-auto w-full max-w-xs drop-shadow-[0_0_70px_#8b5cf64d]" priority />
      </header>
      <section aria-label="How GhostTag works" className="mt-20 grid gap-5 md:grid-cols-3">
        {[['Make a room', 'Pick a vibe, share a stable invitation and bring your friends. Group rooms normally last 24 hours.'], ['Find a little company', 'English casual conversations for two. Start with 15 minutes; both people can choose 15 more.'], ['Stay in control', 'Optional conversation starters, message reporting, and Block and end for matched chats. No follower counts or permanent public profiles.']].map(([title, text]) => <div key={title} className="glass-card"><h2 className="text-xl font-bold text-white">{title}</h2><p className="mt-4 leading-8 text-gray-400">{text}</p></div>)}
      </section>
      <section className="glass-card mt-8"><h2 className="text-2xl font-bold text-white">Temporary doesn’t mean untraceable.</h2><p className="mt-4 leading-8 text-gray-400">Messages are not end-to-end encrypted, and recipients can copy what you share. Age screening is based on a declared birthday and does not prove someone’s age. Public social access remains disabled while release readiness is completed.</p><div className="mt-6 flex flex-wrap gap-6 text-violet-300"><Link href="/ghosttag/privacy-policy">Privacy policy →</Link><Link href="/ghosttag/child-safety-standards">Child safety standards →</Link><Link href="/ghosttag/terms-of-service">Terms of Service →</Link><Link href="/ghosttag/community-guidelines">Community Guidelines →</Link></div></section>
    </div>
  </article>;
}
