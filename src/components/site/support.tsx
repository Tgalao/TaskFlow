import { ContactForm } from "@/components/site/contact-form";

const SUPPORT_EMAIL = "tseabra@outlook.pt";

export function Support() {
  return (
    <section id="suporte" className="bg-gray-100 dark:bg-gray-900/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Suporte
          </h2>
          <p className="mt-3 max-w-md text-gray-600 dark:text-gray-400">
            Tens alguma duvida, sugestao ou encontraste um problema? Escreve-nos
            diretamente ou usa o formulario ao lado.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline dark:text-gray-100"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
