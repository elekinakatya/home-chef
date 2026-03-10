import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .min(2, "Name must contain at least 2 characters"),

    email: z
        .string()
        .email("Invalid email address"),

    password: z
        .string()
        .min(6, "Password must contain at least 6 characters"),

    confirmPassword: z
        .string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});
export type RegisterFormData = z.infer<typeof registerSchema>;