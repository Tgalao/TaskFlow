import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { FilterBar } from "@/components/tasks/filter-bar";
import { NewTaskPanel } from "@/components/tasks/new-task-panel";
import { TaskList } from "@/components/tasks/task-list";
import type { Priority, Prisma, TaskStatus } from "@prisma/client";

type SearchParams = Promise<{
  search?: string;
  status?: string;
  priority?: string;
}>;

export default async function TasksPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const session = await auth();
  const userId = session!.user.id;
  const { search, status, priority } = await searchParams;

  const where: Prisma.TaskWhereInput = {
    userId,
    ...(status ? { status: status as TaskStatus } : {}),
    ...(priority ? { priority: priority as Priority } : {}),
    ...(search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
          ],
        }
      : {}),
  };

  const tasks = await prisma.task.findMany({
    where,
    orderBy: [{ createdAt: "desc" }],
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Tarefas</h1>
        <NewTaskPanel />
      </div>
      <FilterBar />
      <TaskList initialTasks={tasks} />
    </div>
  );
}
