import { z } from 'zod';

const createCarSchema = z.object({
  brand: z.string().min(2, 'Selecione uma marca'),
  model: z.string().min(2, 'Selecione um modelo'),
  description: z.string().nonempty('Campo obrigatório'),
  color: z.string().nonempty('Campo obrigatório'),
  year: z.string().nonempty('Campo obrigatório'),
  fuel_type: z.string().nonempty('Campo obrigatório'),
  kilometrage: z.string().nonempty('Campo obrigatório'),
  price: z.string().nonempty('Campo obrigatório'),
  fip_price: z.string().nonempty('Campo obrigatório')
});

type ICreateCar = z.infer<typeof createCarSchema>;

export { createCarSchema };
export type { ICreateCar };
