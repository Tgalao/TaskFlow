"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tasks", label: "Tarefas" },
  { href: "/settings", label: "Definicoes" },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {links.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-md px-3 py-1.5 text-sm font-medium ${
              active
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
