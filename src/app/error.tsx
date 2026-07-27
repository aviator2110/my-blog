"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-900 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-xl dark:bg-zinc-800">
        <h1 className="text-7xl">⚠️</h1>

        <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">
          Что-то пошло не так
        </h2>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Во время загрузки страницы произошла непредвиденная ошибка.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Попробовать снова
          </button>

          <Link
            href="/"
            className="rounded-lg border border-zinc-300 px-6 py-3 font-medium transition hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-700"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
