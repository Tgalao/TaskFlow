const steps = [
  {
    title: "Cria a tua conta",
    description:
      "Regista-te com email e password, ou entra diretamente com Google ou GitHub em segundos.",
  },
  {
    title: "Organiza as tarefas",
    description:
      "Cria tarefas, define prioridade (Low/Medium/High), estado (To Do/In Progress/Done) e prazos.",
  },
  {
    title: "Acompanha o progresso",
    description:
      "O dashboard mostra estatisticas em tempo real: quantas tarefas tens, por estado e quais estao atrasadas.",
  },
  {
    title: "Encontra tudo rapido",
    description:
      "Usa a pesquisa e os filtros por estado ou prioridade para encontrares exatamente o que precisas.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Como funciona
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Quatro passos simples para teres as tuas tarefas sempre organizadas.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white dark:bg-white dark:text-gray-900">
              {i + 1}
            </div>
            <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
