import { Router } from "express";
import { deleteCarController, updateCarController } from "../controllers/cars.controller";

const carRoutes = Router()

carRoutes.post("",)
carRoutes.get("",)
carRoutes.patch("/:id", updateCarController)
carRoutes.delete("/:id", deleteCarController)

export { carRoutes }