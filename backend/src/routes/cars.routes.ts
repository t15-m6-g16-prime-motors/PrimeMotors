import { Router } from "express";
import {
  createCarController,
  deleteCarController,
  getByIdCarsController,
  listCarsController,
  listCarsWithFiltersController,
  updateCarController,
} from "../controllers/cars.controller";
import { carPicturesSchemaRequest, carsSchemaRequest, carsSchemaUpdate } from "../schemas/cars.schemas";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import ensureCarIdMiddleware from "../middlewares/ensureCarIdExists.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuthMiddleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const carRoutes = Router();
const carRoutesFilter = Router();

carRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(carPicturesSchemaRequest),
  createCarController
);
carRoutes.get("", listCarsController);
carRoutes.get("/:id", ensureCarIdMiddleware, getByIdCarsController);
carRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureCarIdMiddleware,
  ensureDataIsValid(carsSchemaUpdate),
  updateCarController
);
carRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureCarIdMiddleware,
  deleteCarController
);

carRoutesFilter.get("", listCarsWithFiltersController);

export { carRoutes, carRoutesFilter };
