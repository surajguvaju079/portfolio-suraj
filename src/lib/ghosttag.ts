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
  return [{
    relation: ["delegate_permission/common.handle_all_urls", "delegate_permission/common.get_login_creds"], target: {
      namespace: "android_app", package_name: "com.ghosttag", sha256_cert_fingerprints: ["7C:6E:B3:B4:17:04:48:B3:91:21:93:47:F5:C6:ED:CC:33:1D:85:41:26:22:AC:18:DC:82:C6:20:05:07:46:EB",
        "B5:4A:4B:43:94:A5:8B:2E:72:55:F2:75:C8:51:6C:07:C9:FF:0A:74:A1:F5:36:17:93:31:33:C2:91:DB:04:23",
        "19:30:B6:A2:36:2E:F6:15:08:FF:48:4E:9D:68:62:EE:91:22:71:E2:F2:43:DE:06:89:CD:E4:B3:25:A2:15:50",
        "B3:2A:72:54:06:22:2B:AD:C9:8C:81:6C:4F:EC:4B:36:F3:AE:B1:9C:0C:E7:3D:7E:BE:27:75:F5:D7:49:89:B0"
      ]
    }
  }];
}
