import { useMutation } from "@tanstack/react-query";
import { update } from "../../call/reservation";
import { TReplyReservationSchema } from "../../../validator/reply-reservation-schema";
import { toast } from "react-toastify";

export const useUpdateReservation = (id: string) => {
    const mutation = useMutation({
        mutationKey: [`reservation/${id}`, id],
        mutationFn: (data: TReplyReservationSchema) => {
            return update(id, data)
        },   
        onSuccess: (data) => {
            if(data.status === "success"){
                toast.success("Messages successfully send");
            }else{
                toast.error("Something went wrong");
            }
        }
    })
    return mutation
}