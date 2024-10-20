import {api} from "../api";
import { TReplyReservationSchema } from "../../validator/reply-reservation-schema";
import { IReservationHook } from "../../types/store-hook";
import { PromiseResponse, Reservation } from "../../types/store";

export const create = async (reservationSchema: IReservationHook): Promise<PromiseResponse<Reservation>> => {
    const response = await api.post("/reservation", reservationSchema);
    return response.data;
}

export const getAll = async (): Promise<PromiseResponse<Reservation[]>> => {
    const response = await api.get("/reservation");
    return response.data;
}

export const getOne = async (id: number): Promise<PromiseResponse<Reservation>> => {
    const response = await api.get(`/reservation/${id}`);
    return response.data;
}


export const getByPatient = async (): Promise<PromiseResponse<Reservation[]>> => {
    const response = await api.get(`/reservation/patient`);
    return response.data;
}

export const update = async (id: string, reservationSchema: TReplyReservationSchema): Promise<PromiseResponse<Reservation>> => {
    const response = await api.patch(`/reservation/${id}`, reservationSchema);
    return response.data;
}