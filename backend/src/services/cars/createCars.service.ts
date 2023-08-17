import { Repository } from "typeorm";
import { Car, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TCarRequest, TCarResponse } from "../../interfaces/car.interfaces";
import { carSchemaResponse } from "../../schemas/cars.schemas";
import { AppError } from "../../errors/AppError";

const createCarsServices = async (
  carData: TCarRequest,
  userId: number
): Promise<TCarResponse> => {
  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 409);
  }

  const car = carRepository.create({ ...carData, user });
  await carRepository.save(car);

  const returnCar: TCarResponse = carSchemaResponse.parse(car);
  return returnCar;
};

export default createCarsServices;
