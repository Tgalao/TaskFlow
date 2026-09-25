"use client";

import { useEffect, useRef, useState } from "react";

type Option = { value: string; label: string; dotClassName?: string };

export function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full min-w-[170px] items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:border-gray-600"
      >
        <span className={`flex items-center gap-2 ${current ? "" : "text-gray-400 dark:text-gray-500"}`}>
          {current?.dotClassName && (
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${current.dotClassName}`} />
          )}
          {current?.label ?? placeholder}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="animate-fade-in-up absolute z-10 mt-2 w-full min-w-[170px] overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-900">
          {options.map((option) => {
            const selected = option.value === value;
            return (
              <button
                key={option.value || "all"}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors ${
                  selected
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {option.dotClassName && (
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${option.dotClassName}`} />
                )}
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
