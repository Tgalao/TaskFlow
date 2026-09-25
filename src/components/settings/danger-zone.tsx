"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

export function DangerZone({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canDelete = confirmation === email;

  async function handleDelete() {
    if (!canDelete) return;
    setLoading(true);
    setError(null);

    const res = await fetch("/api/account", { method: "DELETE" });

    if (!res.ok) {
      setError("Nao foi possivel apagar a conta. Tenta novamente.");
      setLoading(false);
      return;
    }

    await signOut({ callbackUrl: "/" });
  }

  return (
    <div className="rounded-xl border border-red-300 dark:border-red-900">
      <div className="border-b border-red-300 bg-red-50 px-5 py-3 dark:border-red-900 dark:bg-red-950/40">
        <h2 className="text-sm font-bold uppercase tracking-wide text-red-700 dark:text-red-400">
          Danger Zone
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Apagar esta conta
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Elimina permanentemente a tua conta e todas as tuas tarefas. Esta
            acao nao pode ser desfeita.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="shrink-0 rounded-md border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          Apagar conta
        </button>
      </div>

      {open && (
        <div className="animate-fade-in-up space-y-3 border-t border-red-200 px-5 py-4 dark:border-red-900">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Esta acao e irreversivel. Para confirmar, escreve o teu email (
            <span className="font-semibold">{email}</span>) na caixa abaixo.
          </p>
          <input
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            placeholder={email}
            className="w-full max-w-sm rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          />
          {error && (
            <p className="animate-shake text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleDelete}
              disabled={!canDelete || loading}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? "A apagar..." : "Confirmar eliminacao definitiva"}
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setConfirmation("");
                setError(null);
              }}
              className="rounded-md px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
