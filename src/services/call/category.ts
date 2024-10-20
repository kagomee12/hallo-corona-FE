import { Category, PromiseResponse } from '../../types/store'
import { api } from '../api'

export const getAll = async (): Promise<PromiseResponse<Category[]>> => {
    const response = await api.get('/category')
    return response.data
}

export const getOne = async (id: number) => {   
    const response = await api.get(`/category/${id}`)
    return response.data
}