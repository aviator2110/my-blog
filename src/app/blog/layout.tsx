import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <header className="border-b bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            <Link href="/">🎮 CS2 Blog</Link>
          </h1>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Новости • Гайды • Карты
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl p-6">{children}</main>

      <footer className="border-t py-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        © 2026 CS2 Blog
      </footer>
    </div>
  );
}
