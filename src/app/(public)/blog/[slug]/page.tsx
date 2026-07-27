import BlogPageCard from "@/components/BlogPageCard";
import RelatedArticles from "@/components/RelatedArticles";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.id === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <BlogPageCard article={article} />

      <Suspense
        fallback={
          <div className="mx-auto mt-12 w-[95%] rounded-lg border p-6 text-center">
            Загрузка похожих статей...
          </div>
        }
      >
        <RelatedArticles currentId={article.id} tags={article.tags} />
      </Suspense>
    </>
  );
}
