import { z } from "zod";

export const taskStatusValues = ["TODO", "IN_PROGRESS", "DONE"] as const;
export const priorityValues = ["LOW", "MEDIUM", "HIGH"] as const;

export const createTaskSchema = z.object({
  title: z.string().min(1, "Titulo e obrigatorio").max(200),
  description: z.string().max(2000).optional().nullable(),
  status: z.enum(taskStatusValues).default("TODO"),
  priority: z.enum(priorityValues).default("MEDIUM"),
  dueDate: z.string().datetime().optional().nullable(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = createTaskSchema.partial();

export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;

export const taskQuerySchema = z.object({
  search: z.string().optional(),
  status: z.enum(taskStatusValues).optional(),
  priority: z.enum(priorityValues).optional(),
});

export type TaskQueryInput = z.infer<typeof taskQuerySchema>;
