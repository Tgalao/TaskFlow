import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        TaskFlow
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-600">
        Organiza as tuas tarefas: estados, prioridades, deadlines e um
        dashboard com estatisticas em tempo real.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/register"
          className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700"
        >
          Criar conta
        </Link>
        <Link
          href="/login"
          className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100"
        >
          Entrar
        </Link>
      </div>
    </main>
  );
}
