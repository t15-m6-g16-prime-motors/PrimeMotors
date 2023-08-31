import { z } from 'zod';

const imageItemSchema = z.record(
  z.string(),
  z.string().nonempty('Insira link da imagem')
);

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
  extraImages: z.array(imageItemSchema),
  good_deal: z.boolean().nullish()
});

const createCarWithPicturesRequest = z.object({
  brand: z.string(),
  model: z.string(),
  description: z.string(),
  color: z.string(),
  kilometrage: z.number(),
  price: z.string(),
  year: z.number(),
  fuel_type: z.string().or(z.number()),
  good_deal: z.boolean(),
  published: z.boolean().optional(),
  coverImage: z.string(),
  image01: z.string(),
  image02: z.string(),
  extraImages: z.array(imageItemSchema)
});

type ICreateCar = z.infer<typeof createCarSchema>;
type ICreateCarComplete = z.infer<typeof createCarWithPicturesRequest>;

export { createCarSchema };
export type { ICreateCar, ICreateCarComplete };
