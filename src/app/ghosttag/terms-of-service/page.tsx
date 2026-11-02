import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GhostTag Terms of Service",
  description: "Terms for using GhostTag’s temporary chat service.",
  alternates: { canonical: "/ghosttag/terms-of-service" },
};

const contact = "surajguvaju.programmer@gmail.com";

export default function GhostTagTerms() {
  return (
    <article className="bg-grid min-h-screen px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">GhostTag</p>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">Terms of Service</h1>
          <p className="text-lg leading-8 text-gray-300">These terms describe the rules for using GhostTag, a temporary chat service operated by Suraj Guvaju.</p>
          <p className="mt-6 text-sm font-semibold text-amber-300">Effective date: November 2, 2026</p>
        </header>

        <div className="glass-card space-y-10 text-base leading-8 text-gray-300">
          <Section title="Eligibility">
            <p>GhostTag is intended for adults aged 18 and over. The app checks a declared birthday before allowing access to social features. This declaration does not verify anyone’s age. Do not use the service if you are under 18 or otherwise ineligible where you live.</p>
          </Section>
          <Section title="Your anonymous session">
            <p>GhostTag gives you an anonymous credential instead of a public account. Keep the device and credential secure. Losing the credential may mean losing access to previous room memberships. A room-specific ghost name is not a guarantee that other people cannot identify you from what you share.</p>
          </Section>
          <Section title="Content and conduct">
            <p>You are responsible for what you post or send. Do not share illegal material, child sexual abuse material, threats, harassment, hateful attacks, sexual exploitation, nonconsensual intimate content, fraud, spam, or another person’s private information. Do not groom or target minors, impersonate others, or try to evade safety measures.</p>
            <p>Read the <Link className="text-indigo-300 underline underline-offset-4" href="/ghosttag/community-guidelines">Community Guidelines</Link> and <Link className="text-indigo-300 underline underline-offset-4" href="/ghosttag/child-safety-standards">Child Safety Standards</Link> for more detail.</p>
          </Section>
          <Section title="Temporary rooms and service limits">
            <p>Rooms and matched conversations have limited access windows. Their expiration does not guarantee immediate physical deletion: cleanup can happen later, and recipients may copy or save messages. GhostTag is not an emergency service, confidential communications service, or end-to-end encrypted messenger.</p>
          </Section>
          <Section title="Reporting and access">
            <p>The app lets participants report messages. Reports are not automatically reviewed or removed, and submitting one does not guarantee a response. Authorized operators may restrict access or remove content using available tools when appropriate, but GhostTag does not currently have continuous moderation coverage.</p>
          </Section>
          <Section title="Privacy and contact">
            <p>The <Link className="text-indigo-300 underline underline-offset-4" href="/ghosttag/privacy-policy">Privacy Policy</Link> explains the information GhostTag handles and its retention limits. For questions about these terms, email <a className="text-indigo-300 underline underline-offset-4" href={`mailto:${contact}`}>{contact}</a>. Do not include your anonymous credential in email.</p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="space-y-4"><h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>{children}</section>;
}
