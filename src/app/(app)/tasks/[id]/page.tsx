import { notFound } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TaskForm } from "@/components/tasks/task-form";

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const userId = session!.user.id;
  const { id } = await params;

  const task = await prisma.task.findUnique({ where: { id } });

  if (!task || task.userId !== userId) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/tasks" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
          &larr; Voltar as tarefas
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">Editar tarefa</h1>
      </div>
      <div className="max-w-xl rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <TaskForm task={task} />
      </div>
    </div>
  );
}
