import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Logo } from "@/components/site/logo";
import { MobileMenu } from "@/components/site/mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-900 dark:bg-black">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="min-w-0">
          <Logo
            size={64}
            textClassName="text-xl sm:text-3xl"
            imgClassName="w-9 h-9 sm:w-16 sm:h-16"
          />
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

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden text-base font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 sm:px-5 sm:py-2.5 sm:text-base"
          >
            Sign up
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
