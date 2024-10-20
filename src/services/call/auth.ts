import { api } from "../api";
import { TUserSchema } from "../../validator/user-schema";
import { PromiseResponse, User } from "../../types/store";

export const login = async (username: string, password: string): Promise<PromiseResponse<string>> => {
    const response = await api.post("/auth/login", { username, password });
    return response.data;
}

export const register = async (userSchema: TUserSchema): Promise<PromiseResponse<User>> => {
    const response = await api.post("/auth/register", userSchema
    );
    return response.data;
}

export const authMe = async (): Promise<User> => {
    const response = await api.get("/auth/me"  
    );
    return response.data;
}

