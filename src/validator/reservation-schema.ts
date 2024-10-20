import { z } from "zod";

export const reservationSchema = z.object({
    fullname: z.string().min(1, { message: "Full name is required" }),
    phone: z
        .string()
        .min(1, { message: "Phone is required" })
        .max(12, { message: "Phone must be 12 or less characters long" })
        .regex(/^[0-9]+$/, { message: "Phone must be a number" }),
    birthdate: z.string().min(1, { message: "Born date is required" }),
    age: z
        .number()
        .min(1, { message: "Age is required" })
        .positive({ message: "Age must be a positive number" }),
    height: z
        .number()
        .positive({ message: "Height must be a positive number" }),
    weight: z
        .number()
        .positive({ message: "Weight must be a positive number" }),
    gender: z.enum(["male", "female"], { message: "Gender is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    consultationDate: z.string().min(1, { message: "Consultation date is required" }),
    Description: z.string().min(10, { message: "Description must be at least 10 characters long" }),
});

export type TReservationSchema = z.infer<typeof reservationSchema>;