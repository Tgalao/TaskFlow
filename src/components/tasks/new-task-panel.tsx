"use client";

import { useState } from "react";
import { TaskForm } from "@/components/tasks/task-form";

export function NewTaskSection() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Tasks</h1>
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-md bg-gray-900 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          {open ? "Cancel" : "New task"}
        </button>
      </div>
      {open && (
        <div className="animate-fade-in-up mt-6 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <TaskForm onDone={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
