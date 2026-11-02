"use client";
import { useState } from "react";
export default function InviteActions({ code, inviteId, playUrl }: { code: string; inviteId: string; playUrl: string | null }) {
  const [notice, setNotice] = useState("");
  async function copy() {
    try { await navigator.clipboard.writeText(code); setNotice("Room code copied."); }
    catch { setNotice("Couldn’t copy automatically. Select the code above to copy it."); }
  }
  return <div className="space-y-5">
    <div className="flex flex-wrap gap-3">
      <a className="rounded-2xl bg-violet-500 px-6 py-4 font-bold text-white transition hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300" href={`ghosttag://join/${code}/${inviteId}`}>Open in GhostTag</a>
      <button type="button" className="rounded-2xl border border-violet-400/40 px-6 py-4 font-bold text-violet-200 transition hover:bg-violet-400/10" onClick={() => void copy()}>Copy room code</button>
    </div>
    <p aria-live="polite" className="min-h-6 text-sm text-violet-200">{notice}</p>
    {playUrl ? <p className="text-sm leading-7 text-gray-400">Need the app? <a href={playUrl} rel="noreferrer" className="text-violet-300 underline underline-offset-4">Get GhostTag on Google Play</a>, then return here and open this link again.</p> : <p className="text-sm leading-7 text-gray-400">The Android release is in development. If you already have a compatible build, open the invite above. After installing the app, return to this link to join.</p>}
  </div>;
}
