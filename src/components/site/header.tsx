import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-900 dark:bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="TaskFlow" width={64} height={64} className="rounded-lg" priority />
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            TaskFlow
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium text-gray-600 dark:text-gray-300 md:flex">
          <Link href="/como-funciona" className="hover:text-gray-900 dark:hover:text-white">
            Como funciona
          </Link>
          <Link href="/faq" className="hover:text-gray-900 dark:hover:text-white">
            FAQ
          </Link>
          <Link href="/suporte" className="hover:text-gray-900 dark:hover:text-white">
            Suporte
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden text-base font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:block"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-gray-900 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
