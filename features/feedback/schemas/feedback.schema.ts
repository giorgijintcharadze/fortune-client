import z from "zod";

export const FeedbackSchemas = z.object({
  name: z
    .string()
    .min(2, "write down minimum 2 characters")
    .max(10, "maximum 10 characters"),
  email: z.email("Invalid email address"),
  rating: z.number().min(1).max(5),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type FeedbackFormValues = z.infer<typeof FeedbackSchemas>;
