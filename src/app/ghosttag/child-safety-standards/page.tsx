import Link from "next/link";
import type { Metadata } from "next";

const BASE_URL = "https://surajguvaju.com.np";
const CHILD_SAFETY_EMAIL = "surajguvaju0@gmail.com";

export const metadata: Metadata = {
  title: "GhostTag Child Safety Standards",
  description:
    "GhostTag's public standards prohibiting child sexual abuse and exploitation and explaining how to report concerns.",
  alternates: {
    canonical: `${BASE_URL}/ghosttag/child-safety-standards`,
  },
  openGraph: {
    title: "GhostTag Child Safety Standards",
    description:
      "GhostTag's public child-safety standards and in-app reporting information.",
    url: `${BASE_URL}/ghosttag/child-safety-standards`,
    type: "website",
  },
};

export default function GhostTagChildSafetyStandards() {
  return (
    <article className="bg-grid min-h-screen px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            GhostTag
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            GhostTag Child Safety Standards
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            These standards apply to GhostTag&apos;s rooms, messages, and
            related services. GhostTag is intended to be a temporary,
            anonymous chat service, not a place for sexual content involving
            minors or any exploitation of children.
          </p>
          <p className="mt-6 text-sm text-gray-400">
            Last updated: October 22, 2026
          </p>
        </header>

        <div className="glass-card space-y-10 text-base leading-8 text-gray-300">
          <PolicySection title="1. Zero tolerance">
            <p>
              GhostTag has zero tolerance for child sexual abuse and
              exploitation (CSAE), including child sexual abuse material
              (CSAM). The prohibition applies whether content is created,
              requested, shared, solicited, offered, stored, or used to
              threaten or exploit a child.
            </p>
          </PolicySection>

          <PolicySection title="2. Prohibited content and conduct">
            <p>
              Users must not use GhostTag to groom, sexualize, target, exploit,
              or solicit a minor; arrange or encourage sexual contact with a
              minor; request, create, possess, distribute, or link to CSAM;
              trade or threaten to distribute sexual material involving a
              minor; or evade safety measures while attempting any of these
              acts.
            </p>
            <p>
              Attempts, facilitation, recruitment, coercion, and knowing
              distribution are prohibited even if the attempt does not
              succeed. Users must not share a child&apos;s private information
              or use GhostTag to intimidate or endanger a child.
            </p>
          </PolicySection>

          <PolicySection title="3. How to report a concerning message">
            <p>
              In a room, use <strong className="text-white">Report</strong> on
              the concerning message, choose a reason, and confirm. Choose{" "}
              <strong className="text-white">Child safety</strong> for a
              concern involving CSAE, CSAM, grooming, sexual exploitation of a
              minor, or another urgent child-safety issue. The report is sent
              with the authenticated anonymous session and the current room
              membership. Reports are private from ordinary room participants,
              rate limited, and deduplicated per reporter and message.
            </p>
            <p>
              A report records the message reference, reporting membership,
              selected reason, and time. It does not automatically remove a
              message, block a participant, notify an authority, or guarantee
              a response. Do not copy or email CSAM or other harmful material
              to request help.
            </p>
          </PolicySection>

          <PolicySection title="4. Child-safety contact">
            <p>
              For a child-safety concern, contact the designated child-safety
              address at{" "}
              <a
                className="font-medium text-indigo-300 underline decoration-indigo-400/50 underline-offset-4 hover:text-white"
                href={`mailto:${CHILD_SAFETY_EMAIL}`}
              >
                {CHILD_SAFETY_EMAIL}
              </a>
              . Do not include credentials, unnecessary personal information,
              or illegal sexual material in an email. Include enough
              non-sensitive context to identify the concern and explain
              whether there is an immediate risk.
            </p>
          </PolicySection>

          <PolicySection title="5. Assessment and possible action">
            <p>
              Reports are currently accepted and stored for safety review, but
              GhostTag does not currently have a staff-facing report queue,
              moderation dashboard, automatic CSAM detection, continuous
              moderation coverage, established response-time commitment, or
              verified CSAM escalation workflow. A report should therefore
              not be treated as confirmation that a person has reviewed the
              content.
            </p>
            <p>
              If an authorized operator receives and assesses a report, actions
              may include preserving only the minimum information necessary for
              a lawful safety process, removing or restricting offending
              content, locking a room, revoking an abusive anonymous
              credential, and escalating a credible emergency or suspected
              child exploitation to the appropriate authority where required.
              These are operational possibilities, not a promise that every
              action is available, automatic, or completed within a particular
              time.
            </p>
            <p>
              There is currently no participant blocking feature. Reporting is
              not blocking, and leaving a room does not remove prior messages
              or prevent another participant from appearing in a different
              room.
            </p>
          </PolicySection>

          <PolicySection title="6. Legal compliance and cooperation">
            <p>
              GhostTag intends to comply with applicable child-safety and
              reporting obligations. When a valid legal request or an
              appropriate safety escalation is received, the operator may
              cooperate with relevant authorities as required by applicable
              law. The current implementation does not itself establish a
              complete legal reporting, preservation, or authority-notification
              process, and this page is not a certification of compliance with
              every law or jurisdiction.
            </p>
          </PolicySection>

          <PolicySection title="7. Retention and limitations">
            <p>
              Rooms normally expire after 24 hours, but expiration is not
              immediate physical deletion. Cleanup can be delayed, and reports
              currently cascade away with their related room content. A report
              may therefore not remain available indefinitely. Hosting logs,
              backups, and provider retention are deployment-dependent.
            </p>
            <p>
              GhostTag is anonymous to other participants in limited,
              room-scoped ways; it is not guaranteed anonymity from the
              service, infrastructure operators, network providers, or
              recipients who copy content. Do not rely on anonymity as a safety
              measure.
            </p>
          </PolicySection>

          <PolicySection title="8. Related information">
            <p>
              See the{" "}
              <Link
                className="font-medium text-indigo-300 underline decoration-indigo-400/50 underline-offset-4 hover:text-white"
                href="/ghosttag/privacy-policy"
              >
                GhostTag Privacy Policy
              </Link>{" "}
              for information about credentials, messages, reports, retention,
              technical data, and privacy inquiries.
            </p>
          </PolicySection>
        </div>
      </div>
    </article>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      {children}
    </section>
  );
}
