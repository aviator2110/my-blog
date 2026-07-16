import { useState } from "react";

const LikeArticleButton = () => {
  const [isLiked, setLike] = useState(false);

  return (
    <button
      onClick={() => setLike((prev) => !prev)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-2xl transition hover:scale-110 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600"
    >
      {isLiked ? "❤️" : "🤍"}
    </button>
  );
};

export default LikeArticleButton;
