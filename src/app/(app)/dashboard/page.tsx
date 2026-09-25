import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { StatCard } from "@/components/dashboard/stat-card";
import { TaskList } from "@/components/tasks/task-list";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user.id;

  const [total, todo, inProgress, done, overdue, recentTasks] =
    await Promise.all([
      prisma.task.count({ where: { userId } }),
      prisma.task.count({ where: { userId, status: "TODO" } }),
      prisma.task.count({ where: { userId, status: "IN_PROGRESS" } }),
      prisma.task.count({ where: { userId, status: "DONE" } }),
      prisma.task.count({
        where: {
          userId,
          status: { not: "DONE" },
          dueDate: { lt: new Date() },
        },
      }),
      prisma.task.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Resumo das tuas tarefas.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        <StatCard label="Total" value={total} />
        <StatCard label="To Do" value={todo} />
        <StatCard label="In Progress" value={inProgress} />
        <StatCard label="Done" value={done} />
        <StatCard label="Atrasadas" value={overdue} />
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Tarefas recentes
        </h2>
        <TaskList initialTasks={recentTasks} />
      </div>
    </div>
  );
}
