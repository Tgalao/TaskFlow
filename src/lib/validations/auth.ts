import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().email("Email invalido"),
  password: z.string().min(8, "Password deve ter pelo menos 8 caracteres"),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email("Email invalido"),
  password: z.string().min(1, "Password e obrigatoria"),
});

export type LoginInput = z.infer<typeof loginSchema>;
