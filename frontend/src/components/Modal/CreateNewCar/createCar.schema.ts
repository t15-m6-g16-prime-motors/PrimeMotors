import { z } from 'zod';

const createCarSchema = z.object({
  brand: z.string().min(2, 'Selecione uma marca'),
  model: z.string().min(2, 'Selecione um modelo'),
  description: z.string().nonempty('Campo obrigatório'),
  color: z.string().nonempty('Campo obrigatório'),
  kilometrage: z.string().nonempty('Campo obrigatório'),
  price: z.string().nonempty('Campo obrigatório'),
  image: z.string(),
  good_deal: z.boolean().nullish()
});

type ICreateCar = z.infer<typeof createCarSchema>;

export { createCarSchema };
export type { ICreateCar };
