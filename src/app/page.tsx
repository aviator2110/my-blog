import LikeArticleButton from "@/components/LikeArticleButton";
import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

export default function Home() {
  const lastUpdated = new Date().toLocaleString("ru-RU");

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 py-10">
      <p>Последнее обновление: {lastUpdated}</p>
      <main className="mx-auto max-w-4xl px-6">
        <h1 className="mb-10 text-center text-4xl font-bold text-zinc-900 dark:text-white">
          Блог про CS2
        </h1>

        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:bg-zinc-800"
            >
              <Image
                src={article.image}
                alt={article.alt}
                width={800}
                height={400}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-white">
                  {article.title}
                </h2>

                <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
                  📅 {article.date}
                </p>

                <p className="leading-7 text-zinc-700 dark:text-zinc-300">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={`/blog/${article.id}`}
                    className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                  >
                    Читать далее
                  </Link>

                  <LikeArticleButton />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
