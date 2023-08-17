import { z } from "zod";

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
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaRequest = userSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

const usersSchemaResponse = z.array(userSchema.omit({ password: true }));

const userSchemaUpdateRequest = userSchemaRequest.partial();

export {
  userSchema,
  userSchemaResponse,
  userSchemaRequest,
  usersSchemaResponse,
  userSchemaUpdateRequest,
};
