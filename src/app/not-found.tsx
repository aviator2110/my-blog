import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-900 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-xl dark:bg-zinc-800">
        <h1 className="text-7xl font-bold text-blue-600">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">
          Страница не найдена
        </h2>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Возможно, ссылка устарела или такой страницы не существует.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
