import { TUserSchema, userSchema } from "../validator/user-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegister } from "../services/hooks/auth/use-login";
export const useRegisterHook = () => {
    const { mutateAsync } = useRegister()
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm<TUserSchema>({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data: TUserSchema) => {
        mutateAsync(data);
        reset();
    }
    const error = (errors: any) => {
        console.log(errors);
    }

    return {
        register,
        handleSubmit,
        formState: { errors },
        control,
        onSubmit,
        error
    }

}


