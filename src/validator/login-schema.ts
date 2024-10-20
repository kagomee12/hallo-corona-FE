import { z } from "zod";

export const loginSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Must be 5 or more characters long" }),
    password: z
        .string()
        .min(5, { message: "Must be 5 or more characters long" }),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
