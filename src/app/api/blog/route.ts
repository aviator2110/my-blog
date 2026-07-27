import { articles } from "@/data/articles";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ articles });
}