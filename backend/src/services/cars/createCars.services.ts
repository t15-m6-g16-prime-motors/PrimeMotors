import { Repository } from "typeorm";
import { TCarRequest, TCarResponse } from "../../interfaces/cars.interfaces";
import { Car } from "../../entities";
import { AppDataSource } from "../../data-source";
import { carSchemaResponse } from "../../schemas/cars.schema";

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
