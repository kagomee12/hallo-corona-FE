import { useQuery } from '@tanstack/react-query'
import { getOne } from '../../call/article'

export const useFindArticle = (id: number) => {
    const query = useQuery({
        queryKey: ['article', id],
        queryFn: () => getOne(id),
    })
    return query
}

