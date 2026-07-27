import Image from "next/image";
import Link from "next/link";

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

const BlogPageCard = ({ article }: BlogCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-800">
        <Image
          src={article.image}
          alt={article.alt}
          width={1200}
          height={500}
          className="h-96 w-full object-cover"
        />

        <div className="p-8">
          <p className="mb-3 text-sm text-zinc-500">📅 {article.date}</p>

          <h1 className="mb-6 text-4xl font-bold">{article.title}</h1>

          <div className="space-y-5 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            <p>{article.description}</p>

            {article.text
              .trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 leading-8 text-zinc-700 dark:text-zinc-300"
                >
                  {paragraph}
                </p>
              ))}
          </div>

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
        </div>
      </article>
  )
}

export default BlogPageCard