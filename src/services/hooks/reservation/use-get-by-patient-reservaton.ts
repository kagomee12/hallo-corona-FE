import { useQuery } from "@tanstack/react-query";
import { getByPatient } from "../../call/reservation"

export const useGetByPatientReservation = () => {
    const query = useQuery({
        queryKey: ["reservation/patient"],
        queryFn: () => getByPatient(),
    });
    return query;
};