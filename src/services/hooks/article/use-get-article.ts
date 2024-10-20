import { useQuery } from '@tanstack/react-query'
import { getAll } from '../../call/article'


export const useGetArticle = () => {
    const query = useQuery({
        queryKey: ['article'],
        queryFn: () => getAll(),
    })

    return query
}