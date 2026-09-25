import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="TaskFlow" width={32} height={32} className="rounded-md" />
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            TaskFlow
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 md:flex">
          <a href="#como-funciona" className="hover:text-gray-900 dark:hover:text-white">
            Como funciona
          </a>
          <a href="#faq" className="hover:text-gray-900 dark:hover:text-white">
            FAQ
          </a>
          <a href="#suporte" className="hover:text-gray-900 dark:hover:text-white">
            Suporte
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:block"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
