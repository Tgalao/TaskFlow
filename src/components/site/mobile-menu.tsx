"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="animate-fade-in-up absolute inset-x-0 top-full border-b border-gray-200 bg-white px-6 py-4 shadow-lg dark:border-gray-900 dark:bg-black">
          <nav className="flex flex-col gap-1 text-base font-medium text-gray-700 dark:text-gray-300">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
