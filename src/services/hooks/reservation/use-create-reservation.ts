import { useMutation } from "@tanstack/react-query";
import { create } from "../../call/reservation";
import { IReservationHook } from "../../../types/store-hook";
import { toast } from "react-toastify";

export const useCreateReservation = () => {
    return useMutation({
        mutationKey: ['reservation'],
        mutationFn: (data: IReservationHook) => {
            return create(data)
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
