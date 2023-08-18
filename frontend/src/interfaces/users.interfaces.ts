import { z } from 'zod';
import { loginUserSchema, registerUserSchema } from '../schemas';

export type TRegisterUser = z.infer<typeof registerUserSchema>;
export type TLoginUser = z.infer<typeof loginUserSchema>;

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
