import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GhostTag Community Guidelines",
  description: "Safety and conduct guidelines for GhostTag rooms and conversations.",
  alternates: { canonical: "/ghosttag/community-guidelines" },
};

const contact = "surajguvaju.programmer@gmail.com";

export default function GhostTagCommunityGuidelines() {
  return (
    <article className="bg-grid min-h-screen px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">GhostTag</p>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Community Guidelines</h1>
          <p className="text-lg leading-8 text-gray-300">GhostTag is for low-pressure conversations between adults. These guidelines describe the conduct expected in rooms and matched chats.</p>
          <p className="mt-6 text-sm font-semibold text-amber-300">Effective date: November 2, 2026</p>
        </header>

        <div className="glass-card space-y-10 text-base leading-8 text-gray-300">
          <Section title="Be respectful">
            <p>Do not harass, bully, threaten, stalk, or use hateful attacks against others. Respect a person’s decision to leave or end a conversation. Do not impersonate another person or try to evade safety controls.</p>
          </Section>
          <Section title="Protect people’s safety and privacy">
            <p>Do not share someone else’s private information without permission. Do not send nonconsensual intimate content, sexually exploit anyone, commit fraud, or spam rooms. Avoid sharing your own sensitive information: people can copy or capture what you send.</p>
            <p>Child sexual abuse and exploitation, child sexual abuse material, grooming, and sexualization of minors are prohibited. Read the <Link className="text-indigo-300 underline underline-offset-4" href="/ghosttag/child-safety-standards">Child Safety Standards</Link> for details and the child-safety contact.</p>
          </Section>
          <Section title="Report a concerning message">
            <p>Use <strong className="text-white">Report</strong> on the message, choose the reason, and confirm. Reporting is private from ordinary room participants and rate limited. A report does not automatically remove content or guarantee a response. Do not email illegal material or anonymous credentials to ask for help.</p>
            <p>In a matched conversation, <strong className="text-white">Block and end</strong> prevents future matches with that anonymous identity until you clear the block. This does not filter group rooms. You can leave a room; leaving does not delete its earlier messages.</p>
          </Section>
          <Section title="How rules are handled">
            <p>Authorized operators may restrict content, rooms, or credentials using available tools. GhostTag does not currently have a staff-facing moderation dashboard, continuous review coverage, or a guaranteed response time. If anyone faces immediate danger, contact local emergency services.</p>
          </Section>
          <Section title="Contact and related policies">
            <p>For general questions, email <a className="text-indigo-300 underline underline-offset-4" href={`mailto:${contact}`}>{contact}</a>. For child-safety concerns, use the contact in the <Link className="text-indigo-300 underline underline-offset-4" href="/ghosttag/child-safety-standards">Child Safety Standards</Link>. Also read the <Link className="text-indigo-300 underline underline-offset-4" href="/ghosttag/terms-of-service">Terms of Service</Link> and <Link className="text-indigo-300 underline underline-offset-4" href="/ghosttag/privacy-policy">Privacy Policy</Link>.</p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="space-y-4"><h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>{children}</section>;
}
