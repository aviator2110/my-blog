import BlogCard from "@/components/BlogCard";
import { articles } from "@/data/articles";

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
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
}
