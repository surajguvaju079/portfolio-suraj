import { ImageResponse } from "next/og";
import { site } from "@/content/site";
export const alt = "Suraj Guvaju — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#080F16", color: "#F1F5F9", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#CBD5E1", fontSize: 24 }}><span>{site.name}</span><span>Full-Stack Software Engineer</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.08, letterSpacing: "-3px" }}><span>Engineering products</span><span>from code to <span style={{ color: "#22D3EE" }}>production.</span></span></div>
      <div style={{ display: "flex", borderTop: "1px solid #263747", paddingTop: 25, justifyContent: "space-between", fontSize: 22, color: "#CBD5E1" }}><span>Web · Mobile · Backend · Infrastructure</span><span>surajguvaju.com.np</span></div>
    </div>, size
  );
}
