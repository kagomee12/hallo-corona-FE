import { useForm } from "react-hook-form";
import { TArticleSchema, articleSchema } from "../validator/article-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateArticle } from "../services/hooks/article/use-create-article";
import { useState } from "react";

export const useArticleHook = () => {
    const { control, handleSubmit, reset, register, formState: { errors } } = useForm<TArticleSchema>({
        resolver: zodResolver(articleSchema),
    })
    const [value, setValue] = useState<any>(null)
    const { mutateAsync } = useCreateArticle()

    const onSubmit = (data: TArticleSchema) => {
        const form = new FormData();
        form.append("title", data.title);
        form.append("content", data.content);
        form.append("picture", value);
        form.append("categoryId", data.categoryId.toString());
        mutateAsync(form);
        reset()
    }

    const onError = (errors: any) => {
        console.log(errors);
    }

    return {
        control,
        handleSubmit,
        reset,
        onSubmit,
        onError,
        register,
        errors,
        setValue
    };
}