import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export default async function HomePage() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center sm:px-6">
          <h1 className="animate-fade-in-up lowercase text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            <span className="bg-gradient-to-r from-teal-800 to-gray-950 bg-clip-text text-transparent dark:from-teal-400 dark:to-teal-700">
              task
            </span>
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              flow
            </span>
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            Organize your tasks: statuses, priorities, deadlines, and a
            dashboard with real-time statistics.
          </p>
          <div className="mt-10 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
            <Link
              href="/register"
              className="rounded-md border border-transparent bg-gray-900 px-7 py-3.5 text-lg font-semibold text-white transition-all duration-200 hover:scale-110 hover:border-green-400 hover:shadow-md dark:bg-white dark:text-gray-900"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="rounded-md border border-gray-300 px-7 py-3.5 text-lg font-semibold text-gray-900 transition-all duration-200 hover:scale-110 hover:border-green-500 hover:text-green-600 hover:shadow-md dark:border-gray-700 dark:text-gray-100 dark:hover:border-green-400 dark:hover:text-green-400"
            >
              Sign in
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
