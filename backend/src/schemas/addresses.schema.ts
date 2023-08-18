import { z } from "zod";

const addressSchema = z.object({
  street: z.string().max(50),
  number: z.number().int(),
  complement: z.string().max(70),
  city: z.string().max(50),
  state: z.string().max(50),
  country: z.string().max(50),
  postal_code: z.string().max(10),
});

export { addressSchema };
