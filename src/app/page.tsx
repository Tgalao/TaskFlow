import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/site/header";

export default async function HomePage() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="animate-fade-in-up text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-8xl">
            TaskFlow
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            Organiza as tuas tarefas: estados, prioridades, deadlines e um
            dashboard com estatisticas em tempo real.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/register"
              className="rounded-md bg-gray-900 px-7 py-3.5 text-lg font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Criar conta
            </Link>
            <Link
              href="/login"
              className="rounded-md border border-gray-300 px-7 py-3.5 text-lg font-semibold text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              Entrar
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
