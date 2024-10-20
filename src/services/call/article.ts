import { api } from "../api";
import { Article, PromiseResponse } from "../../types/store";

export const post = async(formData: any): Promise<PromiseResponse<Article>> =>{
    const response = await api.post("/article", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
}


export const getAll = async (): Promise<PromiseResponse<Article[]>> => {
    const response = await api.get("/article");
    return response.data;
}

export const getOne = async (id: number): Promise<PromiseResponse<Article>> => {
    const response = await api.get(`/article/${id}`);
    return response.data;
}