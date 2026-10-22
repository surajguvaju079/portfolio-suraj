import type { Metadata } from "next";

const BASE_URL = "https://surajguvaju.com.np";
const CONTACT_EMAIL = "surajguvaju.programmer@gmail.com";

export const metadata: Metadata = {
  title: "GhostTag Privacy Policy",
  description:
    "Privacy Policy for GhostTag, a temporary anonymous chat app developed by Suraj Guvaju.",
  alternates: {
    canonical: `${BASE_URL}/ghosttag/privacy-policy`,
  },
  openGraph: {
    title: "GhostTag Privacy Policy",
    description:
      "Privacy Policy for GhostTag, a temporary anonymous chat app developed by Suraj Guvaju.",
    url: `${BASE_URL}/ghosttag/privacy-policy`,
    type: "website",
  },
};

export default function GhostTagPrivacyPolicy() {
  return (
    <article className="bg-grid min-h-screen px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            GhostTag
          </p>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            GhostTag Privacy Policy
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            GhostTag is a temporary, anonymous chat service developed by Suraj
            Guvaju. This policy explains what the service stores, why it is
            used, and what its anonymity does and does not mean.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:gap-6">
            <span>Effective date: October 22, 2026</span>
            <span>Last updated: October 22, 2026</span>
          </div>
        </header>

        <div className="glass-card space-y-10 text-base leading-8 text-gray-300">
          <PolicySection title="1. Scope and operator">
            <p>
              This policy applies to GhostTag, including its mobile
              application, API, real-time messaging, rooms, and related
              services. The developer and operator identified for GhostTag is
              Suraj Guvaju. GhostTag does not require an email address, phone
              number, password, or named social account to use its implemented
              anonymous features.
            </p>
          </PolicySection>

          <PolicySection title="2. Anonymous identity and credentials">
            <p>
              On first use, GhostTag creates an anonymous identity and a
              randomly generated bearer credential. The server stores the
              identity&apos;s internal record and a one-way hash of the
              credential, not the raw credential. The raw credential is stored
              by the native app in the device&apos;s secure storage and is sent
              to the service to authenticate requests. On supported native
              platforms, the app requests device-only, unlocked keychain
              storage. The browser preview keeps the credential in memory and
              loses it when the page is reloaded.
            </p>
            <p>
              The credential can be revoked or can expire, but the current
              identity-creation flow does not set an automatic expiration.
              Anyone who obtains the credential may be able to act as that
              anonymous identity until it is revoked or otherwise invalid.
            </p>
          </PolicySection>

          <PolicySection title="3. Information stored on your device">
            <p>
              The native app stores the GhostTag bearer credential in secure
              platform storage so it can restore your anonymous session. Room
              messages and drafts are held in app memory for the active session;
              they are not implemented as a durable local message database.
              Uninstall, device backup, and platform keychain behavior can
              affect whether secure storage survives, and GhostTag does not
              control those platform behaviors.
            </p>
          </PolicySection>

          <PolicySection title="4. Rooms and temporary ghost identities">
            <p>
              A room has a short room code, a selected vibe, an optional room
              name, creation and expiration times, and a membership list.
              Rooms normally expire 24 hours after creation. Each membership
              receives a room-specific ghost name and avatar. Memberships,
              roles, join/leave times, and status are stored to operate the
              room. Other participants can see the room&apos;s public
              participant information and anything you share there.
            </p>
            <p>
              A ghost identity is not a promise of anonymity from GhostTag,
              infrastructure operators, network providers, or other
              participants. Messages can be copied, photographed, or otherwise
              retained by recipients. Do not share information that could
              identify or endanger you or another person.
            </p>
          </PolicySection>

          <PolicySection title="5. Messages and reports">
            <p>
              GhostTag stores message text, room and membership associations,
              message timestamps, and technical identifiers used for ordering
              and retry protection. Messages are delivered to authorized
              participants in the room and are not end-to-end encrypted.
              GhostTag does not implement a permanent social profile or
              follower graph.
            </p>
            <p>
              You can report a message using one of the available reasons,
              such as spam, harassment, hate, sexual content, threat, or
              other. A report stores the referenced message, reporting
              membership, reason, and time. Reports are not broadcast to room
              participants. Reports are rate limited and are removed when
              their related message and membership are removed during room
              cleanup; the current implementation does not preserve reports
              after that cleanup.
            </p>
          </PolicySection>

          <PolicySection title="6. Technical and network information">
            <p>
              The API records operational request information consisting of
              route templates, response status, request duration, and a
              request identifier. Application logs intentionally do not record
              raw URLs or query strings, request headers, bodies, message text,
              or credentials.
            </p>
            <p>
              Abuse-prevention rate limits use the connecting peer address and
              anonymous identity as inputs to short-lived, in-memory keyed
              hashes. The service does not retain the raw peer address in that
              limiter, and the limiter resets when the API process restarts.
              A hosting provider, TLS proxy, database provider, or other
              infrastructure operator may nevertheless process network
              information in ordinary operation. The production providers,
              proxy logs, backups, and their retention periods are deployment
              matters not established by the application source code.
            </p>
          </PolicySection>

          <PolicySection title="7. How information is used">
            <p>
              GhostTag uses this information to create and authenticate
              anonymous sessions, create and maintain rooms, deliver messages,
              enforce room membership and expiration, prevent duplicate sends,
              apply rate limits, receive abuse reports, protect users, and
              troubleshoot service failures. It is not used in the implemented
              app for advertising, behavioral analytics, or payment processing.
              No advertising or analytics SDK is configured in the reviewed
              mobile app; platform, hosting, and build-service diagnostics may
              still be governed by those providers&apos; own notices.
            </p>
          </PolicySection>

          <PolicySection title="8. Service providers and disclosure">
            <p>
              Room participants receive the messages and public room
              participant information needed for the room to function.
              Authorized operators and the infrastructure providers running the
              API and database may access server-stored information for
              operation, security, support, and legal compliance. The
              application source does not identify a production hosting,
              database, TLS, backup, or monitoring provider, so this policy
              does not name providers or claim a particular country of
              processing.
            </p>
            <p>
              GhostTag may disclose information when reasonably necessary to
              comply with law, respond to valid legal process, protect users,
              investigate abuse, or protect the service. GhostTag does not
              sell personal information.
            </p>
          </PolicySection>

          <PolicySection title="9. Retention and room expiration">
            <p>
              Expiration makes a room inaccessible through normal room access
              checks; it is not the same as immediate physical deletion. A
              cleanup worker normally considers an expired room eligible after
              a one-hour grace period and removes messages and polls in bounded
              batches, then memberships and the room. Worker load, downtime,
              failures, configuration, and database operations can delay that
              process.
            </p>
            <p>
              Room cleanup does not currently remove the anonymous identity or
              its credential. The source code does not establish retention
              periods for hosting logs, database logs, backups, WAL, or
              provider diagnostics. Those retention periods must be confirmed
              for the production deployment and may be longer than the room
              lifetime.
            </p>
          </PolicySection>

          <PolicySection title="10. Deletion and credential revocation">
            <p>
              The app&apos;s “Start fresh” action replaces the credential on
              that device and creates a new anonymous identity. It does not
              delete the previous server-side identity, memberships, messages,
              reports, logs, or backups. Leaving a room changes membership
              status; it is not deletion of prior messages or identity data.
            </p>
            <p>
              GhostTag currently has no self-service identity-deletion
              endpoint and no established external request workflow. Do not
              assume that a request sent by email can be verified or completed
              until an identity-verification and deletion process is
              established. Credential revocation may be performed by authorized
              operators where supported, but no public self-service revocation
              control is currently provided.
            </p>
          </PolicySection>

          <PolicySection title="11. Security and its limits">
            <p>
              The service uses hashed server-side credentials, access checks for
              rooms and messages, scoped public identifiers, rate limiting,
              private reporting, and scheduled cleanup. Production
              confidentiality in transit depends on the deployed HTTPS and
              secure WebSocket configuration. No system can guarantee perfect
              security, and GhostTag is not end-to-end encrypted. Device
              compromise, credential theft, infrastructure compromise, copied
              messages, and unexpected retention outside the application can
              defeat the protections described here.
            </p>
          </PolicySection>

          <PolicySection title="12. Privacy inquiries">
            <p>
              For privacy questions about GhostTag or to report an apparent
              privacy or security issue, contact{" "}
              <a
                className="font-medium text-indigo-300 underline decoration-indigo-400/50 underline-offset-4 hover:text-white"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
              . Please do not include a bearer credential or other secret in an
              email. Because no identity-deletion request process is currently
              implemented, this address should not be read as a promise that
              every deletion request can be verified or fulfilled.
            </p>
          </PolicySection>

          <PolicySection title="13. Changes to this policy">
            <p>
              This policy may be updated when GhostTag&apos;s implementation,
              infrastructure, or data practices change. The last-updated date
              at the top of this page indicates the current published version.
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
