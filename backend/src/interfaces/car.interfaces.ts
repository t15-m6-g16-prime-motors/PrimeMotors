import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  createCarRequestSchema,
  carResponseSchema,
  carsSchemaRequest,
  carsListSchemaResponse
} from '../schemas/cars.schemas';

type TCarRequest = z.infer<typeof carsSchemaRequest>;
type TCarResponse = z.infer<typeof carResponseSchema>;

type TCreateCarRequest = z.infer<typeof createCarRequestSchema>;

type TCarArray = z.infer<typeof carsListSchemaResponse>;
type TCarUpdate = DeepPartial<TCarRequest>;

export { TCarRequest, TCarArray, TCarUpdate, TCarResponse, TCreateCarRequest };
