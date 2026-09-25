"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function ProfileForm({
  initialName,
  initialEmail,
}: {
  initialName: string;
  initialEmail: string;
}) {
  const { update } = useSession();
  const router = useRouter();
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const dirty = name !== initialName || email !== initialEmail;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const res = await fetch("/api/account", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Could not save your changes");
      setStatus("error");
      return;
    }

    await update({ name, email });
    setStatus("success");
    router.refresh();
    setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full max-w-sm rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full max-w-sm rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-white"
        />
      </div>
      {error && (
        <p className="animate-shake text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {status === "success" && (
        <p className="text-sm text-green-600 dark:text-green-400">Saved.</p>
      )}
      <button
        type="submit"
        disabled={!dirty || status === "loading"}
        className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        {status === "loading" ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}
