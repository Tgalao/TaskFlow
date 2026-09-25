"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Select } from "@/components/ui/select";
import { SearchIcon } from "@/components/site/feature-icons";

const statusOptions = [
  { value: "", label: "All statuses" },
  { value: "TODO", label: "To Do" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "DONE", label: "Done" },
];

const priorityOptions = [
  { value: "", label: "All priorities" },
  { value: "LOW", label: "Low", dotClassName: "bg-green-500" },
  { value: "MEDIUM", label: "Medium", dotClassName: "bg-yellow-500" },
  { value: "HIGH", label: "High", dotClassName: "bg-red-500" },
];

export function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    const current = searchParams.get("search") ?? "";
    if (search === current) return;
    const timeout = setTimeout(() => setParam("search", search), 350);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="group relative min-w-[220px] flex-1">
        <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-gray-400 transition-colors group-focus-within:text-gray-900 dark:text-gray-500 dark:group-focus-within:text-white [&_svg]:h-4 [&_svg]:w-4">
          <SearchIcon />
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-9 text-sm text-gray-900 outline-none transition-all focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-white dark:focus:ring-white/10"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <Select
        value={searchParams.get("status") ?? ""}
        onChange={(v) => setParam("status", v)}
        options={statusOptions}
        placeholder="All statuses"
      />
      <Select
        value={searchParams.get("priority") ?? ""}
        onChange={(v) => setParam("priority", v)}
        options={priorityOptions}
        placeholder="All priorities"
      />
    </div>
  );
}
