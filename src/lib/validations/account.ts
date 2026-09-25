import { z } from "zod";

export const updateAccountSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email"),
});

export type UpdateAccountInput = z.infer<typeof updateAccountSchema>;
