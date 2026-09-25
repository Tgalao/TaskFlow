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
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-600 dark:text-gray-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-900 dark:hover:text-white"
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
