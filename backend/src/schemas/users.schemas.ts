import { z } from 'zod';
import { addressSchema } from './addresses.schema';
import { carSchemaResponse } from './cars.schemas';

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  cpf: z.string().min(11).max(14),
  email: z.string().email().max(70),
  password: z.string().max(120),
  birthdate: z.union([z.date(), z.string()]),
  is_seller: z.boolean(),
  description: z.string(),
  phone_number: z.string(),
  created_at: z.union([z.date(), z.string()]),
  updated_at: z.union([z.date(), z.string()]),
  address: addressSchema,
});
const ownerCarSchema = userSchema.omit({
  cpf: true,
  updated: true,
  created_at: true,
  updated_at: true,
});
const userSchemaResponse = userSchema
  .extend({
    cars: z.array(carSchemaResponse),
  })
  .omit({ password: true });

const createUserSchemaResponse = userSchema.omit({ password: true });

const userSchemaRequest = userSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

const usersSchemaResponse = z.array(userSchema.omit({ password: true }));

const userSchemaUpdateRequest = userSchemaRequest.partial();

const updateUserRequestSchema = userSchema
  .omit({
    id: true,
    created_at: true,
    updated_at: true,
    is_seller: true,
    password: true,
  })
  .partial();

const updateUserResponseSchema = userSchema.omit({ password: true });

export {
  userSchema,
  userSchemaResponse,
  userSchemaRequest,
  usersSchemaResponse,
  userSchemaUpdateRequest,
  createUserSchemaResponse,
  updateUserRequestSchema,
  updateUserResponseSchema,
};
