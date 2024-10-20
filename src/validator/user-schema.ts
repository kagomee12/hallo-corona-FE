import {z} from "zod";

export const userSchema = z.object({
    fullname: z.string().min(5,{ message: "Must be 5 or more characters long" }),
    username: z.string().min(5,{ message: "Must be 5 or more characters long" }),
    email: z.string().email(),
    password: z.string().min(6,{ message: "Must be 5 or more characters long" }),
    role: z.enum(["patient", "doctor"], { errorMap: () => ({ message: "Must be patient or doctor" })}),
    gender: z.enum(["male", "female"], { errorMap: () => ({ message: "Must be male or female" })}),
    phone: z.string().min(12,{ message: "Must be 12 or more characters long" }),
    address: z.string(),
    profilePic: z.string().optional(),
})

export type TUserSchema = z.infer<typeof userSchema>