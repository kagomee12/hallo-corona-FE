import {z} from "zod";

export const articleSchema = z.object({
    title: z.string().min(5,{ message: "Must be 5 or more characters long" }),
    picture: z.any(),
    categoryId: z.number().min(1,{ message: "Must be chooses a category" }),
    content: z.string().min(5,{ message: "Must be 5 or more characters long" }),
})

export type TArticleSchema = z.infer<typeof articleSchema>