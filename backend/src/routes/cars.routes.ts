import { Router } from "express";
import {
  createCarController,
  listCarsController,
} from "../controllers/cars.controllers";

const carsRoutes: Router = Router();

carsRoutes.post(
  "",

  createCarController
);

carsRoutes.get("", listCarsController);

export { carsRoutes };
