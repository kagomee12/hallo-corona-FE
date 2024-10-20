import { z } from "zod";

export const replyReservationSchema = z.object({
    message: z.string().min(10, { message: "Must be 10 or more characters long" }),
    status: z.enum(["pending", "accepted", "rejected"], { message: "Must be pending, accepted or rejected" }).optional(),
})

export type TReplyReservationSchema = z.infer<typeof replyReservationSchema>