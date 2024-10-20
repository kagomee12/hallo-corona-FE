// Enums
export enum Role {
  patient = 'patient',
  doctor = 'doctor'
}

export enum Gender {
  male = 'male',
  female = 'female'
}

export enum Status {
  pending = 'pending',
  accepted = 'accepted',
  rejected = 'rejected'
}

// Interface untuk model User
export interface User {
  id: number;
  email: string;
  fullname: string;
  username: string;
  password: string;
  role: Role;
  gender: Gender;
  phone: string;
  address: string;
  profilePic?: string;
  articles?: Article[];
  consultations?: Consultation[];
  reservasis?: Reservation[];
}

// Interface untuk model Article
export interface Article {
  id: number;
  title: string;
  picture?: string;
  content: string;
  author: User;
  authorId: number;
  createdAt: Date;
  category?: Category;
  categoryId?: number;
}

// Interface untuk model Category
export interface Category {
  id: number;
  name: string;
  articles?: Article[];
}

// Interface untuk model Consultation
export interface Consultation {
  id: number;
  title: string;
  content: string;
  author: User;
  authorId: number;
  createdAt: Date;
}

// Interface untuk model Reservation
export interface Reservation {
  id: number;
  fullname: string;
  phone: string;
  birthdate: Date;
  age: string;
  height: string;
  weight: string;
  gender: Gender;
  subject: string;
  consultationDate: Date;
  Description: string;
  status: Status;
  doctorId?: number | null;
  message?: string | null;
  patient: User;
  patientId: number;
  createdAt: Date;
}

export interface PromiseResponse<T> {
  data: T;
  status: string;
  message: string;
}
