import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TLoginSchema, loginSchema } from "../validator/login-schema";
import { setAuthToken } from "../services/api";
import { useLogin } from "../services/hooks/auth/use-login";

export const useLoginHook = () => {
    const { mutateAsync } = useLogin();
    const { control, handleSubmit, reset } = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: TLoginSchema) => {
        try {
            const resToken = await mutateAsync(data);
            setAuthToken(resToken.data);
            localStorage.setItem("token", resToken.data);
            reset();
        } catch (error) {
            throw error
        }
    };

    const onError = (errors: any) => {
        console.log(errors);
    };

    return {
        control,
        handleSubmit,
        reset,
        onSubmit,
        onError
    };
}