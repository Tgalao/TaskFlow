import type { Priority, TaskStatus } from "@prisma/client";

const statusStyles: Record<TaskStatus, string> = {
  TODO: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  IN_PROGRESS: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  DONE: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400",
};

const statusLabels: Record<TaskStatus, string> = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}

const priorityStyles: Record<Priority, string> = {
  LOW: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  MEDIUM: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  HIGH: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${priorityStyles[priority]}`}
    >
      {priority}
    </span>
  );
}
