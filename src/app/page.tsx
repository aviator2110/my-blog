import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col w-full max-w-3xl p-8 gap-8">
        <h1>Блог про CS2</h1>

        <article>
          <h2>Лучшие настройки CS2 в 2026 году</h2>
          <p>Дата: 9 июля 2026</p>
          <p>
            В этой статье рассмотрим оптимальные настройки графики,
            чувствительности мыши и прицела для комфортной игры и высокого FPS.
          </p>
        </article>

        <article>
          <h2>Как быстрее поднять рейтинг в Premier</h2>
          <p>Дата: 7 июля 2026</p>
          <p>
            Разберём самые распространённые ошибки игроков, способы улучшить
            коммуникацию с командой и советы для стабильного роста рейтинга.
          </p>
        </article>

        <article>
          <h2>Топ-5 карт, которые должен знать каждый игрок</h2>
          <p>Дата: 4 июля 2026</p>
          <p>
            Краткий обзор Mirage, Inferno, Dust II, Nuke и Ancient с полезными
            советами по позициям и игре за обе стороны.
          </p>
        </article>
      </main>
    </div>
  );
}
