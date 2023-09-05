import { Router } from 'express';
import {
  createCarController,
  deleteCarController,
  getByIdCarsController,
  listCarsController,
  updateCarController
} from '../controllers/cars.controller';
import { ensureAuthMiddleware } from '../middlewares/ensureAuthMiddleware';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import { carUpdateRequestSchema, createCarRequestSchema } from '../schemas/cars.schemas';
import ensureCarIdMiddleware from '../middlewares/ensureCarIdExists.middleware';
import { ensureIsOwnerMiddleware } from '../middlewares/ensureIsOwner.middleware';

const carRoutes = Router();
const carRoutesFilter = Router();

carRoutes.post(
  '',
  ensureAuthMiddleware,
  ensureDataIsValid(createCarRequestSchema),
  createCarController
);
carRoutes.get('', listCarsController);
carRoutes.get('/:id', ensureCarIdMiddleware, getByIdCarsController);

carRoutes.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureCarIdMiddleware,
  ensureDataIsValid(carUpdateRequestSchema),
  updateCarController
);

carRoutes.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureCarIdMiddleware,
  deleteCarController
);

export { carRoutes, carRoutesFilter };
