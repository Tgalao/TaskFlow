"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Task } from "@/types";
import type { TaskStatus } from "@prisma/client";
import { StatusBadge, PriorityBadge } from "@/components/tasks/badges";
import { Select } from "@/components/ui/select";

const statusOptions = [
  { value: "TODO", label: "To Do" },
  { value: "IN_PROGRESS", label: "In Progress" },
  { value: "DONE", label: "Done" },
];

export function TaskList({ initialTasks }: { initialTasks: Task[] }) {
  const router = useRouter();
  const [tasks, setTasks] = useState(initialTasks);
  const [pendingId, setPendingId] = useState<string | null>(null);

  async function updateStatus(id: string, status: TaskStatus) {
    setPendingId(id);
    const res = await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      const { task } = await res.json();
      setTasks((prev) => prev.map((t) => (t.id === id ? task : t)));
      router.refresh();
    }
    setPendingId(null);
  }

  async function deleteTask(id: string) {
    if (!confirm("Delete this task?")) return;
    setPendingId(id);
    const res = await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    if (res.ok) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
      router.refresh();
    }
    setPendingId(null);
  }

  if (tasks.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
        No tasks found.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
        >
          <div className="min-w-0 flex-1">
            <Link
              href={`/tasks/${task.id}`}
              className="font-medium text-gray-900 hover:underline dark:text-gray-100"
            >
              {task.title}
            </Link>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <StatusBadge status={task.status} />
              <PriorityBadge priority={task.priority} />
              {task.dueDate && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Due: {new Date(task.dueDate).toLocaleDateString("en-GB")}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Select
              value={task.status}
              onChange={(v) => updateStatus(task.id, v as TaskStatus)}
              options={statusOptions}
              placeholder="Status"
            />
            <button
              onClick={() => deleteTask(task.id)}
              disabled={pendingId === task.id}
              className="rounded-md border border-red-200 px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/50"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
