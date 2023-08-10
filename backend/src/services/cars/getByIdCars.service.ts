import { Car } from "../../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { carSchemaResponse } from "../../schemas/cars.schemas";

const getByIdCarsService = async (idCar: number) => {
  const repository: Repository<Car> = AppDataSource.getRepository(Car);
  const car = await repository
    .createQueryBuilder("car")
    .where("car.id = :id", { id: idCar })
    // .leftJoinAndSelect("car.user", "user")
    // .leftJoinAndSelect("car.comment", "comment") 
    // .leftJoinAndSelect("car.picture", "picture")
    .getOne();

  const schemaCar = carSchemaResponse.parse(car);

  return schemaCar;
};

export { getByIdCarsService };
