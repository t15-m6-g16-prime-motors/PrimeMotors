import { Repository } from "typeorm";

import { Car } from "../../entities";
import { AppDataSource } from "../../data-source";

import { TCarArray } from "../../interfaces/car.interfaces";
import { carsSchemaResponse } from "../../schemas/cars.schemas";

const listCarsServices = async (): Promise<TCarArray> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const cars: Car[] = await carRepository.find();
  const returnCars: TCarArray = carsSchemaResponse.parse(cars);
  return returnCars;
};

export default listCarsServices;
