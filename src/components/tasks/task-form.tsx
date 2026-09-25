"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Task } from "@/types";

type TaskFormValues = {
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
  priority: "LOW" | "MEDIUM" | "HIGH";
  dueDate: string;
};

function toFormValues(task?: Task): TaskFormValues {
  return {
    title: task?.title ?? "",
    description: task?.description ?? "",
    status: task?.status ?? "TODO",
    priority: task?.priority ?? "MEDIUM",
    dueDate: task?.dueDate
      ? new Date(task.dueDate).toISOString().slice(0, 10)
      : "",
  };
}

const inputClass =
  "mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-white";
const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300";

export function TaskForm({
  task,
  onDone,
}: {
  task?: Task;
  onDone?: () => void;
}) {
  const router = useRouter();
  const [values, setValues] = useState<TaskFormValues>(toFormValues(task));
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isEdit = Boolean(task);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const payload = {
      title: values.title,
      description: values.description || null,
      status: values.status,
      priority: values.priority,
      dueDate: values.dueDate
        ? new Date(values.dueDate + "T00:00:00").toISOString()
        : null,
    };

    const res = await fetch(isEdit ? `/api/tasks/${task!.id}` : "/api/tasks", {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Nao foi possivel guardar a tarefa");
      return;
    }

    if (!isEdit) {
      setValues(toFormValues());
    }

    router.refresh();
    onDone?.();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Titulo</label>
        <input
          required
          value={values.title}
          onChange={(e) => setValues((v) => ({ ...v, title: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Descricao</label>
        <textarea
          rows={3}
          value={values.description}
          onChange={(e) =>
            setValues((v) => ({ ...v, description: e.target.value }))
          }
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className={labelClass}>Estado</label>
          <select
            value={values.status}
            onChange={(e) =>
              setValues((v) => ({
                ...v,
                status: e.target.value as TaskFormValues["status"],
              }))
            }
            className={inputClass}
          >
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Prioridade</label>
          <select
            value={values.priority}
            onChange={(e) =>
              setValues((v) => ({
                ...v,
                priority: e.target.value as TaskFormValues["priority"],
              }))
            }
            className={inputClass}
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Prazo</label>
          <input
            type="date"
            value={values.dueDate}
            onChange={(e) =>
              setValues((v) => ({ ...v, dueDate: e.target.value }))
            }
            className={inputClass}
          />
        </div>
      </div>
      {error && (
        <p className="animate-shake text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        {loading ? "A guardar..." : isEdit ? "Guardar alteracoes" : "Criar tarefa"}
      </button>
    </form>
  );
}
