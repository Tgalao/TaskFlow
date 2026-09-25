import { Suspense } from "react";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  const googleEnabled = Boolean(
    process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
  );

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <Link href="/" className="mb-8 text-2xl font-bold text-gray-900">
        TaskFlow
      </Link>
      <h1 className="mb-6 text-xl font-semibold text-gray-900">Entrar</h1>
      <Suspense>
        <LoginForm googleEnabled={googleEnabled} />
      </Suspense>
    </main>
  );
}
