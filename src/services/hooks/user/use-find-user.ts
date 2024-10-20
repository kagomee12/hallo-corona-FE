import { useQuery } from '@tanstack/react-query'
import { getOne } from "../../call/user"

export const useFindUser = (id: string) => {
    const query = useQuery({
        queryKey: ['users', id],
        queryFn: () => getOne(id),
    })
    return query
}

