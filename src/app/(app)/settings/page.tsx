import { auth } from "@/lib/auth";
import { DangerZone } from "@/components/settings/danger-zone";

export default async function SettingsPage() {
  const session = await auth();
  const user = session!.user;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Definicoes
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Gere a tua conta.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="font-semibold text-gray-900 dark:text-gray-100">Perfil</h2>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="w-16 text-gray-500 dark:text-gray-400">Nome</dt>
            <dd className="text-gray-900 dark:text-gray-100">{user.name ?? "-"}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-16 text-gray-500 dark:text-gray-400">Email</dt>
            <dd className="text-gray-900 dark:text-gray-100">{user.email}</dd>
          </div>
        </dl>
      </div>

      <DangerZone email={user.email!} />
    </div>
  );
}
