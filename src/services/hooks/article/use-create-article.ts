import { useMutation } from "@tanstack/react-query";
import { post } from "../../call/article";
import { toast } from "react-toastify";

export const useCreateArticle = () => {
    return useMutation({
        mutationKey: ['article'],
        mutationFn: (data: any) => {
            return post(data)
        },
        onSuccess: (data) => {
            if(data.status === "success"){
                toast.success(data.message);
            }else{
                toast.error(data.message);
            }
        }

    })
}
