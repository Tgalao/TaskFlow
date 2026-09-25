import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/dashboard/nav";
import { SignOutButton } from "@/components/dashboard/sign-out-button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100"
            >
              <Image src="/logo.png" alt="TaskFlow" width={28} height={28} className="rounded-md" />
              TaskFlow
            </Link>
            <DashboardNav />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {session.user.name ?? session.user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
        {children}
      </main>
    </div>
  );
}
