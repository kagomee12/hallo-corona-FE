import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../call/category";

export const useGetCategory = () => {
    const query = useQuery({
        queryKey: ["category"],
        queryFn: () => {
            return getAll();
        },
    });
    return query;
}