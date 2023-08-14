import { z } from 'zod';

export const registerUserSchema = z.object({
  full_name: z.string(),
  email: z.string(),
  personal_id: z.string(),
  phone_number: z.string(),
  birthdate: z.date(),
  description: z.string(),
  is_seller: z.string(),
  password: z.string(),
  confirmPassword: z.string(),

  postal_code: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string()
});
