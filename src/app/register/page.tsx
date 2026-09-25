import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  const googleEnabled = Boolean(
    process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
  );
  const githubEnabled = Boolean(
    process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET
  );

  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-12 dark:from-black dark:via-black dark:to-black">
      <Link
        href="/"
        className="animate-fade-in-up mb-8 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-gray-100"
      >
        <Image src="/logo.png" alt="TaskFlow" width={52} height={52} className="rounded-lg" />
        TaskFlow
      </Link>
      <h1 className="animate-fade-in-up mb-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
        Criar conta
      </h1>
      <RegisterForm googleEnabled={googleEnabled} githubEnabled={githubEnabled} />
    </main>
  );
}
