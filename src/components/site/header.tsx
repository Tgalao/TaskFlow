import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Logo } from "@/components/site/logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-900 dark:bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo size={64} textClassName="text-3xl" />
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium text-gray-600 dark:text-gray-300 md:flex">
          <Link href="/how-it-works" className="hover:text-gray-900 dark:hover:text-white">
            How it works
          </Link>
          <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white">
            FAQ
          </Link>
          <Link href="/support" className="hover:text-gray-900 dark:hover:text-white">
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden text-base font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-gray-900 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
