import { z } from "zod";

const carSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  description: z.string(),
  color: z.string(),
  year: z.number().int(),
  fuel_type: z.string(),
  kilometrage: z.number().int(),
  price: z.union([z.number(), z.string()]),
  published: z.boolean().nullish(),
  good_deal: z.boolean(),
  created_at: z.union([z.date(), z.string()]),
});

const ownerCarSchema = z.object({
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

const carsSchemaRequest = carSchema.omit({
  id: true,
  created_at: true,
});

const carsSchemaUpdate = carSchema
  .omit({
    id: true,
    published_in: true,
    created_at: true,
  })
  .partial();

const carSchemaResponse = carSchema;

const carsSchemaResponse = z.array(
  carSchema.extend({
    user: ownerCarSchema.omit({
      password: true,
      address: true,
      cpf: true,
      updated: true,
      created_at: true,
      updated_at: true,
      birthdate: true,
    }),
  })
);

export {
  carSchema,
  carsSchemaRequest,
  carsSchemaUpdate,
  carsSchemaResponse,
  carSchemaResponse,
};
