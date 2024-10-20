import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../call/reservation";

export const useFindReservation = (id: number) => {
    const query = useQuery({
        queryKey: ["reservation", id],
        queryFn: () => getOne(id),
    });
    return query;
};