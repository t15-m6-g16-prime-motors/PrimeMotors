import { Router } from 'express';
import {
  createCarController,
  deleteCarController,
  getByIdCarsController,
  listCarsController,
  listCarsWithFiltersController
} from '../controllers/cars.controller';
import { ensureAuthMiddleware } from '../middlewares/ensureAuthMiddleware';
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware';
import { createCarRequestSchema } from '../schemas/cars.schemas';
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
// carRoutes.patch(
//   '/:id',
//   ensureAuthMiddleware,
//   ensureIsOwnerMiddleware,
//   ensureCarIdMiddleware,
//   ensureDataIsValid(carsSchemaUpdate),
//   updateCarController
// );
carRoutes.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureCarIdMiddleware,
  deleteCarController
);

carRoutesFilter.get('', listCarsWithFiltersController);

export { carRoutes, carRoutesFilter };
