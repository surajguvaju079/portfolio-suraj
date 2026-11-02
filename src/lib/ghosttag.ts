export const ghosttagOrigin = "https://surajguvaju.com.np";
export function validRoomInvite(code: string, inviteId: string) {
  return /^GH-\d{4}$/.test(code) && /^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(inviteId);
}
export function ghosttagPlayUrl() {
  const value = process.env.GHOSTTAG_PLAY_STORE_URL;
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "play.google.com" || url.port || url.username || url.password || url.hash || url.pathname !== "/store/apps/details" || url.searchParams.get("id") !== "com.ghosttag" || [...url.searchParams.keys()].some(key => key !== "id")) return null;
    return url.toString();
  } catch { return null; }
}
export function ghosttagAssociation() {
  const raw = process.env.GHOSTTAG_ANDROID_SHA256_CERT_FINGERPRINTS;
  if (!raw?.trim()) return [];
  const fingerprints = [...new Set(raw.split(",").map(value => value.trim().toUpperCase()))];
  if (!fingerprints.every(value => /^(?:[A-F0-9]{2}:){31}[A-F0-9]{2}$/.test(value))) throw new Error("Invalid Android certificate fingerprint configuration");
  return [{ relation: ["delegate_permission/common.handle_all_urls", "delegate_permission/common.get_login_creds"], target: { namespace: "android_app", package_name: "com.ghosttag", sha256_cert_fingerprints: fingerprints } }];
}
