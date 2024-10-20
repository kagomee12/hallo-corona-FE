import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TReservationSchema, reservationSchema } from "../validator/reservation-schema";
import { useCreateReservation } from "../services/hooks/reservation/use-create-reservation";
import { useNavigate } from "react-router-dom";

export const useReservationHook = () => {
    const navigate = useNavigate();
    const { mutateAsync } = useCreateReservation();
    const { control, handleSubmit, reset } = useForm<TReservationSchema>({
        resolver: zodResolver(reservationSchema),
    });

    const onSubmit = async (data: TReservationSchema) => {
        let age = String(data.age);
        let height = String(data.height);
        let weight = String(data.weight);
        await mutateAsync({ ...data, age, height, weight });
        reset();
        navigate("/");

    };

    const onError = (errors: any) => {
        console.log(errors);
    };

    return {
        control,
        handleSubmit,
        reset,
        onSubmit,
        onError
    };
}