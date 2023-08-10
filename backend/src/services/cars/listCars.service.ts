import { Repository } from "typeorm";

import { Car } from "../../entities";
import { AppDataSource } from "../../data-source";
import { carsSchemaResponse } from "../../schemas/cars.schema";
import { TCarArray } from "../../interfaces/cars.interfaces";

const listCarsServices = async (): Promise<TCarArray> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const cars: Car[] = await carRepository.find();
  const returnCars: TCarArray = carsSchemaResponse.parse(cars);
  return returnCars;
};

export default listCarsServices;
