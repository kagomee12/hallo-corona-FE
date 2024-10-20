import { PromiseResponse, User } from "../../types/store";
import { api } from "../api"

export const getOne = async (id: string): Promise<PromiseResponse<User>> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
}

export const getAll = async () => {
    const response = await api.get("/users");
    return response.data;
}

export const update = async (id: string, formdata: any): Promise<PromiseResponse<User>> => {
    const response = await api.patch(`/users/${id}`, formdata, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
}

