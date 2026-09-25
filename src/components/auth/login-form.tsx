"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { GoogleIcon } from "@/components/auth/google-icon";
import { GitHubIcon } from "@/components/auth/github-icon";
import { IconField } from "@/components/auth/icon-field";
import { MailIcon, LockIcon, CheckIcon } from "@/components/auth/field-icons";

export function LoginForm({
  googleEnabled,
  githubEnabled,
}: {
  googleEnabled: boolean;
  githubEnabled: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setLoading(false);
      setError("Email ou password incorretos");
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      router.push(searchParams.get("callbackUrl") ?? "/dashboard");
      router.refresh();
    }, 500);
  }

  return (
    <div className="w-full max-w-sm space-y-4 rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-xl shadow-gray-900/5 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none">
      {(googleEnabled || githubEnabled) && (
        <>
          <div className="space-y-2">
            {googleEnabled && (
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-gray-800"
              >
                <GoogleIcon />
                Continuar com Google
              </button>
            )}
            {githubEnabled && (
              <button
                type="button"
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-gray-800"
              >
                <GitHubIcon />
                Continuar com GitHub
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            <span className="text-xs text-gray-400">ou</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>
        </>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <IconField
          id="email"
          label="Email"
          type="email"
          icon={<MailIcon />}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <IconField
          id="password"
          label="Password"
          type="password"
          icon={<LockIcon />}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="animate-shake rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-950/50 dark:text-red-400">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading || success}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-70 ${
            success
              ? "bg-green-600"
              : "bg-gray-900 hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          }`}
        >
          {success ? (
            <>
              <CheckIcon />
              Sessao iniciada
            </>
          ) : loading ? (
            "A entrar..."
          ) : (
            "Entrar"
          )}
        </button>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Ainda nao tens conta?{" "}
          <Link
            href="/register"
            className="font-semibold text-gray-900 hover:underline dark:text-gray-100"
          >
            Criar conta
          </Link>
        </p>
      </form>
    </div>
  );
}
