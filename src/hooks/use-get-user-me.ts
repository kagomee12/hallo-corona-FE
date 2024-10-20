import { useQuery } from "@tanstack/react-query";
import { authMe } from "../services/call/auth";

export const useGetUserMe = () => {
    const query = useQuery({
        queryKey: ['auth/me'],
        queryFn: () => authMe(),
    });
    return query;
}