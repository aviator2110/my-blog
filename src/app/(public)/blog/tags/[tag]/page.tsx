import BlogCard from "@/components/BlogCard";
import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const filteredArticles = articles.filter((article) =>
    article.tags.includes(tag),
  );

  if (filteredArticles.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl py-10">
      <h1 className="mb-8 text-4xl font-bold">
        Статьи по тегу: <span className="text-blue-600">#{tag}</span>
      </h1>

      <div className="space-y-8">
        {filteredArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
