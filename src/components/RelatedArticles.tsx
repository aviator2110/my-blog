import { articles } from "@/data/articles";
import Link from "next/link";

type Props = {
  currentId: string;
  tags: string[];
};

export default async function RelatedArticles({ currentId, tags }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const related = articles.filter(
    (article) =>
      article.id !== currentId &&
      article.tags.some((tag) => tags.includes(tag)),
  );

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="ml-6 mb-6 text-2xl font-bold">Похожие статьи</h2>

      {related.length === 0 ? (
        <p>Похожих статей нет.</p>
      ) : (
        <div className="space-y-4 m-6">
          {related.map((article) => (
            <div key={article.id} className="rounded-lg border p-4">
              <h3 className="font-semibold">{article.title}</h3>

              <p className="mt-2 text-sm text-zinc-600">
                {article.description}
              </p>

              <Link
                href={`/blog/${article.id}`}
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                Читать →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
