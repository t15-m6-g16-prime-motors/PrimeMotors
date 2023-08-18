import { z } from 'zod';

const createCarSchema = z.object({
  brand: z.string().min(2, 'Selecione uma marca'),
  model: z.string().min(2, 'Selecione um modelo'),
  description: z.string().nonempty('Campo obrigatório'),
  color: z.string().nonempty('Campo obrigatório'),
  kilometrage: z.string().nonempty('Campo obrigatório').or(z.number()),
  price: z.string().nonempty('Campo obrigatório'),
  coverImage: z.string(),
  image01: z.string(),
  image02: z.string(),
  image03: z.string().nullish(),
  image04: z.string().nullish(),
  image05: z.string().nullish(),
  image06: z.string().nullish(),
  good_deal: z.boolean().nullish()
});

type ICreateCar = z.infer<typeof createCarSchema>;

export { createCarSchema };
export type { ICreateCar };
