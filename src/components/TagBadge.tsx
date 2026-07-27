import Link from "next/link";

type TagBadgeProps = {
  tag: string;
};

const TagBadge = ({ tag }: TagBadgeProps) => {
  return (
    <Link
      key={tag}
      href={`/blog/tags/${tag}`}
      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 hover:bg-blue-200"
    >
      #{tag}
    </Link>
  );
};

export default TagBadge;
