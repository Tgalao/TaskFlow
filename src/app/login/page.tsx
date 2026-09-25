import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  const googleEnabled = Boolean(
    process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
  );
  const githubEnabled = Boolean(
    process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET
  );

  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-12 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Link
        href="/"
        className="animate-fade-in-up mb-8 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100"
      >
        <Image src="/logo.png" alt="TaskFlow" width={36} height={36} className="rounded-md" />
        TaskFlow
      </Link>
      <h1 className="animate-fade-in-up mb-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
        Entrar
      </h1>
      <Suspense>
        <LoginForm googleEnabled={googleEnabled} githubEnabled={githubEnabled} />
      </Suspense>
    </main>
  );
}
