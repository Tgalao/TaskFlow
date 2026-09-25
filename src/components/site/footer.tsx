import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookies" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 dark:border-emerald-900/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-transparent px-2.5 py-1 transition-all duration-200 hover:scale-110 hover:border-green-500 hover:text-green-600 dark:hover:border-green-400 dark:hover:text-green-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} TaskFlow — a portfolio project by Tomas Seabra.
        </p>
      </div>
    </footer>
  );
}
