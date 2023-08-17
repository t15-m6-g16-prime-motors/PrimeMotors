import { Repository } from "typeorm";
import { Car } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TCarRequest, TCarResponse } from "../../interfaces/car.interfaces";
import { carSchemaResponse } from "../../schemas/cars.schemas";

const createCarsServices = async (
  carData: TCarRequest
): Promise<TCarResponse> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const car = carRepository.create(carData);
  await carRepository.save(car);

  const returnCar: TCarResponse = carSchemaResponse.parse(car);
  return returnCar;
};

export default createCarsServices;
