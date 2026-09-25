"use client";

import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
        Perguntas frequentes
      </h2>
      <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                {faq.question}
                <span
                  className={`shrink-0 text-gray-400 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="animate-fade-in-up px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
