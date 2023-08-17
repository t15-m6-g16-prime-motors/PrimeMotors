import { z } from 'zod';
import { loginUserSchema, registerUserSchema } from '../schemas';

export type TRegisterUser = z.infer<typeof registerUserSchema>;
export type TLoginUser = z.infer<typeof loginUserSchema>;
