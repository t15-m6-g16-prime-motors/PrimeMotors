import { z } from "zod";
import { userSchema } from "./users.schema";

const addressSchema = z.object({
  id: z.number().positive().int(),
  street: z.string().max(50),
  number: z.number().int(),
  complement: z.string().max(70),
  city: z.string().max(50),
  state: z.string().max(50),
  country: z.string().max(50),
  postal_code: z.string().max(10),
  user: userSchema,
});

export { addressSchema };
