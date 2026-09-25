const faqs = [
  {
    question: "A TaskFlow e gratuita?",
    answer:
      "Sim. A TaskFlow e um projeto de portefolio e pode ser usada livremente para organizares as tuas tarefas.",
  },
  {
    question: "Preciso de cartao de credito para criar conta?",
    answer:
      "Nao. Basta um email e password, ou entrares com a tua conta Google ou GitHub.",
  },
  {
    question: "Consigo aceder de telemovel?",
    answer:
      "Sim, o site e totalmente responsivo e funciona bem em telemovel, tablet e computador.",
  },
  {
    question: "Os meus dados sao privados?",
    answer:
      "Sim. Cada conta so ve e gere as suas proprias tarefas — nunca as de outros utilizadores.",
  },
  {
    question: "Posso mudar o estado ou prioridade de uma tarefa depois de criada?",
    answer:
      "Sim, a qualquer momento. Podes editar titulo, descricao, estado, prioridade e prazo de cada tarefa.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
        Perguntas frequentes
      </h1>
      <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-400">
        Passa o rato por cima de uma pergunta para veres a resposta.
      </p>
      <div className="mt-12 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
        {faqs.map((faq) => (
          <div key={faq.question} className="group">
            <div className="flex w-full cursor-default select-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-gray-900 dark:text-gray-100">
              {faq.question}
              <span className="shrink-0 text-2xl text-gray-400 transition-transform duration-300 group-hover:rotate-45">
                +
              </span>
            </div>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-base text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
