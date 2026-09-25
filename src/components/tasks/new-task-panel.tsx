"use client";

import { useState } from "react";
import { TaskForm } from "@/components/tasks/task-form";

export function NewTaskPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        {open ? "Cancelar" : "Nova tarefa"}
      </button>
      {open && (
        <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <TaskForm onDone={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
