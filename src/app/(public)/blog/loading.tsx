export default function Loading() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-zinc-300 border-t-blue-600"></div>

      <h2 className="text-2xl font-semibold">
        Загружается статья...
      </h2>

      <p className="text-zinc-500">
        Подождите несколько секунд.
      </p>
    </div>
  );
}