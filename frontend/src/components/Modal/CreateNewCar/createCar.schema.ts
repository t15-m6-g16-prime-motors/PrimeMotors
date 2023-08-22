import { z } from 'zod';
const imagesSchema = z.object({
  image: z.string().nonempty('Insira link da imagem')
});

const createCarSchema = z.object({
  brand: z.string().min(2, 'Selecione uma marca'),
  model: z.string().min(2, 'Selecione um modelo'),
  description: z.string().nonempty('Campo obrigatório'),
  color: z.string().nonempty('Campo obrigatório'),
  kilometrage: z.string().nonempty('Campo obrigatório').or(z.number()),
  price: z.string().nonempty('Campo obrigatório'),
  coverImage: z.string().nonempty('insira link da imagem'),
  image01: z.string().nonempty('Insira link da imagem'),
  image02: z.string().nonempty('Insira link da imagem'),
  extraImages: z.array(imagesSchema),
  good_deal: z.boolean().nullish()
});

type ICreateCar = z.infer<typeof createCarSchema>;

export { createCarSchema };
export type { ICreateCar };
