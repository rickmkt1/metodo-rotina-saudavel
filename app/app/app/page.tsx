export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <span className="mb-4 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800">
        Em construção 🌱
      </span>

      <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-5xl">
        Método Rotina Saudável em 90 Dias
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600">
        Transforme sua rotina com pequenos passos diários. Em 90 dias,
        construa hábitos saudáveis que duram.
      </p>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-2xl">🥗</p>
          <h2 className="mt-2 font-semibold">Alimentação</h2>
          <p className="mt-1 text-sm text-gray-600">
            Escolhas simples e sustentáveis.
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-2xl">🏃</p>
          <h2 className="mt-2 font-semibold">Movimento</h2>
          <p className="mt-1 text-sm text-gray-600">
            Atividade física no seu ritmo.
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-2xl">😴</p>
          <h2 className="mt-2 font-semibold">Descanso</h2>
          <p className="mt-1 text-sm text-gray-600">
            Sono e equilíbrio para o dia a dia.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-10 rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Começar minha jornada
      </button>
    </main>
  );
}
