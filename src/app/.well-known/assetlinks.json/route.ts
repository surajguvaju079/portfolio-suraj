import { NextResponse } from "next/server";
import { ghosttagAssociation } from "@/lib/ghosttag";
export const dynamic = "force-dynamic";
export function GET() {
  try { return NextResponse.json(ghosttagAssociation(), { headers: { "Cache-Control": "public, max-age=300" } }); }
  catch { return NextResponse.json([], { status: 503, headers: { "Cache-Control": "no-store" } }); }
}
