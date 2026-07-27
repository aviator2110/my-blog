import { articles } from "@/data/articles";
import { NextRequest, NextResponse } from "next/server";

function findById(id: string) {
  return articles.find((article) => article.id === id) ?? null;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const article = findById(id);

  if (!article) {
    return NextResponse.json(
      { error: "Article not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ tags: article.tags });
}