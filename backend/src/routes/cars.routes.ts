import { Router } from "express";
import {
  createCarController,
  deleteCarController,
  getByIdCarsController,
  listCarsController,
  updateCarController,
} from "../controllers/cars.controller";

const carRoutes = Router();

carRoutes.post("", createCarController);
carRoutes.get("", listCarsController);
carRoutes.get("/:id", getByIdCarsController);
carRoutes.patch("/:id", updateCarController);
carRoutes.delete("/:id", deleteCarController);

export { carRoutes };
