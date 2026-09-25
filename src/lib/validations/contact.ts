import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().email("Email invalido"),
  message: z.string().min(5, "Mensagem muito curta").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
