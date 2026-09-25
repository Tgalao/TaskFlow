"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Task } from "@/types";
import type { TaskStatus } from "@prisma/client";
import { StatusBadge, PriorityBadge } from "@/components/tasks/badges";

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
    if (!confirm("Apagar esta tarefa?")) return;
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
      <p className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
        Nenhuma tarefa encontrada.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
        >
          <div className="min-w-0 flex-1">
            <Link
              href={`/tasks/${task.id}`}
              className="font-medium text-gray-900 hover:underline"
            >
              {task.title}
            </Link>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <StatusBadge status={task.status} />
              <PriorityBadge priority={task.priority} />
              {task.dueDate && (
                <span className="text-xs text-gray-500">
                  Prazo: {new Date(task.dueDate).toLocaleDateString("pt-PT")}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={task.status}
              disabled={pendingId === task.id}
              onChange={(e) => updateStatus(task.id, e.target.value as TaskStatus)}
              className="rounded-md border border-gray-300 px-2 py-1 text-xs"
            >
              <option value="TODO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
            <button
              onClick={() => deleteTask(task.id)}
              disabled={pendingId === task.id}
              className="rounded-md border border-red-200 px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
            >
              Apagar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
