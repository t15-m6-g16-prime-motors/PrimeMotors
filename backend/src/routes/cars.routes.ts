import { Router } from "express";


import { deleteCarController, getByIdCarsController, updateCarController } from "../controllers/cars.controller";

const carRoutes = Router()

carRoutes.post("",)
carRoutes.get("",)
carRoutes.get("/:id",getByIdCarsController)
carRoutes.patch("/:id", updateCarController)
carRoutes.delete("/:id", deleteCarController)

export { carRoutes }

