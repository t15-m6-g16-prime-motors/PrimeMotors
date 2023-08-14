import { registerUserSchema } from '../schemas';

export type TRegisterUser = Zod.infer<typeof registerUserSchema>;
