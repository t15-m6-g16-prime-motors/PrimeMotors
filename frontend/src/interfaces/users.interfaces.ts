import { z } from 'zod';
import {
  loginUserSchema,
  registerUserSchema,
  resetPasswordSchema,
  sendEmailSchema
} from '../schemas';

export type TRegisterUser = z.infer<typeof registerUserSchema>;
export type TLoginUser = z.infer<typeof loginUserSchema>;
export interface IUserLogged {
  id: number;
  full_name: string;
  cpf: string;
  email: string;
  birthdate: string;
  is_seller: boolean;
  description: string;
  phone_number: string;
  password: string;
  address: IAddress;
}

export interface IAddress {
  postal_code: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface IRegisterUserRequest {
  full_name: string;
  cpf: string;
  email: string;
  birthdate: string;
  is_seller: boolean;
  description: string;
  phone_number: string;
  password: string;
  address: IAddress;
}

export interface ICarUser {
  id: number;
  description: string;
  email: string;
  full_name: string;
  is_seller: boolean;
  phone_number: string;
}

export type TSendEmail = z.infer<typeof sendEmailSchema>;
export type TResetPassword = z.infer<typeof resetPasswordSchema>;
