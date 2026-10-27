import { z } from "zod";

export const contactSchema = z.object({
  fullname: z.string().min(6, "Fullname must be at least 8 characters long!"),
  email: z.email("Invalid email address!"),
  message: z
    .string()
    .min(10, "Your message must be at least 8 characters long!"),
});

export type ContactInput = z.infer<typeof contactSchema>;
