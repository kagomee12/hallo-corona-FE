import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../call/reservation";

export const useGetReservation = () => {
    const query = useQuery({
        queryKey: ["reservation"],
        queryFn: () => getAll(),
    });
    return query;
}
