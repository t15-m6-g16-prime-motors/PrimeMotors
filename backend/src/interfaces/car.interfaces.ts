import { z } from 'zod';
import {
  createCarRequestSchema,
  carResponseSchema,
  carsSchemaRequest,
  carsListSchemaResponse
} from '../schemas/cars.schemas';
import { DeepPartial } from 'typeorm';
import { setPictureToNullRequestSchema } from '../schemas/pictures.schemas';

type TCarRequest = z.infer<typeof carsSchemaRequest>;
type TCarResponse = z.infer<typeof carResponseSchema>;

type TCreateCarRequest = z.infer<typeof createCarRequestSchema>;

type TCarArray = z.infer<typeof carsListSchemaResponse>;

type TCarUpdateRequest = DeepPartial<TCreateCarRequest>;

type TSetToNullCarPictureRequest = DeepPartial<
  typeof setPictureToNullRequestSchema
>;

export {
  TCarRequest,
  TCarArray,
  TCarUpdateRequest,
  TCarResponse,
  TCreateCarRequest,
  TSetToNullCarPictureRequest
};
