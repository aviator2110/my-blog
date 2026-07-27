import Image from "next/image";
import Link from "next/link";
import LikeArticleButton from "./LikeArticleButton";

type Article = {
  id: string;
  image: string;
  alt: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  text: string;
};

type BlogCardProps = {
  article: Article;
};

const BlogCard = ({ article }: BlogCardProps) => {
  return (
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

        <p className="mb-4 leading-7 text-zinc-700 dark:text-zinc-300">
          {article.description}
        </p>

        <div className="flex flex-wrap gap-2">
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
        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/blog/${article.id}`}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Читать далее
          </Link>

          <LikeArticleButton />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
