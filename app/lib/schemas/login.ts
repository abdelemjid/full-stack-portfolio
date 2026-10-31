import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address!"),
  password: z.string().min(8).max(50),
});

export type LoginInput = z.infer<typeof loginSchema>;
