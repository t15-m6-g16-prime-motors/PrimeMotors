import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Car } from "../entities";
import { AppDataSource } from "../data-source";

const ensureCarIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const id = parseInt(req.params.id)

    const userRepository: Repository<Car> = AppDataSource.getRepository(Car)

    const carId = await userRepository.findOne({ where: { id } })

    if (!carId) {
        return res.status(404).json({ "message": "Car not found" });
      }


    return next()

}

export default ensureCarIdMiddleware