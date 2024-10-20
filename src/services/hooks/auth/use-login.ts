import {
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { login, register } from '../../call/auth';
import { TLoginSchema } from "../../../validator/login-schema";
import { TUserSchema } from '../../../validator/user-schema';
import { toast } from 'react-toastify';

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: TLoginSchema) => {
            return login(data.username, data.password)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['auth/me'] })
            if(data.status === "success"){
                toast.success(data.message);
            }else{
                toast.error(data.message);
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })
};

export const useRegister = () => {
    return useMutation({
        mutationKey: ['auth/register'],

        mutationFn: (data: TUserSchema) => {
            return register(data)
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            if(data.status === "success"){
                toast.success(data.message);
            }else{
                toast.error(data.message);
            }
        }
    })
};



