import { z } from 'zod';

const carSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  description: z.string(),
  color: z.string(),
  year: z.number().int(),
  fuel_type: z.string(),
  kilometrage: z.number().int().or(z.string()),
  price: z.union([z.number(), z.string()]),
  published: z.boolean().default(true),
  good_deal: z.boolean(),
  created_at: z.union([z.date(), z.string()])
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
  updated_at: z.union([z.date(), z.string()])
});

const carsSchemaRequest = carSchema.omit({
  id: true,
  created_at: true
});

const carPicturesRequestSchema = z
  .object({
    image03: z.string(),
    image04: z.string(),
    image05: z.string(),
    image06: z.string()
  })
  .partial();

const createCarRequestSchema = carSchema
  .extend({
    coverImage: z.string(),
    image01: z.string(),
    image02: z.string(),
    extraImages: z.array(carPicturesRequestSchema)
  })
  .omit({ id: true, created_at: true });

const carResponseSchema = carSchema.extend({
  picture: z.object({
    id: z.number(),
    coverImage: z.string(),
    image01: z.string(),
    image02: z.string(),
    image03: z.string().nullish(),
    image04: z.string().nullish(),
    image05: z.string().nullish(),
    image06: z.string().nullish()
  })
});

const carUpdateRequestSchema = createCarRequestSchema.partial();

const carsListSchemaResponse = z.array(
  carResponseSchema.extend({
    user: ownerCarSchema.omit({
      password: true,
      address: true,
      cpf: true,
      updated: true,
      created_at: true,
      updated_at: true,
      birthdate: true
    })
  })
);

export {
  carSchema,
  carsSchemaRequest,
  carsListSchemaResponse,
  createCarRequestSchema,
  carResponseSchema,
  carUpdateRequestSchema,
};
