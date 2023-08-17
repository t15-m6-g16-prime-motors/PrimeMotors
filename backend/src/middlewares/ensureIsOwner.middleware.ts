import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Car } from "../entities";

const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const carsRepository = AppDataSource.getRepository(Car)

    const carId = Number(req.params.id)
    const userId = Number(res.locals.userId)

    const car = await carsRepository.findOne({
        where: {
            id: carId
        },
        relations: {
            user: true
        }
    })

    if (!car) {
        return res.status(404).json({
            message: "contact not found"
        })
    }

    if (car?.user.id !== userId) {
        return res.status(403).json({
            message: "You dont`t have permissions"
        })
    }

    return next()
}

export { ensureIsOwnerMiddleware }