import {
    useQuery,
} from '@tanstack/react-query'
import { getAll } from '../../call/user';

export const useGetUser = () => {
    const query = useQuery({
        queryKey: ['users'],
        queryFn: () => { getAll() },
    });
    return query;
};