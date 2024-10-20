import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TReplyReservationSchema, replyReservationSchema } from "../validator/reply-reservation-schema";
import { useUpdateReservation } from "../services/hooks/reservation/use-update-reservation";

export const useReplyReservationHook = (id: string) => {
    const { control, handleSubmit, reset } = useForm<TReplyReservationSchema>({
        resolver: zodResolver(replyReservationSchema),
    });
    const { mutateAsync } = useUpdateReservation(id);

    const onSubmit = (data: TReplyReservationSchema) => {
        mutateAsync({message: data.message, status: "accepted"});
        reset();
    };
    const onSubmitCancel= (data: TReplyReservationSchema) => {
        mutateAsync({message: data.message, status: "rejected"});
        reset();
    };

    const onError = (errors: any) => {
        console.log(errors);
    };

    return {
        control,
        handleSubmit,
        reset,
        onSubmit,
        onError,
        onSubmitCancel
    };
};

