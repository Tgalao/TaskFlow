import { auth } from "@/lib/auth";
import { DangerZone } from "@/components/settings/danger-zone";
import { ProfileForm } from "@/components/settings/profile-form";

export default async function SettingsPage() {
  const session = await auth();
  const user = session!.user;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Settings
        </h1>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          Manage your account.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Profile
        </h2>
        <div className="mt-4">
          <ProfileForm initialName={user.name ?? ""} initialEmail={user.email!} />
        </div>
      </div>

      <DangerZone email={user.email!} />
    </div>
  );
}
