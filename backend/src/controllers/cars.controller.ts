import { TCarUpdate } from "../interfaces/car.interfaces"
import { deleteContactsService } from "../services/cars/deleteCars.service";
import { updateCarsService } from "../services/cars/updateCars.service"
import { Response, Request } from "express";


const updateCarController = async (req: Request, res: Response): Promise<Response> => {

    const carData: TCarUpdate = req.body
    const carId = Number(req.params.id)

    const newCarData = await updateCarsService(carData, carId)

    return res.json(newCarData)
}

const deleteCarController = async (req: Request, res: Response) => {
    const carId = Number(req.params.id)

    await deleteContactsService(carId)

    return res.status(204).send()
}


export { updateCarController, deleteCarController }