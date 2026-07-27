import Link from "next/link";

type TagBadgeProps = {
  tag: string;
};

const TagBadge = ({ tag }: TagBadgeProps) => {
  return (
    <Link
      href={`/blog/tags/${tag}`}
      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 transition hover:bg-blue-200
        dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-800/50"
    >
      #{tag}
    </Link>
  );
};

export default TagBadge;
