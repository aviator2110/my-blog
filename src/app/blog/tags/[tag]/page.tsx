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
          <article
            key={article.id}
            className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-zinc-800"
          >
            <Image
              src={article.image}
              alt={article.alt}
              width={800}
              height={400}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="mb-2 text-2xl font-semibold">{article.title}</h2>

              <p className="mb-4 text-sm text-zinc-500">📅 {article.date}</p>

              <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                {article.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag}`}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 hover:bg-blue-200"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <Link
                href={`/blog/${article.id}`}
                className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
              >
                Читать далее
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
