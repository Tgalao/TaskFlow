import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Mensagem muito curta").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
