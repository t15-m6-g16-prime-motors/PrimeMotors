import { z } from 'zod';
import { addressSchema } from './addresses.schema';

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  cpf: z.string().min(11).max(14),
  email: z.string().email().max(70),
  password: z.string().max(120),
  birthdate: z.string(),
  is_seller: z.boolean(),
  description: z.string(),
  phone_number: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  address: addressSchema
});

const createUserRequestSchema = userSchema.omit({
  id: true,
  created_at: true,
  updated_at: true
});

const createUserResponseSchema = userSchema.omit({ password: true });

const userListResponseSchema = z.array(userSchema.omit({ password: true }));

const userUpdateSchema = userSchema.pick({
  birthdate: true,
  cpf: true,
  email: true,
  full_name: true,
  phone_number: true,
  address: true
});

const updateUserRequestSchema = userUpdateSchema.deepPartial();
const updateUserResponseSchema = userSchema.omit({ password: true });

export {
  userSchema,
  createUserRequestSchema,
  userListResponseSchema,
  userUpdateSchema,
  createUserResponseSchema,
  updateUserRequestSchema,
  updateUserResponseSchema
};
