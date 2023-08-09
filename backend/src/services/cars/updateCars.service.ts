import { AppDataSource } from "../../data-source"
import { Car } from "../../entities"
import { AppError } from "../../errors/AppError"
import { TCar, TCarUpdate } from "../../interfaces/car.interfaces"
import { carSchema } from "../../schemas/cars.schemas"


const updateCarsService = async (carData: TCarUpdate, carId: number): Promise<TCar> => {

    const carRepository = AppDataSource.getRepository(Car)

    const oldcarData = await carRepository.findOneBy({id: carId})

    if(!oldcarData){
        throw new AppError("car not found", 404)
    }

    const newcarData = {
        ...oldcarData,
        ...carData,
    };

    await carRepository.save(newcarData);

    const returnCar = carSchema.parse(newcarData)

    return returnCar
}

export { updateCarsService }