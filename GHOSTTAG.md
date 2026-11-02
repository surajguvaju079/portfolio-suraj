# GhostTag pages and Android link association

`/ghosttag` describes the development-stage app. Group invites use
`/ghosttag/join/GH-1234/<uuid>` and require explicit app opening/joining. The browser
page never calls the chat API, joins a room, or asserts live availability. Invite
pages are noindex/nofollow and use generic preview metadata. Only public room codes
and invite IDs appear in links; no identity credentials are used.

The exact domain root `/.well-known/assetlinks.json` serves Android associations
for com.ghosttag. Configure GHOSTTAG_ANDROID_SHA256_CERT_FINGERPRINTS with real
colon-separated SHA-256 fingerprints, comma-separated for multiple approved builds.
For Play installs use the Play app-signing certificate, not merely the upload key.
No fingerprint produces HTTP 200 with []; invalid configuration produces 503 with
[]. Neither means verified links are ready. Deploy the association and rebuild/test
Android before claiming HTTPS auto-opening works. Policy pages are not app links.

GHOSTTAG_PLAY_STORE_URL optionally enables install links; only the HTTPS Google Play
listing for com.ghosttag is accepted. Otherwise pages describe the release as in
development. Installation does not retain the invitation automatically: reopen the
original link afterward. No deferred-link SDK, analytics or tracking is added.

These pages do not enable social/matching access. Both backend feature flags remain
off by default. Public release still requires the age-assurance, moderation and
other GhostTag release gates. The existing privacy/safety pages describe the new
implementation data handling; hosting/deployment/operator assurances still require
owner review. No production deployment is part of the code change.
