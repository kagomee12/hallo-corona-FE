export interface IReservationHook {
    fullname: string;
    phone: string;
    birthdate: string;
    age: string;
    height: string;
    weight: string;
    gender: "male" | "female";
    subject: string;
    consultationDate: string;
    Description: string;
}