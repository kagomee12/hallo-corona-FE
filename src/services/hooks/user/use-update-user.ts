import { useMutation, useQueryClient } from "@tanstack/react-query";
import { update } from "../../call/user";
import { toast } from "react-toastify";


export const useUpdateUser = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [`users/${id}`],
        mutationFn: (formdata: any) => {
            return update(id,  formdata);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: [`auth/me`] });
            if(data.status === "success"){
                toast.success(data.message);
            }else{
                toast.error(data.message);
            }
        },
    })

}