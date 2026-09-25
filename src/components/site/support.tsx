import { ContactForm } from "@/components/site/contact-form";

const SUPPORT_EMAIL = "tseabra@outlook.pt";

export function Support() {
  return (
    <section className="flex-1 bg-gray-100 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          Support
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-600 dark:text-gray-400">
          Have a question, a suggestion, or found a problem? Write to us
          directly or use the form below.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Direct contact
            </h2>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:underline dark:text-gray-100"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
